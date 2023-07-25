import dynamic from 'next/dynamic';
const PlaceOrderScreen = dynamic(() => import('@/screens/PlaceOrderScreen'), {
  ssr: false,
});

const Page = ({ params }) => {
  return <PlaceOrderScreen />;
};

export default Page;
