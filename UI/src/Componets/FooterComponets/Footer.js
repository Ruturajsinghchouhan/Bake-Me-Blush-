import './Footer.css';
import { useEffect, useState } from 'react';

function Footer() {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const storedInfo = localStorage.getItem('user-info') || localStorage.getItem('name');
    try {
      if (storedInfo) {
        const parsed = JSON.parse(storedInfo);
        if (parsed?.name) {
          setUserName(parsed.name);
        } else if (typeof parsed === 'string') {
          setUserName(parsed);
        }
      }
    } catch (e) {
      console.error('Failed to parse user info', e);
    }
  }, []);

  return (
    <>
      <div className="footer-bakery">
        <div className="container">
          <div className="footer-content text-center">
            {userName && (
              <p className="welcome-msg">
                Welcome to our bakery, <strong>{userName}</strong>!
              </p>
            )}
            <p>
              © {new Date().getFullYear()} Bake Me Blush.<br />
              Welcome you to our Store 
              ❤️ <a>Love & passion </a>
            </p>
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;

