import './receiptOrder.css';
const Receiptorder = ({name,price,quantity}) => {
    console.log(name,price,quantity)
    return (
        <main className='receiptOrder'>
            <p className='receiptOrderName'>{name}</p>
            {/* <p className='receiptOrderQuantity'>{quantity} x</p> */}
            <p className='receiptOrderPrice'>{quantity} x ${price}</p>
        </main>
    )
}
export default Receiptorder;