import React, { useEffect } from 'react'
import './LandingPage.css'
import { Container, Row, Button } from 'react-bootstrap'

const LandingPage = ({ history }) => {

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');
        if (userInfo) {
            history.push('/mynotes');
        }
    }, [history]);

    return (
        <div className='main'>
            <Container>
                <Row>
                    <div className='intro-text'>
                        <div>
                            <h1 className='title'>Welcome To NoteCase</h1>
                            <p className='subtitle'>One Safe Place For All Your Notes</p>
                        </div>

                        <div className='buttonContainer'>
                            <a href='/login'>
                                <Button size='lg' className='landingbutton'>Login</Button>
                            </a>
                            <a href='/register'>
                                <Button size='lg' className='landingbutton' variant='outline-primary'>SignUp</Button>
                            </a>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage