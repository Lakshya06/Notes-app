import React from "react"
import { Col, Row, Nav, Tab, Button, Collapse } from "react-bootstrap"

function Sidebar(props){

    const [open, setOpen] = React.useState(true);

    const notesData = props.notes.map((note, i) => (    
        <div key={note.id} className="title mt-4">
            <h5 
                className={`px-2 pt-2 ${note.id === props.currentNote.id ? "active-note" : ""}`}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                
                {note.body.split("\n")[0].slice(0, 8)}
            <button className="dlt-btn btn" onClick={(event) => props.deleteNote(event, note.id)}><i className="fa-solid fa-trash"></i></button>
            </h5>
        </div>
    ))

    return(
        <Col xs={0} md={2} className="d-none d-md-block">

      {/* <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        click
      </Button> */}

      {/* <Collapse in={open}> */}

        <div className="notes-title" id="example-collapse-text" >

            <h4>Notes</h4>
            <button className="new-note-btn" onClick={props.newNote}><i className="fa-solid fa-plus"></i></button>
        </div>

        {/* <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">First tab content</Tab.Pane>
            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container> */}

        {notesData}

    {/* </Collapse> */}
    </Col>
    )
}

export default Sidebar