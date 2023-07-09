import React,{useRef} from 'react'
import { useDrag,useDrop } from 'react-dnd'
import { ItemTypes } from './itemType'
import { ButtonForm } from 'src/components/button'
import { TextInpute } from 'src/components/inpute'

const style = {
    padding: '0.5rem 1rem',
    marginBottom: '.5rem',
    cursor: 'move',
  }
const Form = ({ id, text, index, moveCard,name }) => {

    const ref = useRef(null)
    const [{ handlerId }, drop] = useDrop({
      accept: ItemTypes.CARD,
      collect(monitor) {
        return {
          handlerId: monitor.getHandlerId(),
        }
      },
      hover(item, monitor) {
        if (!ref.current) {
          return
        }
        const dragIndex = item.index
        const hoverIndex = index
        if (dragIndex === hoverIndex) {
          return
        }
        const hoverBoundingRect = ref.current?.getBoundingClientRect()
        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
        const clientOffset = monitor.getClientOffset()
        const hoverClientY = clientOffset.y - hoverBoundingRect.top
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return
        }
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return
        }
        moveCard(dragIndex, hoverIndex)
        item.index = hoverIndex
      },
    })
    // For draging
    const [{ isDragging }, drag] = useDrag({
      type: ItemTypes.CARD,
      item: () => {
        return { id, index }
      },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    })
    const opacity = isDragging ? 0 : 1
    drag(drop(ref))




    const me = () =>{
      return(
        <div>
          hi
        </div>
      )
    }


    return (
        <div ref={ref} style={{ ...style, opacity }} data-handler-id={handlerId} >

          {name === 'text' ? 
          <div className='flex justify-center my-2 gap-1'>
            <TextInpute placeholder={text} />
          </div>
          :
          ''
          }

          {name === 'button' ? 
          <div className='flex justify-center my-2'>
            <ButtonForm text={text}/>
          </div>
          :
          ''
          }
        </div>
      )
}

export default Form



// {name === 'text' ? 
// <>

// </>
// :
// <>
// </>
// }