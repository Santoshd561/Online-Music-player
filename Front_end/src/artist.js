import React, { Component } from 'react'
import Cimage from './photoco/cimage';
import Image from './photoco/setiaI';
import Image1 from './photoco/armanI';
import AriJit from './photoco/arijitI';
import AtIf from './photoco/atifI';

import HoneySingh from './photoco/honey';


import './App.css'
import {
    BrowserRouter as Router,
    Route, Link
} from "react-router-dom";
import { Button } from 'mdbreact';


export default class Artist extends Component {
    render() {
        return (
            <div>
                <div id="menu-outer">
                    <div class="table">

                        <ul id="horizontal-list">
                            <div >
                                <a style={{ fontFamily: "Arial", fontSize: "15px", fontWeight: "bold" ,color:"#c2c2c2", textShadow:"0px -1px 0px #2b665e"}}>Artist</a></div>

                            <li><Button><Cimage /></Button></li>
                            <li><Button><Image /></Button></li>
                            <li><Button><Image1 /></Button></li>
                            <li><Button><AtIf /></Button></li>
                            <li><Button><AriJit /></Button></li>
                            <li><Button><HoneySingh /></Button></li>
                            {/* <li><Button><BadShah /></Button></li> */}
                        </ul>
                    </div>
                </div>
            </div >
        )
    }
}