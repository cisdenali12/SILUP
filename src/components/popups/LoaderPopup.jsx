import { useSelector } from 'react-redux'
import { Popup } from './Popup'

export function LoaderPopup (){
    const show = useSelector(s=>s.ui.loading)
    return (
        <Popup show={show}>
                <img src="/spinner.svg" className='bg-none'/>
        </Popup>
    )
}

