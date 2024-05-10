import { ProfileHeader } from "../components/profile/ProfileHeader";
import { ProfilePostsContainer } from "../components/profile/ProfilePostsContainer";

const ProfilePage = async () => {

  return (
    <div className="flex flex-col gap-y-12 mx-auto">
      <ProfileHeader />
      <ProfilePostsContainer />
    </div>
  );
};

export default ProfilePage;
