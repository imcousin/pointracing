import './App.css';

function Footer() {
  return (
    <div className="footer">
      &copy; {new Date().getFullYear()} <a href="https://cussoncheung.com" target="_blank" rel="noopener noreferrer">Cusson</a>, all rights reserved. Made with &#10084;.
      <p>Updated on Oct 11, 2021</p>
    </div>
  );
}

export default Footer;
