import React, {Component} from 'react'
import {Button, Collapse} from 'react-bootstrap'

class Test extends Component{
    state={ 
        open:false
       }

    render(){
      return(
        <div className= "container">
           <Button className="btn" onClick={() => {
                this.state.open = !this.state.open
            }
            }>
               Collapse Div
           </Button>

           <Collapse in={this.state.open}>
               <div>
                  <h1 style={{color: "red"}}>Content when the button is clicked</h1>
               </div>
           </Collapse>
        </div>
        );
       }
}

export default Test