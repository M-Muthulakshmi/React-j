import { Link } from 'react-router-dom';
import logo from './icon.jpg';
function Header() {
  return (<div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="nav-link"><img src={logo} width={70} height={70} class="d-inline-block align-top" alt=""/> </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="textclr"><h3>SMART CITY</h3></div>
        <ul className="navbar-nav mr-auto lt"></ul>
    <ul class="nav justify-content-end navbar-dark bg-dark">
  <li class="nav-item">
    <Link class="nav-link" to="/login"><h4>Try to Login</h4></Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link active"  to="/weather"><h4>Weather</h4></Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link active"  to="/news"><h4>News</h4></Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link active"  to="/touristdestination"><h4>Tourist Destination</h4></Link>
  </li>
</ul>
</div>
</nav>
  </div>);
}
export default Header;