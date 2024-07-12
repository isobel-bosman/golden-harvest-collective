import React from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { BaseInputProps } from '../../types/base-form-prop.type';

type EmailInputProps<T extends FieldValues> = BaseInputProps<T> & {
  label: string;
  key?: string;
};

const EmailInput = <T extends FieldValues>({
  control,
  inputName,
  isRequired,
  key,
  label,
}: EmailInputProps<T>) => {
  return (
    <Controller
      name={inputName}
      control={control}
      key={key}
      rules={{ required: isRequired }}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <div className="basis-full md:basis-1/2 pr-2">
          <label>
            {label}
            <input
              type="email"
              className={`w-full mb-2 border border-solid rounded p-2 focus:border-primary ${error && 'border-error'}`}
              name={label}
              onChange={onChange}
              value={value}
            />
          </label>
        </div>
      )}
    />
  );
};

export default EmailInput;
