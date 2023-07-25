import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';

const usePrivateRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (!userInfo) {
      router.replace('/login');
    }
  }, [userInfo]);
};

export default usePrivateRoute;
