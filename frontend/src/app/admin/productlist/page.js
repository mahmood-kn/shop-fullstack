import dynamic from 'next/dynamic';
const ProductListScreen = dynamic(
  () => import('@/screens/admin/ProductListScreen'),
  {
    ssr: false,
  }
);

const Page = ({ params }) => {
  return <ProductListScreen />;
};

export default Page;
