import dynamic from 'next/dynamic';
const ProductEditScreen = dynamic(
  () => import('@/screens/admin/ProductEditScreen'),
  {
    ssr: false,
  }
);

const Page = ({ params }) => {
  return <ProductEditScreen id={params.id} />;
};

export default Page;
