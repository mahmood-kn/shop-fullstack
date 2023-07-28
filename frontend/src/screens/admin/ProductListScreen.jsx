'use client';
import React from 'react';
import useAdminRoute from '@/hooks/useAdminRoute';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import Loader from '@/components/Loader';
import Message from '@/components/Message';
import { FaEdit, FaTimes, FaTrash } from 'react-icons/fa';
import Link from 'next/link';
import {
  useCreateProductMutation,
  useGetProductsQuery,
} from '@/redux/slices/productApiSlice';
import { toast } from 'react-toastify';

const ProductListScreen = () => {
  useAdminRoute();
  const { data: products, isLoading, error, refetch } = useGetProductsQuery();
  const [createProduct, { isLoading: loadingCreate }] =
    useCreateProductMutation();
  const deleteHandler = (id) => {};
  const createProductHandler = async () => {
    if (window.confirm('Are you sure you want to create a new product?')) {
      try {
        await createProduct();
        refetch();
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };
  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className='text-end'>
          <Button className='btn-sm m-3' onClick={createProductHandler}>
            <FaEdit /> Create Product
          </Button>
        </Col>
      </Row>
      {loadingCreate && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand}</td>

                <td>
                  <Link href={`/admin/product/${product._id}/edit`}>
                    <Button className='btn-sm mx-2' variant='light'>
                      <FaEdit />
                    </Button>
                  </Link>
                  <Button
                    className='btn-sm'
                    style={{ color: 'white' }}
                    variant='danger'
                    onClick={() => deleteHandler(product._id)}>
                    <FaTrash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ProductListScreen;