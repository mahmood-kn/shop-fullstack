'use client';
import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import logo from '../assets/logo.png';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Link href='/'>
            <Navbar.Brand as='span'>
              <Image src={logo} alt='ProShop' />
              ProShop
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Link href='/cart'>
                <Nav.Link as='span'>
                  <FaShoppingCart /> Cart
                  {cartItems.length > 0 && (
                    <Badge pill bg='success' style={{ marginLeft: '6px' }}>
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </Badge>
                  )}
                </Nav.Link>
              </Link>
              <Link href='/login'>
                <Nav.Link as='span'>
                  <FaUser /> Login
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
