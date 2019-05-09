import React, { Component } from 'react';
import atif from './atif.jpg';
import Atif from '../charlie';

import {
    BrowserRouter as Router,
    Route, Link
} from "react-router-dom";

export default class AtIf extends Component {
   
    render() {


        return (
            <div>

            <div>
                <Router><div>

                    <Link to="/Atif" > <img src={atif} class="card-img-top" alt="h" style={{ width: "100px", height: "100px" }} /></Link>
                    
                </div>
                </Router>


            </div>
        </div>


        );

    }
}