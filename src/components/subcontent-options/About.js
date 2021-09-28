//DEPS
import { useState } from "react"
import { motion } from "framer-motion"

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
        // "MERN Stack",
        "PostgreSQL",
        "Postman",
        "Git",
        "Trello",
        "Jira",
        "HTML",
        // "Adobe Creative Suite",
        // "InDesign",
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
            variants={ItemAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div id="aboutContent">
                <motion.div id="bioSection" class="about-section" variants={ItemContainerAnimation}>
                    <motion.div class="about-section-title" variants={ItemAnimation}>approach</motion.div>
                    <motion.div class="about-section-body" variants={ItemContainerAnimation}>
                        <section id="bioTextBody">
                            <motion.p variants={ItemAnimation}>
                                I think that, as a human, one does not ever see faliure as a true option to our most important ideas. Our core values and drivers. Those which propel other most outrageous ideas to affect our ever-evolving ideals and permeate through the plethora of lessons we receive in the creative process. As the creators all humans are, we're expected to entitle ourselves with a voice. It's how we deliver our existence to the world and also how we understand what we receive in return. We make things. Structured as we see fit.
                            </motion.p>
                            <motion.p variants={ItemAnimation}>
                                Whether it be skateboarding, performing a musical piece, designing spatial experiences and interfaces, or delivering a feeling or a question in any way that speaks to cognition. Being astounded by a figure created with garments or a memory relived through an astounding dish. We all express and are expressed at. Perhaps subjectively, we intrerpret the receipt onto what we feel the communicator is truly expressing about itself. In Spanish, Braile, or visually; sensibility and empathy empower the guided as well as the guide.
                            </motion.p>
                            <motion.p id="centeredText" variants={ItemAnimation}>
                                Composing an experience needs to be taken, in itself, as an experience of its own.
                            </motion.p>
                        </section>
                    </motion.div>
                </motion.div>
                <motion.div id="toolkitSection" class="about-section" variants={ItemContainerAnimation}>
                    <motion.div class="about-section-title" variants={ItemAnimation}>toolkit</motion.div>
                    <motion.div id="toolkitItems" variants={ItemContainerAnimation}>
                        {proficiencies.map((i) => (
                            <motion.div 
                                id={`toolkitItem${i.charAt(0).toUpperCase()+i.slice(1)}`}
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
        </motion.div>
    )
}