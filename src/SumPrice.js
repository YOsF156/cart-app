import "./SumPrice.css"
export default function SumPrice(props) {

    return (
        <div className="sum-of-all-products">sum of all shown products : <b>{props.sum}</b> $</div>
    )
}