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
}




const CreateTable = () => {
    let container = document.getElementById('record')
    container.innerHTML = ""
    shop.salesList.map(function(e){
    let trSale = document.createElement('tr')
    let tdDate = document.createElement('td')
    tdDate.innerText =`${e.date.getMonth() + 1}/${e.date.getFullYear()}`
    trSale.appendChild(tdDate)
    let tdSeller = document.createElement('td')
    tdSeller.innerText = e.nameSeller
    trSale.appendChild(tdSeller)
    let tdComponents = document.createElement('td')
    tdComponents.innerText = e.components
    trSale.appendChild(tdComponents)
    let tdBranch = document.createElement('td')
    tdBranch.innerText = e.branch
    trSale.appendChild(tdBranch)
    let tdTotalPrice = document.createElement('td')
    tdTotalPrice.innerText = machinePrice(e.components)
    trSale.appendChild(tdTotalPrice)
    container.appendChild(trSale)
    
    })

}

const showOptions = () => {
    let divShow = document.getElementById('newSale')
    divShow.style.display = 'block'
    
}

const newSale = () => {
    let sentItem = document.getElementById('sent')
    let sale =  { date:"", nameSeller: "", components: [], branch: ""}
    let components = document.getElementById('components')
    let selectedOptions = Array.from(components.selectedOptions)
    sale.components = selectedOptions.map(function(e){
        return e.value
    })
    .components = selectedOptions.map(e => {
        return e.value
    })
    let today = new Date
    sale.date = new Date (today.getFullYear(),today.getMonth(),today.getDate())
    let nameSeller = document.getElementById('sellers')
    sale.nameSeller = nameSeller.value
    let branch = document.getElementById('branch')
    sale.branch = branch.value
    shop.salesList.push(sale)
    CreateTable()

}

//1) precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar con
// esos componentes, que es la suma de los precios de cada componente incluido.
const machinePrice = sale => {
    let machinePrice = 0
    sale.forEach ( e => {
       const componentName = shop.priceList.find(({component}) => e === component)
        machinePrice = machinePrice + componentName.price
    })

    return machinePrice
}
const machine = ["Monitor ASC 543", "Motherboard MZI"]
console.log(`La venta de ${machine} tiene un costo de ARS ${machinePrice(machine)}`)

//2) cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que
// formó parte de una máquina que se vendió. La lista de ventas no se pasa por parámetro, se asume que está identificada
// por la variable ventas.
const saleQuantity = (sale) => {
    let saleCount = 0
    shop.salesList.forEach(e => {
        e.components.forEach( piece =>{
            if(piece === sale){
                saleCount++
            }
        })
    })
    return saleCount
}
const nameCom = "Monitor ASC 543"
console.log(`El compononte ${nameCom} fue vendido ${saleQuantity(nameCom)} veces`)

// 3) vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora
// que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una
// venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 
//(diciembre).

const sellerOfTheMonth = (month, year) => {
    let fileteredSales = shop.salesList.filter(sale => sale.date.getMonth() + 1 === month && sale.date.getFullYear() === year)
    return shop.sellers.map(nameSeller => ({
        nameSeller: nameSeller,
        totalAmount: fileteredSales.reduce((accum, curr) => (nameSeller === curr.nameSeller) ? accum + machinePrice(curr.components) : accum, 0)
    }))
    .reduce((accum, curr) => (curr.totalAmount > accum.totalAmount ? curr : accum), {nameSeller: "", totalAmount: 0 })
    .nameSeller
    }
    
    
console.log('La mejor vendedora fue: ' + sellerOfTheMonth(1, 2019))



// 4) ventasMes(mes, anio): Obtener las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 
//12 (diciembre).
const monthlySales = (year, month, data = shop.salesList) => {
    let eachSale = []
    data.forEach(({date, components}) =>{
        if (date.getFullYear()===year && date.getMonth() === month-1) {
            components.forEach( e => eachSale.push(e))
        }
    })
    const monthlyMoney = machinePrice(eachSale)
    return monthlyMoney

 }

 const mes = 1
 const año =2019
 //console.log(monthlySales(1,2019))
 console.log(`Las ventas para el mes ${mes} del año ${año} fueron de ARS ${monthlySales(mes, año)}`)



//5) ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha.
const saleSeller = name => {
    let salesSeller = shop.salesList.filter(({nameSeller})=> nameSeller === name)
    let arraySalesSeller =[]
    salesSeller.forEach(({components})=> components.forEach(e=>arraySalesSeller.push(e)))
    const sellerRevenue = machinePrice(arraySalesSeller)
    return sellerRevenue
}

const nameS = "Ada"
console.log(`Las ventas hechas por ${nameS} fueron de ARS ${saleSeller(nameS)}`)

//6) componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad
// de ventas es el que indica la función cantidadVentasComponente
const mostSold = () =>{
    let componentSold = []
    shop.priceList.map(({component}) => {
        let product = {component: component, total: saleQuantity(component)}
        componentSold.push(product)
    })

    let aux = Math.max(...componentSold.map(({total}) => total))
    let mostSoldComponent ;
    componentSold.map(({component,total}) =>{
     if (aux === total) mostSoldComponent = component
    }) 

    console.log(`El componente mas vendido es ${mostSoldComponent}`)
    //console.log(componentefinal)
}

mostSold()

//7) huboVentas(mes, anio): que indica si hubo ventas en un mes determinado. El mes es un número entero que va desde el 
 //1 (enero) hasta el 12 (diciembre).
 const thereWereSales = (month,year) => {
    let monthSales = monthlySales(month,year)
    if (monthSales === 0){
        return (`No hubo ventas en el mes consultado `) 
    }else {
        return (`si hubo ventas en el mes consultado `) 
    }
}

console.log(thereWereSales(5,2019))

//8) Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin límite 
 //de fecha.

 const saleBranch = sucursal => {
    let salesBranch = shop.salesList.filter(({branch})=> branch === sucursal)
    let arraySalesBranch =[]
    salesBranch.forEach(({components})=> components.forEach(e=>arraySalesBranch.push(e)))
    const branchRevenue = machinePrice(arraySalesBranch)
    return branchRevenue
}
const sucur = "Centro"
console.log(`Las ventas totales de la sucursal ${sucur} fueron de ARS ${saleBranch(sucur)} `)
//console.log(saleBranch("Centro"))

//9) Las funciones ventasSucursal y ventasVendedora tienen mucho código en común, ya que es la misma funcionalidad pero 
//trabajando con una propiedad distinta. Entonces, ¿cómo harías para que ambas funciones reutilicen código y evitemos 
//repetir?



//10)Crear la función sucursalDelMes(mes, anio), que se le pasa dos parámetros numéricos, (mes, anio) y devuelve el 
//nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El 
//importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) 
//hasta el 12 (diciembre).
const branchOfTheMonth = (month, year) => {
    let countbranch = shop.salesList.filter(sale => sale.date.getMonth() + 1 === month && sale.date.getFullYear() === year)
    return shop.branch.map(branch => ({
      branch: branch,
      greaterAmount: countbranch.reduce((accum, curr) =>(branch === curr.branch) ? accum + machinePrice(curr.components) : accum, 0)
     }))
     .reduce((accum, curr) => (curr.greaterAmount > accum.greaterAmount ? curr : accum), {branch: "", greaterAmount: 0})
     .branch
 }
 

 console.log('la mejor sucursal fue: ' + branchOfTheMonth(1, 2019))

 //11) Para tener una mejor muestra de como está resultando el local, queremos desarrollar un reporte que nos muestre las 
//ventas por sucursal y por mes. Para esto, necesitamos crear las siguientes funciones:


//11.a) renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año

const monthlyRender = year => {
    let salesPerMonth = [
        {month:"enero", sales:undefined},
        {month:"febrero", sales:undefined},
        {month:"marzo", sales:undefined},
        {month:"abril", sales:undefined},
        {month:"mayo", sales:undefined},
        {month:"junio", sales:undefined},
        {month:"julio", sales:undefined},
        {month:"agosto", sales:undefined},
        {month:"septiembre", sales:undefined},
        {month:"octubre", sales:undefined},
        {month:"noviembre", sales:undefined},
        {month:"diciembre", sales:undefined}, 
    ]
    salesPerMonth.map((eachMonth,i)=>{
        eachMonth.sales = (monthlySales(year,i+1))
    })
    return salesPerMonth
}
console.log(`Las ventas mensuales durante el año 2019 fueron: `)
console.table (monthlyRender(2019))

//11.b) renderPorSucursal(): Muestra una lista del importe total vendido por cada sucursal

const branchRender = () =>{
    let saleBranches 
    shop.branch.forEach(e => {
        saleBranches = saleBranch(e)
        console.log(`Las ventas totales en la sucursal de ${e} son: $${saleBranches}`)
    })
    return saleBranches
}
console.log(`Las ventas por sucursal fueron: `)
branchRender()


//11.c) render(): Tiene que mostrar la unión de los dos reportes anteriores, cual fue el producto más vendido y la
// vendedora que más ingresos generó

const totalRender = () => {
  
}
totalRender()


