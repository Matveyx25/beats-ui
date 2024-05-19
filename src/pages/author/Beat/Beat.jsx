import React, { useState } from "react";
import { BackButton } from "../../../components/shared/backButton/backButton";
import s from "./Beat.module.scss";
import { IconInfoCircle, IconPencil, IconTrash } from "@tabler/icons-react";
import { Button } from "../../../components/shared/button/button";
import { useBeatById } from "../../../hooks/useBeatById";
import { NavLink, useOutletContext, useParams } from "react-router-dom";
import { Toggle } from "../../../components/shared/toggle/toggle";
import { FormProvider, useForm } from "react-hook-form";
import { Input } from "shared/input/input";
import { useEditLicense } from "../../../hooks/useEditLicense";
import { getNoun } from "../../../helpers/getNoun";
import { useHideBeat } from "../../../hooks/useHideBeat";
import { useUnhideBeat } from "../../../hooks/useUnhideBeat";

const EditLicenseBlock = ({ name, value, onSave = () => {}, emptyMessage }) => {
  const [isHide, setIsHide] = useState(true);

  return (
    <div className={s.sellsPrice}>
      {isHide ? (
        <>
          <Button
            label={<IconPencil size={16} />}
            className={s.smallBtn}
            onClick={() => setIsHide(false)}
          />
          {value +
            (name === "price"
              ? " ₽"
              : getNoun(value, " год", " года", " лет")) || emptyMessage}
        </>
      ) : (
        <>
          <Input
            name={name}
            validation={{
              pattern: {
                value: /^\d+$/,
                message: "Можно вводить только число",
              },
            }}
          />
          <Button
            label={"Сохранить"}
            className={s.smallBtn}
            onClick={() => {
              onSave();
              setIsHide(true);
            }}
          />
        </>
      )}
    </div>
  );
};

const LicenseGroup = ({ beat, name, label, peopleCount }) => {
  const { mutate: editLicense } = useEditLicense();

  const getLicense = (type) =>
    beat?.licenses?.find((el) => el.licenseType.type === type);

  const methods = useForm({
    mode: "onTouched",
    defaultValues: {
      is_active: getLicense(name)?.isActive,
      price: getLicense(name)?.price,
      rental_time: getLicense(name)?.rentalTime,
    },
  });

  const handleSubmit = methods.handleSubmit((data) => {
    editLicense({ ...data,
			is_active: (data?.price && data?.rental_time) ? data?.is_active : false,
			 beatId: beat.id, licenseId: getLicense(name).id });
  });

  return (
    <FormProvider {...methods}>
      <div className={s.sellsBlock}>
        <div className={s.sellsHeader}>
          <div className={s.sellsTitle}>
            {label + " "}
            <IconInfoCircle size={20} color="rgba(255, 255, 255, 0.2)" />
          </div>
          {((name === "tor" ||methods.watch('rental_time')) && methods.watch('price')) && <Toggle name="is_active" onChange={handleSubmit} />}
        </div>
        {peopleCount && (
          <div className={s.sellsInfo}>
            <div className={s.sellsLabel}>Данный бит сдан в лизинг:</div>
            <div className={s.sellsValue}>
              {peopleCount +
                " " +
                getNoun(peopleCount, "человеку", "людям", "людям")}
            </div>
          </div>
        )}
        {name !== "tor" && (
          <EditLicenseBlock
            name={"rental_time"}
            value={getLicense(name)?.rentalTime}
            emptyMessage={"срок не указан"}
            onSave={handleSubmit}
          />
        )}
        <EditLicenseBlock
          name={"price"}
          value={getLicense(name)?.price}
          emptyMessage={"цена не указана"}
          onSave={handleSubmit}
        />
      </div>
    </FormProvider>
  );
};

export const Beat = () => {
  const { beatId } = useParams();
  const { data: beat, isFetched } = useBeatById(beatId);
  const [setModal] = useOutletContext();
  const { mutate: hide } = useHideBeat();
  const { mutate: unhide } = useUnhideBeat();

  if (!isFetched) return null;

  return (
    <div className={s.wrapper}>
      <div className="container">
        <BackButton />
        <div className={s.preview}>
          <div className={s.buttons}>
            <Button
              label={<IconPencil size={16} />}
              onClick={() => setModal("edit-beat-modal", beatId)}
            />
            {!beat?.isHide ? (
              <Button label={"Скрыть"} onClick={() => hide(beatId)} />
            ) : (
              <Button label={"Показать"} onClick={() => unhide(beatId)} />
            )}
            <Button
              label={<IconTrash size={16} />}
              onClick={() => setModal("delete-beat-modal", beatId)}
            />
          </div>
          <div className={s.previewImg}>
            <img src={beat?.photo} alt="" />
          </div>
          <div className={s.previewInfo}>
            <div className={s.genre}>{beat?.genre?.name}</div>
            <div className={s.name}>{beat?.title}</div>
            <div className={s.author}>{beat?.user?.name}</div>
          </div>
        </div>
        <div className={s.description}>
          <div className={s.descriptionBlock}>
            <div className={s.descriptionLabel}>Date of release</div>
            <div className={s.descriptionValue}>
              {new Date(beat?.releaseDate).toLocaleDateString("ru-RU", {
                dateStyle: "medium",
              })}
            </div>
          </div>
          <div className={s.descriptionBlock}>
            <div className={s.descriptionLabel}>Audio</div>
            <NavLink to={beat?.link} className={s.descriptionValue}>
              Link
            </NavLink>
          </div>
          <div className={s.descriptionBlock}>
            <div className={s.descriptionLabel}>
              Demo
              <Button
                label={<IconPencil size={16} />}
                onClick={() => setModal("edit-demo-modal", beatId)}
              />
            </div>
            {beat?.demos ? (
              beat.demos.map((el) => (
                <div className={s.descriptionValue}>
                  {el.start} - {el.end}
                </div>
              ))
            ) : (
              <div className={s.descriptionValue}>00:00 - 00:00</div>
            )}
          </div>
          <div className={s.descriptionBlock}>
            <div className={s.descriptionLabel}>
              Snippet
              <Button
                label={<IconPencil size={16} />}
                onClick={() => setModal("edit-snippet-modal", beatId)}
              />
            </div>
            {beat?.snippets ? (
              beat.snippets.map((el) => (
                <div className={s.descriptionValue}>
                  {el.start} - {el.end}
                </div>
              ))
            ) : (
              <div className={s.descriptionValue}>00:00 - 00:00</div>
            )}
          </div>
        </div>
        <div className={s.sells}>
          <div className={s.title}>Варианты продажи</div>
          <div className={s.sellsFlex}>
            <LicenseGroup
              name={"non-inclusive"}
              label={"Non-inclusive"}
              peopleCount={5}
              {...{ beat }}
            />
            <LicenseGroup
              name={"inclusive"}
              label={"Inclusive"}
              peopleCount={1}
              {...{ beat }}
            />
            <LicenseGroup
              name={"tor"}
              label={"Transfer of right"}
              {...{ beat }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
