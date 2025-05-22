const { v4: uuidv4 } = require('uuid');

const units = ['ml', 'lt','fl oz' ,'gr', 'kg', 'oz', 'lb', 'qty']
function seedCategory (category, ...items){
    const byUnit = {}/*{ [unit]:{ unit, value } }*/
    const insertUnit = (u, amount)=>{
        if(byUnit[u]){
            // Existing
            byUnit[u].value += amount
        } else {
            // Nueva
            byUnit[u] = { unit:u, value:amount }
        }
    }
    const resultItems = items.map(name=>{
        const amount = Math.floor(Math.random()*250)
        const unit = units[Math.floor(Math.random()*units.length)]
        insertUnit(unit, amount)
        return {id:uuidv4(), name, amount, unit, category, transactions:[] }
    })

    const amountsByUnit = Object.keys(byUnit).map(u=>byUnit[u])

    return { amountsByUnit, items:resultItems }
}

const prefillData = {
    credentials:{
        'a@a.com':{password:'a', id:'a'},
    },
    data:{
        ['a']:{
            id:'a', name :'a',
            fridge:seedCategory('fridge', 'Yogurt','Leche','Crema'),
            groceries:seedCategory('groceries', 'Pasta','Cereal','Papel aluminio'),
            produce:seedCategory('produce', 'Jitomate','Betabel','Piña'),
            freezer:seedCategory('freezer', 'Helado','Pizza','Waffles')
        }
    }
}

exports.prefillData = prefillData