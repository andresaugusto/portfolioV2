//DEPS
import { useState, useContext } from "react"
import { FocusProjectContext, ContextInfluencers } from "./helpers/appContext"

//STYLES
import "./styles/background.css"




export default function Background() {

    //CONTEXT

        const { focusProject } = useContext(FocusProjectContext)


    return (
        <div id="backgroundContainer"
            style={{
                backgroundColor: focusProject.primaryColor
            }}>
        </div>
    )
}