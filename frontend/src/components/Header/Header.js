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

const Header = ({ setSearch }) => {

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
                                onChange={(e) => setSearch(e.target.value)}
                            />

                        </Form>
                    </Nav>
                    <Nav>
                        {userInfo ? (
                            <>
                                <Nav.Link href="/mynotes">My Notes</Nav.Link>
                                <NavDropdown
                                    title={`${userInfo.name}`}
                                    id="collasible-nav-dropdown"
                                >
                                    <NavDropdown.Item href="/profile">
                                        {/* <img
                                         alt=""
                                         src={`${userInfo.pic}`}
                                         width="25"
                                         height="25"
                                         style={{ marginRight: 10 }}
                                         /> */}
                                        My Profile
                                    </NavDropdown.Item>

                                    <NavDropdown.Divider />
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </>
                        ) : (
                            <Nav.Link href="/login">Login</Nav.Link>
                        )}
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header