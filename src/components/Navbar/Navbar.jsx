import { useState } from "react";
import "./navbar.css"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"

const Navbar = () => {

const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)
  return (
    <div className="navbar">
     <div className="container">
      <h1 style={{marginLeft: "1rem", color: "#00d8ff"}}>CoinArb</h1>
      <ul className={click ? "nav active" : "nav"}>
      <li className="nav-item">
       <a href="/">Platform</a>
      </li>
      <li className="nav-item">
       <a href="/">Developer</a>
      </li>
      <li className="nav-item">
       <a href="/">Community</a>
      </li>
      <li className="nav-item">
       <a href="/">About</a>
      </li>
      <li className="nav-item">
       <a className="btn" href="/">Get Started</a>
      </li>
      </ul>
      <div onClick={handleClick}  className="hamburger">
        {click ? (<AiOutlineClose className="icon" />) : (<AiOutlineMenu  className="icon"/>)}
       
      </div>
     </div>
    </div>
  )
}

export default Navbar