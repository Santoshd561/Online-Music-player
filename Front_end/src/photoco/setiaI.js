import React, { Component } from 'react';
import setia from './setia.jpg';




import {
    BrowserRouter as Router,
    Route, Link
} from "react-router-dom";
import Setia from '../setia';

export default class Image extends Component {

    render() {


        return (
            <div>
                <div>
                    <Router><div>

                        <Link to="/setia" > <img src={setia} style={{ width: "100px", height: "100px" }} /></Link>
                        
                    </div>
                    </Router>


                </div>


            </div>

        );

    }
}
