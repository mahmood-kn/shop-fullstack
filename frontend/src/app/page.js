import HomeScreen from '@/screens/HomeScreen';
import { apiUrl } from '@/utils/main';
// import styles from './page.module.css'
async function getData() {
  const res = await fetch(`${apiUrl}/api/products`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const products = await getData();
  return <HomeScreen products={products} />;
}
