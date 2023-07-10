import React from 'react'
import Logo from '../../assets/img/logo.png'
const NavBar = () => {
  return (
    <div className='w-[100%] bg-first h-[3rem] flex justify-around'>
        <div className='flex justify-center items-center'>
            <img src={Logo} width={45} alt="" />
            <p className='text-secend text-lg'>فرم ساز</p>
        </div>
        {/* <div className='flex items-center gap-4'>
            <p className='text-secend text-md cursor-pointer p-[1px] hover:border-b-[3px] border-forth'>خانه</p>
            <p className='text-secend text-md cursor-pointer p-[1px] hover:border-b-[3px] border-forth'>درباره ما</p>
        </div>
        <div></div> */}
    </div>
  )
}

export default NavBar