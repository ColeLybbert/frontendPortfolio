import React from 'react'
import { delay, easeOut, motion, stagger, useCycle } from 'framer-motion'

const loadingContainerVariants = {
    hidden: {
        opacity: 0
    },
    load: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        }
    }
}

const childerenVariant = {
    load: {
        y: [30, 0],
        transition: {
            y: {
                duration: 0.6,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeOut',
            }
        }
    }
}


const Main = () => {

    const [animation, cycleAnimation] = useCycle("hidden", "load");

    setTimeout(
        function () {
            cycleAnimation()
        },
        5000
    );

    return (
        <>
                <motion.div className="loadingContainer"
                    variants={loadingContainerVariants}
                    animate={animation}
                >
                    <motion.div className='projectCards'
                        variants={childerenVariant}
                    >
                        x
                    </motion.div>
                    <motion.div className='projectCards'
                        variants={childerenVariant}
                    >
                        x
                    </motion.div>
                    <motion.div className='projectCards'
                        variants={childerenVariant}
                    >
                        x
                    </motion.div>
                    <motion.div className='projectCards'
                        variants={childerenVariant}
                    >
                        x
                    </motion.div>
                    <motion.div className='projectCards'
                        variants={childerenVariant}
                    >
                        x
                    </motion.div>
                    <motion.div className='projectCards'
                        variants={childerenVariant}
                    >
                        x
                    </motion.div>
                </motion.div>
        </>
    )
}

export default Main
