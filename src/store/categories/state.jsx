export default {
    fridge:{
        name:'fridge',
        display:'Refrigerador',
        amountsByUnit:[],/**[{ unit:string, value:number }] */
        items:[] /**[{ id = -1, name = '', category, amount, unit }]**/
    },
    freezer:{
        name:'freezer',
        display:'Congelador',
        amountsByUnit:[],/**[{ unit:string, value:number }] */
        items:[] /**{ id = -1, name = '', category, amount, unit }**/
    },
    groceries:{
        name:'groceries',
        display:'Alacena',
        amountsByUnit:[],/**[{ unit:string, value:number }] */
        items:[] /**{ id = -1, name = '', category, amount, unit }**/
    },
    produce:{
        name:'produce',
        display:'Productos Frescos',
        amountsByUnit:[],/**[{ unit:string, value:number }] */
        items:[] /**{ id = -1, name = '', category, amount, unit }**/
    },
    units:['ml', 'lt','fl oz' ,'gr', 'kg', 'oz', 'lb', 'qty']
}
