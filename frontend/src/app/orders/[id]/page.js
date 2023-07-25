import dynamic from 'next/dynamic';
const OrderScreen = dynamic(() => import('@/screens/OrderScreen'), {
  ssr: false,
});

const Page = ({ params }) => {
  return <OrderScreen id={params.id} />;
};

export default Page;
