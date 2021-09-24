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
                featuredTechnologies: ["React.js", "Python", "Django"],
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
                featuredTechnologies: ["React.js", "Express", "Node.js", "MongoDB"],
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
                featuredTechnologies: ["JavaScript"],
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
                featuredTechnologies: ["React.js", "Python", "Django"],
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
                featuredTechnologies: ["React.js"],
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
                    secondaryColor: "0, 0, 0, 0.5"
                }
            }
        }
    }
    const projectKeys = ["avtc", "fire", "simon", "wip", "br"]
    // const getProjectKeys = () => {
    //     Object.keys(projects).map((key, index) => {
    //         projectKeys.push(projects[key])
    //     })
    //     console.log(projectKeys)
    // }
    // getProjectKeys()

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
    //     console.log(projects[key].info.title)
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
                    <motion.div class="work-section-title" variants={ItemAnimation}>web apps</motion.div>
                    <motion.div id="projects" variants={ItemContainerAnimation}>
                        {projectKeys.map((i) => (
                            // console.log(i)
                            <motion.div 
                                id={i}
                                class="project-card"
                                variants={ItemAnimation}
                            >
                                <div id={`${i}CardGif`} className="project-card-section">gif</div>
                                <div id={`${i}CardTitle`} className="project-card-section">{projects[i].info.title}</div>
                                <div id={`${i}CardYear`} className="project-card-section">{projects[i].info.year}</div>
                                <div id={`${i}CardRoles`} className="project-card-section">{projects[i].info.roles}</div>
                                <div id={`${i}CardProjectType`} className="project-card-section">{projects[i].info.projectType}</div>
                                <div id={`${i}CardFeaturedTechnologies`} className="project-card-section">
                                    {/* {projects[i].info..map((i) => (
                                        <motion.div 
                                        className="project-featured-technology"
                                        onTap={(i) => {
                                        }}
                                        variants={ItemAnimation}
                                        >
                                            {projects[i].info.featuredTechnologies}
                                        </motion.div>
                                    ))} */}
                                    {projects[i].info.featuredTechnologies}
                                    {/* {(i) => {
                                        switch(projects[i].info.featuredTechnologies.length) {
                                            case 0 : return null
                                            case 1 : return `${projects[i].info.featuredTechnologies[0]}`
                                            case 2 : return `${projects[i].info.featuredTechnologies[0]} & ${projects[i].info.featuredTechnologies[1]}`
                                            case 3 : return `${projects[i].info.featuredTechnologies[0]}, ${projects[i].info.featuredTechnologies[1]} & ${projects[i].info.featuredTechnologies[2]}`
                                            default : return `${projects[i].info.featuredTechnologies[0]}, ${projects[i].info.featuredTechnologies[1]} & ${projects[i].info.featuredTechnologies.length-2} other similar roles`
                                        }
                                    }} */}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}