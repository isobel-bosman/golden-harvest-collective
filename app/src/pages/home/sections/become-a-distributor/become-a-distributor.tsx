import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Distributor } from '../../../../types/distributor.type';
import TextInput from '../../../../components/text-input/text-input';
import TextArea from '../../../../components/text-area/text-area';
import EmailInput from '../../../../components/email-input/email-input';
import emailjs from 'emailjs-com';

const BecomeDistributor = () => {
  const getDefaultValues = (): Distributor => {
    return {
      cellNumber: '',
      emailAddress: '',
      motivation: '',
      name: '',
      occupation: '',
      province: '',
      town: '',
    };
  };

  const { control, handleSubmit, getValues, reset } = useForm<Distributor>({
    defaultValues: getDefaultValues(),
  });

  const [isLoading, setIsLoading] = useState(false);

  const formSubmit = () => {
    setIsLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        getValues(),
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        () => {
          reset();
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
          setIsLoading(false);
        }
      );
  };

  return (
    <div
      id="distributor"
      className="flex w-full flex-col items-center p-5 md:p-20 gap-5 bg-bees bg-opacity-90 "
    >
      <div className="rounded-xl bg-white w-full sm:w-2/3 p-5 sm:p-10 flex flex-col items-center">
        <h3 className="text-secondary text-xl font-medium text-center">
          Become a distributor
        </h3>
        <p className="italic text-sm text-center mb-4">
          This is where your journey starts, whether it's for extra income or to
          build an empire. <br />
        </p>

        <form
          className="flex flex-wrap w-full lg:w-2/3"
          onSubmit={handleSubmit(formSubmit)}
        >
          <p className="mb-2">
            Tell us a little about yourself whilst we will consider your
            application
          </p>
          <TextInput
            control={control}
            inputName="name"
            isRequired
            label="Name"
          />
          <TextInput
            control={control}
            inputName="cellNumber"
            isRequired
            label="Cell phone number"
          />
          <EmailInput
            control={control}
            inputName="emailAddress"
            isRequired
            label="Email Address"
          />
          <TextInput
            control={control}
            inputName="town"
            isRequired
            label="Town"
          />
          <TextInput
            control={control}
            inputName="province"
            isRequired
            label="Province"
          />
          <TextInput
            control={control}
            inputName="occupation"
            isRequired
            label="Current occupation"
          />
          <TextArea
            control={control}
            inputName="motivation"
            isRequired
            label="Why do you want to be part of our team?"
          />
          <button
            type="submit"
            className={
              'w-full rounded bg-accent px-5 py-3 font-normal text-white cursor-pointer hover:bg-primary-200 '
            }
            disabled={isLoading}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default BecomeDistributor;
