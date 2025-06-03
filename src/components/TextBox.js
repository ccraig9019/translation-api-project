import React, {useState, useEffect} from "react";

const TextBox = ({onTextSubmit}) => {

    //Set state for text entered into box
    const [text, setText] = useState("");

    //Update text in box as it's typed
    const handleTextChange = (evt) => {
        setText(evt.target.value);
    }

    //Function to take current value in text box and submit it to the API
    const handleFormSubmit = (evt) => {
        //Prevent default browser behaviour of reloading page on submit
        evt.preventDefault();
        const textToSubmit = text.trim();
        if (!textToSubmit) {
            return
        }
        onTextSubmit(text);
        console.log(textToSubmit);
        //Reset text field to default value
        //setText("");
    }


    return (
        <>
            <h2>Enter your text and submit</h2>
            <form 
                className="text-form"
                onSubmit={handleFormSubmit}
            >
            <input
                type="text"
                className="box"
                placeholder="Enter text to be translated"
                value={text}
                onChange={handleTextChange}
            />
            <button
                type="submit" 
            >Submit</button>
            </form>
        </>
    )
}

export default TextBox;