import loginImage from '../assets/loginImage.avif';
import Images from '../components/images/images';
import LoginForm from '../components/loginForm/loginFrom';
import './login.css';
const Login = () => {
    return (
        <main className="loginPage">
            {/* <img src={loginImage}/> */}
            <div className='image'>

            </div>
            <LoginForm/>

        </main>
    )
}
export default Login;