
// import { Card, CardHeader, CardContent, CardFooter } from './Card'
import "./Card.css"
import "./App.css"
import Card from './Card'
import { useEffect, useState } from "react"
import SumPrice from "./SumPrice"
let items = [{
  id: 'fdsfsd', img: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80&#39',
  price: 100,
  name: 'Pineapple',
  vitamin: ["c", "b"]
}, {
  id: 'asd332',
  img: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80&#39',
  price: 200,
  name: 'Banana',
  vitamin: ["a", "b"]
}, {
  id: 'sadahg5', img: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80&#39',
  price: 35,
  name: 'Orange',
  vitamin: ["c", "a"]
}, {
  id: 'ds21sad', img: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?ixlib=rb-1.2.1&ixid=https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80&#39&auto=format&fit=crop&w=870&q=80&#39',
  price: 12,
  name: 'Kiwi',
  vitamin: ["b", "c"]
}, {
  id: 'sdfsdf8767',
  img: "https://media.istockphoto.com/photos/cantaloupe-melon-picture-id910127132?b=1&k=20&m=910127132&s=170667a&w=0&h=I_s0-q863W7RwpzgV05P3DUEgHlx9-JVka8RbJCXF8w=",
  price: 6.5,
  name: 'Melon',
  vitamin: ["c", "b"]
},]

// console.log(fruitsFiltered(2));

// const itemsCard = items.map(item => <Card key={item.id} img={item.img} name={item.name} price={item.price} />)


















function App() {
  const [fruits, setFruits] = useState(items)
  const [lblrng, setLblrng] = useState(1);
  const [sum, setSum] = useState()

  useEffect(() => {
    setSum(fruits.map(val => val.price).reduce((a, b) => a + b, 0))

  }, [fruits])

  const remove = (id) => {
    const newList = fruits.filter(val => val.id !== id)
    setFruits(newList)
  }


  const filter = (list = items) => {
    let vitA = document.getElementById("a")
    let vitB = document.getElementById("b")
    let vitC = document.getElementById("c")
    let range = document.getElementById("price-range")
    let newList = [...list]
    if (vitA.checked) {
      newList = newList.filter(val => val.vitamin.includes(vitA.value))
    }
    if (vitB.checked) {
      newList = newList.filter(val => val.vitamin.includes(vitB.value))
    }
    if (vitC.checked) {
      newList = newList.filter(val => val.vitamin.includes(vitC.value))
    }
    newList = newList.filter(val => val.price >= range.value)
    setFruits(newList)
  }




  const txtSerch = (e) => {
    const filteredList = items.filter(val => val.name.toLowerCase().includes(e.target.value.toLowerCase()))
    console.log(filteredList)
    filter(filteredList)
    // setFruits(filter)
  }

  return <div>

    <div>
      <h1> welcome to my store</h1>
    </div>
    <SumPrice sum={sum} />
    <div className="filters">
      <div>
        <label htmlFor="a">vitamin A</label>
        <input type="checkbox" value="a" id="a" onChange={(e) => filter()} />
        <label htmlFor="a">vitamin B</label>
        <input type="checkbox" value="b" id="b" onChange={(e) => filter()} />
        <label htmlFor="a">vitamin C</label>
        <input type="checkbox" value="c" id="c" onChange={(e) => filter()} />
      </div>
      <div>

        <input type="range" min="1" max="200" value={lblrng} id="price-range" onChange={(e) => { setLblrng(e.target.value); filter(); }} />
        <span>{lblrng}</span>
      </div>
      <input type="text" id="txtSerch" placeholder="type for search" onChange={txtSerch} />
    </div>
    <div className="items">
      {fruits.map((card) =>
        <Card key={card.id} id={card.id} vitamins={card.vitamin} remove={remove} img={card.img} name={card.name}
          price={card.price} />
      )}
    </div>
  </div>
}
















//     <div>
//       <h2>Store</h2>


//       <div className="items">
//         {fruits.map((item, index) => {
//           return (
//             <Card key={item.id}>
//               <CardHeader>
//                 {
//                   (item.img) ?
//                     <img src={item.img} alt="Avatar" /> : ''

//                 }
//               </CardHeader>
//               {(true) ?
//                 <CardContent>
//                   <h4><b>{item.name}</b></h4>
//                 </CardContent> : <></>
//               }
//               <CardFooter>
//                 {/* {(index % 2 == 0) ? */}
//                 {/* <p>{item.price}</p> : */}
//                 <button onClick={() => fruitsFiltered(index)}>Remove me</button>
//                 {/* } */}
//               </CardFooter>
//             </Card>

//             // <Card key={item.id} img={item.img} name={item.name} price={item.price} />
//           )
//         })}
//       </div>
//     </div>
//   )
// }

export default App


