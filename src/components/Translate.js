import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikans",
    value: "af",
  },
  {
    label: "Spanish",
    value: "sr",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Telugu",
    value: "te",
  },
];

const Translate = () => {
  const [language, setlanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label className="label">Provide text to translate</label>
          <input type={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a language"
        selected={language}
        onSelectedChange={setlanguage}
        options={options}
      />
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
