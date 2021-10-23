//DEPS
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FocusedProjectContext, ContextInfluencers } from "./helpers/appContext";
import { projects } from "../data"

//COMPS
// import AVTC from "./projects/AVTC" 
// import WIP from "./projects/WIP" 
// import Fire from "./projects/Fire" 

//STYLES
import "../App.css";
import "./styles/home-logo.css";

export default function HomeLogo() {

	//OBJECTS
    const proyectos = {
        avtc: {
            primaryColor: "orange",
            secondaryColor: "gray",
        },
        wip: {
            primaryColor: "maroon",
            secondaryColor: "gold",
        },
        fire: {
            primaryColor: "olive",
            secondaryColor: "purple",
        },
    }
    const buttons = {
        AO: {
            normal: {
                stroke: null,
                strokeWidth: null,
                fill: null,
                underGlow: null,
            },
            focused: {
                stroke: null,
                strokeWidth: null,
                fill: null,
                underGlow: null,
            },
            unfocused: {
                stroke: "rgba(254, 238, 210, 1)",
                strokeWidth: ".5px",
                fill: "rgba(255, 255, 255, .1)",
                underGlow: "rgba(255, 255, 255, 0)",
            }
        },
        M: {
            normal: {
                stroke: null,
                strokeWidth: null,
                fill: null,
                underGlow: null,
            },
            focused: {
                stroke: null,
                strokeWidth: null,
                fill: null,
                underGlow: null,
            },
            unfocused: {
                stroke: "rgba(254, 238, 210, 1)",
                strokeWidth: ".5px",
                fill: "rgba(255, 255, 255, .1)",
                underGlow: "rgba(255, 255, 255, 0)",
            }
        },
        O: {
            normal: {
                stroke: null,
                fill: null,
                underGlow: null,
            },
            focused: {
                stroke: "white",
                fill: "rgba(254, 238, 210, 0.719)",
                underGlow: "rgba(254, 238, 210, 0.719)",
            },
            unfocused: {
                stroke: null,
                fill: null,
                underGlow: null,
            }
        }
    }

    //HANDLE CONTEXT
    const { setFocusedProject } = useContext(FocusedProjectContext)
    //clear focusedProject variable on component mount
    // setFocusedProject({
	// 	projectKey: null,
	// 	genMedia: {
	// 		images: {
	// 			mainWide: null,
	// 			mainTablet: null,
	// 			mainPhone: null,
	// 		},
	// 		videos: {
	// 			mainWide1080pX4: {
	// 				mp4: null,
	// 				alternative: null,
	// 			},
	// 			mainWide540pX4: {
	// 				mp4: null,
	// 				alternative: null,
	// 			},
	// 		},
	// 	},
	// 	styleInfluencers: {
	// 		colors: {
	// 			primaryColor: null,
	// 			secondaryColor: null,
	// 		}
	// 	}
	// })
    function assignFocusedProject(pk) {
        setFocusedProject({
            projectKey: pk,
            genMedia: {
                images: {
                    mainWide: projects[pk].info.genMedia.images.mainWide,
                    mainTablet: null,
                    mainPhone: null,
                },
                videos: {
                    mainWide1080pX4: {
                        mp4: projects[pk].info.genMedia.videos.mainWide1080pX4.mp4,
                        alternative: null,
                    },
                    mainWide540pX4: {
                        mp4: projects[pk].info.genMedia.videos.mainWide540pX4.mp4,
                        alternative: null,
                    },
                },
            },
            styleInfluencers: {
                colors: {
                    primaryColor: projects[pk].styleInfluencers.colors.primaryColor,
                    secondaryColor: projects[pk].styleInfluencers.colors.secondaryColor,
                }
            }
        })
        handleButtonStates(pk)
    }
    function unassignFocusedProject(pk) {
        setFocusedProject({
            projectKey: null,
            genMedia: {
                images: {
                    mainWide: null,
                    mainTablet: null,
                    mainPhone: null,
                },
                videos: {
                    mainWide1080pX4: {
                        mp4: null,
                        alternative: null,
                    },
                    mainWide540pX4: {
                        mp4: null,
                        alternative: null,
                    },
                },
            },
            styleInfluencers: {
                colors: {
                    primaryColor: null,
                    secondaryColor: null,
                }
            }
        })
        handleButtonStates(null)
    }

    //HANDLE BUTTON FOCUS
    const [ActiveButtonStates, setActiveButtonStates] = useState({
        AO: {
            strokeWidth: buttons.AO.normal.strokeWidth,
            stroke: buttons.AO.normal.stroke,
            fill: buttons.AO.normal.fill,
            underGlow: buttons.AO.normal.underGlow,
        },
        M: {
            strokeWidth: buttons.AO.normal.strokeWidth,
            stroke: buttons.AO.normal.stroke,
            fill: buttons.AO.normal.fill,
            underGlow: buttons.AO.normal.underGlow,
        },
        O: {
            strokeWidth: buttons.AO.normal.strokeWidth,
            stroke: buttons.AO.normal.stroke,
            fill: buttons.AO.normal.fill,
            underGlow: buttons.AO.normal.underGlow,                
        }
    })
    function handleButtonStates(pk) {
        switch (pk) {
            case null :
                setActiveButtonStates({
                    AO: {
                        strokeWidth: buttons.AO.normal.strokeWidth,
                        stroke: buttons.AO.normal.stroke,
                        fill: buttons.AO.normal.fill,
                        underGlow: buttons.AO.normal.underGlow,
                    },
                    M: {
                        strokeWidth: buttons.M.normal.strokeWidth,
                        stroke: buttons.M.normal.stroke,
                        fill: buttons.M.normal.fill,
                        underGlow: buttons.M.normal.underGlow,
                    },
                    O: {
                        strokeWidth: buttons.O.normal.strokeWidth,
                        stroke: buttons.O.normal.stroke,
                        fill: buttons.O.normal.fill,
                        underGlow: buttons.O.normal.underGlow,                            
                    }
                }); break
            case "avtc" :
                setActiveButtonStates({
                    AO: {
                        strokeWidth: buttons.AO.focused.strokeWidth,
                        stroke: buttons.AO.focused.stroke,
                        fill: buttons.AO.focused.fill,
                        underGlow: buttons.AO.focused.underGlow,
                    },
                    M: {
                        strokeWidth: buttons.M.unfocused.strokeWidth,
                        stroke: buttons.M.unfocused.stroke,
                        fill: buttons.M.unfocused.fill,
                        underGlow: buttons.M.unfocused.underGlow,
                    },
                    O: {
                        strokeWidth: buttons.O.unfocused.strokeWidth,
                        stroke: buttons.O.unfocused.stroke,
                        fill: buttons.O.unfocused.fill,
                        underGlow: buttons.O.unfocused.underGlow,                            
                    }
                }); break
            case "wip" :
                setActiveButtonStates({
                    AO: {
                        strokeWidth: buttons.AO.unfocused.strokeWidth,
                        stroke: buttons.AO.unfocused.stroke,
                        fill: buttons.AO.unfocused.fill,
                        underGlow: buttons.AO.unfocused.underGlow,
                    },
                    M: {
                        strokeWidth: buttons.M.focused.strokeWidth,
                        stroke: buttons.M.focused.stroke,
                        fill: buttons.M.focused.fill,
                        underGlow: buttons.M.focused.underGlow,
                    },
                    O: {
                        strokeWidth: buttons.O.unfocused.strokeWidth,
                        stroke: buttons.O.unfocused.stroke,
                        fill: buttons.O.unfocused.fill,
                        underGlow: buttons.O.unfocused.underGlow,                            
                    }
                }); break
            case "aa" :
                setActiveButtonStates({
                    AO: {
                        strokeWidth: buttons.AO.unfocused.strokeWidth,
                        stroke: buttons.AO.unfocused.stroke,
                        fill: buttons.AO.unfocused.fill,
                        underGlow: buttons.AO.unfocused.underGlow,
                    },
                    M: {
                        strokeWidth: buttons.M.unfocused.strokeWidth,
                        stroke: buttons.M.unfocused.stroke,
                        fill: buttons.M.unfocused.fill,
                        underGlow: buttons.M.unfocused.underGlow,
                    },
                    O: {
                        strokeWidth: buttons.O.focused.strokeWidth,
                        stroke: buttons.O.focused.stroke,
                        fill: buttons.O.focused.fill,
                        underGlow: buttons.O.focused.underGlow,                            
                    }
                }); break
            default :
                setActiveButtonStates({
                    AO: {
                        strokeWidth: buttons.AO.unfocused.strokeWidth,
                        stroke: buttons.AO.unfocused.stroke,
                        fill: buttons.AO.unfocused.fill,
                        underGlow: buttons.AO.unfocused.underGlow,
                    },
                    M: {
                        strokeWidth: buttons.M.unfocused.strokeWidth,
                        stroke: buttons.M.unfocused.stroke,
                        fill: buttons.M.unfocused.fill,
                        underGlow: buttons.M.unfocused.underGlow,
                    },
                    O: {
                        strokeWidth: buttons.O.unfocused.strokeWidth,
                        stroke: buttons.O.unfocused.stroke,
                        fill: buttons.O.unfocused.fill,
                        underGlow: buttons.O.unfocused.underGlow,                            
                    }
                }); break
        }
    }

    //HANDLE LOGO ORBITING
    const [LogoCardTransTimer, setLogoCardTransTimer] = useState({
        time: "none",
    })
    const [OrbitalValue, setOrbitalValue] = useState({
        xAxis: 0,
        yAxis: 0,
    }) 
    function CreateOrbitalValue(x) {
        setOrbitalValue({
            xAxis: (window.innerWidth / 2 - x.pageX) / -25,
            yAxis: (window.innerHeight / 2 - x.pageY) / 25,
        });
        // console.log(`left: ${OrbitalValue.yAxis}, top: ${OrbitalValue.xAxis}`);
    }
    function MouseEnterLogoCardAnimation() {
        setLogoCardTransTimer({ time: "all 0.12s ease" });
        // setButtonContainerStyles({ zTransformation: "translateZ(40px)" });
        // setGlowContainerStyles({  })
        // console.log(LogoCardTransTimer.time)
        setTimeout(() => {
            setLogoCardTransTimer({ time: "none" });
        }, 120);
    }
    function MouseExitLogoCardAnimation() {
        setLogoCardTransTimer({ time: "all 0.5s ease" });
        // setButtonContainerStyles({ zTransformation: "translateZ(1px)" });
        setOrbitalValue({ xAxis: 0, yAxis: 0 });
    }

    //RETURN
	return (
		<div
			id="homeContainer"
            // onMouseEnter={()=>(assignFocusedProject(null))}
		>
            {/* {()=>(assignFocusedProject(null))} */}
			<div
				id="logoCard"
				onMouseMove={CreateOrbitalValue}
				onMouseEnter={MouseEnterLogoCardAnimation}
				onMouseLeave={MouseExitLogoCardAnimation}
				style={{
					transform: `rotateY(${OrbitalValue.xAxis}deg) rotateX(${OrbitalValue.yAxis}deg)`,
					transition: LogoCardTransTimer.time,
				}}
			>
				<div
					id="buttonContainer"
				>
					<svg
						id="aomLogo"
						version="1.1"
						x="0px"
						y="0px"
						// width="720px"
						// height="864px"
						viewBox="0 0 720 864"
						enable-background="new 0 0 720 864"
						pointerEvents="visiblePainted"
					>
						<g id="_x30_">
                            <Link to={`/project/aa`}>
                                <path
                                    id="O"
                                    className="logo-buttons"
                                    referencedProjectKey="aa"
                                    onMouseEnter={(x)=>(assignFocusedProject(x.target.attributes.referencedProjectKey.value))}
                                    onMouseLeave={(x)=>(unassignFocusedProject(null))}
                                    // onMouseEnter={(x)=>(console.log(x.target.attributes.referencedProjectKey.value))}
                                    // onMouseLeave={(x)=>(console.log(x.target.attributes.referencedProjectKey.value))}
                                    // onMouseEnter={handleButtonStates}
                                    // onMouseLeave={handleButtonStates}
                                    d="M259.279,543.898c0-28.795,23.344-52.139,52.139-52.139c28.796,0,52.139,23.344,52.139,52.139c0,28.796-23.343,52.139-52.139,52.139C282.623,596.037,259.279,572.694,259.279,543.898L259.279,543.898z"
                                    style={{
                                        strokeWidth: ActiveButtonStates["O"].strokeWidth,
                                        stroke: ActiveButtonStates["O"].stroke,
                                        fill: ActiveButtonStates["O"].fill,
                                        transition: "all 0.17s ease-out"
                                    }}
                                />
                            </Link>
                            <Link to="project/avtc">
                                {/* <a href="https://www.google.com/search?q=elvin+me+lo+mama&oq=elvin+me+lo+mama&aqs=chrome..69i57j33i160l3j33i299l2.7910j1j1&sourceid=chrome&ie=UTF-8"> */}
                                    <path
                                        id="AO"
                                        className="logo-buttons"
                                        referencedProjectKey="avtc"
                                        onMouseEnter={(x)=>(assignFocusedProject(x.target.attributes.referencedProjectKey.value))}
                                        onMouseLeave={(x)=>(unassignFocusedProject(null))}
                                        // onMouseEnter={handleButtonStates}
                                        // onMouseLeave={handleButtonStates}
                                        d="M363.557,543.898c0,28.796-23.344,52.139-52.139,52.139c-28.796,0-52.139-23.343-52.139-52.139c0-28.795,23.343-52.139,52.139-52.139C340.213,491.76,363.557,515.104,363.557,543.898L363.557,543.898zM207.14,215.823v432.353h305.719L207.14,215.823z"
                                        style={{
                                            strokeWidth: ActiveButtonStates["AO"].strokeWidth,
                                            stroke: ActiveButtonStates["AO"].stroke,
                                            fill: ActiveButtonStates["AO"].fill,
                                            transition: "all 0.17s ease-out"
                                        }}
                                    />
                                {/* </a> */}
                            </Link>
                            <Link to="project/wip">
                                <path
                                    id="M"
                                    className="logo-buttons"
                                    referencedProjectKey="wip"
                                    onMouseEnter={(x)=>(assignFocusedProject(x.target.attributes.referencedProjectKey.value))}
                                    onMouseLeave={(x)=>(unassignFocusedProject(null))}
                                    // onMouseEnter={handleButtonStates}
                                    // onMouseLeave={handleButtonStates}
                                    d="M380.664,431.123 435.105,342.457 500.904,601.17z"
                                    style={{
                                        strokeWidth: ActiveButtonStates["M"].strokeWidth,
                                        stroke: ActiveButtonStates["M"].stroke,
                                        fill: ActiveButtonStates["M"].fill,
                                        transition: "all 0.17s ease-out"
                                    }}
                                />
                            </Link>
						</g>
					</svg>
				</div>
				<div
					id="glowContainer"
				>
					<svg
						id="aomLogoGlow"
						version="1.1"
						x="0px"
						y="0px"
						// width="720px"
						// height="864px"
						viewBox="0 0 720 864"
						enable-background="new 0 0 720 864"
						pointerxents="visiblePainted"
					>
						<g id="_x30_">
                            <path
                                id="O"
                                className="logo-buttons-neons"
                                d="M259.279,543.898c0-28.795,23.344-52.139,52.139-52.139c28.796,0,52.139,23.344,52.139,52.139c0,28.796-23.343,52.139-52.139,52.139C282.623,596.037,259.279,572.694,259.279,543.898L259.279,543.898z"
                                style={{
                                    stroke: ActiveButtonStates["O"].underGlow
                                }}
                            />
							<path
                                id="AO"
                                className="logo-buttons-neons"
                                d="M363.557,543.898c0,28.796-23.344,52.139-52.139,52.139c-28.796,0-52.139-23.343-52.139-52.139c0-28.795,23.343-52.139,52.139-52.139C340.213,491.76,363.557,515.104,363.557,543.898L363.557,543.898zM207.14,215.823v432.353h305.719L207.14,215.823z"
                                style={{
                                    stroke: ActiveButtonStates["AO"].underGlow,
                                }}
                            />
                            <path
                                id="M"
                                className="logo-buttons-neons"
                                d="M380.664,431.123 435.105,342.457 500.904,601.17z"
                                style={{
                                    stroke: ActiveButtonStates["M"].underGlow,
                                }}
                            />
						</g>
					</svg>
				</div>
			</div>
		</div>
	)
}
