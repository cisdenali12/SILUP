const { v4: uuidv4 } = require('uuid');
const { prefillData } = require('./data')

const connect = ()=>{
    const credentials = prefillData.credentials// {[email]:{ password, id }}
   
    /**
     * data
     * {
        [id]:{
            id:uuid, 
            name:string, 
            fridge:{
                amountsByUnit:{
                    [unit]:{unit:string, value:number}
                },
                items:[
                {
                    id:uuid, 
                    name:string,
                    amount:number, 
                    unit:string,
                    transactions:[
                        {type:'add'|'substract', amount:number, resultAfter:number }
                        ]
                }
                ]
            },
            groceries:...same as above...
            produce:...same as above...
            freezer:...same as above...
        }
      }
     */
    const data = prefillData.data
    return ({
        isValidUser:({email,password})=>credentials[email]?.password === password,
        existsUser:email=>!!credentials[email],
        getCredentials:email=>credentials[email],
        registerUser:({email, password, name})=>{
            // saving credentials
            const id = uuidv4()
            credentials[email] = {password, id}
            data[id] = {id, name, 
                fridge: { amountsByUnit:[],items:[] }, 
                groceries: { amountsByUnit:[],items:[] }, 
                produce: { amountsByUnit:[],items:[] }, 
                freezer: { amountsByUnit:[],items:[] }
            }
            console.log('registered', data[id])
            console.log('credentials', credentials[email])
        },
        getUser:email => ({id:credentials[email]?.id, name: data[credentials[email]?.id].name, email}),
        getCategoryItems:({userId, category})=>data[userId][category].items,
        getCategoryAmountsByUnit:({userId, category})=>data[userId][category].amountsByUnit,
        createCategoryItem:({userId, category, item})=>{
            const {amount:value, unit} = item

            // Category amounts up to date
            if(!data[userId][category].amountsByUnit[unit]){
                // new unit for the category
                data[userId][category].amountsByUnit[unit] = {unit, value} 
            } else {
                // adding to the existng unit within the category
                data[userId][category].amountsByUnit[unit].value += value 
            }

            // Adding the item
            const result = {...item, id:uuidv4(), transactions:[], category}
            data[userId][category].items.push(result)
            return result
        },
        deleteCategoryItem:({userId, category, itemId})=>{
            console.log(data[userId][category])
            const index = data[userId][category].items.findIndex((i => i.id === itemId))
            if(index >= 0){
                // Category amounts up to date
                const item = data[userId][category].items[index]
                const {unit, amout:value} = item
                if(!data[userId][category].amountsByUnit[unit]){
                    // new unit for the category
                    data[userId][category].amountsByUnit[unit] = {unit, value} 
                } else {
                    // substracting to the existng unit within the category
                    data[userId][category].amountsByUnit[unit].value -= value 
                }
                
                data[userId][category].items.splice(index,1)
            }
        },
        createCategoryItemTransaction:({userId, category, itemId, amount, type})=>{
            const index = data[userId][category].items.findIndex((i => i.id === itemId))
            if(index >= 0){
                // Item amount up to date
                data[userId][category].items[index].amount += type === 'add' ? amount:-amount

                // Category amounts up to date
                const item = data[userId][category].items[index]
                const {unit, amount:value} = item // note how this value is read after updating the item amount
                if(!data[userId][category].amountsByUnit[unit]){
                    // new unit for the category
                    data[userId][category].amountsByUnit[unit] = {unit, value} 
                } else {
                    // adding/substracting from the unit baased on the transaction type
                    data[userId][category].amountsByUnit[unit].value += type === 'add' ? amount:-amount 
                }
                const transaction = {
                    type,
                    amount,
                    resultAfter: data[userId][category].items[index].amount
                }
                data[userId][category].items[index].transactions.push(transaction)

                return [{...data[userId][category].items[index]}, transaction]
            }
        },
    }) 
}

exports.connect = connect