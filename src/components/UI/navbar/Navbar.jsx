import { Link} from "react-router-dom"

const Navbar = () => {
    return(
        <div className="navbar">
        <div className="navbar__links">
          <Link to="/about"> sayt haqqinda </Link>
          <Link to="/posts"> Postlar </Link>
          
        </div>
      </div>
    )
}

export default Navbar;