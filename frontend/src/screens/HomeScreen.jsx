'use client';
import { Row, Col } from 'react-bootstrap';
import Product from '@/components/Product';
import Loader from '@/components/Loader';
import Message from '@/components/Message';
import { useGetProductsQuery } from '@/redux/slices/productApiSlice';
import { useParams } from 'next/navigation';

const HomeScreen = ({ pageNumber }) => {
  const { data, error, isLoading } = useGetProductsQuery({ pageNumber });
  return (
    <>
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
        </>
      )}
    </>
  );
};

export default HomeScreen;
