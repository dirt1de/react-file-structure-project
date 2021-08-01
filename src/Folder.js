import React, {useState} from 'react'

export default function Folder(props) {
    const {folderName,children} = props
    const [isOpen, setIsOpen] = useState(false)

    const folderStatus = !isOpen ? "folder blue icon" : "folder open blue icon"

    function toggleOpen(){
        setIsOpen(!isOpen)
    }


    return (
        <div>
            <span onDoubleClick={toggleOpen}>
                <i className={folderStatus}></i>
                {folderName}
            </span>
            
            
            <div style={{"marginLeft":"30px"}}>
                {isOpen ? children : null}
            </div>
        </div>
    )
}
