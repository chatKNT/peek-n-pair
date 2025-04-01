/** @format */

import { useState } from "react";
import Button from "../components/Button.jsx";
import { Link } from "react-router-dom";

const Options = () => {
  const [dropdowns, setDropdowns] = useState({
    categories: false,
    theme: false,
    difficulties: false,
    time: false,
  });

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  const toggleDropdown = (option) => {
    setDropdowns((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setSelectedTheme(""); // Reset theme when category changes
    setDropdowns((prev) => ({ ...prev, categories: false }));
  };

  const selectTheme = (theme) => {
    setSelectedTheme(theme);
    setDropdowns((prev) => ({ ...prev, theme: false }));
  };

  const selectDifficulty = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setDropdowns((prev) => ({ ...prev, difficulties: false }));
  };

  const getThemes = () => {
    switch (selectedCategory) {
      case "Animals":
        return ["Dogs"];
      case "Movies/Shows":
        return ["Rick and Morty"];
      case "Miscellaneous":
        return ["Art", "Cars", "Foods"];
      default:
        return [];
    }
  };

  const getDifficulties = () => ["Easy", "Medium", "Hard"];

  return (
    <div className="options-container">
      <div className="options-navbar">
        <Link to="/">
          <Button text={"Home"} />
        </Link>
        <Button text={"DARK MODE"} className={"lightdark-button"} />
      </div>

      <div className="page-backdrop">
        <div className="selection-container">
          {/* TODO: ADD GUARD CLAUSE SO IF ONE OF THE STATES ARE MISSING THEY CAN'T MOVE ON TO THE GANE PAGE */}
          <Link
            to="/game"
            state={{
              category: selectedCategory,
              theme: selectedTheme,
              difficulty: selectedDifficulty,
            }}
            onClick={() => {
              // console.log("User Selections:");
              // console.log("Category:", selectedCategory);
              // console.log("Theme:", selectedTheme);
              // console.log("Difficulty:", selectedDifficulty);
            }}
          >
            <Button text={"Confirm"} />
          </Link>
        </div>

        <div className="options-preview"></div>

        {/* Categories Dropdown */}
        <div className="option-group">
          <Button
            text={"Categories"}
            onClick={() => toggleDropdown("categories")}
            className={"option-button categories-button"}
          />
          {dropdowns.categories && (
            <div className="dropdown">
              <button onClick={() => selectCategory("Animals")}>Animals</button>
              <button onClick={() => selectCategory("Movies/Shows")}>
                Movies/Shows
              </button>
              <button onClick={() => selectCategory("Miscellaneous")}>
                Miscellaneous
              </button>
            </div>
          )}
          {selectedCategory && <p>Selected: {selectedCategory}</p>}
        </div>

        {/* Theme Dropdown */}
        <div className="option-group">
          <Button
            text={"Theme"}
            onClick={() => toggleDropdown("theme")}
            className={"option-button theme-button"}
          />
          {dropdowns.theme && selectedCategory && (
            <div className="dropdown">
              {getThemes().map((theme) => (
                <button key={theme} onClick={() => selectTheme(theme)}>
                  {theme}
                </button>
              ))}
            </div>
          )}
          {selectedTheme && <p>Selected: {selectedTheme}</p>}
        </div>

        {/* Difficulty Dropdown */}
        <div className="option-group">
          <Button
            text={"Difficulty"}
            onClick={() => toggleDropdown("difficulties")}
            className={"option-button difficulty-button"}
          />
          {dropdowns.difficulties && (
            <div className="dropdown">
              {getDifficulties().map((difficulty) => (
                <button
                  key={difficulty}
                  onClick={() => selectDifficulty(difficulty)}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          )}
          {selectedDifficulty && <p>Selected: {selectedDifficulty}</p>}
        </div>

        {/* <Button text={'Difficulty'} /> */}
        <Button
          text={"Track Time?"}
          className={"option-button track-time-button"}
        />
      </div>
    </div>
  );
};

export default Options;
