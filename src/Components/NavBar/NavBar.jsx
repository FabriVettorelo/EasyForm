import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchForm from '../../Components/SearchForm/SearchForm'
import { logout } from "../../redux/Actions/logout";
import style from "./NavBar.module.css"

export default function NavBar() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const userInfo = useSelector((state) => state.user)
    
    const handleLogout = (event) => {
       event.preventDefault();
       dispatch(logout());
       navigate(`/`);
    };

    const handleAbout = (event) => {
        event.preventDefault();
        navigate(`/about`);
     };

    const handleHome = (event) => {
        event.preventDefault();
        navigate(`/home`);
     };
 
    return (
    <div className={style.navbar}>
        <h3 style={{cursor:"pointer"}} onClick={(event) => handleHome(event)}>EasyForm🖊</h3>
        <SearchForm />
       <p style={{fontSize:"2vh",marginLeft:"auto",fontWeight:"bold",marginRight:".5vw"}}>{userInfo.name}</p>
       <button className={style.button} type='submit' onClick={(event) => handleLogout(event)}>X</button>  
        <button className={style.button} type='submit' onClick={(event) => handleAbout(event)}>?</button> 
    </div>
    );
 }
