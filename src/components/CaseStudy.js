import { useEffect, useContext } from "react"
import { FocusedProjectContext, NavStateContext } from "./helpers/appContext"



export default function CaseStudy() {

    //HANDLE CONTEXT
    const { setFocusedProject } = useContext(FocusedProjectContext)
    const { setNavState } = useContext(NavStateContext)
    useEffect(() => {
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
        setTimeout(() => {
            setNavState((prevState) => ({
                isShowing: prevState.isShowing,
                open: prevState.open,
                navLinks: {
                    featuredGallery: true,
                },
                translateY: prevState.translateY,
                subcontent: {
                    open: prevState.subcontent.open,
                    title: prevState.subcontent.title,
                    jsx: prevState.subcontent.jsx,
                },
            }))
        }, 1500)
        console.log("llegamos al CaseStudy")
        // console.log("nav closed and focusedProject set")
    }, [])
    console.log("llegamos al CaseStudy")

    return (
        <>
            <div style={{position: "fixed", zIndex: "-10"}}>La Machine</div>
        </>
    )
}