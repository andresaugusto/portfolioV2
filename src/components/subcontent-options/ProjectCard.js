//DEPS
import { useState, useEffect, useContext } from 'react'
import { FocusedProjectContext, ContextInfluencers } from "../helpers/appContext";
import { projects } from "../../data"
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

//MEDIA
// import avtcDemoWide540pX4 from "../../media/videos/avtc-demo-wide-x4-540p.mp4";
// import fireSSMainWide from "../../media/images/fire-ss-main-wide.png"

//STYLES
import "../styles/work.css"


export default function ProjectCard( props ) {

    //CONSTS
    const prj = props.project
    const pk = props.projectKey

    //HANDLE CONTEXT
    const { focusedProject, setFocusedProject } = useContext(FocusedProjectContext)
    function assignFocusedProject(pk) {
        setFocusedProject({
            projectKey: pk,
            genMedia: {
                images: {
                    mainWide: projects[pk].info.genMedia.images.mainWide,
                    mainTablet: projects[pk].info.genMedia.images.mainTablet,
                    mainPhone: projects[pk].info.genMedia.images.mainPhone,
                },
                videos: {
                    mainWide1080pFiltered: {
                        poster: projects[pk].info.genMedia.videos.mainWide1080pFiltered.poster,
                        mp4: projects[pk].info.genMedia.videos.mainWide1080pFiltered.mp4,
                        webm: projects[pk].info.genMedia.videos.mainWide1080pFiltered.webm,
                    },
                    mainWide1080p: {
                        mp4: projects[pk].info.genMedia.videos.mainWide1080p.mp4,
                        webm: projects[pk].info.genMedia.videos.mainWide1080p.webm,
                    },
                    mainWide540p: {
                        mp4: projects[pk].info.genMedia.videos.mainWide540p.mp4,
                        webm: projects[pk].info.genMedia.videos.mainWide540p.webm,
                    },
                },
            },
            styleInfluencers: {
                colors: {
                    primaryColor: projects[pk].styleInfluencers.colors.primaryColor,
                    secondaryColor: projects[pk].styleInfluencers.colors.secondaryColor,
                },
            },
        })
    }
    function unassignFocusedProject(x) {
        setFocusedProject({
            projectKey: null,
            genMedia: {
                images: {
                    mainWide: null,
                    mainTablet: null,
                    mainPhone: null,
                },
                videos: {
                    mainWide1080pFiltered: {
                        poster: null,
                        mp4: null,
                        webm: null,
                    },
                    mainWide1080p: {
                        mp4: null,
                        webm: null,
                    },
                    mainWide540p: {
                        mp4: null,
                        webm: null,
                    },
                },
            },
            styleInfluencers: {
                colors: {
                    primaryColor: null,
                    secondaryColor: null,
                },
            },
        })
    }
    
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
            key={`${pk}ProjectCard`}
            referencedProjectKey={pk}
            class="project-card"
            variants={ItemAnimation}
            onMouseEnter={(x)=>(assignFocusedProject(pk))}
            onMouseLeave={(x)=>(unassignFocusedProject(pk))}
        >
            <div id={`${pk}CardMediaSection`} className="project-card-section">
                {focusedProject.projectKey===pk ? (
                    <Link key={pk} to={`/project/${pk}`} id={`${pk}CardLinkContainer`} className="project-card-link-container">
                        <div id={`${pk}CardLink`} className={"project-card-link"}>
                            view case study
                        </div>
                    </Link>
                ) : (null)}
                <div id={`${pk}CardMediaContainer`} className="project-card-media-container">
                    <div id={`${pk}CardMedia`} className="project-card-media">
                        <video
                            id={`${pk}CardMediaVideo`}
                            // class="video-js vjs-16-9"
                            // controls
                            // autoplay loop
                            width="100%"
                            preload="auto"
                            loop="true"
                            autoplay="muted"
                            poster={prj.info.genMedia.images.mainWide}
                            // data-setup="{}"
                            >
                                <source src={prj.info.genMedia.videos.mainWide540p.mp4} type="video/mp4" />
                                <source src={prj.info.genMedia.videos.mainWide540p.webm} type="video/webm" />
                        </video>
                        {/* <img id={`${pk}CardMediaImage`} src={prj.info.genMedia.images.mainWide} style={{height: "100%", width: "100%"}}/> */}
                    </div>
                </div>
            </div>
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