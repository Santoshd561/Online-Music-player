import React, { Component } from 'react';
import arman from './arman.jpg';


import {
    BrowserRouter as Router,
    Route, Link
} from "react-router-dom";


export default class image extends Component {

    render() {


        return (
            <div>

                            <div>
                                <Router><div>

                                    <Link to="/Arman" > <img src={arman} style={{ width: "100px", height: "100px" }} /></Link>
                                   
                                </div>
                                </Router>


                            </div>
                        </div>



        );

    }
}
