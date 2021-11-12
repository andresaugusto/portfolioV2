//DEPS
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { projects } from "../../data"

//COMPS
import ProjectCard from "./ProjectCard"
import Signature from "../subcontent-options/Signature"

//STYLES
import "../styles/work.css"

//FUNC
export default function Work() {

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
                <motion.div id="projectsSection" className="work-section" variants={ItemContainerAnimation}>
                    <motion.div id="projectsSectionTitle" className="work-section-title" variants={ItemAnimation}>web apps</motion.div>
                    <motion.div id="projectsSectionBody" variants={ItemContainerAnimation}>
                        {projects.projectKeys.map((i) => (
                            <ProjectCard id={`projectCard${i}`}
                                key={`projectCard${i}`}
                                project={projects[i]} 
                                projectKey={i}
                            />
                        ))}
                    </motion.div>
                </motion.div>
                <Signature />
            </div>
        </motion.div>
    )
}