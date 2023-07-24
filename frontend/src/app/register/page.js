import dynamic from 'next/dynamic';
const RegisterScreen = dynamic(() => import('@/screens/RegisterScreen'), {
  ssr: false,
});

const Page = ({ params }) => {
  return <RegisterScreen />;
};

export default Page;
