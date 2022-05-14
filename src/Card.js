function Card(props) {
    return (
        <div className="card">
            <div className="cardHeader">
                <img src={props.img} alt={props.name} />
            </div>
            <div className="cardContent">
                <h4><b>{props.name}</b></h4>


            </div>
            <h5> vitamins: {props.vitamins.toString()}</h5>
            <div className="cardFooter"><p>{`${props.price} $`}</p></div>
            <button onClick={() => props.remove(props.id)}>remove</button>
        </div>
    )
}


export default Card





























// import './Card.css'
// export default function Card(prop) {

//     return (
//         <div className="card">
//             <div className="image-div">
//                 <img src={prop.url} alt={prop.name} />
//             </div>
//             <div className='cardContent'><p>{prop.name}</p></div>
//             <div className='cardFooter'>
//                 <h4><b>price {prop.price}</b></h4></div>
//             <button className='btn-delete' id={prop.index} onClick={(e) => prop.del(e.target.id)}>remove me please</button>
//         </div>
//     )
// }




// function Card(props) {
//     return <div className="card">{props.children}</div>
// }

// function CardHeader(props) {
//     return <div className="cardHeader">{props.children}</div>
// }
// function CardContent(props) {
//     return <div className="cardContent">{props.children}</div>
// }
// function CardFooter(props) {
//     return <div className="cardFooter">{props.children}</div>
// }

// export {Card, CardHeader, CardContent, CardFooter}