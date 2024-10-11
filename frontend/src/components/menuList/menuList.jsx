import { useEffect, useRef, useState } from "react";
import { useSelector,useDispatch} from 'react-redux';
import axios from 'axios';
import './menuList.css';
import { setDisplayMenuItem, setMenuItem } from "../../features/menu";
import Menuitem from "../menuItem/menuItem";

const Menulist = ({burgersRef,pizzasRef}) => {
    const url = useSelector(state=>state.user.url);
    const dispacth = useDispatch();
    const [menuItems,setMenuItems] = useState([]); 
    const [showBurgers,setShowBurgers] = useState(false);
    const check = useRef(null);

    useEffect(()=>{
        axios.get(`${url}/menus/category`).then(res=>{
            if(res.data.error){
                console.log(res.data.error)
            }else{
                setMenuItems(res.data)
            }
        })
    },[]);

    const handleScroll = (ref) => {
        ref.current.scrollIntoView({
            behavior: "smooth", // Smooth scrolling
            block: "start", // Align to the top of the section
          });
    }

   const handleRef=(id)=>{
        if(id==='Burgers'){
            return burgersRef;
        }else if(id==='Pizzas'){
            return pizzasRef
        }
   }

   const handleViewAll = (id) =>{
        if(id==='Burgers'){
            burgersRef.current.style.height = 'fit-content';
        }else if(id==='Pizzas'){
            pizzasRef.current.style.height = 'fit-content';
        }
    }
   

   console.log(check)
   console.log('burgers',burgersRef);
    return (
        <main className="menuList">
            {/* <button onClick={()=>handleScroll(check)}> Click to scroll</button> */}
            {
                menuItems && menuItems.map((menuItem,index)=>{
                    return <section id={`${menuItem._id}`} className={`menuCategory ${showBurgers?'show':'hide'}`} key={index}>
                        <div ref={handleRef(menuItem._id)} className={`menuListCollapse ${showBurgers?'show':'hide'}` } id={`${menuItem._id}`}>
                            <h2>{menuItem._id}</h2>
                            {menuItem.items && menuItem.items.map(menu=>{
                                return <Menuitem key={menu._id} menu={menu}/>
                            })} 
                        </div>                        
                        <p className="viewAllLink" onClick={()=>handleViewAll(menuItem._id)}>View all...</p>
                    </section>
                })
            }
            {/* <section>
               <div ref={check}>
                <p>This is the ref section</p></div> 
            </section> */}
        </main>
    )
}
export default Menulist;