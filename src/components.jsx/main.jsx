import React from 'react'
import { useState } from 'react'
import { delay, easeOut, motion, stagger, useCycle } from 'framer-motion'

const loadingContainerVariants = {
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 1,
        }
    },
    move: {
        opacity: 1,
        color: 'transparent',
    },
    load: {
        marginTop: '10rem',
        opacity: 1,
        color: 'transparent',
        transition: {
            staggerChildren: 0.1,
        }
    }
}

const childerenVariant = {
    load: {
        y: ['1rem', '0rem'],
        opacity: 1,
        backgroundColor: 'white',
        width: '3rem',
        height: '3rem',
        margin: '0 0.1rem',
        borderRadius: '2.5rem',
        transition: {
            rotate: {
                repeat: Infinity,
                repeatType: 'reverse',
            },
            y: {
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeOut'
            },
            opacity: {
                delay: 7
            }
        }
    },
    move: {
        x: 0,
        y: 0,
        opacity: 1,
        width: '5rem',
        height: '5rem',
        borderRadius: '2.5rem',
        backgroundColor: 'white',
        color: 'transparant',
        transition: {
            duration: 1,
        }
    },
    show1: {
        opacity: 1,
        width: '5rem',
        height: '5rem',
        backgroundColor: 'white',
        color: 'transparant',
        transition: {
            duration: 1,
        }
    },
    show2: {
        opacity: 1,
        backgroundColor: ['#FFFFFF', '#141414'],
        width: '5rem',
        height: '5rem',
        transition: {
            backgroundColor: {
                duration: 1,
            }
        }
    },
    show3: {
        opacity: 1,
        color: '#FFFFFF',
        transition: {
            duration: 1,
        }
    }
}


const Main = () => {

    const [animation, cycleAnimation] = useCycle('load', 'move', 'show1', 'show2', 'show3');

    const [useanimation, setUseAnimation] = useState(true);

    if (useanimation) {
        setTimeout(
            function () {
                console.log('animation started')

                cycleAnimation()
                setUseAnimation(false)
            },
            10000
        );
    } else {
        console.log('animation done')
    }
    if (useanimation) {
        setTimeout(
            function () {
                console.log('animation started')

                cycleAnimation()
                setUseAnimation(false)
            },
            11000
        );
    } else {
        console.log('animation done')
    }
    if (useanimation) {
        setTimeout(
            function () {
                console.log('animation started')

                cycleAnimation()
                setUseAnimation(false)
            },
            12000
        );
    } else {
        console.log('animation done')
    }
    if (useanimation) {
        setTimeout(
            function () {
                console.log('animation started')
                cycleAnimation()
                setUseAnimation(false)
            },
            13000
        );
    } else {
        console.log('animation done')
    }

    return (
        <>
            <div className="mainPage">
                <motion.p className='projectsTag' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 6 }}>Projects</motion.p>
                <motion.div className="loadingContainer"
                    variants={loadingContainerVariants}
                    animate={animation}
                >
                    <motion.div className='projectCards'
                        variants={childerenVariant}
                    >
                        Project 1
                    </motion.div>
                    <motion.div className='projectCards'
                        variants={childerenVariant}
                    >
                        Project 2
                    </motion.div>
                    <motion.div className='projectCards'
                        variants={childerenVariant}
                    >
                        Project 3
                    </motion.div>
                    <motion.div className='projectCards'
                        variants={childerenVariant}
                    >
                        Project 4
                    </motion.div>
                    <motion.div className='projectCards'
                        variants={childerenVariant}
                    >
                        Project 5
                    </motion.div>
                    <motion.div className='projectCards'
                        variants={childerenVariant}
                    >
                        Project 6
                    </motion.div>
                </motion.div>
            </div>
        </>
    )
}

export default Main
