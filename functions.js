import fs from 'fs-extra';
import promptsync from 'prompt-sync';
const prompt = promptsync();


function rndIDGenerator(){
    var num = Math.floor(Math.random() * (10000 - 1) ) + 1;
    var ID = "ID".concat(num)
    return ID
}

export function addinvoice(){
    const invoiceID = prompt("Invoice ID: ")
    const itemcode = prompt("Item Code: ")
    const itemname = prompt("Item Name: ")
    const amount = prompt("Amount: ")
    const cost = prompt("Price per unit: ")

    
}
export function addinventory(){
    var data = JSON.parse(fs.readFileSync('inventory.json'))
    
    const stockname = prompt("Name: ")
    const amount = prompt("Amount: ")
    const cost = prompt("Cost per unit: ")

    const invoice = {
        "name": stockname,
        "amount": parseInt(amount),
        "cost": parseInt(cost)
    }

    var dataArr = Array.from(data)
    dataArr.push(stock)

    fs.writeFileSync('stock.json',JSON.stringify(dataArr), (error) => {
        if(error){
            console.log(error)
        }
        throw error
    })
    console.log("Add Stock Complete")
}

export function addstock(){
    var data = JSON.parse(fs.readFileSync('stock.json'))
    for(let i = 0; i < data.length; i++){
        let index = i+1
        console.log(`${index}: ${data[i].name}`)
    }
    const index = parseInt(prompt("Enter to number of the stock to increase amount of: ")) - 1
    const addition = parseInt(prompt("Enter amount to add: "))

    data[index].amount = data[index].amount + addition

    fs.writeFileSync('stock.json',JSON.stringify(data), (error) => {
        if(error){
            console.log(error)
        }
        throw error
    })
    console.log("Stock Add Complete")
}

export function sellstock(){
    const stock = JSON.parse(fs.readFileSync('stock.json'))
    const stakeholder = JSON.parse(fs.readFileSync('stakeholder.json'))

    var stockArr = Array.from(stock)
    var stakeholderArr = Array.from(stakeholder)

    for(let i = 0; i < stockArr.length; i++){
        let index = i+1
        console.log(`${index}: ${stockArr[i].name}`)
    }
    
    const index = parseInt(prompt("Enter to number of the stock to sell: ")) - 1
    console.log(`Amount: ${stockArr[index].amount}`)
    const substract = parseInt(prompt("Enter amount to sell: "))
    stockArr[index].amount = stockArr[index].amount - substract

    console.log('-'.repeat(50))
    console.log("Details of the Buyer")
    console.log('-'.repeat(50))

    var name = prompt("Name: ")
    const buyer = {
        "id": rndIDGenerator(),
        "name": name, 
        "stock": stockArr[index].name,
        "amount": substract
    }

    stakeholderArr.push(buyer)

    fs.writeFileSync('stock.json',JSON.stringify(stockArr), (error) => {
        if(error){
            console.log(error)
        }
        throw error
    })
    fs.writeFileSync('stakeholder.json',JSON.stringify(stakeholderArr), (error) => {
        if(error){
            console.log(error)
        }
        throw error
    })
    console.log("Stock Sell Complete")
}
