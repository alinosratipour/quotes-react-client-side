
import { useEffect,useState } from 'react';
import './App.css';

function App() {

const [quotes, setQuots] = useState('');
const [authors , setAuthor] = useState('');



useEffect(() =>{
  getQuotes();
},[])



const getQuotes =  async() =>{
       const response =  await fetch('https://ali-nosratpour--quote-server.glitch.me/quotes/random');
       const data =  await response.json();
       setQuots(data.quote);
       setAuthor(data.author)
}


const handelClick = () =>{
  getQuotes()
}



  return (
    <div className="App">
     <h1>My quotes Client site fetching from glitch</h1>
    <div className="btn-holder">
      <button    onClick={handelClick} >Get Random Quote</button>
   </div>
    <div className="wrapper">
     <div className="container">
   <h2>{quotes}</h2>
   <p>{authors}</p>
   </div>
    </div>
    
    </div>
  );

}

export default App;
