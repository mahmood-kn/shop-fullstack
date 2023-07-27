import dynamic from 'next/dynamic';
const OrderListScreen = dynamic(
  () => import('@/screens/admin/OrderListScreen'),
  {
    ssr: false,
  }
);

const Page = ({ params }) => {
  return <OrderListScreen />;
};

export default Page;
