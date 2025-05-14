import "./Popup.css"

/**
 * 
 * @param show  boolean TRUE: Shows the popup, FALSE: hides the popup
 * @children NONE (the children are provided by the parent template)
 * @returns 
 */
export function Popup({ show = true, children }){

    return (
        <div className={`popup-bg ${show ? 'popup-show':'popup-hide'}`}>
            {children}
        </div>
    )
}


