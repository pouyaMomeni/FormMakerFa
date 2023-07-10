import {FiMove} from 'react-icons/fi'
export const TextInpute = ({placeholder}) => {
    return(
        <div className='flex gap-2 items-center'>
            <FiMove size={22}/>
            <input className="border-2 border-first text-secend rounded-lg bg-third p-1 w-[15rem]" type='text' placeholder={placeholder}/>
        </div>
    )
}

export const NumberInpute = ({placeholder}) => {
    return(
        <div className='flex gap-2 items-center'>
            <FiMove size={22}/>
            <input className="border-2 border-first text-secend rounded-lg bg-third p-1 w-[15rem]" type="number" placeholder={placeholder}/>
        </div>
    )
}

export const TextArea = ({placeholder}) => {
    return(
        <div className='flex gap-2 items-center'>
            <FiMove size={22}/>
            <textarea className="border-2 border-first text-secend rounded-lg bg-third p-1 w-[15rem]"  placeholder={placeholder}/>
        </div>
    )
}

export const EmailInpute = ({placeholder}) => {
    return(
        <div className='flex gap-2 items-center'>
            <FiMove size={22}/>
            <input className="border-2 border-first text-secend rounded-lg bg-third p-1 w-[15rem]" type="email" placeholder={placeholder}/>
        </div>
    )
}

