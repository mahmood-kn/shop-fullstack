'use client';
import React from 'react';
import useAdminRoute from '@/hooks/useAdminRoute';
import { Table, Button } from 'react-bootstrap';
import Loader from '@/components/Loader';
import Message from '@/components/Message';
import { FaCheck, FaEdit, FaTimes, FaTrash } from 'react-icons/fa';
import Link from 'next/link';
import { useGetUsersQuery } from '@/redux/slices/usersApiSlice';

const UserListScreen = () => {
  useAdminRoute();
  const { data: users, isLoading, error, refetch } = useGetUsersQuery();
  const deleteHandler = (id) => {};
  return (
    <>
      <h1>Orders</h1>
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
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <FaCheck style={{ color: 'green' }} />
                  ) : (
                    <FaTimes style={{ color: 'red' }} />
                  )}
                </td>

                <td>
                  <Link href={`/admin/user/${user._id}/edit`}>
                    <Button className='btn-sm' variant='light'>
                      <FaEdit />
                    </Button>
                  </Link>
                  <Button
                    className='btn-sm'
                    variant='danger'
                    style={{ color: 'white' }}
                    onClick={deleteHandler}>
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

export default UserListScreen;
