import React from "react";

export  function Footer(){
    return (
        <div className="Footer bg-red-900 font-black flex flex-row-reverse">
            <div className="flex flex-row-reverse h-full items-center bg-white rounded-l-full">
                <img src="../../udg.png" className="max-h-full mr-2"/>
                <span className="text-red-900 ml-2">UDG</span>
            </div>
        </div>
    )
}