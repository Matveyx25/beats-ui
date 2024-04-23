import React, { useState } from 'react'
import s from './input.module.scss'
import { Controller, useFormContext } from 'react-hook-form'
import { findInputError } from 'helpers/findInputError'
import { isFormInvalid } from 'helpers/isFormInvalid'
import { IconCircle, IconCircleDotFilled, IconCircleFilled, IconEye, IconEyeOff } from '@tabler/icons-react'
import ReactInputMask from 'react-input-mask'
import classNames from 'classnames'

export const Input = ({type = 'text', options, required, mask, placeholder, name, className, validation, value, onChange, label, leftIcon, rightIcon, onBlur, onKeyPress, title}) => {
	const {
    register,
		control,
		watch,
    formState: { errors },
  } = useFormContext()

	const [isHidden, setIsHidden] = useState(true)

	const inputError = findInputError(errors, name)
  const isInvalid = isFormInvalid(inputError)

	if(mask){
		return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <ReactInputMask
            {...field}
            mask="+9(999) 999-99-99"
            maskChar={null}
            className={s.input}
            role={validation}
            placeholder="+7(999) 999-99-99"
          >
            {(inputProps) => (
              <div className={s.flex}>
                {label && (
                  <p className={s.label}>
                    {label}
                    {required && <span> *</span>}
                  </p>
                )}
                <div
                  className={`${s.wrapper} ${className} ${
                    isInvalid && s.isInvalid
                  }`}
                >
                  {leftIcon}
                  <input {...inputProps} />
                  {rightIcon}
                </div>
                {isInvalid && (
                  <span className={s.error}>{inputError.error.message}</span>
                )}
              </div>
            )}
          </ReactInputMask>
        )}
      />
    );
	}

	if (type === 'radio') {
    return (
      <div className={s.flex}>
        {label && <p className={s.label}>{label}{required && <span> *</span>}</p>}
        <div className={`${s.wrapperRadio} ${className} ${isInvalid && s.isInvalid}`}>
          {options.map((option, index) => (
            <label key={index} className={s.radioLabel}>
              <input
                type="radio"
                value={option.value}
                name={name}
                onChange={e => onChange(e.currentTarget.value)}
                {...(register(name, validation))}
              />
							<IconCircleFilled size={14} className={classNames(s.icon, watch(name) === option.value ? s.active : '')}/>
              <span>{option.label}</span>
            </label>
          ))}
        </div>
        {isInvalid && (
          <span className={s.error}>
            {inputError.error.message}
          </span>
        )}
      </div>
    );
 }

	return (
    <div className={s.flex}>
      {label && <p className={s.label}>{label}{required && <span> *</span>}</p> }
      <div className={`${s.wrapper} ${className} ${isInvalid && s.isInvalid}`}>
				{leftIcon}
				<input
					type={type === 'password' ? (isHidden ? 'password' : 'text') : type}
					value={value}
					placeholder={placeholder} 
					onBlur={onBlur}
					onKeyPress={onKeyPress}
					onChange={e => onChange(e.currentTarget.value)}
					title={title}
					{...(register(name, validation))}
				/>
        {type === 'password' &&
          <button className={s.eyeBtn} onClick={(e) => {
						e.preventDefault()
						setIsHidden((prev) => !prev)
						}}>
            {isHidden ? <IconEye size={18}/> : <IconEyeOff size={18}/>}
          </button>
        }
				{rightIcon}
      </div>
      {isInvalid && (
        <span className={s.error}>
          {inputError.error.message}
        </span>
      )}  
    </div>
  )
}
