import { Popup } from './Popup'

export function ConfirmPopup({show, okLabel = 'Ok', cancelLabel='cancel', onClose, onOk, title='' }){
    return (
        <Popup show={show}>
            <div className="bg-neutral-200 text-neutral-900 w-2/4 rounded-lg grid grid-rows-[auto_1fr_auto] grid-cols-[1fr_2fr_2fr_1fr] p-2">
                <div className="row-1 col-4 align-self-end justify-self-end">
                    <div className='w-6 h-6 bg-neutral-100 rounded-full text-neutral-400 hover:cursor-pointer' onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <span className="row-1 col-start-2 col-end-4 text-center place-self-center text-2xl font-bold mb-3 text-neutral-600">{title}</span>
                <button className="mx-1 row-3 col-2 bg-red-400 hover:bg-red-500 text-white" onClick={onClose}>{cancelLabel}</button>
                <button className="mx-1 row-3 col-3 bg-sky-400 hover:bg-sky-500 text-white" onClick={onOk}>{okLabel}</button>
            </div>
        </Popup>
    )
}