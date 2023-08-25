import Profile from "@/container/profile/Profile";
import withAuth from "@/utility/withAuth";

const profile = () => {
  return <Profile />;
};

export default withAuth(profile);
