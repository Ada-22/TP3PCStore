const local = {
    sellers: ["Ada", "Grace", "Hedy", "Sheryl"],

    sales: [
        {date: new Date(2019, 1, 4), sellerName: "Grace", components: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], branch: "Centro"},
        {date: new Date(2019, 0, 1), sellerName: "Ada", components: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], branch: "Centro"},
        {date: new Date(2019, 0, 2), sellerName: "Grace", components: ["Monitor ASC 543", "Motherboard MZI"], branch: "Centro"},
        {date: new Date(2019, 0, 10), sellerName: "Ada", components: ["Monitor ASC 543", "Motherboard ASUS 1200"], branch: "Centro"},
        {date: new Date(2019, 0, 12), sellerName: "Grace", components:  ["Monitor GPRS 3000", "Motherboard ASUS 1200"], branch: "Centro"} 
    ],

    prices: [
        {component: "Monitor GPRS 3000", price: 200},
        {component: "Motherboard ASUS 1500", price: 120 },
        {component: "Monitor ASC 543", price: 250 },
        {component: "Motherboard ASUS 1200", price: 100 },
        {component: "Motherboard MZI", price: 30 },
        {component: "HDD Toyiva", price: 90 },
        {component: "HDD Wezter Dishital", price: 75 },
        {component: "RAM Quinston", price: 110 },
        {component: "RAM Quinston Fury", price: 230 },
    ],

    branch: ["Centro", "Caballito"]
}
//1) precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar con
// esos componentes, que es la suma de los precios de cada componente incluido.
 const machinePrice = sale => {
     let machinePrice = 0
     sale.forEach ( e => {
        const componentName = local.prices.find(({component}) => e === component)
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
    local.sales.forEach(e => {
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




// 4) ventasMes(mes, anio): Obtener las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 
//12 (diciembre).
const monthlySales = (year, month, data = local.sales) => {
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
 const anno =2019
 //console.log(monthlySales(1,2019))
 console.log(`Las ventas para el mes ${mes} del año ${anno} fueron de ARS ${monthlySales(mes, anno)}`)

 //5) ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha.
const saleSeller = name => {
    let salesSeller = local.sales.filter(({sellerName})=> sellerName === name)
    let arraySalesSeller =[]
    salesSeller.forEach(({components})=> components.forEach(e=>arraySalesSeller.unshift(e)))
    const sellerRevenue = machinePrice(arraySalesSeller)
    return sellerRevenue
}

const nameS = "Ada"
console.log(`Las ventas hechas por ${nameS} fueron de ARS ${saleSeller(nameS)}`)
//console.log(saleSeller("Ada"))

//6) componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad
// de ventas es el que indica la función cantidadVentasComponente
const mostSold = () =>{
    let componentSold = []
    local.prices.map(({component}) => {
        let algo = {componente: component, total: saleQuantity(component)}
        componentSold.push(algo)
    })

    let aux = Math.max(...componentSold.map(({total}) => total))
    let componentefinal ;
    componentSold.map(({componente,total}) =>{
     if (aux === total) componentefinal = componente
    }) 

    console.log(`El componente mas vendido es ${componentefinal}`)
    //console.log(componentefinal)
}
mostSold()

 //7) huboVentas(mes, anio): que indica si hubo ventas en un mes determinado. El mes es un número entero que va desde el 
 //1 (enero) hasta el 12 (diciembre).
 const thereWereSales = (month,year) => {
     let monthSales = monthlySales(month,year)
     if (monthSales === 0){
         return false
     }else {
         return true
     }
 }

 console.log(thereWereSales(5,2019))

 //8) Crear la función ventasSucursal(sucursal), que obtiene las ventas totales realizadas por una sucursal sin límite 
 //de fecha.

 const saleBranch = sucursal => {
     let salesBranch = local.sales.filter(({branch})=> branch === sucursal)
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
    local.branch.forEach(e => {
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
    console.log(`Las ventas mensuales son las siguientes:`)
    console.table (monthlyRender(2019))
    let componentefinal
    mostSold()
    console.log(`Las ventas por sucursal fueron: `)
    branchRender()
}
totalRender()

//vendedora del mes
//  const sellerOfMonth = (month, year) =>{
//      let sellerName = []
//      local.sales.filter(e => {
//          let monthSale = e.date.getMonth()
//          let yearSale = e.date.getFullYear()
//          if (year === yearSale && month === monthSale){
//              sellerName.push(e.sellerName)
//          }
//      })
//      sellerName.reduce((e,i) => (e === i))
//      return sellerName
//  }
// console.log(sellerOfMonth(0,2019))

// const sellerOfMonth = (month,year) =>{
//      let totalSold = 0
//      let maxTotalSold = 0
//      let maxSeller = " "
//      local.sellers.map(function(employee){
//          totalSold = 0
//          local.sales.map(function(e){
//              if(e.date.getMonth() === month-1 && e.date.getFullYear() === year && e.sellerName === employee){
//                  totalSold = totalSold + machinePrice(e) 
//              }
//          })
//      })


// const sellerOfTheMonth = (year, month) => {
//     let sellers = []
//     local.sellers.forEach(employee => {
//         let sales = local.sales.filter( e => e.sellerName === employee)
//         let totalSold = monthlySales(month, year, sales)
//         sellers.push({ name:employee, total: totalSold})
//     })
// }
