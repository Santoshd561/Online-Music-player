import React, { Component } from 'react';
import './components/auth/Login.css'




class About extends Component {


  

  render() {
    return (
        <div className="wrapper" >
        <div className="form-wrapper2" style={{backgroundColor:"#dd0e0e"}}>
        <h1>
              <b>About Rhythm</b>
            </h1>
            <p>
                India's Largest Streaming Service
            </p>
            </div>
        <div className="form-wrapper3" >
        

            <br />
            <p>Rhythm is the one-stop music app from the latest to the greatest songs that you love.<br/>Rhythm is an Indian music streaming 
            service and a digital distributor of Bollywood, English and other regional Indian music across the world. 
            Since it was founded in 2019 as Rhythm, the company has acquired rights to over 5 crore (50 million) music tracks in 15 languages. 
            Rhythm is a freemium service; basic features are free with advertisements or limitations, while additional features, such as improved 
            streaming quality and music downloads, are offered via paid subscriptions.</p>

        </div>
        

      </div>

    );
  }
}

export default About;