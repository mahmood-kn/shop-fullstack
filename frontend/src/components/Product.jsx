import Link from 'next/link';
import { Card } from 'react-bootstrap';
import Rating from './Rating';
import { BASE_URL } from '@/utils/constants';
const Product = ({ product }) => {
  return (
    <Card className='my-3 p-'>
      <Link prefetch={false} href={`/products/${product._id}`}>
        <Card.Img src={BASE_URL + product.image} variant='top' />
      </Link>
      <Card.Body>
        <Link prefetch={false} href={`/products/${product._id}`}>
          <Card.Title className='product-title' as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
