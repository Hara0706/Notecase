import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Badge, Accordion } from 'react-bootstrap'
import MainScreen from '../../components/MainScreen'
import axios from 'axios'

const MyNotes = () => {

    const [notes, setNotes] = useState([]);

    const deleteHandler = (id) => {
        if (window.confirm("Are You Sure?")) {

        }
    }

    const fetchNotes = async () => {
        const { data } = await axios.get('/api/notes');
        setNotes(data);
    }
    console.log(notes);

    useEffect(() => {
        fetchNotes();
    }, [])


    return (
        <MainScreen title="Welcome Back Harapriya Mohapatra...">
            <Link to='createnote'>
                <Button style={{ marginLeft: 10, marginBottom: 6 }} size='lg'>Create New Note</Button>
            </Link>
            {
                notes.map((note) => (




                    <Accordion key={note._id}>
                        <Card style={{ margin: 10 }} >
                            <Card.Header style={{ display: "flex", width: "100%" }}>
                                <Accordion.Header as={Card.Text} variant="link" eventKey="0">
                                    <span

                                        style={{
                                            color: "black",
                                            textDecoration: "none",
                                            flex: 1,
                                            cursor: "pointer",
                                            alignSelf: "center",
                                            fontSize: 18,

                                        }}
                                    >
                                        {note.title}

                                    </span>

                                </Accordion.Header>
                                <div>
                                    <Button href={`/note/${note._id}`}
                                        className='mx-2'
                                    >Edit</Button>
                                    <Button
                                        variant="danger"
                                        className='mx-2'
                                        onClick={() => deleteHandler(note._id)}

                                    >
                                        Delete
                                    </Button>
                                </div>
                            </Card.Header>
                            <Accordion.Body eventKey="0">
                                <Card.Body>
                                    <h4>
                                        <Badge variant="success" >
                                            Category - {note.category}
                                        </Badge>
                                    </h4>
                                    <blockquote className="blockquote mb-0">
                                        <p>{note.content}</p>
                                        <footer className="blockquote-footer">
                                            Created On - Date
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Accordion.Body>
                        </Card>
                    </Accordion>



                ))
            }


        </MainScreen >
    );
}

export default MyNotes