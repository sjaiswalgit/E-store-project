import styles from "./header.module.css"
import SearchIcon from '@mui/icons-material/Search';
import { Outlet, Link,NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {signOut} from "firebase/auth"
import {auth} from "../../config/firebase"
function Header(props) {
  const navigate =useNavigate();
    const logOut=async()=>{
        try{
          await signOut(auth)
          alert("Sign out successful")
        }
        catch(err){
          alert(err)
        }
      }

const searchHandler=()=>
{navigate("/products");}
  
    return (<>
        <div className={styles.header}>
            <h1 className={styles.site_name}>E-store</h1>
            <div className={styles.navbar}>
                <div className={styles.product_search}>
      
                    <SearchIcon className={styles.searchicon}/>
                    <input type="text" placeholder='Seach for products' onClick={()=>{searchHandler()}} onKeyDown={(e) => {props.searchProduct(e)}} />
                    {/* <button><SendIcon/></button> */}
                </div>

                <li ><NavLink to="/" className={({ isActive }) => (isActive ? styles.active : styles.link)} >Home</NavLink></li>
                <li ><NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : styles.link)} >About Us</NavLink></li>
                <li ><NavLink to="/contact" className={({ isActive }) => (isActive ? styles.active : styles.link)} >Contact us</NavLink></li>
                <li ><NavLink to="/products" className={({ isActive }) => (isActive ? styles.active : styles.link)} >Products</NavLink></li>
                {(!props.loginState)?
                <li ><NavLink to="auth" className={({ isActive }) => (isActive ? styles.active : styles.link)} >SignIn/SignUp</NavLink></li>:
                <>
                <li ><NavLink to="auth" className={({ isActive }) => (isActive ? styles.active :styles.link)} ><ShoppingCartIcon /></NavLink></li>
                <li className={styles.account_icon}> <AccountCircleIcon /><div className={styles.account_box}><AccountCircleIcon /><br/>You are signed in as<br/>
                {auth.currentUser.displayName}<br/> <br/><button onClick={()=>{logOut()}}>Sign out</button>
                </div></li>
                </>
                }
                
                <div className={styles.collapse_container} style={{position:'relative'}}>
                <MenuIcon   />
                <div className={styles.collapse_list} >
                <li ><Link to="/" className={styles.link} >Home</Link></li>
                <li ><Link to="/about" className={styles.link} >About Us</Link></li>
                <li ><Link to="/contact" className={styles.link} >Contact us</Link></li>
                <li ><Link to="/products" className={styles.link} >Products</Link></li>
                <li ><Link to="/auth" className={styles.link}>{(!props.loginState)?<>Sign/SignUp</>:<>Cart</>}</Link></li>
                </div>
                </div>
                {(props.loginState)?<div className={styles.account_icon_collapse}> <AccountCircleIcon /><div className={styles.account_box}><AccountCircleIcon /><br/>You are signed in as<br/>
                {auth.currentUser.displayName}<br/> <br/><button onClick={()=>{logOut()}}>Sign out</button>
                </div></div>:<></>}
            </div>


        </div>
        <Outlet/>
        </>
    )
}

export default Header