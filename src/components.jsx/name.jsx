import React from 'react'
import { motion } from "framer-motion"

const Name = () => {
    let delay = 1
    return (
        <div>
                <motion.p className='name'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay, duration: 1 }}
                    drag
                    exit={{ delay, opacity: 0 }}
                >Cole Lybbert</motion.p>
        </div>
    )
}

export default Name
