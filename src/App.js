import React, { useEffect } from "react";
import Accordion from "./components/Accordion";
import Colors from "./components/Colors";
import Header from "./components/Header";
import Route from "./components/Route";
import Search from "./components/Search";
import Translation from "./components/Translation";

const items = [
  {
    title: "What is a dog?",
    content:
      "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
  },
  {
    title: "What kinds of dogs are there?",
    content:
      "There are many breeds of dogs. Each breed varies in size and temperament. Owners often select a breed of dog that they find to be compatible with their own lifestyle and desires from a companion.",
  },
  {
    title: "How do you acquire a dog?",
    content:
      "Three common ways for a prospective owner to acquire a dog is from pet shops, private owners, or shelters. A pet shop may be the most convenient way to buy a dog. Buying a dog from a private owner allows you to assess the pedigree and upbringing of your dog before choosing to take it home. Lastly, finding your dog from a shelter, helps give a good home to a dog who may not find one so readily.",
  },
];

function App() {
  useEffect(() => {
    window.location.hash = "#/";
  }, []);

  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/colors">
        <Colors />
      </Route>
      <Route path="/translation">
        <Translation />
      </Route>
    </div>
  );
}

export default App;
