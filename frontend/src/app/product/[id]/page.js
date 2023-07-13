'use client';

import ProductScreen from '@/screens/ProductScreen';

const Page = ({ params }) => {
  return (
    <>
      <ProductScreen productId={params.id} />
    </>
  );
};

export default Page;
