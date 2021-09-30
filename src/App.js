import { useState } from "react";
import "./styles.css";

const fruitDictionary = {
  "🍇": "Grapes",
  "🍉": "Watermelon",
  "🍋": "Lemon",
  "🍎": "Red Apple",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🥭": "Mango",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍏": "Green Apple",
  "🍓": "Strawberry",
  "🍐": "Pear",
  "🍈": "Melon"
  /** add some more to show how the app now expands when there's new data */
};
var fruitsweknow = Object.keys(fruitDictionary);
export default function App() {
  var [meaning, setmeaning] = useState("");

  function fruitclickhandler(fruit) {
    console.log(fruit);
    var meaning = fruitDictionary[fruit];
    setmeaning(meaning);
  }

  function fruitinputhandler(event) {
    var userinput = event.target.value;
    var meaning = fruitDictionary[userinput];

    if (meaning === undefined) {
      meaning = "We could not find " + userinput + " in our Database";
    }
    setmeaning(meaning); //react call to show output
  }

  return (
    <div className="App">
      <div>
        <h1>Know your fruit!</h1>
        <p>Enter fruit emoji or Choose any fruit below to know fruit name.</p>
        <input placeholder="Enter fruit emoji" onChange={fruitinputhandler} />
        <div
          style={{
            paddingTop: "1rem",
            fontWeight: "bold",
            fontFamily: "cursive"
          }}
        >
          {" "}
          {meaning}
          {/* actual output set by React using useState */}
        </div>
        <h3> Fruits we know</h3>
        {fruitsweknow.map(function (fruit) {
          return (
            <span
              onClick={() => fruitclickhandler(fruit)}
              style={{ fontSize: "2rem", padding: "1rem", cursor: "pointer" }}
              key={fruit}
            >
              {fruit}
            </span>
          );
        })}
        <div> </div>
      </div>
    </div>
  );
}
