import dynamic from 'next/dynamic';
const CartScreen = dynamic(() => import('@/screens/CartScreen'), {
  ssr: false,
});

const Page = ({ params }) => {
  return (
    <>
      <CartScreen />
    </>
  );
};

export default Page;
