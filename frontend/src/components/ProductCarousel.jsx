import { useGetTopProductsQuery } from '@/redux/slices/productApiSlice';
import React from 'react';
import Loader from './Loader';
import Message from './Message';
import { Carousel, Image } from 'react-bootstrap';
import Link from 'next/link';
import { BASE_URL } from '@/utils/constants';

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {' '}
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Carousel pause='hover' className='bg-primary mb-4'>
          {products.map((product) => (
            <Carousel.Item key={product._id}>
              <Link href={`/products/${product._id}`}>
                <Image src={BASE_URL + product.image} alt={product.name} />
                <Carousel.Caption className='carousel-caption'>
                  <h2>
                    {product.name} (${product.price})
                  </h2>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default ProductCarousel;
