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
        <div className="basis-full pr-2">
          <label>
            {label}
            <textarea
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

export default TextArea;
