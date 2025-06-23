import './choko.css'
import { Link } from 'react-router-dom';

function Choko(){
 return(
    <>
    <section id="cake-menu">
  <div className="menu-container">
    <h2 className="menu-heading">Our Delicious Cakes</h2>

    <div className="cake-grid">
      {/* Cake Card 1 */}


      <Link to='/open'><div className="cake-card">
        <img src="./assets/images/menu1.jpg" alt="Chocolate Cake"/>
        <h3>Chocolate</h3>
        <p>Rs 500</p>
      </div></Link>

      <Link to='/open'><div className="cake-card">
        <img src="./assets/images/menu1.jpg" alt="Chocolate Cake"/>
        <h3>Chocolate</h3>
        <p>Rs 400</p>
      </div></Link>

      <Link to='/open'><div className="cake-card">
        <img src="./assets/images/menu1.jpg" alt="Chocolate Cake"/>
        <h3>Chocolate</h3>
        <p>Rs 300</p>
      </div></Link>

      <Link to='/open'><div className="cake-card">
        <img src="./assets/images/menu1.jpg" alt="Chocolate Cake"/>
        <h3>Chocolate</h3>
        <p>Rs 600</p>
      </div></Link>

      <Link to='/open'><div className="cake-card">
        <img src="./assets/images/menu1.jpg" alt="Chocolate Cake"/>
        <h3>Chocolate</h3>
        <p>Rs 800</p>
      </div></Link>
      

     
      {/* Add more cake cards as needed */}
    </div>
  </div>
</section></>
);

 
};
  export default Choko;
