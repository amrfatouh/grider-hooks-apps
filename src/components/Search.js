import React, { useEffect, useState } from "react";
import axios from "axios";

function Search() {
  const [term, setTerm] = useState("");
  const [sentTerm, setSentTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSentTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, [term]);

  useEffect(() => {
    const sendQuery = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: sentTerm,
        },
      });
      setResults(data.query.search);
    };
    if (sentTerm) sendQuery();
  }, [sentTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div className="ui segment" key={result.pageid}>
        <div className="item">
          <div className="content">
            <a href={`https://en.wikipedia.org/?curid=${result.pageid}`}>
              <h3 className="header">{result.title}</h3>
            </a>
            <div className="description">
              <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="ui segment">
      <div className="ui labeled input">
        <div className="ui label">Search Term</div>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      {renderedResults}
    </div>
  );
}

export default Search;
