import React, { Component } from 'react';
import './components/auth/Login.css'




class Contact extends Component {


  

  render() {
    return (
        <div  className="contact">
        <div style={{marginLeft:"-800px"}}>
        <h1 style={{fontSize:60}}>
              <b>Contact Us.
            </b>
            </h1>
            <p style={{fontSize:30}}>
            Oooh, we love letters!
            </p>
            </div>
        
        
        <div className="form-wrapper4">
        

            <br />
            <p>No switchboards or email black holes. Let's get you directly in touch with the right people.</p><br/>
            <h1>Name:</h1>
            <h1>ContactNo:</h1>

        </div>
        

      </div>

    );
  }
}

export default Contact;