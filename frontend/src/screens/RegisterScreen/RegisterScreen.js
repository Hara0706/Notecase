import './RegisterScreen.css'
import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ErrorMessage from '../../components/ErrorMessage'
import Loading from '../../components/Loading'
import MainScreen from '../../components/MainScreen'
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/userActions";

const RegisterScreen = ({ history }) => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [pic, setPic] = useState("https://icon-library.com/images/anonymous-avatar-icon-25.jpg");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [picMessage, setPicMessage] = useState(null);

    const dispatch = useDispatch();
    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    useEffect(() => {
        if (userInfo) {
            history.push('/mynotes');
        }
    }, [history, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();

        if (password !== confirmpassword) {
            setMessage("Passwords Do Not Match");
        } else {
            dispatch(register(name, email, password, pic));
        }

    }


    const postDetails = (pics) => {
        if (!pics) {
            return setPicMessage("Please Select An Image");
        }
        setPicMessage(null);

        if (pics.type === 'image/jpeg' || pics.type === 'image/png' || pics.type === 'file') {
            const data = new FormData();
            data.append('file', pics);
            data.append('upload_preset', 'notecase');
            data.append('cloud_name', 'dreosjljo');
            fetch('https://api.cloudinary.com/v1_1/dreosjljo/image/upload', {
                method: 'post',
                body: data,
            }).then((res) => res.json()).then((data) => {
                console.log(data);
                setPic(data.url.toString());
            }).catch((err) => {
                console.log(err);
            })
        } else {
            return setPicMessage("Please Select An Image");
        }
    }

    return (
        <MainScreen title='REGISTER'>

            <div className='registerContainer'>
                {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
                {message && <ErrorMessage variant='danger'>{message}</ErrorMessage>}
                {loading && <Loading />}

                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="name"
                            value={name}
                            placeholder="Enter Name"
                            onChange={(e) => setName(e.target.value)}
                        />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            placeholder="Enter Email"
                            onChange={(e) => setEmail(e.target.value)}
                        />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            placeholder="Enter Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="confirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={confirmpassword}
                            placeholder="Confirm Password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                    </Form.Group>

                    {picMessage && (<ErrorMessage variant='danger'>{picMessage}</ErrorMessage>)}
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Upload Profile Picture</Form.Label>
                        <Form.Control
                            onChange={(e) => postDetails(e.target.files[0])}
                            id='custom-file'
                            type="file"
                            label='Upload Profile Picture'
                            custom
                        />
                    </Form.Group>
                    <br></br>
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>

                <Row className='py-3'>
                    <Col>Have An Account ? <Link to='/login'>Login Here</Link></Col>
                </Row>
            </div>

        </MainScreen>
    );

}

export default RegisterScreen