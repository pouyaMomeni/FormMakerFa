import React, { useState ,useCallback, useEffect} from 'react'
import { SideBarDataBase, SideBarDataPro } from 'src/components/data'
import Drag from './drag'
import { useDrop } from 'react-dnd'
import Form from './form'
import update from 'immutability-helper'
import NavBar from 'src/components/navBar'

const style = {
  width: 400,
}
const HomePage = () => {
  let temp = 1
  // DisPlay Data
  const [board, setBoard] = useState([])
  // For Dragng Item To the Form
  const [{isOver}, drop] = useDrop(()=>({
    accept : "string",
    drop : (item) => addString(item.id),
    collect : (monitor) => ({
      isOver : !!monitor.isOver()
  })
  }))

  // Func that ADD item to board List
  const addString = (id) => {
    if (id >= 5) {
      const addPro = SideBarDataPro.filter((me)=>{
        return id == me.id
      })
      setBoard((board) => [...board,addPro[0]])
    }
    if (id < 5) {
      const add = SideBarDataBase.filter((me)=>{
        return id == me.id
      })
      setBoard((board) => [...board,add[0]])
    }

  }
  console.log(board);
  // For sortable List in form
  const moveCard = useCallback((dragIndex, hoverIndex) => {
    setBoard((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      }),
    )
  }, [])
  const renderCard = useCallback((card, index) => {
    return (
      <Form
        key={card.id}
        index={index}
        id={card.id}
        text={card.title}
        moveCard={moveCard}
        name={card.name}
      />
    )
  }, [])

  return (
    <>
     <NavBar/>
     
     <div className='flex'>
        <div className='flex flex-col border-l w-[20%]'>
          <div className=' p-7 flex flex-col items-center'>
              <p className='border-b mb-8'>پایه</p>
              <div className='flex flex-col gap-3'>
              {SideBarDataBase.map((value,index)=>{
                return <Drag text={value.title} id={value.id} />
              })}
              </div>
          </div>
          <div className=' p-7 flex flex-col items-center'>
              <p className='border-b mb-8'>پیشرفته</p>
              <div className='flex flex-col gap-3'>
              {SideBarDataPro.map((value,index)=>{
                return <Drag text={value.title} id={value.id} />
              })}
              </div>
          </div>
        </div>
        <div ref={drop} className=' mt-10 mr-2 w-[50%] flex flex-col'>
            <div className='flex justify-center font-bold text-2xl mb-7'>فرم</div>
            <div>{board.map((card, i) => renderCard(card, i))}</div>
        </div>
      </div>
    </>
  )
}

export default HomePage