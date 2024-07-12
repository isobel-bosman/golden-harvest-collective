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
      render={({ field, fieldState: { error } }) => (
        <div className="basis-full md:basis-1/2 pr-2">
          <label>
            {label} {isRequired && '*'}
          </label>
          <input
            className={`w-full mb-2 border border-solid rounded p-2 focus:border-primary ${error && 'border-error'}`}
            type="text"
            {...field}
            onChange={(e) => field.onChange(e.target.value)}
          />
        </div>
      )}
    />
  );
};

export default TextInput;
