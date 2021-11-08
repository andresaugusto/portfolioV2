export const projects = {
    //ADD ALL PROJECT TITLES TO "projectKeys"
    projectKeys: ["avtc", "wip", "fire", "br", "simon", "aa"],
    aa: {
        info: {
            title: "aA (portfolio)",
            year: "2021",
            projectType: "Responsive Website",
            projectSite: "https://andresaugusto.github.io/aa/",
            projectRepo: "https://github.com/andresaugusto/portfolioV2",
            featuredTechnologies: ["React.js", "Illustrator", "Photoshop", "AutoCAD"],
            roles: ["Frontend Engineer", "UI Developer", "Graphic Designer", "Media Editor"],
            headline: "An assessment of personal branding",
            photoHero: "https://andresaugusto-aa-media.s3.amazonaws.com/images/aa-ss-main-wide.png",
            overview: "Ask a designer to design his own home and construct it too. Alike to a self-performing design-build contractor contracting himself for a personal project, aA started as an assessment of personal branding and turned into an introspective 'focus all of a multi-disciplined professional's skills and interests into one web-app-shaped elevator pitch. Interestingly enough, a web app can make the pitch and it can also step out of the elevator and continue the conversation deeper into the details if appropriate- all without the use of a single elevator.",
            problem: "Effective communication and trust needs to be established between human beings for a partnership to be long-lasting and fruitful. Professional work is the same to me, thus the initial conversation is to be led in the most candid and precise of available ways.",
            solution: "Construct an experience that can enlarge in detail as a deeper conversation evolves.",
            approach: {
                research: "A curated collection of web developer portfolios were studied, the likes of recent bootcamp grads all the way to established professionals like Bruno Simon and his axonometric driving experience.",
                synthesis: "A person will begin to pay less attention to the medium as the interaction progresses positively, also causing the experience to rise immensely in value. The objective becomes a platform that can interact with the user and inform deeper without loosing a sense of place.",
                design: "An opening ceremony, inviting and responsive 'onMouseMove' animation for an orbiting SVG, and a menu that sorts topics and data into levels of detail, all while preserving 'white space' (or 'black mirror-esque space') that features item prominence and allows background media shows to transform the experience in to one that is project-specific.",
                delivery: "aA is deployed and hosted through github and github-pages; an AWS S3 Bucket used for media referencing."
            },
            prototype: null,
            nextSteps: "1) Gyroscopic AOM logo functionality for mobile devices. 2) Updates to way-finding and tap responses for mobile devices. 3) Add project sections for different mediums and trades.",
            feSpotlights: {
                one: {
                    text: "preserve-3d + translateZ(40px) + One orbiting card with onMouseEnter, onMouseMove, and onMouseLeaves functions fired.",
                    media: null
                },
                two: {
                    text: "useContext for stateful Nav and Featured Project reference.",
                    media: null
                },
                three: {
                    text: "AWS S3 Storage for media references throughout the Projects Object Library",
                    media: null
                },
            },
            uiSpotlights: {
                one: {
                    text: null,
                    media: null
                },
                two: {
                    text: null,
                    media: null
                },
                three: {
                    text: null,
                    media: null
                },
            },
            genMedia: {
                images: {
                    mainWide: "https://andresaugusto-aa-media.s3.amazonaws.com/images/aa-ss-main-wide.png",
                    onDevice: {
                        mainDesktop: "https://andresaugusto-aa-media.s3.amazonaws.com/images/aa-ss-main-desktop.png",
                        mainTablet: "https://andresaugusto-aa-media.s3.amazonaws.com/images/aa-ss-main-tablet.png",
                        mainPhone: "https://andresaugusto-aa-media.s3.amazonaws.com/images/aa-ss-main-phone.png"
                    }
                },
                videos: {
                    mainWide1080pFiltered: {
                        poster: "https://andresaugusto-aa-media.s3.amazonaws.com/images/aa-demo-wide-1080p-filtered-poster.png",
                        mp4: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/aa-demo-wide-x4-1080p-filtered.mp4",
                        webm: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/aa-demo-wide-x4-1080p-filtered.webm",
                    },
                    mainWide1080p: {
                        mp4: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/aa-demo-wide-x4-1080p.mp4",
                        webm: null,
                    },
                    mainWide540p: {
                        mp4: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/aa-demo-wide-x4-540p.mp4",
                        webm: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/aa-demo-wide-x4-540p.webm",
                    },
                },
            },
        },
        styleInfluencers: {
            colors: {
                primaryColor: "orange",
                secondaryColor: "gray"
            }
        },
    },
    avtc: {
        info: {
            title: "AVTC",
            year: "2021",
            projectType: "Responsive Website",
            projectSite: "https://andresaugusto.github.io/avtc",
            projectRepo: "https://github.com/andresaugusto/avtc",
            featuredTechnologies: ["React.js", "Python", "Django", "Figma", "Illustrator", "Photoshop", "AutoCAD"],
            roles: ["Frontend Engineer", "UI Developer", "Graphic Designer"],
            headline: "Widening the audience through a bespoke web experience",
            photoHero: "https://andresaugusto-aa-media.s3.amazonaws.com/images/avtc-ss-main-wide.png",
            overview: "American Vengeance Tattoo Co. website design concept, proposal demo, development and launch assessment services were performed by a team of two Freelance Full-Stack Developers who split the process between front-end and back-end programming.",
            problem: "Lacking a centralized database for the Artists and their Pieces, potential customers refer to various social media profiles to consume different artist's works.",
            solution: "Embody the Kenosha Shop's ethos and construct one web experience for users to navigate through the plethora of services and works offered.",
            approach: {
                research: "Websites of renowned shops in the likes of New York City's Bang Bang Forever were accounted for with the objective of growing the platform's viewer and overall client base.",
                synthesis: "Pieces and visuals need to take the main stage in showcasing a business that delivers quality. AVTC is to be presented as a results-first establishment where the client can begin to create a trustful relationship with the shop's resident artists.",
                design: "The shop's name, the ink on the skin, and the artist that delivers an excellent marking experience; thats how the conversation is driven with the client as the navigator. The details progress and a pipeline is created for each artist to connect with an interested person to guide.",
                delivery: "AVTC is deployed and hosted through github and github-pages and the bespoke avtckenosha.com; an AWS S3 Bucket used for media referencing."
            },
            prototype: null,
            nextSteps: "1) Updates to way-finding and tap interactions for mobile devices. 2) Add project sections for different mediums and trades. 3) Create an opening animation for the website.",
            feSpotlights: {
                one: {
                    text: null,
                    media: null
                },
                two: {
                    text: null,
                    media: null
                },
                three: {
                    text: null,
                    media: null
                },
            },
            uiSpotlights: {
                one: {
                    text: null,
                    media: null
                },
                two: {
                    text: null,
                    media: null
                },
                three: {
                    text: null,
                    media: null
                },
            },
            genMedia: {
                images: {
                    mainWide: "https://andresaugusto-aa-media.s3.amazonaws.com/images/avtc-ss-main-wide.png",
                    onDevice: {
                        mainDesktop: "https://andresaugusto-aa-media.s3.amazonaws.com/images/avtc-ss-main-desktop.png",
                        mainTablet: "https://andresaugusto-aa-media.s3.amazonaws.com/images/avtc-ss-main-tablet.png",
                        mainPhone: "https://andresaugusto-aa-media.s3.amazonaws.com/images/avtc-ss-main-phone.png"
                    }
                },
                videos: {
                    mainWide1080pFiltered: {
                        poster: "https://andresaugusto-aa-media.s3.amazonaws.com/images/avtc-demo-wide-1080p-filtered-poster.png",
                        mp4: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/avtc-demo-wide-x4-1080p-filtered.mp4",
                        webm: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/avtc-demo-wide-x4-1080p-filtered.webm",
                    },
                    mainWide1080p: {
                        mp4: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/avtc-demo-wide-x4-1080p.mp4",
                        webm: null,
                    },
                    mainWide540p: {
                        mp4: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/avtc-demo-wide-x4-540p.mp4",
                        webm: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/avtc-demo-wide-x4-540p.webm",
                    },
                },
            },
        },
        styleInfluencers: {
            colors: {
                primaryColor: "orange",
                secondaryColor: "gray"
            }
        },
    },
    wip: {
        info: {
            title: "WIP",
            year: "2020",
            projectType: "Responsive Website",
            projectSite: "https://wip--gallery.herokuapp.com/",
            projectRepo: "https://github.com/4thquarter",
            featuredTechnologies: ["React.js", "Python", "Django"],
            roles: ["SCRUM Master", "Frontend Engineer", "UI Developer", "Graphic Designer"],
            headline: "Bring artists from all walks into a self-referenced art viewing experience",
            photoHero: "https://andresaugusto-aa-media.s3.amazonaws.com/images/wip-ss-main-wide.png",
            overview: "WIP galleries experiment with the capacities of extrapolating the elements of a mainstream website in order for the curated works to take the prominence of the screen. The power behind the application continues as artists make WIP their own platform for showcasing their efforts and guiding viewers through their personal collections. Users are invited to create their own profiles and manage several artistic personas and their respective bodies of work.",
            problem: "Contrary to an ambulatory experience, virtual galleries allow for the user to navigate through a collection of works with reliably static elements contrasting the constant flow of works through the screen. WIP aims to challenge that formality.",
            solution: "The content is to be alive and transform as one in a physical gallery experience. Elements shift (without abandoning the spectator's perception) as the attention is called to the depths of a piece's detail and furthermore into all of a the artist's curated conceptions.",
            approach: {
                research: "Physical galleries- then virtual ones. The behavior of a gallery in a physical experience varies as way-finding is not something you always have in sight, objects orbit, they hide behind each other, and the odd case implies that the spectator is alone. There's always movement and life inside the space.",
                synthesis: "The viewing experience is enriched by the conversation that the space can hold with the spectator.",
                design: "Physical galleries and life through animations. In a way, WIP is an organism that can expand with the user. While the conversation is kept alive by visual arousal, the galleries are proposed with ever-changing piece positioning and tectonic informative elements.",
                delivery: "WIP is deployed on Heroku while the files are kept in a GitHub repository; an AWS S3 Bucket used for media referencing."
            },
            prototype: null,
            nextSteps: "1) Expand support for mobile device viewing. 2) Search capabilities. 3) Improve overall way-finding experience",
            feSpotlights: {
                one: {
                    text: null,
                    media: null
                },
                two: {
                    text: null,
                    media: null
                },
                three: {
                    text: null,
                    media: null
                },
            },
            uiSpotlights: {
                one: {
                    text: null,
                    media: null
                },
                two: {
                    text: null,
                    media: null
                },
                three: {
                    text: null,
                    media: null
                },
            },
            genMedia: {
                images: {
                    mainWide: "https://andresaugusto-aa-media.s3.amazonaws.com/images/wip-ss-main-wide.png",
                    onDevice: {
                        mainDesktop: "https://andresaugusto-aa-media.s3.amazonaws.com/images/wip-ss-main-desktop.png",
                        mainTablet: null,
                        mainPhone: null
                    }
                },
                videos: {
                    mainWide1080pFiltered: {
                        poster: "https://andresaugusto-aa-media.s3.amazonaws.com/images/wip-demo-wide-1080p-filtered-poster.png",
                        mp4: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/wip-demo-wide-x10-1080p-filtered.mp4",
                        webm: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/wip-demo-wide-x10-1080p-filtered.webm",
                    },
                    mainWide1080p: {
                        mp4: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/wip-demo-wide-x10-1080p.mp4",
                        webm: null,
                    },
                    mainWide540p: {
                        mp4: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/wip-demo-wide-x10-540p.mp4",
                        webm: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/wip-demo-wide-x10-540p.webm",
                    },
                },
            },
        },
        styleInfluencers: {
            colors: {
                primaryColor: "maroon",
                secondaryColor: "gold"
            }
        },
    },
    fire: {
        info: {
            title: "Fire",
            year: "2020",
            projectType: "Responsive Website",
            projectSite: "https://andresaugusto.github.io/FIRE-front/",
            projectRepo: "https://github.com/andresaugusto/FIRE-front",
            featuredTechnologies: ["React.js", "Express", "Node.js", "MongoDB"],
            roles: ["SCRUM Master", "UI Developer", "Graphic Designer"],
            headline: "An immersive and open-sourced cannabis study experience",
            photoHero: "https://andresaugusto-aa-media.s3.amazonaws.com/images/fire-ss-main-wide.png",
            overview: "With the widening audience for medicinal and recreational use of cannabis, the conversation aims to be complimented by an open-sourced strain database where users can search, explore, and contribute to the community's knowledge.",
            problem: "Amidst a transition of legality and all the social adjustments it implies, cannabis is evolving into a more widely studied and embraced harvest. How can we bridge the gap of social misconception?",
            solution: "The content shall shine through an elegantly produced interface. The character and importance of cannabis needs not to be sterilized, but to be celebrated in a way that is respectful to both the informer and the informed.",
            approach: {
                research: "Leafly, Weedmaps, All Bud, Way of Leaf- all ushered the way for elegant display of information referencing the study and acquisition of marihuana. Playfulness meets formality with the caveat of age qualifications.",
                synthesis: "Consumption of the content should assimilate the consumption of cannabis itself, the bud should shine through the information as normalization is ushered in the most respectful and sensible of available ways.",
                design: "Content should never be invisible. The user dives straight into the beautiful visual aspects of this plant while catered with data about the substance as any other article bought at a pharmacy or place of recreation. The delivery should also allow the user to search for any particular strain and its data without blockers. Intrigues about the topic need feel welcomed; tended to promptly and transparently.",
                delivery: "Fire is deployed and hosted through github and github-pages; media is referred from decentralized sources."
            },
            prototype: null,
            nextSteps: "1) Expand home page for more comprehensive collections with titles and other important quick-view aspects. 2) Optimizations to desktop and widescreen views. 3) User profiles to propose accountability for information publishing.",
            feSpotlights: {
                one: {
                    text: null,
                    media: null
                },
                two: {
                    text: null,
                    media: null
                },
                three: {
                    text: null,
                    media: null
                },
            },
            uiSpotlights: {
                one: {
                    text: null,
                    media: null
                },
                two: {
                    text: null,
                    media: null
                },
                three: {
                    text: null,
                    media: null
                },
            },
            genMedia: {
                images: {
                    mainWide: "https://andresaugusto-aa-media.s3.amazonaws.com/images/fire-ss-main-wide.png",
                    onDevice: {
                        mainDesktop: "https://andresaugusto-aa-media.s3.amazonaws.com/images/fire-ss-main-desktop.png",
                        mainTablet: "https://andresaugusto-aa-media.s3.amazonaws.com/images/fire-ss-main-tablet.png",
                        mainPhone: "https://andresaugusto-aa-media.s3.amazonaws.com/images/fire-ss-main-phone.png"
                    }
                },
                videos: {
                    mainWide1080pFiltered: {
                        poster: "https://andresaugusto-aa-media.s3.amazonaws.com/images/fire-demo-wide-1080p-filtered-poster.png",
                        mp4: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/fire-demo-wide-x4-1080p-filtered.mp4",
                        webm: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/fire-demo-wide-x4-1080p-filtered.webm",
                    },
                    mainWide1080p: {
                        mp4: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/fire-demo-wide-x4-1080p.mp4",
                        webm: null,
                    },
                    mainWide540p: {
                        mp4: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/fire-demo-wide-x4-540p.mp4",
                        webm: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/fire-demo-wide-x4-540p.webm",
                    },
                },
            },
        },
        styleInfluencers: {
            colors: {
                primaryColor: "olive",
                secondaryColor: "purple"
            }
        },
    },
    br: {
        info: {
            title: "Br",
            year: "2020",
            projectType: "Responsive Website",
            projectSite: "https://andresaugusto.github.io/Br/",
            projectRepo: "https://github.com/andresaugusto/br",
            featuredTechnologies: ["React.js", "Photoshop"],
            roles: ["Frontend Engineer", "UI Developer", "Graphic Designer"],
            headline: "Where drastic measures are the only measures.",
            photoHero: "https://andresaugusto-aa-media.s3.amazonaws.com/images/br-ss-main-wide.png",
            overview: "Purely born out of an exercise of API data manipulation and presentation, Br extends web presence for Breaking Bad facts living in Tim Biles' 'A Breaking Bad API'.",
            problem: "With the intention of exercise, a frontend web application is to be created with the utilization and manipulation of (a) built and public API('s).",
            solution: "A robust and publicly accessible API should be chosen in order to manipulate comprehensive displays of the data available.",
            approach: {
                research: "Research was purely personal preference. Finding built and publicly accessible API's to then sort though what seemed to have potential to push the expected exercise's emotive boundaries.",
                synthesis: "Tim Biles' 'A Breaking Bad API' appeared within the list and that was it- (facts).",
                design: "As John Waters' book on shock value explains: 'To me, beauty is looks you can never forget. A face should jolt, not soothe'. Heisenberg is the face of the show as he is of anyone in hardship deciding upon unthinkable means to an end. Thanks, Bryan. The Bromine inspired branding directly shape-shifted from the show's opener says most of what will happen here. The user is splashed with fan-based sympathy to then humanize the rest of the welcoming page; informing nonetheless of clear pathways accompanying the main logo at the top.",
                delivery: "Br is deployed and hosted through github and github-pages; media is referred from decentralized sources."
            },
            prototype: null,
            nextSteps: "1) Expand home page for more comprehensive collections with titles and other important quick-view aspects. 2) Optimizations to desktop and widescreen views. 3) Overall format upgrades and refactoring.",
            feSpotlights: {
                one: {
                    text: null,
                    media: null
                },
                two: {
                    text: null,
                    media: null
                },
                three: {
                    text: null,
                    media: null
                },
            },
            uiSpotlights: {
                one: {
                    text: null,
                    media: null
                },
                two: {
                    text: null,
                    media: null
                },
                three: {
                    text: null,
                    media: null
                },
            },
            genMedia: {
                images: {
                    mainWide: "https://andresaugusto-aa-media.s3.amazonaws.com/images/br-ss-main-wide.png",
                    onDevice: {
                        mainDesktop: "https://andresaugusto-aa-media.s3.amazonaws.com/images/br-ss-main-desktop.png",
                        mainTablet: "https://andresaugusto-aa-media.s3.amazonaws.com/images/br-ss-main-tablet.png",
                        mainPhone: "https://andresaugusto-aa-media.s3.amazonaws.com/images/br-ss-main-phone.png"
                    }
                },
                videos: {
                    mainWide1080pFiltered: {
                        poster: "https://andresaugusto-aa-media.s3.amazonaws.com/images/br-demo-wide-1080p-filtered-poster.png",
                        mp4: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/br-demo-wide-x4-1080p-filtered.mp4",
                        webm: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/br-demo-wide-x4-1080p-filtered.webm",
                    },
                    mainWide1080p: {
                        mp4: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/br-demo-wide-x4-1080p.mp4",
                        webm: null,
                    },
                    mainWide540p: {
                        mp4: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/br-demo-wide-x4-540p.mp4",
                        webm: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/br-demo-wide-x4-540p.webm",
                    },
                },
            },
        },
        styleInfluencers: {
            colors: {
                primaryColor: "rgb(164, 179, 119)",
                secondaryColor: "0, 0, 0, 0.5"
            }
        },
    },
    simon: {
        info: {
            title: "sim[]n",
            year: "2020",
            projectType: "Responsive Website",
            projectSite: "https://andresaugusto.github.io/simon/",
            projectRepo: "https://github.com/andresaugusto/simon",
            featuredTechnologies: ["JavaScript", "Photoshop"],
            roles: ["Frontend Engineer", "UI Developer", "Graphic Designer"],
            headline: "The Element and The Object",
            photoHero: "https://andresaugusto-aa-media.s3.amazonaws.com/images/simon-ss-main-wide.png",
            overview: "Conceived from an exercise of recreating the logic of Simon, the handheld, sim[]n is the concept extracted from the original. It is is transferred into devices with the view of a tectonic shape replacing the monolith most of us know.",
            problem: "With the intention of exercise, a frontend web application experience is to be created around the logic of a childhood game.",
            solution: "A web application that is ready to explain its use and carry out an extensible interaction with the user.",
            approach: {
                research: "Research was purely personal preference. Find and sort though different software-based and non-software-based pastimes that can propose a Javascript-able input-based experience.",
                synthesis: "The initial logic behind Simon is straightforward and scalable in itself, thus proposing an opportunity to explore more presentation and input opportunities.",
                design: "Upon the logic's abstraction from the physical object, the element is created with its own designable input spaces and animations. Solid pieces are minimized to the perceived object(s) used to view the experience and interact with such and the experience is scalable as much as input and view options allow for each device.",
                delivery: "sim[]n is deployed and hosted through github and github-pages."
            },
            prototype: null,
            nextSteps: "1) Expand game modes and input interactions. 2) Optimizations to desktop and widescreen views. 3) Overall format upgrades and refactoring.",
            feSpotlights: {
                one: {
                    text: null,
                    media: null
                },
                two: {
                    text: null,
                    media: null
                },
                three: {
                    text: null,
                    media: null
                },
            },
            uiSpotlights: {
                one: {
                    text: null,
                    media: null
                },
                two: {
                    text: null,
                    media: null
                },
                three: {
                    text: null,
                    media: null
                },
            },
            genMedia: {
                images: {
                    mainWide: "https://andresaugusto-aa-media.s3.amazonaws.com/images/simon-ss-main-wide.png",
                    onDevice: {
                        mainDesktop: "https://andresaugusto-aa-media.s3.amazonaws.com/images/simon-ss-main-desktop.png",
                        mainTablet: "https://andresaugusto-aa-media.s3.amazonaws.com/images/simon-ss-main-tablet.png",
                        mainPhone: "https://andresaugusto-aa-media.s3.amazonaws.com/images/simon-ss-main-phone.png"
                    }
                },
                videos: {
                    mainWide1080pFiltered: {
                        poster: "https://andresaugusto-aa-media.s3.amazonaws.com/images/simon-demo-wide-1080p-filtered-poster.png",
                        mp4: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/simon-demo-wide-x4-1080p-filtered.mp4",
                        webm: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/simon-demo-wide-x4-1080p-filtered.webm",
                    },
                    mainWide1080p: {
                        mp4: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/simon-demo-wide-x4-1080p.mp4",
                        webm: null,
                    },
                    mainWide540p: {
                        mp4: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/simon-demo-wide-x4-540p.mp4",
                        webm: "https://andresaugusto-aa-media.s3.amazonaws.com/videos/simon-demo-wide-x4-540p.webm",
                    },
                },
            },
        },
        styleInfluencers: {
            colors: {
                primaryColor: "#807a70",
                secondaryColor: "white"
            }
        },
    },
}