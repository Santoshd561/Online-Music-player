import React, { Component } from 'react';
import honey from './honey.jpg';
import Honey from '../honeysingh'

import {
    BrowserRouter as Router,
    Route, Link
} from "react-router-dom";

export default class HoneySingh extends Component {
   
    render() {


        return (
            <div>

            <div>
                <Router><div>

                    <Link to="/Honeysingh" > <img src={honey} class="card-img-top" alt="h" style={{ width: "100px", height: "100px" }} /></Link>
                    
                </div>
                </Router>


            </div>
        </div>

        );

    }
}
