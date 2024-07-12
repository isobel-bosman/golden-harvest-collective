import React from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { BaseInputProps } from '../../types/base-form-prop.type';

type TextInputProps<T extends FieldValues> = BaseInputProps<T> & {
  label: string;
  key?: string;
};

const TextInput = <T extends FieldValues>({
  control,
  inputName,
  isRequired,
  key,
  label,
}: TextInputProps<T>) => {
  return (
    <Controller
      name={inputName}
      control={control}
      key={key}
      rules={{ required: isRequired }}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <>
          <label>
            {label}
            <input type="text" name={label} onChange={onChange} value={value} />
          </label>
        </>
      )}
    />
  );
};

export default TextInput;
