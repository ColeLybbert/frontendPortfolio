import React from 'react'
import { motion } from "framer-motion"

const Title = () => {
    let delay = 2
    return (
        <div>
            <motion.p className='title'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                drag
                transition={{ delay, duration: 1 }}
                exit={{ delay, opacity: 0 }}>Frontend Developer</motion.p>
        </div>
    )
}

export default Title
