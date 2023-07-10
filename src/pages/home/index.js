import React, { useState ,useCallback, useEffect} from 'react'
import { SideBarDataBase, SideBarDataPro } from 'src/components/data'
import Drag from './drag'
import { useDrop } from 'react-dnd'
import Form from './form'
import update from 'immutability-helper'
import NavBar from 'src/components/navBar'
import {BiDownArrowAlt} from 'react-icons/bi'

const HomePage = () => {
  // for displaying Side bar data
  const [Base, setBase] = useState(true)
  const [Pro, setPro] = useState(true)
  // fucntions
  const ForBase = () =>{
    setBase(!Base)
  }
  const ForPro = () =>{
    setPro(!Pro)
  }
  // DisPlay Data
  const [board, setBoard] = useState([])
  // For Dragng Item To the Form
  const [{isO3er}, drop] = useDrop(()=>({
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
      console.log({
        add,
        ite : 2
      });
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
        key={index}
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
        <div className='flex flex-col border-l w-[20%] h-[93vh]'>
        {/* Side Bar That USE to DRAG option */}
          <div className=' px-4 py-2 flex flex-col items-center mt-8'>
              <p className='border-2 rounded-lg p-1 w-[9rem] flex justify-around bg-third text-secend border-first mb-4 cursor-pointer text-lg items-center gap-1 ' onClick={ForBase}>
                <div></div>
                پایه
                <BiDownArrowAlt size={20}/>
              </p>
              <div className={Base ? 'flex flex-col gap-3 ' : 'hidden' }>
              {SideBarDataBase.map((value,index)=>{
                return <Drag text={value.title} id={value.id} img={value.image}/>
              })}
              </div>
          </div>
        {/* Side Bar That USE to DRAG option PART 2 */}
          <div className=' px-4 py-2 flex flex-col items-center'>
              <p className='border-2 rounded-lg p-1 w-[9rem] flex justify-around bg-third text-secend border-first mb-4 cursor-pointer text-lg' onClick={ForPro}>
              <div></div>
                پیشرفته
              <BiDownArrowAlt size={20}/>
              </p>
              <div className={Pro ? 'flex flex-col gap-3 ' : 'hidden' }>
              {SideBarDataPro.map((value,index)=>{
                return <Drag text={value.title} id={value.id} img={value.image}/>
              })}
              </div>
          </div>

        </div>
        {/* FORM */}
        <div ref={drop} className=' mt-5 mb-5 mr-20 w-[50%] flex flex-col border-2 border-dashed border-first rounded-lg p-2'>
            <div>{board.map((card, i) => renderCard(card, i))}</div>
        </div>
      </div>
    </>
  )
}

export default HomePage