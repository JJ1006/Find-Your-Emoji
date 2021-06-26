import "./styles.css";
import React, { useState } from "react";

var emojiDictionary = {
  "😀": "Happy Face.  Often conveys general pleasure and good cheer or humor.",
  "😃": "Happy Face with Big Eyes. Often conveys general happiness and good-natured amusement.",
  "😄": "Happy Face with smiling eyes. Often conveys general happiness and good-natured amusement.",
  "😁": "Beaming Face with Smiling Eyes. Teeth may be smoothed-over or crosshatched. Often expresses a radiant, gratified happiness. Tone varies, including warm, silly, amused, or proud.",
  "😆": "Grinning Squinting Face. Often conveys excitement or hearty laughter.",
  "😅": "Grinning Face with Sweat. Intended to depict nerves or discomfort but commonly used to express a close call, as if saying Whew! and wiping sweat from the forehead. ",
  "🤣": "Rolling on the Floor Laughing. Often conveys hysterical laughter more intense than 😂 Face With Tears of Joy.",
};

var emojisweknow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setmeaning] = useState("");

  function inputchangeHandler(event) {
    var userinput = event.target.value;
    var meaning = emojiDictionary[userinput];
    if (meaning === undefined) {
      meaning = "We Don't have it our Database";
    }
    setmeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <header>
      <h1>Emoji Meaning Finder</h1>
      </header>
      <input
        placeholder={
          "Put the emoji you want to find the meaning."
        }
        onChange={inputchangeHandler}
      />
      <h2 className={"myclass"}>{meaning}</h2>
      <h3> Emojis We Know </h3>
      {emojisweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "1.6rem", padding: "0.7rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}