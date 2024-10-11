import Menucontent from "../components/menuContent/menuContent";
import Sidebar from "../components/sidebar/sidebar";
import Menuitemwidget from "../components/menuItemWidget/menuItemWidget";
import Paymentwidget from "../components/paymentWidget/paymentWidget";
import Customerinfowidget from "../components/customerInfoWidget/customerInfoWidget";
import Topnav from "../components/topnav/topnav";
import Ordernotification from "../components/orderNotification/orderNotification";
const Home = () => {
    return (
        <main className="homePage">
            <Topnav/>
            <Sidebar/>
            <Menucontent/> 
            <Menuitemwidget/>
            <Paymentwidget/>
            <Customerinfowidget/>
            <Ordernotification/>
            
        </main>
    )
} 
export default Home;