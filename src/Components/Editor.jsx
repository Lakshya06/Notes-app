import React from "react"
import { Col, Form } from "react-bootstrap"

function Editor(props){
    return(
        <Col xs={12} md={10}>

            <h4><b>Edit Notes</b></h4>
            {/* <button class="btn float-end" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" role="button">btn
                <i class="bi bi-arrow-right-square-fill fs-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"></i>
            </button> */}

            {/* <textarea name="" id="" cols="100" rows="10">
            */}
            {/* </textarea> */}
            <Form.Control
                as="textarea" 
                rows={17} 
                className="notes-textarea my-3"
                value = {props.currentNote.body}
                onChange={props.updateNote}
            />
            
        </Col>
    )
}

export default Editor