import axios from "axios";
import React, { useEffect, useState } from "react";
import Dropdown from "./Dropdown";

const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Dutch",
    value: "nl",
  },
];

function Translation() {
  const [selectedLanguage, setSelectedLanguage] = useState(options[0]);
  const [term, setTerm] = useState("");
  const [sentTerm, setSentTerm] = useState("");
  const [translated, setTranslated] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSentTerm(term);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [term]);

  useEffect(() => {
    const sendRequest = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: sentTerm,
            target: selectedLanguage.value,
            format: "text",
            source: "en",
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    sendRequest();
  }, [selectedLanguage, sentTerm]);

  return (
    <div>
      <div className="ui segment">
        <Dropdown
          options={options}
          label="Select a Language:"
          selected={selectedLanguage}
          setSelected={setSelectedLanguage}
        />
      </div>
      <div className="ui segment">
        <div className="ui labeled input">
          <div className="ui label">Word to be Translated:</div>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="ui segment">
        <h3 className="ui header">{translated}</h3>
      </div>
    </div>
  );
}

export default Translation;
