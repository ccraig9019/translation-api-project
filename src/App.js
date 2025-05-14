import logo from './logo.svg';
//import './App.css';
import {useState, useEffect} from "react"; 

const URL = "https://api.funtranslations.com/translate/pirate.json?text=Hello World how are you, you inexperienced sailor?";

function App() {
  
  const [translation, setTranslation] = useState(0)
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL)
      result.json().then(json => {
        console.log(json);
        setTranslation(json.contents.translated);
      })
      
  
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
       <h1>Pirate translator</h1>
      </header>
      <h2>Enter yer text, landlubber!</h2>
      <input type="text" />
      <button type="submit">Submit</button>
      <h3>Translated text: {translation}</h3>
    </div>
  );
}

export default App;
