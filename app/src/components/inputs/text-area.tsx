import React from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { BaseInputProps } from '../../types/base-form-prop.type';

type TextAreaProps<T extends FieldValues> = BaseInputProps<T> & {
  label: string;
  key?: string;
};

const TextArea = <T extends FieldValues>({
  control,
  inputName,
  isRequired,
  key,
  label,
}: TextAreaProps<T>) => {
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
            <textarea name={label} onChange={onChange} value={value} />
          </label>
        </>
      )}
    />
  );
};

export default TextArea;
