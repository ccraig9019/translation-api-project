import React, {useState, useEffect} from "react";
import TextBox from "../components/TextBox";

const TranslatorContainer = () => {
    const [translation, setTranslation] = useState(" ")
    
    //useEffect(() => {
    //    const fetchData = () => {
    //    const result = fetch("https://api.funtranslations.com/translate/pirate.json?text=${untranslatedText}")
    //    result.json().then(json => {
     //       console.log(json);
     //       setTranslation(json.contents.translated);
    //    })
     //       
      //  }
    //    fetchData();
    //}, []);

    return (
        <div>
        <header>
        <h1>Pirate translator</h1>
        </header>
        <TextBox />
        <h3>Translation:</h3>
        <hr />
        {translation}
        <hr />
        </div>
    );
}

export default TranslatorContainer;