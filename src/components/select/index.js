import {FiMove} from 'react-icons/fi'
export const SelectForm = () =>{
    return(
        <div className='flex gap-2 items-center'>
            <FiMove size={22}/>
            <select className="p-1 bg-third rounded-e-lg border-2 border-first text-secend">
                <option value="0">انتخاب کنید : </option>
            </select>
        </div>
    )
}

