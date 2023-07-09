import {FiMove} from 'react-icons/fi'
export const ButtonForm = ({text}) =>{
    return(
        <div className='flex gap-2 items-center'>
            <FiMove size={22}/>
            <button className=" bg-third text-secend rounded-lg p-1 w-[12rem] hover:bg-forth">{text}</button>
        </div>

    )
}