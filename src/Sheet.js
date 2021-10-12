import fetch from 'node-fetch';

function Sheet() {
  await fetch('https://random.dog/woof.json')
  .then(response => response.json())
  .then(data => console.log(data));

  return (
    <div className="Sheet">
        <EnhancedTable/>
        <Footer/>
    </div>
  );
}

export default Sheet;
