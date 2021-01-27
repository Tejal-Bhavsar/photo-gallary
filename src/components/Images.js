import React from 'react'
import Usefirestore from '../hooks/Usefirestore'

export default function Images({setSelected}) {
    const { documents } = Usefirestore("images")
    console.log( documents,"this is documets")
    return (
        <div>
            <h1>images</h1>
            <div className="images">
                {documents?
                documents.map((doc) => (
                    <div className="img-wrap" onClick={() => setSelected(doc.doc.url)} >
                        <img src={doc.doc.url} key={doc.id} />
                    </div>
                     
                ))  : "wait" }
            </div>
        </div>
    )
}
