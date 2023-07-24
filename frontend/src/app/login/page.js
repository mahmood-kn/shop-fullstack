import dynamic from 'next/dynamic';
const LoginScreen = dynamic(() => import('@/screens/LoginScreen'), {
  ssr: false,
});

const Page = ({ params }) => {
  return <LoginScreen />;
};

export default Page;
