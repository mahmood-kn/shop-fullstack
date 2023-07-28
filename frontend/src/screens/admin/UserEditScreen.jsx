'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Form, Button } from 'react-bootstrap';

import Link from 'next/link';
import FormContainer from '@/components/FormContainer';
import Loader from '@/components/Loader';
import Message from '@/components/Message';
import { toast } from 'react-toastify';
import {
  useGetUserDetailsQuery,
  useUpdateUserMutation,
} from '@/redux/slices/usersApiSlice';
import useAdminRoute from '@/hooks/useAdminRoute';

const UserEditScreen = ({ id: userId }) => {
  useAdminRoute();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();
  const {
    data: user,
    isLoading,
    error,
    refetch,
  } = useGetUserDetailsQuery(userId);
  const [updateUser, { isLoading: loadingUpdate }] = useUpdateUserMutation();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setIsAdmin(user.isAdmin);
    }
  }, [user]);
  const submitHandler = async (e) => {
    e.preventDefault();
    const updatedUser = {
      userId,
      name,
      email,
      isAdmin,
    };
    const result = await updateUser(updatedUser);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success('User updated');
      router.push('/admin/userlist');
    }
  };

  return (
    <>
      <Link
        prefetch={false}
        href='/admin/userlist'
        className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit User</h1>
        {loadingUpdate && <Loader />}
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{'error'}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group className='my-3'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter name'
                value={name}
                onChange={(e) => setName(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className='my-3'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}></Form.Control>
            </Form.Group>
            <Form.Group className='my-3'>
              <Form.Check
                type='checkbox'
                label='Is Admin'
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}></Form.Check>
            </Form.Group>

            <Button type='submit' variant='primary' className='my-2'>
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default UserEditScreen;
