import React from 'react'
import {
    Navbar,
    Nav,
    Container,
    NavDropdown,
    Form,
    FormControl,


} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions';
import { Link, useHistory } from 'react-router-dom'

const Header = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const logoutHandler = () => {
        dispatch(logout());
        history.push('/');
    }
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand >
                    <Link to='/'>NoteCase</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className='m-auto'>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />

                        </Form>
                    </Nav>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/mynotes">
                            <Link to='/mynotes'>My Notes</Link>

                        </Nav.Link>

                        <NavDropdown title="Harapriya Mohapatra" id="navbarScrollingDropdown">

                            <NavDropdown.Item href="#action4">My Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logoutHandler}>
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header