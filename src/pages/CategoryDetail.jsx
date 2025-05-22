import React, { useEffect, useState }   from "react";
import { useParams } from "react-router";
import { useCategoryItems, useCategoryTitle, categoriesActions, useShowLoader } from "../store";
import { ProductItem } from "../components/category/ProductItem";
import { ConfirmPopup, CreateItemPopup, EditItemPopup } from "../components/popups";
import { useDispatch } from "react-redux";

export  function CategoryDetail (){
    const dispatch = useDispatch()
    const { categoryId:category } = useParams()
    const { show:showLoader, hide:hideLoader } = useShowLoader()
    const title = useCategoryTitle({ category })
    const items = useCategoryItems({ category })
    const [showEdit, setShowEdit] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [selectedItem, setSelectedItem] = useState({})
    const [showCreate, setShowCreate] = useState(false)

    const onEditItem = async ({itemId})=>{
        console.log('onEditItem', items.find(i=>i.id === itemId))
        setSelectedItem(items.find(i=>i.id === itemId))
        setShowEdit(true)
    }

    const onAcceptEdit = async ({value})=>{
        if(value == selectedItem.amount){
            console.log('skip no change')
            return
        }
        console.log('changing to', value)
        showLoader()
        setShowEdit(false)
        let dif = value - selectedItem.amount
        if(dif >= 0){
            // Adding
            await dispatch(categoriesActions.addItemAmount({category:selectedItem.category, itemId:selectedItem.id, amount: dif}))
        } else {
            // Substracting
            await dispatch(categoriesActions.consumeItemAmount({category:selectedItem.category, itemId:selectedItem.id, amount: Math.abs(dif)}))
        }
        hideLoader()
        console.log('hidden')
    }

    const onDeleteItem = ({itemId})=>{
        console.log('Delete item')
        setSelectedItem(items.find(i=>i.id === itemId))
        setShowDelete(true)
    }

    const onDeleteConfirmed = async ({itemId})=>{
        console.log('deleting')
        showLoader()
        setShowDelete(false)

        await dispatch(categoriesActions.deleteItem({category, itemId}))
        hideLoader()
    }

    const onCreateItem = ()=>{
        setShowCreate(true)
    }

    const onCreateConfirmed = async ({name, amount, unit})=>{
        console.log('Creando item', {name, amount, unit})
        showLoader()
        setShowCreate(false)
        await dispatch(categoriesActions.createItem({category, item:{name, amount, unit}}))
        hideLoader()
    }

    
    // fetch the category
    useEffect(()=>{
        const _=async()=>{
            showLoader()
            await Promise.allSettled([
                categoriesActions.getItems({category}),
                categoriesActions.getAmountsByUnit({category})
            ])
            hideLoader()
        }
    }, [])

return (
    <div className="h-full flex flex-col text-left text-neutral-600">
        <span className="text-2xl ml-2">{title}</span>
        <div className="text-md w-full flex flex-row">
            <span className="ml-4">Productos:<span className="font-bold">{ items.length }</span></span>
        </div>

        <div className="min-h-[65%] mt-4 ml-2 grid grid-cols-1 grid-rows-[auto_1fr]">
            <div className="col-1 text-xl flex justify-between items-center">
                <span>Listado de productos</span>
                <button onClick={ onCreateItem }>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            <div className="row-2 flex flex-col"> 
                {
                    items.map(item=>(
                        <ProductItem 
                            key={item.id}
                            name={item.name}
                            amount={item.amount}
                            unit={item.unit}
                            onAdd={()=>{onEditItem({itemId:item.id})}}
                            onRemove={()=>{onEditItem({itemId:item.id})}}
                            onDelete={()=>{onDeleteItem({itemId:item.id})}}
                        />
                        )
                    )
                }
            </div>
        </div>
            <EditItemPopup 
                title="Editar producto"
                value={selectedItem.amount}
                name={selectedItem.name}
                show={showEdit} 
                onOk={({value})=>onAcceptEdit({value})} 
                onCancel={()=>setShowEdit(false)}/>
            <ConfirmPopup 
                show={showDelete} 
                title={`El item ${selectedItem.name} se removera permanentmente`} 
                okLabel="Aceptar"
                onOk={()=>onDeleteConfirmed({itemId: selectedItem.id})}
                onClose={()=>setShowDelete(false)}
                />
            <CreateItemPopup 
            show={showCreate} 
                title="Agregar Nuevo Item"
                okLabel="Agregar"
                onOk={(e)=>onCreateConfirmed(e)}
                onClose={()=>setShowCreate(false)}
                />
    </div>
)


}