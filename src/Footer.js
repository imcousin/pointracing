import './App.css';

function Footer() {
  return (
    <div className="footer">
      &copy; {new Date().getFullYear()}, with &#10084; by <a href="https://cussoncheung.com" target="_blank">Cusson</a>.
    </div>
  );
}

export default Footer;
