// Components
import { Button, Text } from '@/components';
import useTimeOut from '@/hooks/useTimeOut';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

const ResendEmail = ({ email }: { email: string }) => {
  const { isDisabled, time } = useTimeOut(10);

  return (
    <div className="flex flex-col gap-4" data-testid="forget-password-step2">
      <div className="flex flex-col gap-2 pb-4">
        <Text as="h1" size={TEXT_SIZE['2xl']} className="leading-[56px]">
          Check Your Email
        </Text>
        <Text
          as="h2"
          size={TEXT_SIZE['md']}
          variant={TEXT_VARIANT.TERTIARY}
          className="leading-6"
        >
          Please check the email address <b>{email}</b> for instructions to
          reset your password.
        </Text>
      </div>
      <Button
        isDisabled={isDisabled}
        // Will handle later
        onClick={() => {}}
        variant="ghost"
        className="w-full py-7 mt-6"
        type="submit"
        data-testid="signin-btn"
      >
        <Text
          size={TEXT_SIZE.md}
          variant={TEXT_VARIANT.SECONDARY}
          className="font-bold leading-4"
        >
          {time ? `${time}s` : 'Resend email'}
        </Text>
      </Button>
    </div>
  );
};

export default ResendEmail;
