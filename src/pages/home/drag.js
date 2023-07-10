import React from 'react'
import { useDrag } from 'react-dnd'
const Drag = ({text,id,img}) => {
    const [{isDragging},drag] = useDrag(()=>({
        type : "string",
        item : {id:id},
        collect : (monitor) => ({
            isDragging : !!monitor.isDragging()
        })
    }))
  return <p ref={drag} style={{backgroundColor: isDragging ? "5px solid pink" : "0px"}} 
            className='bg-[#adc178] w-[9rem] cursor-grab p-1 border-2 border-first rounded-lg text-[black] flex justify-center gap-1 '>
            {img}
            {text}
        </p>
}

export default Drag