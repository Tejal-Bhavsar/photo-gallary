import React from 'react'
import Usefirestore from '../hooks/Usefirestore'
import {animate, motion} from 'framer-motion'

export default function Images({setSelected}) {
    const { documents } = Usefirestore("images")
    console.log( documents,"this is documets")
    return (
        <div>
            <h1>images</h1>
            <motion.div className="images"
             layout
             >
                {documents?
                documents.map((doc) => (
                    <div className="img-wrap" onClick={() => setSelected(doc.doc.url)} >
                        <motion.img  whileHover={{scale: 1.1}} src={doc.doc.url} key={doc.id}
                        transition={{delay: 1}} />
                    </div>
                     
                ))  : "wait" }
            </motion.div>
        </div>
    )
}
