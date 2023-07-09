import React from 'react'
import { useDrag } from 'react-dnd'
const Drag = ({text,id}) => {
    const [{isDragging},drag] = useDrag(()=>({
        type : "string",
        item : {id:id},
        collect : (monitor) => ({
            isDragging : !!monitor.isDragging()
        })
    }))
  return <p ref={drag} style={{border: isDragging ? "5px solid pink" : "0px"}}>{text}</p>
}

export default Drag