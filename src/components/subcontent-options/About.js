//DEPS
import { useState } from "react"
import { motion } from "framer-motion"

//COMPS
import Signature from "../subcontent-options/Signature"

//STYLES
import "../styles/about.css"

//FUNC
export default function About() {

    //OBJECTS
    const proficiencies = [
        "React.js",
        "Javascript",
        "CSS",
        "Figma",
        "Photoshop",
        "Illustrator",
        "Node.js",
        "Python",
        "MongoDB", 
        "Express",
        "Django",
        "PostgreSQL",
        "Postman",
        "Git",
        "Trello",
        "Jira",
        "HTML",
        "AutoCAD",
        "Artlantis",
        "SketchUp",
        "Visual Studio Code",
    ]

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
            id="aboutViewPort"
            // variants={ItemContainerAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div id="aboutContent">
                <div id="aboutWrapper">
                    <motion.div id="bioSection" className="about-section" variants={ItemContainerAnimation}>
                        <motion.div className="about-section-title" variants={ItemAnimation}>approach // andrés</motion.div>
                        <motion.div className="about-section-body" variants={ItemContainerAnimation}>
                            <section id="bioTextBody">
                                <motion.p variants={ItemAnimation}>
                                    As the creators all humans are, we're expected to entitle ourselves with a voice. It's how we deliver our existence to the world and also how we understand what we receive in return. We make things- Structured as we see fit. Whether it be skateboarding, performing a musical piece, designing spatial experiences and interfaces, or delivering a feeling or a question in any way that speaks to cognition. Feeling moved by a figure created with garments or by a resurfaced memory relived through the taste of a dish. We all express and are expressed at. Perhaps subjectively, we intrerpret the receipt onto what we feel the communicator is truly expressing about itself. In Spanish, Braile, or visually; sensibility and empathy empower the guided as well as the guide.
                                </motion.p>
                                <motion.p id="centeredText" variants={ItemAnimation}>
                                    Constructing an experience needs to be taken, in itself, as an experience of its own.
                                </motion.p>
                                <motion.p variants={ItemAnimation}>
                                    Full-Stack Software Engineer and Architectural Designer by training with experiences as a team lead and project manager within the construction business. Translating the design process of spatial experiences and programmatic organization from a concrete standpoint to a virtual one has allowed me proficiency at Frontend Engineering as well as UI Development. As a self-motivated human behavior researcher, I’m passionate about employing intuitive and inclusive design as well as empowering people to communicate better with themselves and the world we all share.
                                </motion.p>
                            </section>
                        </motion.div>
                    </motion.div>
                    <motion.div id="toolkitSection" className="about-section" variants={ItemContainerAnimation}>
                        <motion.div className="about-section-title" variants={ItemAnimation}>toolkit</motion.div>
                        <motion.div id="toolkitItems" variants={ItemContainerAnimation}>
                            {proficiencies.map((i) => (
                                <motion.div id={`toolkitItem${i.charAt(0).toUpperCase()+i.slice(1)}`}
                                    key={`toolkitItem${i.charAt(0).toUpperCase()+i.slice(1)}`}
                                    className="tool-card"
                                    onTap={(i) => {
                                    }}
                                    variants={ItemAnimation}
                                >
                                    {i}
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
                <Signature />
            </div>
        </motion.div>
    )
}