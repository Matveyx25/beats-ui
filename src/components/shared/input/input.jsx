import React, { useState } from 'react'
import s from './input.module.scss'
import { Controller, useFormContext } from 'react-hook-form'
import { findInputError } from 'helpers/findInputError'
import { isFormInvalid } from 'helpers/isFormInvalid'
import { IconEye, IconEyeOff } from '@tabler/icons-react'
import ReactInputMask from 'react-input-mask'

export const Input = ({type = 'text', required, mask, placeholder, name, className, validation, value, onChange, label, leftIcon, rightIcon, onBlur, onKeyPress, title}) => {
	const {
    register,
		control,
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