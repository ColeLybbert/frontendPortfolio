import React, { useState } from 'react'
import { animate, delay, motion, useCycle } from 'framer-motion';

const h1Variants = {
    animationOne: {
        opacity: 1,
        transition: {
            delay: 1,
        }
    },
    animationTwo: {
        fontSize: '2rem',
        width: '15rem',
        y: '0rem',
        x: '0rem',
        opacity: 1,
        transition: {
            delay: 1,
            type: 'tween'
        }
    },
    initial: {
        fontSize: '3rem',
        width: '30rem',
        y: '15rem',
        x: '3rem',
        opacity: 0
    }
}

const h2Variants = {
    animationOne: {
        opacity: 1,
        transition: {
            delay: 2
        }
    },
    animationTwo: {
        fontSize: '1rem',
        y: '0rem',
        x: '0rem',
        opacity: 1,
        transition: {
            delay: 1.3,
            type: 'tween'
        }
    },
    initial: {
        fontSize: '1rem',
        y: '15rem',
        x: '3rem',
        opacity: 0
    }
}

const buttonVariants = {
    animate: {
        opacity: 1,
        transition: {
            delay: 4.5
        }
    },
    initial: {
        opacity: 0
    },
    whileHover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)"
    }
}


const NavBar = () => {

    
    const [useanimation, setUseAnimation] = useState(true);

    if(useanimation) {
        setTimeout(
            function () {
                cycleAnimation()
            },
            3000
        );
        setUseAnimation(false);
    } else {
        console.log('animation done')
    }
    const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo" )

    return (
        <>
            <div className="navBar">
                <div className="info">
                    <motion.h1
                        variants={h1Variants}
                        animate={animation}
                        initial='initial'
                    >Cole Lybbert</motion.h1>
                    <motion.h2
                        variants={h2Variants}
                        animate={animation}
                        initial='initial'
                    >Frontend Developer</motion.h2>
                </div>
                <motion.button className="contactMe"
                variants={buttonVariants}
                animate='animate'
                initial='initial'
                whileHover='whileHover'
                >Contact Me</motion.button>
            </div>
            <motion.div className="navBarWrap"
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                transition={{ delay: 5 }}
            >

            </motion.div>
        </>
    )
}

export default NavBar
