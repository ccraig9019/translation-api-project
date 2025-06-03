import React, {useState} from "react";

const TranslatorSelector = ({onTranslatorSelect}) => {

       
   const handleChange = (event) => {
    onTranslatorSelect(event.target.value);
    console.log("Selected translator: ", event.target.value);
   }

    return (
            <div>
                <label for="translator"><h3>Select a translator: </h3></label>
                <select className="box" onChange={handleChange} name="translator" id="translator">
                    <option value="">Please select a translator</option>
                    <option value="pirate" id="pirate">Pirate speak</option>
                    <option value="gungan" id="gungan">Gungan</option>
                    <option value="yoda" id="yoda">Yoda speak</option>
                </select>
            </div>
        )
}

export default TranslatorSelector;