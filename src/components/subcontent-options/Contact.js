//DEPS
import { useState } from "react"
import { motion } from "framer-motion"

//COMPS
import Signature from "../subcontent-options/Signature"

// STYLES
import "../styles/contact.css"

//FUNC
export default function Contact() {

    //OBJECTS
    const contactItems = {
        keys: ["email", "linkedIn", "gitHub"],
        email: {
            title: "Email",
            href: "mailto:andres.augusto@icloud.com?subject=Portfolio%20Contact",
        },
        linkedIn: {
            title: "LinkedIn",
            href: "https://www.linkedin.com/in/andresortizmontalvo/",
        },
        gitHub: {
            title: "GitHub",
            href: "https://github.com/andresaugusto",
        },
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
            id="contactViewPort"
            // variants={ItemContainerAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div id="contactContent">
                <motion.div id="contactListSection" className="contact-list-section" variants={ItemContainerAnimation}>
                    <div className="contact-item-container">
                        <motion.div className="contact-section-title" variants={ItemAnimation}>links</motion.div>
                    </div>
                    <motion.div id="contactListItems" variants={ItemContainerAnimation}>
                        <div className="contact-item-container">
                            <motion.a id={`contactListItem${contactItems.email.title}`}
                                    href={contactItems.email.href}
                                    key={`contactListItem${contactItems.email.title}`}
                                    className="contact-list-item-card"
                                    onTap={(i) => {
                                    }}
                                    variants={ItemAnimation}
                                >
                                    {contactItems.email.title}
                            </motion.a>
                        </div>
                        <div className="contact-item-container">
                            <motion.a id={`contactListItem${contactItems.linkedIn.title}`}
                                    href={contactItems.linkedIn.href}
                                    key={`contactListItem${contactItems.linkedIn.title}`}
                                    className="contact-list-item-card"
                                    onTap={(i) => {
                                    }}
                                    variants={ItemAnimation}
                                >
                                    {contactItems.linkedIn.title}
                            </motion.a>
                        </div>
                        <div className="contact-item-container">
                            <motion.a id={`contactListItem${contactItems.gitHub.title}`}
                                    href={contactItems.gitHub.href}
                                    key={`contactListItem${contactItems.gitHub.title}`}
                                    className="contact-list-item-card"
                                    onTap={(i) => {
                                    }}
                                    variants={ItemAnimation}
                                >
                                    {contactItems.gitHub.title}
                            </motion.a>
                        </div>
                    </motion.div>
                </motion.div>
                <Signature />
            </div>
        </motion.div>
    )
}