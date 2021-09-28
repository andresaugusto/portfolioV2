//DEPS
import { useState } from "react";
import { motion } from "framer-motion";

//COMPS
import ProjectCard from "./ProjectCard"

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
                roles: ["SCRUM Master", "Frontend Engineer", "UI Designer"],
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
                    primaryColor: "rgb(164, 179, 119)",
                    secondaryColor: "0, 0, 0, 0.5"
                }
            }
        }
    }
    const projectKeys = ["avtc", "fire", "simon", "wip", "br"]

    //FUNCTIONS
    const rolesArrayMap = (i) => {
        switch (projects[i].info.roles.length) {
            case 0 : return null
            case 1 : return `${projects[i].info.roles[0]}`
            case 2 : return `${projects[i].info.roles[0]} + ${projects[i].info.roles[1]}`
            case 3 : return `${projects[i].info.roles[0]} + ${projects[i].info.roles[1]} + ${projects[i].info.roles[2]}`
            case 4 : return `${projects[i].info.roles[0]} + ${projects[i].info.roles[1]} + ${projects[i].info.roles[2]} + ${projects[i].info.roles[3]}`
            default : return `${projects[i].info.roles[0]} + ${projects[i].info.roles[1]} + (+${projects[i].info.roles.length-3})`
        }
    }

    const cardFeaturedTechs = (i) => {
        let cardFeaturedTechs = []
        projects[i].info.featuredTechnologies.map((j) => (
            cardFeaturedTechs.push(j)
        ))
        console.log(cardFeaturedTechs)
        cardFeaturedTechs.map((j)=> (
            <div id={`cardFeaturedTechnology${i}${j}`} key={`cardFeaturedTechnology${i}${j}`} className="project-card-featured-technology">
                {j}
            </div>
        ))
    }

    const frameworksArrayMap = (i) => {
        // for (let x=0; x<projects[i].info.featuredTechnologies.length; x++ ) {
        //     <div id={`CardFeaturedTechnology${i}${x}`}className="project-card-featured-technology">
        //         {projects[i].info.featuredTechnologies[x]}
        //     </div>
            
        //     // console.log(`CardFeaturedTechnology${i.capitalize()}${projects[i].info.featuredTechnologies[x]}`)
        // }

        projects[i].info.featuredTechnologies.map((x) => (
            // console.log(projects[i].info.featuredTechnologies.find(j))
        //     <div id={`CardFeaturedTechnology${i}${j}`} className="project-card-featured-technology">
        //         {projects[i].info.featuredTechnologies[j]}
        //     </div>
            console.log(`CardFeaturedTechnology${i.charAt(0).toUpperCase()+i.slice(1)}${projects[i].info.featuredTechnologies[x]}`)

        ))
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
                    <motion.div id="workSectionTitle" class="work-section-title" variants={ItemAnimation}>web apps</motion.div>
                    <motion.div id="projects" variants={ItemContainerAnimation}>
                        {projectKeys.map((i) => (
                            // console.log(i)
                            <motion.div 
                                id={`${i}ProjectCard`}
                                class="project-card"
                                variants={ItemAnimation}
                            >
                                <div id={`${i}CardMedia`} className="project-card-section">image</div>
                                <div id={`${i}CardText`} className="project-card-section">
                                    <span id={`${i}CardTitle`} className="project-card-section-item">{projects[i].info.title}</span>
                                    <span id={`${i}CardYear`} className="project-card-section-item">{projects[i].info.year}</span>
                                        <div id={`${i}CardRoles`} className="project-card-section-item">
                                            {rolesArrayMap(i)}
                                        </div>
                                    <div id={`${i}CardProjectType`} className="project-card-section-item">{projects[i].info.projectType}</div>
                                    {/* <div id={`${i}CardFeaturedTechnologies`} className="project-card-section-item"> */}
                                        {/* {cardFeaturedTechs(i)} */}
                                        {/* {(i) => {
                                            let cardFeatTechs = []
                                            projects[i].info.featuredTechnologies.map((j) => (
                                                cardFeatTechs.push(j)
                                            ))
                                            console.log(cardFeatTechs)

                                            // for (let x=0; x<projects[i].info.featuredTechnologies.length; x++ ) {
                                            //     <div id={`${i}CardFeaturedTechnology${projects[i].info.featuredTechnologies[i]}`} className="project-card-featured-technology">
                                            //         {projects[i].info.featuredTechnologies[i]}
                                            //     </div>
                                            // }
                                        }} */}
                                        {/* {projects[i].info.featuredTechnologies.map((j) => (
                                                <div id={`${i}CardFeaturedTechnology${j}`} className="project-card-featured-technology">
                                                    {projects[i].info.featuredTechnologies[projects[i].info.featuredTechnologies.find()]}
                                                </div>
                                        ))} */}
                                        {/* {projects[i].info.featuredTechnologies.map((x) => (
                                            // console.log(projects[i].info.featuredTechnologies.find(j))
                                        //     <div id={`CardFeaturedTechnology${i}${j}`} className="project-card-featured-technology">
                                        //         {projects[i].info.featuredTechnologies[projects[i].info.featuredTechnologies.find(j)]}
                                        //     </div>
                                            console.log(`CardFeaturedTechnology${i.charAt(0).toUpperCase()+i.slice(1)}${projects[i].info.featuredTechnologies[x]}`)
                                        ))} */}
                                    {/* </div> */}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}