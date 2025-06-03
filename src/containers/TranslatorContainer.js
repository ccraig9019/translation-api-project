import React, {useState, useEffect} from "react";
import TextBox from "../components/TextBox";
import TranslatorSelector from "../components/TranslatorSelector"

//API URL endpoint: "https://api.funtranslations.com/translate/pirate.json?text=insert-text-here"


const TranslatorContainer = () => {
    const [text, setText] = useState("")
    const [translation, setTranslation] = useState("")
    const [translator, setTranslator] = useState("")
    
    const submitText = (submittedText) => {
        setText(submittedText);
        console.log({text})
    }

 
    const getTranslation = () => {
        if (!text || !translator) return;
        const encodedText = encodeURIComponent(text);
        fetch(`https://api.funtranslations.com/translate/${translator}.json?text=${encodedText}`)
            .then(res => res.json())
            .then(data => setTranslation(data))
            //.then(console.log(json))
            .then(console.log("API call made"))
    }

    useEffect(() => {
        getTranslation();
        //console.log(translation);       
    }, [text, translator]);


    return (
        <div>
        <header>
        <h1>Nerd translator</h1>
        </header>
        <TranslatorSelector onTranslatorSelect={(translator) => setTranslator(translator)}/>
        <TextBox onTextSubmit={(text) => submitText(text)}/>
        <h3>Translation:</h3>
        <hr />
        {translation.contents?.translated || ""}
        <hr />
        </div>
    );
}

export default TranslatorContainer;