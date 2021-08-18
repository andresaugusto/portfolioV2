//DEPS
import { useState, useContext } from "react"

//STYLES
import "./styles/nav.css"

//FUNC
export default function Nav() {

    // const 



    return (
        <div id="navBar">
            <div id="menuButtonContainer">
                <div id="menuButton" class="button">
                    <svg viewBox="0 0 37 22">
                        <line x1="6.55671e-08" y1="1.25" x2="37" y2="1.25" stroke="white" stroke-width="1.5"/>
                        <line x1="6.55671e-08" y1="11.25" x2="37" y2="11.25" stroke="white" stroke-width="1.5"/>
                        <line x1="6.55671e-08" y1="21.25" x2="37" y2="21.25" stroke="white" stroke-width="1.5"/>
                    </svg>
                </div>
            </div>
            <div id="navButtonsContainer">
                <div id="aboutButton" class="button">
                    <svg viewBox="0 0 37 22">
                        <line x1="6.55671e-08" y1="1.25" x2="37" y2="1.25" stroke="white" stroke-width="1.5"/>
                        <line x1="6.55671e-08" y1="11.25" x2="37" y2="11.25" stroke="white" stroke-width="1.5"/>
                        <line x1="6.55671e-08" y1="21.25" x2="37" y2="21.25" stroke="white" stroke-width="1.5"/>
                    </svg>
                </div>
                <div id="workButton" class="button">
                    <svg viewBox="0 0 37 22">
                        <line x1="6.55671e-08" y1="1.25" x2="37" y2="1.25" stroke="white" stroke-width="1.5"/>
                        <line x1="6.55671e-08" y1="11.25" x2="37" y2="11.25" stroke="white" stroke-width="1.5"/>
                        <line x1="6.55671e-08" y1="21.25" x2="37" y2="21.25" stroke="white" stroke-width="1.5"/>
                    </svg>
                </div>
                <div id="contactButton" class="button">
                    <svg viewBox="0 0 37 22">
                        <line x1="6.55671e-08" y1="1.25" x2="37" y2="1.25" stroke="white" stroke-width="1.5"/>
                        <line x1="6.55671e-08" y1="11.25" x2="37" y2="11.25" stroke="white" stroke-width="1.5"/>
                        <line x1="6.55671e-08" y1="21.25" x2="37" y2="21.25" stroke="white" stroke-width="1.5"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}