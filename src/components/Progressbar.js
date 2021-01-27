import React, { useEffect } from 'react'
import UseStorage from '../hooks/UseStorage'

export default function Progressbar({file,setFile}) {
    const {  url,progress } = UseStorage(file);

    useEffect(() => {
         if(url   ){
             setFile(null)
         }
    }, [url,setFile])
    return (
        <div className="progressbar" style={{width: progress + '%'}}>
            
        </div>
    )
}
