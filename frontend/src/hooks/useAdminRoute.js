import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const useAdminRoute = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      router.replace('/login');
    }
  }, [userInfo]);
};

export default useAdminRoute;
