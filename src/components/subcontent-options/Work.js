//DEPS
import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { FocusProjectContext, ContextInfluencers } from "../helpers/appContext";
import { projects } from "../../data"

//COMPS
import ProjectCard from "./ProjectCard"

//STYLES
import "../styles/work.css"

//FUNC
export default function Work() {

    //HANDLE CONTEXT
    const { SetFocusProject } = useContext(FocusProjectContext)
    function SetFocusedProject(x) {
        console.log(x.target.attributes)
        // SetFocusProject({
        //     project: x.target.attributes.projectKey.value,
        //     primaryColor:
        //         projects[x.target.attributes.projectKey.value].styleInfluencers.colors.primaryColor,
        //     secondaryColor:
        //         projects[x.target.attributes.projectKey.value].styleInfluencers.colors.secondaryColor,
        // })
        // handleButtonStates(x.target.attributes.id.value)
    }
    function RemoveFocusedProject(x) {
        SetFocusProject({
            project: false,
            primaryColor: false,
            secondaryColor: false,
            primaryImage: false
        })
        // handleButtonStates(null)
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
                    <motion.div id="projectsSectionTitle" class="work-section-title" variants={ItemAnimation}>web apps</motion.div>
                    <motion.div id="projectsSectionBody" variants={ItemContainerAnimation}>
                        {projects.projectKeys.map((i) => (
                            <ProjectCard 
                                project={projects[i]} 
                                projectKey={i}
                                // onMouseEnter={SetFocusedProject}
                                onMouseEnter={console.log()}
                                onMouseLeave={RemoveFocusedProject}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}