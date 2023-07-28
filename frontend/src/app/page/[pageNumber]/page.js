import HomeScreen from '@/screens/HomeScreen';
import { BASE_URL, PRODUCTS_URL } from '@/utils/constants';
// import styles from './page.module.css'
async function getData() {
  const res = await fetch(`${BASE_URL}${PRODUCTS_URL}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

// export default async function Home() {
export default function Home({ params }) {
  // const products = await getData();
  return (
    <HomeScreen
      // products={products}
      pageNumber={params.pageNumber}
    />
  );
}
