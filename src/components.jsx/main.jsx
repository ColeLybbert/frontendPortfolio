import React from 'react'
import { useState } from 'react'
import { delay, easeOut, m, motion, stagger, useAnimation, useCycle } from 'framer-motion'

const loadingContainerVariants = {
    load: {
        marginTop: '10rem',
        transition: {
            staggerChildren: 0.1,
        }
    },
    setXY: {
        marginTop: '10rem',
        transition: {
            staggerChildren: 0.1,
        }
    },
    setOpacity: {
        transition: {
            staggerChildren: 0.5,
        }
    },
}

const childerenVariant = {
    load: {
        y: ['1rem', '0rem'],
        opacity: 1,
        backgroundColor: '#FFFFFF',
        color: 'transparent',
        width: '3rem',
        height: '3rem',
        margin: '0 0.1rem',
        borderRadius: '2.5rem',
        transition: {
            y: {
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeOut'

            },
            opacity: {
                delay: 7
            },
        }
    },
    setXY: {
        y: 0,
        x: 0,
        opacity: 0,
        backgroundColor: '#FFFFFF',
        color: 'transparent',
        width: '3rem',
        height: '3rem',
        margin: '0 0.1rem',
        borderRadius: '2.5rem',
        transition: {
            duration: 1,
            opacity: {
                delay: 1
            }
        }
    },
    setCards: {
        opacity: 0,
    },
    setOpacity: {
        opacity: 1
    }
}



const Main = () => {

    const [animation, cycleAnimation] = useCycle('load', 'setXY', 'setCards','setOpacity');
    const [useanimation, setUseAnimation] = useState(true);


    setTimeout(() => {
        if (useanimation) {
            cycleAnimation()
            setUseAnimation(false)
        } else {
            console.log('animation finished')
        }
    }, 9000)

    setTimeout(() => {
        if (useanimation) {
            cycleAnimation()
            setUseAnimation(false)
        } else {
            console.log('animation finished')
        }
    }, 11000)

    setTimeout(() => {
        if (useanimation) {
            cycleAnimation()
            setUseAnimation(false)
        } else {
            console.log('animation finished')
        }
    }, 12000)


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
