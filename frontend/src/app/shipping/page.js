import dynamic from 'next/dynamic';
const ShippingScreen = dynamic(() => import('@/screens/ShippingScreen'), {
  ssr: false,
});

const Page = ({ params }) => {
  return <ShippingScreen />;
};

export default Page;
