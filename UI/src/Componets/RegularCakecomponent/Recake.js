// src/components/CategoryPage.jsx
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Recake.css';

function CategoryPage() {
  const { catnm } = useParams();
  const [subcategories, setSubcategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/subcategory/fetch?catnm=${catnm}`)
      .then(res => setSubcategories(res.data))
      .catch(err => console.error("Fetch error:", err));
  }, [catnm]);

  const handleClick = (subcat) => {
    navigate('/product', { state: subcat }); // 👈 pass subcategory object
  };

  return (
    <section id="cake-menu">
      <div className="menu-container">
        <h2 className="menu-heading">{catnm} Cake Subcategories</h2>

        <div className="cake-grid">
          {subcategories.length > 0 ? (
            subcategories.map((sub, index) => (
              <div
                className="cake-card"
                key={index}
                onClick={() => handleClick(sub)}
                style={{ cursor: 'pointer' }}
              >
                <img
                  src={`http://localhost:3001/uploads/subcaticons/${sub.subcaticonnm}`}
                  alt={sub.subcatnm}
                />
                <h3>{sub.subcatnm}</h3>
                <p>Click to view</p>
              </div>
            ))
          ) : (
            <p>No subcategories found.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default CategoryPage;
