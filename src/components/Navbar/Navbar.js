import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
     <div className="container">
      <h1 style={{marginLeft: "1rem", color: "#00d8ff"}}>CoinArb</h1>
      <ul className="nav">
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
     </div>
    </div>
  )
}

export default Navbar