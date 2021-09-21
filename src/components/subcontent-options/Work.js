//DEPS
import { useState } from "react";
import { motion } from "framer-motion";

//STYLES
import "../styles/work.css"

//FUNC
export default function Work() {

    //OBJECTS
    const projects = {
        avtc: {
            info: {
                title: "AVTC",
                year: "2021",
                projectType: "Responsive Website",
                HighlightedFrameworks:["React.js", "Python", "Django"],
                roles: ["Frontend Engineer", "UI Designer"],
                headline: null,
                photoHero: null,
                overview: null,
                toolsAndMethods: null,
                problem: null,
                solution: null,
                approach: {
                    research: null,
                    synthesis: null,
                    design: null,
                    delivery: null
                },
                prototype: null,
                nextSteps: null
            },
            styleInfluencers: {
                colors: {
                    primaryColor: "orange",
                    secondaryColor: "gray"
                }
            }
        },
        fire: {
            info: {
                title: "Fire",
                year: "2020",
                projectType: "Responsive Website",
                HighlightedFrameworks:["React.js", "Express", "Node.js", "MongoDB"],
                roles: ["SCRUM Master", "Frontend Engineer"],
                headline: null,
                photoHero: null,
                overview: null,
                toolsAndMethods: null,
                problem: null,
                solution: null,
                approach: {
                    research: null,
                    synthesis: null,
                    design: null,
                    delivery: null
                },
                prototype: null,
                nextSteps: null
            },
            styleInfluencers: {
                colors: {
                    primaryColor: "olive",
                    secondaryColor: "purple"
                }
            }
        },
        simon: {
            info: {
                title: "sim[]n",
                year: "2020",
                projectType: "Responsive Website",
                HighlightedFrameworks:["JavaScript"],
                roles: ["Frontend Engineer", "UI Designer"],
                headline: null,
                photoHero: null,
                overview: null,
                toolsAndMethods: null,
                problem: null,
                solution: null,
                approach: {
                    research: null,
                    synthesis: null,
                    design: null,
                    delivery: null
                },
                prototype: null,
                nextSteps: null
            },
            styleInfluencers: {
                colors: {
                    primaryColor: "#807a70",
                    secondaryColor: "white"
                }
            }
        },
        wip: {
            info: {
                title: "WIP",
                year: "2020",
                projectType: "Responsive Website",
                HighlightedFrameworks:["React.js", "Python", "Django"],
                roles: ["SCRUM Master", "Frontend Engineer"],
                headline: null,
                photoHero: null,
                overview: null,
                toolsAndMethods: null,
                problem: null,
                solution: null,
                approach: {
                    research: null,
                    synthesis: null,
                    design: null,
                    delivery: null
                },
                prototype: null,
                nextSteps: null
            },
            styleInfluencers: {
                colors: {
                    primaryColor: "maroon",
                    secondaryColor: "gold"
                }
            }
        },
        br: {
            info: {
                title: "Br",
                year: "2020",
                projectType: "Responsive Website",
                HighlightedFrameworks:["React.js"],
                roles: ["Frontend Engineer"],
                headline: null,
                photoHero: null,
                overview: null,
                toolsAndMethods: null,
                problem: null,
                solution: null,
                approach: {
                    research: null,
                    synthesis: null,
                    design: null,
                    delivery: null
                },
                prototype: null,
                nextSteps: null
            },
            styleInfluencers: {
                colors: {
                    primaryColor: "rgb(164, 179, 119)",
                    secondaryColor: "white"

                }
            }
        }
    }

    //MOTION CONSTS
    const ItemContainerAnimation = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
            delayChildren: .10,
            staggerChildren: .10
            }
        },
        exit: { y: 100, opacity: 0 }
    };
    const ItemAnimation = {
        hidden: { y: 10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        },
        exit: { y: 10, opacity: 0 }
    };

    // Object.keys(projects).map((key, index) => {
    //     console.log(projects[key])
    // })

    //RETURN
    return (
        <motion.div 
            id="workViewPort"
            variants={ItemAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div id="workContent">
                <motion.div id="projectsSection" class="work-section" variants={ItemContainerAnimation}>
                    <motion.div class="section-title" variants={ItemAnimation}>web applications</motion.div>
                    <motion.div id="projects" variants={ItemContainerAnimation}>
                        {Object.keys(projects).map((key, index) => {
                            // console.log(projects[key].year)
                            <motion.div 
                                className="project-holder-divs"
                                variants={ItemAnimation}
                            >
                                {projects[key].title.toString()}
                            </motion.div>
                        })}
                        {/* {projects.map((i) => (
                            <motion.div 
                                class="project-holder-divs"
                                variants={ItemAnimation}
                            >
                                {i}
                            </motion.div>
                        ))} */}
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}