
import {BiText} from 'react-icons/bi'
import {HiSelector} from 'react-icons/hi'
import {GoNumber} from 'react-icons/go'
import {AiOutlineEnter} from 'react-icons/ai'
import {BsTextareaResize} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {AiOutlineLink} from 'react-icons/ai'
import {AiFillPhone} from 'react-icons/ai'
import {BiTimeFive} from 'react-icons/bi'
import {BsReverseLayoutSidebarReverse} from 'react-icons/bs'
export const SideBarDataBase = [
    {
        id:0,
        title:'متن',
        name:'text',
        image: <BiText size={20}/>
    },
    {
        id:1,
        title:'انتخاب',
        name:'select',
        image: <HiSelector size={20}/>
    },
    {
        id:2,
        title:'عدد',
        name:'number',
        image: <GoNumber size={20}/>
    },
    {
        id:3,
        title:'دکمه',
        name:'button',
        image: <AiOutlineEnter size={20}/>
    },
    {
        id:4,
        title:'باکس متن',
        name:'textArea',
        image: <BsTextareaResize size={20}/>
    }
]
export const SideBarDataPro = [
    {
        id:5,
        title:'ردیف',
        image: <BsReverseLayoutSidebarReverse size={18}/>
    },
    {
        id:6,
        title:'ایمیل',
        name:'email',
        image: <MdEmail size={20}/>
    },
    {
        id:7,
        title:'لینک',
        name:'link',
        image: <AiOutlineLink size={20}/>
    },
    {
        id:8,
        title:'تلفن همراه',
        name:'phone',
        image: <AiFillPhone size={20}/>
    },
    {
        id:9,
        title:'ساعت',
        name:'date',
        image: <BiTimeFive size={20}/>
    }
]