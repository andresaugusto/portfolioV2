//DEPS
import { useState, useContext } from 'react'
import { motion } from 'framer-motion'

//STYLES
import "../styles/work.css"


export default function ProjectCard( props ) {

    //CONSTS
    const prj = props.project
    const pk = props.projectKey
    
    //FUNCTIONS
    const rolesArrayMap = (prj) => {
        switch (prj.info.roles.length) {
            case 0 : return null
            case 1 : return `${prj.info.roles[0]}`
            case 2 : return `${prj.info.roles[0]} + ${prj.info.roles[1]}`
            case 3 : return `${prj.info.roles[0]} + ${prj.info.roles[1]} + ${prj.info.roles[2]}`
            case 4 : return `${prj.info.roles[0]} + ${prj.info.roles[1]} + ${prj.info.roles[2]} + ${prj.info.roles[3]}`
            default : return `${prj.info.roles[0]} + ${prj.info.roles[1]} + (+${prj.info.roles.length-3})`
        }
    }
    const cardFeaturedTechs = (prj) => {
        let cardFeaturedTechs = []
        prj.info.featuredTechnologies.map((i) => (
            cardFeaturedTechs.push(i)
        ))
        console.log(cardFeaturedTechs)
        cardFeaturedTechs.map((i)=> (
            <div id={`CardFeaturedTechnology${prj}${i}`} prj={`cardFeaturedTechnology${prj}${i}`} className="project-card-featured-technology">
                {i}
            </div>
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

    //RETURN

    return (
        <motion.div 
            id={`${pk}ProjectCard`}
            class="project-card"
            variants={ItemAnimation}
        >
            <div id={`${pk}CardMedia`} className="project-card-section">image</div>
            <div id={`${pk}CardText`} className="project-card-section">
                <span id={`${pk}CardTitle`} className="project-card-section-item">{prj.info.title}</span>
                <span id={`${pk}CardYear`} className="project-card-section-item">{prj.info.year}</span>
                <div id={`${pk}CardProjectType`} className="project-card-section-item">{prj.info.projectType}</div>
                <div id={`${pk}CardFeaturedTechnologies`} className="project-card-section-item" variants={ItemContainerAnimation}>
                    {prj.info.featuredTechnologies.map((i) => (
                        <motion.div id={`${pk}CardFeaturedTechnology${i}`} className="project-card-featured-technology" variants={ItemAnimation}>
                            {i}
                        </motion.div>
                    ))}
                </div>
                <div id={`${pk}CardRoles`} className="project-card-section-item">
                    {rolesArrayMap(prj)}
                </div>
            </div>
        </motion.div>
    )
}