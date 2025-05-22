import React from "react";
import { useSelector } from "react-redux";

export function Header () {
    const user = useSelector((s)=>`${s.user.name} <${s.user.email}>`)

    const Logo = ({className})=>{
        return (
            <div className={`${className} flex items-center rounded-r-full`}>
                <span className="text-red-900 bg-white font-black text-2xl mx-3">
                    SILUP
                </span>
            </div>
        )
    }

return (
    <div className="row-[header] flex items-center justify-between bg-red-900">
        <Logo className="bg-white h-full"/>
        <span className="mr-3">{user}</span>
    </div>
)
}

