'use client';
import { useState, useEffect } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import usePrivateRoute from '@/hooks/usePrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '@/redux/slices/cartSlice';

const PaymentScreen = () => {
  usePrivateRoute();
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  const router = useRouter();
  const dispatch = useDispatch();
  const { shippingAddress } = useSelector((state) => state.cart);
  useEffect(() => {
    if (!shippingAddress) {
      router.push('/shipping');
    }
  }, [shippingAddress]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    router.push('/placeorder');
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label>Select Method</Form.Label>
          <Form.Check
            type='radio'
            className='my-2'
            label='PayPal or Credit Card'
            name='paymentMethod'
            value='PayPal'
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}></Form.Check>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
