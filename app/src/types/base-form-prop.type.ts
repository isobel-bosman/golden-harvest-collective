import { Control, FieldValues, Path } from 'react-hook-form';

export type BaseInputProps<T extends FieldValues> = {
  control: Control<T, unknown>;
  isRequired: boolean;
  inputName: Path<T>;
};
