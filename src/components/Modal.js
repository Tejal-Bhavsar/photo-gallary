import React from 'react'

export default function Modal({selected,setSelected}) {

    const handleClick = (e) => {
        setSelected(null)
    }
    return (
        <div className="backdrop">
            <img src={selected} alt="clicked image" onClick={handleClick} />
        </div>
    )
}
