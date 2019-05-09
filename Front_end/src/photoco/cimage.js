import React, { Component } from 'react';
import charlie from './charlie.jpg';
import Charlie from '../charlie';

import {
    BrowserRouter as Router,
    Route, Link
} from "react-router-dom";


export default class Cimage extends Component {

    render() {


        return (
            <div>

                            <div>
                                <Router><div>

                                    <Link to="/Charlie" > <img src={charlie} class="card-img-top" alt="h" style={{ width: "100px", height: "100px" }} /></Link>
                                   
                                </div>
                                </Router>


                            </div>
                        </div>



        );

    }
}
