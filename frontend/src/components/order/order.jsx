import { useDispatch } from 'react-redux';
import './order.css'
import { setDisplayReceipt, setReceipt } from '../../features/order';
const Order = ({apartmentNumber,buildingNumber,streetName,fullName,email,cancelled,id,menus,createdAt}) => {
    // const dateTime = createdAt.split('T')
    // const date = dateTime[0];
    // const time = dateTime[1].slice(0,6);
    const dispatch = useDispatch();
    return (
        <main className="order" onClick={()=>{
            dispatch(setReceipt({apartmentNumber,buildingNumber,streetName,fullName,email,cancelled,id,menus,createdAt}));
            dispatch(setDisplayReceipt());
        }}>
            <h3>{id}</h3>
            <h3>23 September</h3>
            <h3>12:24</h3> 
            <div className="orderStatus">
                {/* <div className='statusContainer'>
                    <div className='statusLevel' id="preparing">
                        <div className="statusCircle"></div>
                        <p>Preparing</p>
                    </div> 
                    <div className="line"></div>
                    <div className='statusLevel' id="pickedUp">
                        <div className="statusCircle"></div>
                        <p>Picked Up</p>
                    </div> 
                    <div className='statusLevel' id="delivered">
                        <div className="statusCircle"></div>
                        <p>Delivered</p>
                    </div> 
                </div> */}
            </div>
        </main>
    )
};
export default Order;