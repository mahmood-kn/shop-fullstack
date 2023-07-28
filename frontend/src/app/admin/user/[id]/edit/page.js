import dynamic from 'next/dynamic';
const UserEditScreen = dynamic(() => import('@/screens/admin/UserEditScreen'), {
  ssr: false,
});

const Page = ({ params }) => {
  return <UserEditScreen id={params.id} />;
};

export default Page;
