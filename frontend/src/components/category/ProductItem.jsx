import React, { useState } from "react";

export function ProductItem({ className, name, amount, unit, onAdd, onRemove, onDelete }){
    const [hover, setHover] = useState(false)
    
    return (
        <div className={`${className} border-2 border-sky-700 rounded-lg text-sky-700 flex justify-between bg-white`} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} >
                <div className="flex flex-col ml-2">
                    <span className="text-xl font-bold">{ name }</span>
                    <span className="text-lg font-bold ml-2">{amount}<span className="text-md font-normal">{unit}</span></span>
                </div>
                
                <div className={`flex items-center mr-2 text-white ${hover ? 'opacity-100':'opacity-0'} transition-opacity duration-500 gap-2`}>
                    <div className="bg-purple-900 rounded-full p-1 hover:cursor-pointer" onClick={onAdd}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="bg-purple-900 rounded-full p-1 hover:cursor-pointer" onClick={onRemove}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>
                    </div>

                    <div className="bg-red-600 rounded-full p-1 ml-3 hover:cursor-pointer" onClick={onDelete}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
        </div>
    )
}