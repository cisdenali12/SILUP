import { useEffect, useState } from 'react'
import { Popup } from './Popup'

export function EditItemPopup ({title, name, okLabel = 'Ok', cancelLabel = 'cancel', value = 0, show, onOk, onCancel}){
    const [newValue, setValue] = useState(value)
    const Add = ()=>{ setValue(newValue+1)}
    const Substract = ()=>{ 
        if(newValue >= 1){
            setValue(newValue-1)
        }
    }

    useEffect(()=>{
        setValue(value)
    },[value])

    return (
        <Popup show={show}>
            <div className={`grid grid-rows-[auto_3fr_1fr] items-center min-w-4/10 min-h-3/10 bg-neutral-200 text-neutral-500 rounded-lg p-2 select-none`}>
                    <p className=' row-1 text-2xl font-bold text-center'>{title}</p>
                    <div className='row-2 grid grid-rows-[auto_auto] grid-cols-[1fr_3fr_1fr] text-center py-4'>
                        <p className='row-1 col-1 col-span-3 text-xl'>{name}</p>
                        <input className='row-2 col-2 text-2xl font-bold text-center' type="number" value={newValue} onChange={(e)=>setValue(Number(e.target.value))}></input>
                        <div className='row-2 col-3 bg-neutral-500 hover:bg-sky-500 hover:cursor-pointer text-white flex items-center justify-center' onClick={Add}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className='row-2 col-1 bg-neutral-500 hover:bg-sky-500 hover:cursor-pointer text-white flex items-center justify-center' onClick={Substract}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    <div className='row-3 flex justify-end gap-2 mt-2'>
                        <button className="text-white bg-red-500" onClick={onCancel}>{cancelLabel}</button>
                        <button className="text-white bg-sky-500" onClick={()=>onOk?onOk({ value:newValue }):''}>{okLabel}</button>
                    </div>
            </div>
        </Popup>
    )
}

