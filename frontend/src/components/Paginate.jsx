import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { Pagination } from 'react-bootstrap';

const Paginate = ({ pages, page, isAdmin }) => {
  const router = useRouter();
  const handleClick = (e, x) => {
    e.preventDefault();
    router.push(!isAdmin ? `/page/${x + 1}` : `/admin/productlist/${x + 1}`);
  };
  return (
    <>
      {pages > 1 && (
        <Pagination>
          {[...Array(pages).keys()].map((x) => (
            <Pagination.Item
              onClick={(e) => handleClick(e, x)}
              key={x + 1}
              active={x + 1 === page}>
              {x + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      )}
    </>
  );
};

export default Paginate;
