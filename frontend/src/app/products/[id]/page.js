import ProductScreen from '@/screens/ProductScreen';
import { BASE_URL, PRODUCTS_URL } from '@/utils/constants';

async function getData(id) {
  const res = await fetch(`${BASE_URL}${PRODUCTS_URL}/${id}`, {
    // cache: 'no-store',
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const Page = async ({ params }) => {
  // const product = await getData(params.id);
  return (
    <>
      <ProductScreen
        // product={product}
        productId={params.id}
      />
    </>
  );
};

export default Page;
