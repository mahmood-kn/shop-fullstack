'use client';
import { Row, Col } from 'react-bootstrap';
import Product from '@/components/Product';
import Loader from '@/components/Loader';
import Message from '@/components/Message';
import { useGetProductsQuery } from '@/redux/slices/productApiSlice';
import { useParams } from 'next/navigation';
import Paginate from '@/components/Paginate';
import Link from 'next/link';
import ProductCarousel from '@/components/ProductCarousel';

const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const { data, error, isLoading } = useGetProductsQuery({
    keyword,
    pageNumber,
  });
  return (
    <>
      {keyword ? (
        <Link href='/' className='btn btn-light mb-4'>
          Go Back
        </Link>
      ) : (
        <ProductCarousel />
      )}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {data.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={data.pages}
            page={data.page}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
