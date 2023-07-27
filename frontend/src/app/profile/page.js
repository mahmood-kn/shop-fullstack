import dynamic from 'next/dynamic';
const ProfileScreen = dynamic(() => import('@/screens/ProfileScreen'), {
  ssr: false,
});

const Page = ({ params }) => {
  return <ProfileScreen />;
};

export default Page;
