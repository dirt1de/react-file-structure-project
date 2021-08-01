import React from 'react'

export default function File({fileName}) {
    const extention = fileName.split(".")[1]

    const iconClass={
        jpg:"file image outline icon",
        mp4:"file video outline icon",
        exe:"file code outline icon"
    }

    return (
        <div>
            <span>
                <i className={iconClass[extention]}></i>
                {fileName}
            </span>
            
        </div>
    )
}
