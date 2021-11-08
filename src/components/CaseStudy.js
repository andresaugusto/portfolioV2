import { useState, useEffect, useContext } from "react"
import { FocusedProjectContext, NavStateContext } from "./helpers/appContext"

import { projects } from "../data"

import "./styles/case-study.css"



export default function CaseStudy() {

    //HANDLE CONTEXT
    const { setFocusedProject } = useContext(FocusedProjectContext)
    const { setNavState } = useContext(NavStateContext)
    useEffect(() => {
        setTimeout(() => {
            setNavState((prevState) => ({
                isShowing: prevState.isShowing,
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
        }, 1500)
    }, [])

    function defineCaseStudyName() {
        console.log(window.location.href)
    }
    defineCaseStudyName()

    //CASE STUDY STATE
    const [ caseStudyState, setCaseStudyState ] = useState({
        showInfoCard: true,
    })

    const InfoCard = (
        <div id="caseStudyInfoCard">
            la mamachine
        </div>
    )

    return (
        <div id="caseStudyContainer">
            {caseStudyState.showInfoCard?(InfoCard):(null)}
        </div>
    )
}