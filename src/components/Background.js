//DEPS
import { useState, useEffect, useContext } from "react"
// import { FocusedProjectContext, ContextInfluencers } from "./helpers/appContext"

//STYLES
import "./styles/background.css"

import { projects } from "../data"




export default function Background ( props ) {

    //  //  // OPTONS 1 and 2 (OPT 3 ONLY RETURN)  //  //
    //  //  //  OPTION 1    //  //  //
    // const largeFormatMovies = {
    //     aa: (
    //         <video
    //             id={`BackgroundMediaVideo`}
    //             preload="true"
    //             loop={true}
    //             autoPlay={true}
    //             poster={projects["aa"].info.genMedia.images.mainWide}
    //             style={{
    //                 minWidth: "100vw",
    //                 filter: "blur(0vmin) brightness(20%)"
    //             }}
    //             >
    //                 <source src={projects["aa"].info.genMedia.videos.mainWide1080pX4.mp4} type="video/mp4" />
    //                 <source src={projects["aa"].info.genMedia.videos.mainWide1080pX4.webm} type="video/webm" />
    //         </video>
    //     ),
    //     avtc: (
    //         <video
    //             id={`BackgroundMediaVideo`}
    //             preload="true"
    //             loop={true}
    //             autoPlay={true}
    //             poster={projects["avtc"].info.genMedia.images.mainWide}
    //             style={{
    //                 minWidth: "100vw",
    //                 filter: "blur(0vmin) brightness(20%)"
    //             }}
    //             >
    //                 <source src={projects["avtc"].info.genMedia.videos.mainWide1080pX4.mp4} type="video/mp4" />
    //                 <source src={projects["avtc"].info.genMedia.videos.mainWide1080pX4.webm} type="video/webm" />
    //         </video>
    //     ),
    //     wip: (
    //         <video
    //             id={`BackgroundMediaVideo`}
    //             preload="true"
    //             loop={true}
    //             autoPlay={true}
    //             poster={projects["wip"].info.genMedia.images.mainWide}
    //             style={{
    //                 minWidth: "100vw",
    //                 filter: "blur(0vmin) brightness(20%)"
    //             }}
    //             >
    //                 <source src={projects["wip"].info.genMedia.videos.mainWide1080pX4.mp4} type="video/mp4" />
    //                 <source src={projects["wip"].info.genMedia.videos.mainWide1080pX4.webm} type="video/webm" />
    //         </video>
    //     ),
    //     fire: (
    //         <video
    //             id={`BackgroundMediaVideo`}
    //             preload="true"
    //             loop={true}
    //             autoPlay={true}
    //             poster={projects["fire"].info.genMedia.images.mainWide}
    //             style={{
    //                 minWidth: "100vw",
    //                 filter: "blur(0vmin) brightness(20%)"
    //             }}
    //             >
    //                 <source src={projects["fire"].info.genMedia.videos.mainWide1080pX4.mp4} type="video/mp4" />
    //                 <source src={projects["fire"].info.genMedia.videos.mainWide1080pX4.webm} type="video/webm" />
    //         </video>
    //     ),
    //     br: (
    //         <video
    //             id={`BackgroundMediaVideo`}
    //             preload="true"
    //             loop={true}
    //             autoPlay={true}
    //             poster={projects["br"].info.genMedia.images.mainWide}
    //             style={{
    //                 minWidth: "100vw",
    //                 filter: "blur(0vmin) brightness(20%)"
    //             }}
    //             >
    //                 <source src={projects["br"].info.genMedia.videos.mainWide1080pX4.mp4} type="video/mp4" />
    //                 <source src={projects["br"].info.genMedia.videos.mainWide1080pX4.webm} type="video/webm" />
    //         </video>
    //     ),
    //     simon: (
    //         <video
    //             id={`BackgroundMediaVideo`}
    //             preload="true"
    //             loop={true}
    //             autoPlay={true}
    //             poster={projects["simon"].info.genMedia.images.mainWide}
    //             style={{
    //                 minWidth: "100vw",
    //                 filter: "blur(0vmin) brightness(20%)"
    //             }}
    //             >
    //                 <source src={projects["avtc"].info.genMedia.videos.mainWide1080pX4.mp4} type="video/mp4" />
    //                 <source src={projects["avtc"].info.genMedia.videos.mainWide1080pX4.webm} type="video/webm" />
    //         </video>
    //     )
    // }
    // const [ currentMovie, setCurrentMovie ] = useState({movieKey: null, movie: null});
    // function handleMovie(pk) {
    //     console.log(pk)
    //     setCurrentMovie({movieKey: null, movie: null})
    //     switch (pk) {
    //         case null : { setCurrentMovie({movieKey: null, movie: null}); break }
    //         case "aa" : { setCurrentMovie({movieKey: pk, movie:largeFormatMovies.aa}); break }
    //         case "avtc" : { setCurrentMovie({movieKey: pk, movie:largeFormatMovies.avtc}); break }
    //         case "wip" : { setCurrentMovie({movieKey: pk, movie:largeFormatMovies.wip}); break }
    //         case "fire" : { setCurrentMovie({movieKey: pk, movie:largeFormatMovies.fire}); break }
    //         case "br" : { setCurrentMovie({movieKey: pk, movie:largeFormatMovies.br}); break }
    //         case "simon" : { setCurrentMovie({movieKey: pk, movie:largeFormatMovies.simon}); break }
    //         default: { break }
    //     }
    // }

    //  //  //  OPTION 2    //  //  //
    // const [ currentMovie, setCurrentMovie ] = useState({movieKey: null, movie: null});
    // function toggleMovie(pk) {
    //     pk === null ? setCurrentMovie({
    //         movieKey: null, 
    //         movieJSX: null
    //     }) : setCurrentMovie({
    //         movieKey: pk, 
    //         movieJSX: (
    //             <video
    //                 id={`BackgroundMediaVideo`}
    //                 preload="true"
    //                 loop={true}
    //                 autoPlay={true}
    //                 poster={props.focusedProject.genMedia.images.mainWide}
    //                 style={{
    //                     minWidth: "100vw",
    //                     filter: "blur(0vmin) brightness(20%)"
    //                 }}
    //             >
    //                     <source src={props.focusedProject.genMedia.videos.mainWide1080pX4.mp4} type="video/mp4" />
    //                     <source src={props.focusedProject.genMedia.videos.mainWide1080pX4.webm} type="video/webm" />
    //             </video>
    //         )
    //     })
    // }
    
    //  //  //  OPTION 4    //  //  //
    // const [ currentMovie, setCurrentMovie ] = useState({movieKey: null, movie: null});    
    // useEffect(() => {
    //     props.focusedProject.projectKey === null||undefined ? (
    //         setCurrentMovie({
    //             movieKey: null,
    //             moviePoster: null,
    //             movie: {
    //                 mainWide1080pX4: {
    //                     mp4: null,
    //                     webm: null,
    //                 },
    //                 mainWide540pX4: {
    //                     mp4: null,
    //                     alternative: null,
    //                 }
    //             },
    //         })
    //     ) : (
    //         setCurrentMovie({
    //             movieTitle: props.focusedProject.projectKey,
    //             moviePoster: props.focusedProject.genMedia.images.mainWide,
    //             movie: {
    //                 mainWide1080pX4: {
    //                     mp4: props.focusedProject.genMedia.videos.mainWide1080pX4.mp4,
    //                     webm: props.focusedProject.genMedia.videos.mainWide1080pX4.webm,
    //                 },
    //                 mainWide540pX4: {
    //                     mp4: props.focusedProject.genMedia.videos.mainWide540pX4.mp4,
    //                     alternative: props.focusedProject.genMedia.videos.mainWide540pX4.webm,
    //                 }
    //             },
    //         })
    //         // console.log(props.focusedProject.genMedia.videos.mainWide1080pX4.mp4)
    //     )
    // }, [props]);

    
    return (
        <>
            <div id="backgroundContainer"
                style={{
                    backgroundColor: 'black',
                }}
                >
                    {props.focusedProject.projectKey === null ? (
                        null
                    ) : (
                        <div>
                            <video
                                webkit-playsInline playsInline preload autoPlay loop muted
                                key={props.focusedProject.projectKey+"MainWide"}
                                id={`backgroundMediaVideo`}
                                // preload="true"
                                // loop={true}
                                // autoPlay={true}
                                poster={props.focusedProject.genMedia.videos.mainWide1080pFiltered.poster}
                                style={{
                                    minHeight: "110vh",
                                    // width: "100vw",
                                    filter: "blur(2px) brightness(90%)",
                                }}
                            >
                                <source src={props.focusedProject.genMedia.videos.mainWide1080pFiltered.mp4} type="video/mp4" />
                                <source src={props.focusedProject.genMedia.videos.mainWide1080pFiltered.webm} type="video/webm" />
                            </video>
                            <div
                                id="backgroundMediaFrame"
                            />
                        </div>
                    )}
            </div>
        </>
    )
}