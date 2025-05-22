import { useEffect, useState } from 'react'
import { Popup } from './Popup'
import { useSelector } from 'react-redux'

export function CreateItemPopup({show, okLabel = 'Ok', cancelLabel='cancel', onClose, onOk, title='' }){
    const units = useSelector(s=>s.categories.units)
    const [data, setData] = useState({ name:'',amount:0,unit:'qty' })
    const Add = ()=>{setData({...data, amount: data.amount+1})}
    const Substract = ()=>{setData({...data, amount: data.amount-1})}
    const canSubmit = data.name.trim() !== '' && data.unit !== ''
    const onSubmit = (e)=>{
        e.preventDefault()
        if(onOk){
            onOk(data)
        } 
    }
    const handleChange = (e) =>{
        const {name, value} = e.target
        setData((prev)=>({...prev, [name]:value}))
    }

    useEffect(()=>{
        if(show){
        setData({ name:'',amount:0,unit:'qty' })
        }

    },[show])
    return (
        <Popup show={show}>
            <div className='grid grid-cols-[10fr_1fr] grid-rows-[auto_1fr] min-h-5/10 w-5/10 bg-neutral-100 rounded-lg p-2 text-neutral-600'>
                <div className="row-1 col-2 align-self-end justify-self-end">
                    <div className='w-6 h-6 bg-neutral-100 rounded-full text-neutral-400 hover:cursor-pointer' onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <span className="row-1 col-start-1 col-end-3 text-center text-3xl font-medium mb-6 pointer-events-none">{title}</span>
                <form onSubmit={onSubmit} className="row-2 col-start-1 col-end-3 grid grid-cols-[auto_1fr_1fr_auto] grid-rows-[auto_auto_1fr_auto] h-full gap-2">
                    <input 
                        type="text" 
                        name="name" 
                        value={data.name}
                        onChange={handleChange}
                        placeholder='Nombre' 
                        className="row-1 col-start-1 col-end-5 mb-2 bg-neutral-300 rounded-sm font-bold"/>
                    <div className='row-2 col-4 bg-neutral-500 hover:bg-sky-500 hover:cursor-pointer text-white flex items-center justify-center rounded-full' onClick={Add}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <input 
                        type="number" 
                        name="amount" 
                        className="row-2 col-start-2 col-end-4 bg-neutral-300 rounded-sm text-center font-bold" 
                        value={data.amount}
                        onChange={(e)=>{
                            e.target.value = Number(e.target.value) 
                            handleChange(e)
                        }}
                        >
                    </input>
                    <div className='row-2 col-1 bg-neutral-500 hover:bg-sky-500 hover:cursor-pointer text-white flex items-center justify-center rounded-full' onClick={Substract}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className='row-3 col-start-1 col-end-5 mt-3'>
                        <span>Unidad</span>
                        <div className='flex flex-wrap shrink-0 pl-3'>
                        {
                            units.map(u=>(
                                <div key={u} className='max-w-[25%] w-1/4 my-2 flex'>
                                    <label className='font-bold hover:cursor-pointer'>
                                        {u}
                                    <input 
                                        className="hover:cursor-pointer" 
                                        type="radio" 
                                        name="unit" 
                                        value={u} 
                                        checked={data.unit == u}
                                        onChange={handleChange}
                                        />
                                    </label>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                    <button className="row-4 col-2 bg-red-400 hover:bg-red-500 text-white" onClick={onClose}>{cancelLabel}</button>
                    <button className="row-4 col-3 bg-sky-400 hover:bg-sky-500 text-white disabled:bg-neutral-300" type='submit' disabled={!canSubmit}>{okLabel}</button>
                </form>
            </div>
        </Popup>
    )
}