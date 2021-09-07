import './App.css';

function Footer() {
  return (
    <div className="footer">
      &copy; {new Date().getFullYear()}, made with &#10084; by <a href="https://cussoncheung.com" target="_blank">Cusson</a>. <br />All rights reserved
    </div>
  );
}

export default Footer;
