import dynamic from 'next/dynamic';
const UserListScreen = dynamic(() => import('@/screens/admin/UserListScreen'), {
  ssr: false,
});

const Page = ({ params }) => {
  return <UserListScreen />;
};

export default Page;
