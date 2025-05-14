import React from "react";
import './CategoryCont.css';

export function CategoryCont (){
    
    return  (  
<div className="h-full grid grid-rows-[30fr 70fr] grid-cols-1  bg-red-200">
    <div className='row-1 summary'>
    
        <div className='logo'>logo</div>
        <div className='titulo'>Titulo</div>
        <div className='summaryTop'>Summary Top</div>
        <div className="user">user</div>

    </div>

    <div className="row-2 categories"> 

        <div className="category1">1</div>
        <div className="category2">2</div>
        <div className="category3">3</div>
        <div className="category4">4</div>

    </div>

</div>
    );
        
    }

