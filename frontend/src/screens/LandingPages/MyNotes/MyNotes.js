import React, { useEffect,useState } from 'react'
import MainScreen from '../../../components/Header/MainScreen'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/esm/Card'
import {  Badge } from 'react-bootstrap'
import Accordion from 'react-bootstrap/esm/Accordion'


import axios from 'axios'
const MyNotes = () => {
const [notes, setNotes] = useState([])

    const deleteHandler = () => {
        if(window.confirm('Are you sure you want to delete')) {
}
    };
    const fetchNotes = async () => {
        const {data} = await axios.get('/api/notes');

   setNotes(data);
      };
      console.log(notes)
    useEffect (()=> {
fetchNotes();
    }, [])
  return (
    <MainScreen title="Welcome Back Ruthu Rao.."> 
    <Link to='createnote'>
        <Button style={{marginLeft: 10,marginBottom:6}} size='lg'> 
        Add your note
        
        </Button>
        
    </Link>
        {
            notes.map(note => (
                
                <Accordion defaultActiveKey={["0"]}>
          <Accordion.Item eventkey="0">
            <Card style={{ margin: 10 }}>
              <Card.Header style={{ display: "flex" }}>
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
                  <Accordion.Button as={Card.Text} variant="link">
                    {note.title}
                  </Accordion.Button>
                </span>
                <div>
                  <Button href={`/note/${note.id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={deleteHandler}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Collapse>
                <Card.Body>
                  <h4>
                    <Badge bg="success" text="light">
                      Category - {note.category}{" "}
                    </Badge>
                  </h4>

                  <blockquote className="blockquote mb-0">
                    <p>{note.content}</p>
                    <footer className="blockquote-footer">
                      Creater on - date
                    </footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion.Item>
        </Accordion>

            )) }
        
    
     </MainScreen>
  );
}

export default MyNotes