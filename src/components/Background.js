//DEPS
import { useState, useEffect, useContext } from "react"
import { FocusedProjectContext, ContextInfluencers } from "./helpers/appContext"

//STYLES
import "./styles/background.css"

// import { projects } from "../data"




export default function Background( props ) {

    console.log(props)


    return (
        <>
            <div id="backgroundContainer"
                style={{
                    backgroundColor: 'black',
                }}
                >
                {props.focusedProject.projectKey===null ? (
                    null
                ) : (
                    <video
                        id={`BackgroundMediaVideo`}
                        // controls
                        preload="true"
                        loop="true"
                        autoplay="muted"
                        poster={props.focusedProject.genMedia.images.mainWide}
                        style={{
                            minWidth: "100%",
                            minHeight: "100%",
                            filter: "blur(.3vmin) brightness(20%)"
                        }}
                        >
                            <source src={props.focusedProject.genMedia.videos.mainWide540pX4.mp4} type="video/mp4" />
                            {/* <source src={props.focusedProject.genMedia.videos.mainWide540pX4.webm} type="video/webm" /> */}
                    </video>
                )}
            </div>
        </>
    )
}