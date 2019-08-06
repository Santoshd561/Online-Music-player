import React, { Component } from 'react';
import arijit from './arijit.jpg';
import Arijit from '../arijit';


import {
    BrowserRouter as Router,
    Route, Link
} from "react-router-dom";

export default class AriJit extends Component {
   
    render() {


        return (
            <div>

            <div>
                <Router><div>

                    <Link to="/Arijit" > <img src={arijit} class="card-img-top" alt="h" style={{ width: "100px", height: "100px" }} /></Link>
                    
                </div>
                </Router>


            </div>
        </div>

        );

    }
}