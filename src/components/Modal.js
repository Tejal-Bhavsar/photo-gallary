import React from 'react';
import { motion } from 'framer-motion';

export default function Modal({selected,setSelected}) {

    const handleClick = (e) => {
        setSelected(null)
    }
    return (
        <motion.div className="backdrop"
        initial={{opacity:0}}
        animate={{opacity:1}}>
            <motion.img src={selected} alt="clicked image" onClick={handleClick} 
            
            animate={{ y: 0}}/>
        </motion.div>
    )
}
