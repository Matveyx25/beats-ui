import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import s from './toggle.module.scss';

export const Toggle = ({ name, label }) => {
  const { control } = useFormContext(); 

  return (
		<div className={s.flex}>
      {label && <p className={s.label}>{label}</p> }
			<Controller
				control={control}
				name={name}
				render={({ field: { ...field }, }) => (
					<div className={`${s.wrapper} ${field.value ? s.active : ''}`} onClick={() => field.onChange(!field.value)}>
						<span onClick={() => field.onChange(!field.value)}></span>
					</div>
				)}
			/>
		</div>
  );
};