import dynamic from 'next/dynamic';
const PaymentScreen = dynamic(() => import('@/screens/PaymentScreen'), {
  ssr: false,
});

const Page = ({ params }) => {
  return <PaymentScreen />;
};

export default Page;
