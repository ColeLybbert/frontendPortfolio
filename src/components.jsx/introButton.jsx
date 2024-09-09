import React from 'react'
import { motion } from 'framer-motion'

const IntroButton = () => {

    let delay = 3
    return (
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay, duration: 1 }}
            drag
            exit={{ delay, opacity: 0 }}
        >About Me</motion.button>
    )
}

export default IntroButton
