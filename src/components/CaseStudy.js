import { useState, useEffect, useContext } from "react"
import { FocusedProjectContext, NavStateContext } from "./helpers/appContext"

import { motion } from "framer-motion"

import { projects } from "../data"

import "./styles/case-study.css"



export default function CaseStudy() {

    //HANDLE CONTEXT
    const { focusedProject, setFocusedProject } = useContext(FocusedProjectContext)
    const { navState, setNavState } = useContext(NavStateContext)

    //HANDLE CASE LOADING
    const [ caseStudyState, setCaseStudyState ] = useState({
        showInfo: false,
        project: null,
        case: null,
    })

    //HANDLE NAV
    function closeNav() {
        setNavState((prevState) => ({
            isShowing: true,
            open: false,
            navLinks: prevState.navLinks,
            translateY: null,
            subcontent: {
                open: false,
                title: prevState.subcontent.title,
                jsx: prevState.subcontent.jsx,
            },
        }))
    }


    
    //GATHER CASE STUDY DATA
    function defineCaseStudy() {
        let ferh = Array.from(window.location.href.toString()).reverse()
        let nameArr = []
        ferh[0]==="/"?ferh.shift():console.log()
        for (let i=0; i<ferh.length; i++) {
            if (ferh[i]!=="/") {
                nameArr.unshift(ferh[i])
            } else {
                break
            }
        }
        let name = nameArr.toString().replaceAll(",", "")
        projects.projectKeys.includes(name)?(
            setCaseStudyState((prevState) => ({
                showInfo: prevState.showInfo,
                project: name,
                case: {
                    info: {
                        title: projects[name].info.title,
                        year: projects[name].info.year,
                        projectType: projects[name].info.projectType,
                        projectSite: projects[name].info.projectSite,
                        projectRepo: projects[name].info.projectRepo,
                        featuredTechnologies: projects[name].info.featuredTechnologies,
                        roles: projects[name].info.roles,
                        headline: projects[name].info.headline,
                        photoHero: projects[name].info.photoHero,
                        overview: projects[name].info.overview,
                        problem: projects[name].info.problem,
                        solution: projects[name].info.solution,
                        approach: {
                            research: projects[name].info.approach.research,
                            synthesis: projects[name].info.approach.synthesis,
                            design: projects[name].info.approach.design,
                            delivery: projects[name].info.approach.delivery
                        },
                        prototype: projects[name].info.prototype,
                        nextSteps: projects[name].info.nextSteps,
                        feSpotlights: {
                            one: {
                                text: projects[name].info.feSpotlights.one.text,
                                media: projects[name].info.feSpotlights.one.media
                            },
                            two: {
                                text: projects[name].info.feSpotlights.two.text,
                                media: projects[name].info.feSpotlights.two.media
                            },
                            three: {
                                text: projects[name].info.feSpotlights.three.text,
                                media: projects[name].info.feSpotlights.three.media
                            },
                        },
                        uiSpotlights: {
                            one: {
                                text: projects[name].info.uiSpotlights.one.text,
                                media: projects[name].info.uiSpotlights.one.media
                            },
                            two: {
                                text: projects[name].info.uiSpotlights.two.text,
                                media: projects[name].info.uiSpotlights.two.media
                            },
                            three: {
                                text: projects[name].info.uiSpotlights.three.text,
                                media: projects[name].info.uiSpotlights.three.media
                            },
                        },
                        genMedia: {
                            images: {
                                mainWide: projects[name].info.genMedia.images.mainWide,
                                onDevice: {
                                    mainDesktop: projects[name].info.genMedia.images.onDevice.mainDesktop,
                                    mainTablet: projects[name].info.genMedia.images.onDevice.mainTablet,
                                    mainPhone: projects[name].info.genMedia.images.onDevice.mainPhone
                                }
                            },
                            videos: {
                                mainWide1080pFiltered: {
                                    poster: projects[name].info.genMedia.videos.mainWide1080pFiltered.poster,
                                    mp4: projects[name].info.genMedia.videos.mainWide1080pFiltered.mp4,
                                    webm: projects[name].info.genMedia.videos.mainWide1080pFiltered.webm
                                },
                                mainWide1080p: {
                                    mp4: projects[name].info.genMedia.videos.mainWide1080p.mp4,
                                    webm: projects[name].info.genMedia.videos.mainWide1080p.webm
                                },
                                mainWide540p: {
                                    mp4: projects[name].info.genMedia.videos.mainWide540p.mp4,
                                    webm: projects[name].info.genMedia.videos.mainWide540p.webm
                                },
                            },
                        },
                    },
                    styleInfluencers: {
                        colors: {
                            primaryColor: projects[name].styleInfluencers.colors.primaryColor,
                            secondaryColor: projects[name].styleInfluencers.colors.secondaryColor
                        }
                    },
                }
            }))
        ):(
            console.log(`theres not a project called ${name}`)
            // setCaseStudyState((prevState) => ({
            //     showCaseInfo: prevState.showInfo,
            //     case: false,
            // }))
        )
    }
    const rolesArrayMap = (prj) => {
        // console.log(caseStudyState.case.info.roles.length)
        switch (caseStudyState.case.info.roles.length) {
            case 0 : return null
            case 1 : return `${caseStudyState.case.info.roles[0]}`
            case 2 : return `${caseStudyState.case.info.roles[0]} + ${caseStudyState.case.info.roles[1]}`
            case 3 : return `${caseStudyState.case.info.roles[0]} + ${caseStudyState.case.info.roles[1]} + ${caseStudyState.case.info.roles[2]}`
            case 4 : return `${caseStudyState.case.info.roles[0]} + ${caseStudyState.case.info.roles[1]} + ${caseStudyState.case.info.roles[2]} + ${caseStudyState.case.info.roles[3]}`
            default : return `${caseStudyState.case.info.roles[0]} + ${caseStudyState.case.info.roles[1]} + (+${caseStudyState.case.info.roles.length-3})`
        }
    }
    

    //ON ADDRESS CHANGE
    useEffect(() => {
        setTimeout(() => {
            closeNav()
        }, 190)
        defineCaseStudy()
        setTimeout(() => {
            setNavState((prevState) => ({
                isShowing: true,
                open: prevState.open,
                navLinks: {
                    featuredGallery: true,
                    caseStudyInfoCard: prevState.navLinks.caseStudyInfoCard,
                },
                translateY: prevState.translateY,
                subcontent: {
                    open: prevState.subcontent.open,
                    title: prevState.subcontent.title,
                    jsx: prevState.subcontent.jsx,
                },
            }))
        }, 1000)
        setTimeout(() => {
            setCaseStudyState((prevState) => ({
                showInfo: !navState.open,
                projectKey: prevState.project,
                case: prevState.case
            }))
        }, 2500)
    }, [window.location.href])


    //MOTION CONSTS
    const ItemContainerAnimation = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: .10,
                staggerChildren: .10
            }
        },
        exit: { opacity: 0 }
    };
    const ItemAnimation = {
        hidden: { y: 10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        },
        exit: { y: 10, opacity: 0 }
    };

    //ELEMENTS
    const InfoCard = (
            caseStudyState.case===null?(
                <div>NO PROJECT AVAILABLE BY THAT NAME</div>
            ):(
                <div id="caseStudyInfoCard" 
                    variants={ItemAnimation}
                    style={{ transition: "1s ease-in-out"}}
                >
                    <div
                        style={{
                            width: "90vw",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                        }}
                    >
                        <div id="csHeader">
                            <span id="cSTitle">
                                {caseStudyState.case.info.title}
                            </span>
                            <span id="cSYear">
                                {caseStudyState.case.info.year}
                            </span>
                            <div id="cSProjectType">
                                {caseStudyState.case.info.projectType}
                            </div>
                            <div 
                                id="cSFeauredTechnologies"
                                style={{
                                    width: "90vw",
                                    overflow: "wrap",
                                    display: "flex",
                                    flexFlow: "row wrap",
                                }}
                            >
                                {caseStudyState.case.info.featuredTechnologies.map((i) => (
                                    <motion.div
                                        id={`cSFeaturedTechnology${i.replaceAll(" ", "")}`}
                                        className="c-s-featured-technology"
                                    >
                                        {i}
                                    </motion.div>
                                ))}
                            </div>
                            <div id={`cSRoles`} style={{width: "90vw"}}>
                                {rolesArrayMap(caseStudyState.project)}
                            </div>
                            <span id="cSWebsite">
                                <a
                                    href={caseStudyState.case.info.projectSite}
                                    id="cSWebsiteAnchor"
                                    style={{
                                        color: "inherit",
                                        textDecoration: "none"
                                    }}
                                >
                                    VISIT SITE
                                </a>
                            </span>
                            <span id="cSWebsite">
                                <a
                                    href={caseStudyState.case.info.projectRepo}
                                    id="cSWebsiteAnchor"
                                    style={{
                                        color: "inherit",
                                        textDecoration: "none"
                                    }}
                                >
                                    VISIT REPO
                                </a>
                            </span>
                            {caseStudyState.case.info.prototype!==null?(
                                <span id="cSWebsite">
                                    <a
                                        href={caseStudyState.case.info.prototype}
                                        id="cSWebsiteAnchor"
                                        style={{
                                            color: "inherit",
                                            textDecorations: "none"
                                        }}
                                    >
                                        VISIT FIGMA
                                    </a>
                                </span>
                            ):(
                                null
                            )}
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div
                        style={{
                            width: "90vw",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                        }}
                    >
                        <div>
                            {caseStudyState.case.info.headline}
                        </div>
                    </div>
                    <br/>
                    <div 
                        id="csBody" 
                        style={{ 
                            width: "90vw",
                            // maxHeight: "150px",
                            overflow: "scroll",
                            display: "flex",
                            flexFlow: "row nowrap",
                            gap: "3vw"
                        }}
                    >
                        <div 
                            style={{
                                width: "75vw",
                                maxWidth: "500px",
                                flexFlow: "column nowrap",
                                gap: "1.5vw"
                            }}
                        >
                            <div 
                                id="cSOverview"
                                style={{
                                    width: "inherit",
                                    maxWidth: "400px"
                                }}
                            >
                                <div>overview</div>
                                {caseStudyState.case.info.overview}
                            </div>
                        </div>
                        <div
                            style={{
                                width: "75vw",
                                maxWidth: "500px",
                                display: "flex",
                                flexFlow: "column nowrap",
                                gap: "1.5vw"
                            }}
                        >
                            <div
                                id="cSProblem"
                                style={{
                                    width: "inherit",
                                    maxWidth: "400px"
                                }}
                            >
                                <div>problem</div>
                                {caseStudyState.case.info.problem}
                            </div>
                            <div
                                id="cSSolution"
                                style={{
                                    width: "inherit",
                                    maxWidth: "400px"
                                }}
                            >
                                <div>solution</div>
                                {caseStudyState.case.info.solution}
                            </div>
                        </div>
                        <div
                            id="cSApproach"
                            style={{
                                width: "75vw",
                                maxWidth: "500px",
                                display: "flex",
                                flexFlow: "column nowrap",
                                gap: "1.5vw"
                            }}
                        >
                            <div
                                id="cSResearch"
                                style={{
                                    width: "inherit",
                                    maxWidth: "400px"
                                }}
                            >
                                <div>research</div>
                                {caseStudyState.case.info.approach.research}
                            </div>
                            <div
                                id="cSSynthesis"
                                style={{
                                    width: "inherit",
                                    maxWidth: "400px"
                                }}
                            >
                                <div>synthesis</div>
                                {caseStudyState.case.info.approach.synthesis}
                            </div>
                            <div
                                id="cSDesign"
                                style={{
                                    width: "inherit",
                                    maxWidth: "400px"
                                }}
                            >
                                <div>design</div>
                                {caseStudyState.case.info.approach.design}
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <div
                        id="cSCloser"
                        style={{
                            display: "flex",
                            flexFlow: "column nowrap",
                            gap: "1.5vw"
                        }}
                    >
                        <div
                            id="cSDelivery"
                            style={{
                                width: "90vw",
                            }}
                        >
                            <div>delivery</div>
                            <div>
                                {caseStudyState.case.info.approach.delivery}
                            </div>
                        </div>
                    </div>
                    <br/>
                        <div
                            id="cSNextStepsContainer"
                            style={{
                            }}
                        >
                            <div>next steps</div>
                            <div
                                id="cSNextSteps"
                                style={{
                                    width: "90vw",
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "flex-start",
                                }}
                            >
                            <div 
                                id="cSFeauredTechnologies"
                                style={{
                                    width: "90vw",
                                    display: "flex",
                                    flexFlow: "row wrap",
                                }}
                            >
                                {caseStudyState.case.info.nextSteps.map((i) => (
                                    <motion.div
                                        id={`cSnextStep${caseStudyState.case.info.nextSteps.indexOf(i)}`}
                                    >
                                        {i}
                                    </motion.div>
                                ))}
                            </div>
                            </div>
                            <br/>
                        </div>
                        <div
                            id="cSDevicesContainer"
                            style={{
                                width: "90vw",
                                display: "flex",
                                flexFlow: "row nowrap",
                                justifyContent: "center",
                                alignItems: "flex-end",
                                // gap: "10vw"
                            }}
                        >
                            {caseStudyState.case.info.genMedia.images.onDevice.mainDesktop!==null?(
                                <div
                                    style={{
                                        width: "12vw",
                                        minWidth: "200px",
                                        display: "flex",
                                        justifyContent: "center"
                                    }}
                                >
                                    <img
                                        src={caseStudyState.case.info.genMedia.images.onDevice.mainDesktop}
                                        alt="cSDeviceMainDesktop"
                                        key={caseStudyState.case.info.genMedia.images.onDevice.mainDesktop}
                                        id="cSDeviceMainDesktop"
                                        style={{
                                            zIndex: "",
                                            height: "30vmin",
                                            display: "flex",
                                            justifyContent: "flex-start",
                                            alignItems: "flex-start",
                                        }}
                                    />
                                </div>
                            ):(null)}
                            {caseStudyState.case.info.genMedia.images.onDevice.mainPhone!==null?(
                                <div
                                    style={{
                                        width: "1vw",
                                        display: "flex",
                                        justifyContent: "center"
                                    }}
                                >
                                    <img
                                        src={caseStudyState.case.info.genMedia.images.onDevice.mainPhone}
                                        alt="cSDeviceMainPhone"
                                        key={caseStudyState.case.info.genMedia.images.onDevice.mainPhone}
                                        id="cSDeviceMainPhone"
                                        style={{
                                            zIndex: "+20",
                                            height: "10vmin",
                                            display: "flex",
                                            justifyContent: "flex-start",
                                            alignItems: "flex-start",
                                            // transform: "translateX(20vw)"
                                        }}
                                    />
                                </div>
                            ):(null)}
                            {caseStudyState.case.info.genMedia.images.onDevice.mainTablet!==null?(
                                <div
                                    style={{
                                        width: "5vw",
                                        minWidth: "150px",
                                        display: "flex",
                                        justifyContent: "center"
                                    }}
                                >
                                    <img
                                        src={caseStudyState.case.info.genMedia.images.onDevice.mainTablet}
                                        alt="cSDeviceMainTablet"
                                        key={caseStudyState.case.info.genMedia.images.onDevice.mainTablet}
                                        id="cSDeviceMainTablet"
                                        style={{
                                            zIndex: "+10",
                                            height: "18vmin",
                                            display: "flex",
                                            justifyContent: "flex-start",
                                            alignItems: "flex-start",
                                        }}
                                    />
                                </div>
                            ):(null)}
                            
                            <br/>
                        </div>
                        
                </div>
            )
    )
    const CSInfo = (
        <motion.div id="caseStudyContainer" 
            variants={ItemContainerAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{ transition: "1s ease-in-out"}}
            onClick={()=>(console.log(caseStudyState))}
        >
            {!navState.open?(InfoCard):(null)}
        </motion.div>
    )

    return (
        caseStudyState.showInfo?(CSInfo):(null)
    )
}