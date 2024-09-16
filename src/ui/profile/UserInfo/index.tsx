// Components
import Image from 'next/image';
import { Avatar } from '@nextui-org/avatar';
import { Text } from '@/components';

// Constants
import { PROFILE_IMAGES } from '@/constants/images';

// Types
import { TEXT_SIZE, TEXT_VARIANT } from '@/types/text';

const { BACKGROUND } = PROFILE_IMAGES;

interface IUserInfoProps {
  avatar?: string;
  username: string;
  role: string;
  postsTotal?: number;
  followersCount?: number;
  followingCount?: number;
}

const UserInfo = ({
  avatar,
  username,
  role,
  postsTotal = 0,
  followersCount = 0,
  followingCount = 0,
}: IUserInfoProps) => (
  <div className="dark:bg-indigo bg-white p-[17px] rounded-md">
    <div className="w-full h-[131px] relative">
      <Image
        fill
        src={BACKGROUND}
        alt="background-profile"
        className="object-cover rounded-2xl"
        sizes="(max-width: 768px) 315px,
              (min-width: 769px) and (max-width: 1024px) 396px,
              (min-width: 1025px) 518px"
      />
      <div className="w-full flex justify-center top-[85px] absolute">
        <Avatar
          src={avatar}
          ImgComponent={Image}
          alt="avatar-user"
          imgProps={{ width: 87, height: 87 }}
          className="w-[87px] h-[87px] border-4 dark:border-indigo border-white"
        />
      </div>
    </div>
    <div className="flex flex-col justify-center mt-14">
      <div className="">
        <Text className="text-[20px] text-center font-extrabold">
          {username}
        </Text>
        <Text
          size={TEXT_SIZE.sm}
          variant={TEXT_VARIANT.SECONDARY}
          className="text-center"
        >
          {role}
        </Text>
      </div>
      <div className="flex justify-center gap-11 my-5">
        <div className="w-14 text-center">
          <Text size={TEXT_SIZE.extra} className="font-extrabold leading-6">
            {postsTotal}
          </Text>
          <Text
            size={TEXT_SIZE.sm}
            variant={TEXT_VARIANT.SECONDARY}
            className="leading-5"
          >
            Posts
          </Text>
        </div>
        <div className="w-14 text-center">
          <Text size={TEXT_SIZE.extra} className="font-extrabold leading-6">
            {followersCount}
          </Text>
          <Text
            size={TEXT_SIZE.sm}
            variant={TEXT_VARIANT.SECONDARY}
            className="leading-5"
          >
            Followers
          </Text>
        </div>
        <div className="w-14 text-center">
          <Text size={TEXT_SIZE.extra} className="font-extrabold leading-6">
            {followingCount}
          </Text>
          <Text
            size={TEXT_SIZE.sm}
            variant={TEXT_VARIANT.SECONDARY}
            className="leading-5"
          >
            Following
          </Text>
        </div>
      </div>
    </div>
  </div>
);

export default UserInfo;
