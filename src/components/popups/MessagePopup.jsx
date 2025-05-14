import { Popup } from './Popup'
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'


/**
 * 
 * @param {*} type Type of message, either 'warning' or 'error'
 * @returns 
 */
export default function ({type = 'warning', title, message, okLabel = 'Ok', show, onClose}){

    const titleTxt = title ?? (type === 'warning' ? 'Warning!':'Something went wrong!')

    const color = type === 'warning' ? 'bg-orange-100':'bg-pink-100'
    const colorIcon = type === 'warning' ? 'text-yellow-500':'text-red-500'
    const colorBtn = type === 'warning' ? 'bg-yellow-500':'bg-red-500' 
    const handleClose = ()=>{
        if(onClose){
            onClose()
        }
    }

    return (
        <Popup show={show}>
            <div className={`grid grid-cols-1 grid-rows[3fr 2fr 1fr 2fr] justify-center  text-neutral-700 px-10 pb-10 w-9/10 min-h-6/10 bg-neutral-200 rounded-lg ${color}`}>
                    <ExclamationTriangleIcon className={`row-1 justify-self-center size-50 ${colorIcon}`}/>
                    <p className=' row-2 text-6xl font-bold'>{titleTxt}</p>
                    <p className='row-3 text-2xl'>{message}</p>
                    <button className={`text-white bg-red-500 ${colorBtn}`} onClick={handleClose}>{okLabel}</button>
            </div>
        </Popup>
    )
}

