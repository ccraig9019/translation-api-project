import React, {useState} from "react";

const TranslatorSelector = ({onTranslatorSelect}) => {

   const [selectedTranslator, setSelectedTranslator] = useState("");
    
   const handleChange = (event) => {
    setSelectedTranslator(event.target.value);
    console.log("Selected translator: ", event.target.value);
    onTranslatorSelect(selectedTranslator);
   }

    return (
            <>
                <label for="translator">Select a translator:</label>
                <select onChange={handleChange} name="translator" id="translator">
                    <option value="">Please select a translator</option>
                    <option value="pirate" id="pirate">Pirate speak</option>
                    <option value="gungan" id="gungan">Gungan</option>
                    <option value="yoda" id="yoda">Yoda speak</option>
                </select>
            </>
        )
}

export default TranslatorSelector;