let shop = {

    sellers: ["Ada","Grace","Hedy","Sheryl"],

    branch: ["Centro","Caballito"],

    salesList: [
        { date: new Date(2019, 2, 01), nameSeller: "Grace", components: ["Motherboard MZI", "HDD Wezter Dishital"], branch: "Centro"},
        { date: new Date(2019, 2, 01), nameSeller: "Ada", components: ["Motherboard MZI", "RAM Quinston Fury"], branch: "Centro"},
        { date: new Date(2019, 2, 05), nameSeller: "Ada", components: ["Motherboard ASUS 1500", "RAM Quinston"], branch: "Centro"},
        { date: new Date(2019, 2, 07), nameSeller: "Sheryl", components: ["Monitor GPRS 3000", "RAM Quinston"], branch: "Caballito"},
        { date: new Date(2019, 2, 08), nameSeller: "Sheryl", components: ["Monitor ASC 543", "HDD Wezter Dishital"], branch: "Centro"},
        { date: new Date(2019, 2, 11), nameSeller: "Grace", components: ["Monitor ASC 543", "RAM Quinston"], branch: "Caballito"},
        { date: new Date(2019, 2, 12), nameSeller: "Hedy", components: ["Monitor GPRS 3000", "HDD Toyiva"], branch: "Centro"},
        { date: new Date(2019, 2, 12), nameSeller: "Hedy", components: ["Motherboard ASUS 1500", "HDD Toyiva"], branch: "Caballito"},
        { date: new Date(2019, 2, 14), nameSeller: "Ada", components: ["Motherboard ASUS 1200", "HDD Toyiva"], branch: "Centro"},
        { date: new Date(2019, 2, 15), nameSeller: "Ada", components: ["Motherboard ASUS 1200", "RAM Quinston Fury"], branch: "Centro"},
        { date: new Date(2019, 2, 16), nameSeller: "Sheryl", components: ["Monitor GPRS 3000", "RAM Quinston Fury"], branch: "Centro"},
        { date: new Date(2019, 2, 21), nameSeller: "Grace", components: ["Motherboard MZI", "RAM Quinston"], branch: "Centro"},
        { date: new Date(2019, 2, 22), nameSeller: "Grace", components: ["Monitor ASC 543", "HDD Wezter Dishital"], branch: "Centro"},
        { date: new Date(2019, 2, 24), nameSeller: "Sheryl", components: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], branch: "Caballito"},
        { date: new Date(2019, 2, 27), nameSeller: "Hedy", components: ["Motherboard ASUS 1200", "HDD Toyiva"], branch: "Caballito"},
        { date: new Date(2019, 1, 04), nameSeller: "Grace", components: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], branch: "Centro" },
        { date: new Date(2019, 0, 01), nameSeller: "Ada", components: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], branch: "Centro"},
        { date: new Date(2019, 0, 02), nameSeller: "Grace", components: ["Monitor ASC 543", "Motherboard MZI"], branch: "Centro"},
        { date: new Date(2019, 0, 10), nameSeller: "Ada", components: ["Monitor ASC 543", "Motherboard ASUS 1200"], branch: "Centro"},
        { date: new Date(2019, 0, 12), nameSeller: "Grace", components: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], branch: "Centro"}
  

    ],

    priceList:[
        {component: "Monitor GPRS 3000", price: 200 },
        {component: "Motherboard ASUS 1500", price: 120 },
        {component: "Monitor ASC 543", price: 250 },
        {component: "Motherboard ASUS 1200", price: 100},
        {component: "Motherboard MZI", price: 30},
        {component: "HDD Toyiva", price: 90},
        {component: "HDD Wezter Dishital", price: 75},
        {component: "RAM Quinston", price: 110},
        {component: "RAM Quinston Fury", price: 230},

    ]
};

let price = []
let branch = []
let sellers = []




const CreateTable = () => {
    let container = document.getElementById('record')
    container.innerHTML = ""

    shop.salesList.map(function(e){
        //console.log(e)
    let trSale = document.createElement('tr')
        //console.log(trSale)
    let tdDate = document.createElement('td')
        
    tdDate.innerText =`${e.date.getMonth() + 1}/${e.date.getFullYear()}`
    trSale.appendChild(tdDate)
    //console.log(tdDate)
    let tdSeller = document.createElement('td')
    tdSeller.innerText = e.nameSeller
    trSale.appendChild(tdSeller)
    //console.log(tdSeller)
    let tdComponents = document.createElement('td')
    tdComponents.innerText = e.components
    trSale.appendChild(tdComponents)
    //console.log(tdComponents)
    let tdBranch = document.createElement('td')
    tdBranch.innerText = e.branch
    trSale.appendChild(tdBranch)
    //console.log(tdBranch)
    container.appendChild(trSale)
    
    })
    
    
}
   
//const allComponents = shop.priceList.map(({component}) => component)
const showOptions = () => {
    let divShow = document.getElementById('newSale')
    //console.log(divShow)
    
    divShow.style.display= 'block'
    
    
    
}
//function sale (date, nameSeller, components, branch){
  
    //this.date = date
    //this.nameSeller = nameSeller
   // this.components = components
   // this.branch = branch
    
//}

const newSale = () => {
    let sentItem = document.getElementById('sent')
    //console.log(sentItem)
    let sale =  { date:"", nameSeller: "", components: [], branch: ""}
    let components = document.getElementById('components')
    sale.components = components.value
    console.log(sale.components) 
    let today = new Date
    sale.date = new Date (today.getFullYear(),today.getMonth(),today.getDate())
    //console.log(sale.date)
    let nameSeller = document.getElementById('sellers')
    sale.nameSeller = nameSeller.value
    //console.log(sale.nameSeller)
    let branch = document.getElementById('branch')
    sale.branch = branch.value
    shop.salesList.push(sale)
    
    console.log(sale)


    }
    
    const quantitySalesComponents = (component) =>{
        let counter = 0
        shop.salesList.map(function(e){
        e.components.map(function(i){
         if(component === i){
            counter = counter + 1
         }
      })
     })
        return counter
        
      }
      console.log(quantitySalesComponents("Monitor ASC 543"))

      
    