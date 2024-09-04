// Libs
import { Controller, useForm } from 'react-hook-form';

// Components
import { Input } from '@nextui-org/react';
import { Button, Text } from '@/components';

// Constants
import { MESSAGES, REGEX_EMAIL } from '@/constants';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';
import { ResetPasswordFormData } from '@/types/auth';

const resetPasswordInitValues: ResetPasswordFormData = {
  email: '',
};

const { EMAIL } = MESSAGES;

interface ConfirmEmailFormProps {
  onSendEmailConfirm: (email: string) => Promise<void>;
}

const ConfirmEmailForm = ({ onSendEmailConfirm }: ConfirmEmailFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { isDirty },
  } = useForm<ResetPasswordFormData>({
    mode: 'onBlur',
    values: resetPasswordInitValues,
  });

  const isDisabled = !isDirty;

  const handleForgetPassword = async ({ email }: ResetPasswordFormData) => {
    await onSendEmailConfirm(email);
  };

  return (
    <form
      onSubmit={handleSubmit(handleForgetPassword)}
      className="flex flex-col gap-4"
      data-testid="forget-password-step1"
    >
      <div className="flex flex-col gap-2 pb-8">
        <Text as="h1" size={TEXT_SIZE['2xl']} className="leading-[56px]">
          Reset your password
        </Text>
        <Text
          as="h2"
          size={TEXT_SIZE['md']}
          variant={TEXT_VARIANT.TERTIARY}
          className="leading-6"
        >
          Enter your email address and we will send you instructions to reset
          your password.
        </Text>
      </div>
      <Controller
        name="email"
        control={control}
        rules={{
          required: EMAIL.REQUIRED,
          pattern: {
            value: REGEX_EMAIL,
            message: EMAIL.REGEX_MISMATCH,
          },
        }}
        render={({ field, fieldState: { error, invalid } }) => (
          <Input
            isRequired
            size="lg"
            label="Email"
            labelPlacement="outside"
            placeholder="Enter your email"
            isInvalid={invalid}
            errorMessage={error?.message}
            {...field}
          />
        )}
      />

      <Button
        isDisabled={isDisabled}
        className="bg-blue-450 dark:bg-purple-750 w-full py-7 mt-6"
        type="submit"
        data-testid="continue-btn"
      >
        <Text size={TEXT_SIZE.md} className="text-white font-bold leading-4">
          Continue
        </Text>
      </Button>
    </form>
  );
};

export default ConfirmEmailForm;
