import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBox = () => {
  const router = useRouter();
  const { keyword: urlKeyword } = useParams();
  const [keyword, setKeyword] = useState(urlKeyword || '');
  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      setKeyword('');
      router.push(`/search/${keyword}`);
    } else {
      router.push('/');
    }
  };
  return (
    <Form onSubmit={submitHandler} className='d-flex'>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'></Form.Control>
      <Button type='submit' variant='outline-light' className='p-2 mx-2'>
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
