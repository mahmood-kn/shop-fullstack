'use client';
import { Navbar, Nav, Container, Badge, NavDropdown } from 'react-bootstrap';
import logo from '../assets/logo.png';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from '@/redux/slices/usersApiSlice';
import { logout } from '@/redux/slices/authSlice';
import { useRouter } from 'next/navigation';
import { saveShippingAddress } from '@/redux/slices/cartSlice';
const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();
  const [logoutApiCall, { isLoading }] = useLogoutMutation();
  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      dispatch(saveShippingAddress({}));

      router.push('/login');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Link prefetch={false} href='/'>
            <Navbar.Brand as='span'>
              <Image src={logo} alt='ProShop' />
              ProShop
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Link prefetch={false} href='/cart'>
                <Nav.Link as='span'>
                  <FaShoppingCart /> Cart
                  {cartItems.length > 0 && (
                    <Badge pill bg='success' style={{ marginLeft: '6px' }}>
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </Badge>
                  )}
                </Nav.Link>
              </Link>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <NavDropdown.Item as={Link} href='/profile'>
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Link prefetch={false} href='/login'>
                  <Nav.Link as='span'>
                    <FaUser /> Login
                  </Nav.Link>
                </Link>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <NavDropdown.Item as={Link} href='/admin/productlist'>
                    Products
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href='/admin/userlist'>
                    Users
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} href='/admin/orderlist'>
                    Orders
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
