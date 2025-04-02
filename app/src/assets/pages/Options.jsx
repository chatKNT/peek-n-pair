/** @format */
import { useState } from 'react';
import Button from '../components/Button.jsx';
import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle.jsx';

const Options = ({ onOptionsSubmit }) => {
  const [dropdowns, setDropdowns] = useState({
    categories: false,
    theme: false,
    difficulties: false,
    time: false,
  });

  // Consolidated form state
  const [formData, setFormData] = useState({
    category: '',
    theme: '',
    difficulty: '',
    trackTime: 'No', // Default value
  });

  const navigate = useNavigate();

  const toggleDropdown = (option) => {
    setDropdowns((prev) => ({
      ...prev,
      [option]: !prev[option],
    }));
  };

  const handleSelect = (field, value) => {
    setFormData((prev) => {
      const newData = { ...prev, [field]: value };
      // Reset dependent fields when category changes
      if (field === 'category') {
        newData.theme = '';
      }
      return newData;
    });
    setDropdowns((prev) => ({ ...prev, [field]: false }));
  };

  const getThemes = () => {
    switch (formData.category) {
      case 'Animals':
        return ['Dogs'];
      case 'Movies/Shows':
        return ['Rick and Morty'];
      case 'Miscellaneous':
        return ['Art', 'Cars', 'Foods'];
      default:
        return [];
    }
  };

  const getDifficulties = () => ['Easy', 'Medium', 'Hard'];

  const [showErrors, setShowErrors] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowErrors(true);

    // Validation check
    if (!formData.category || !formData.theme || !formData.difficulty) {
      return;
    }

    // If valid, proceed
    onOptionsSubmit(formData);
    navigate('/game', { state: formData });
  };

  return (
    <div className="options-container">
      <div className="options-navbar">
        <Link to="/">
          <Button text={'HOME'} className={'home-button'} />
        </Link>
        <ThemeToggle />
      </div>

      <form className="page-backdrop" onSubmit={handleSubmit}>
        <div className="selection-container">
          {/* Display selected options */}
          {formData.category && <p>Category: {formData.category}</p>}
          {formData.theme && <p>Theme: {formData.theme}</p>}
          {formData.difficulty && <p>Difficulty: {formData.difficulty}</p>}
          {formData.trackTime && <p>Track Time?: {formData.trackTime}</p>}

          {/* Error messages - only show when validation failed */}
          {showErrors && !formData.category && (
            <p className="error">Please select a category</p>
          )}
          {showErrors && !formData.theme && (
            <p className="error">Please select a theme</p>
          )}
          {showErrors && !formData.difficulty && (
            <p className="error">Please select a difficulty</p>
          )}

          <Button type="submit" text={'CONFIRM'} className={'confirm-button'} />
        </div>

        <div className="options-preview"></div>

        {/* Categories Dropdown */}
        <div className="option-group">
          <Button
            text={'Categories'}
            onClick={() => toggleDropdown('categories')}
            className={'option-button categories-button'}
          />
          {dropdowns.categories && (
            <div className="dropdown">
              <button
                type="button"
                onClick={() => handleSelect('category', 'Animals')}
              >
                Animals
              </button>
              <button
                type="button"
                onClick={() => handleSelect('category', 'Movies/Shows')}
              >
                Movies/Shows
              </button>
              <button
                type="button"
                onClick={() => handleSelect('category', 'Miscellaneous')}
              >
                Miscellaneous
              </button>
            </div>
          )}
        </div>

        {/* Theme Dropdown */}
        <div className="option-group">
          <Button
            text={'Theme'}
            onClick={() => toggleDropdown('theme')}
            className={'option-button theme-button'}
            disabled={!formData.category}
          />
          {dropdowns.theme && formData.category && (
            <div className="dropdown">
              {getThemes().map((theme) => (
                <button
                  type="button"
                  key={theme}
                  onClick={() => handleSelect('theme', theme)}
                >
                  {theme}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Difficulty Dropdown */}
        <div className="option-group">
          <Button
            text={'Difficulty'}
            onClick={() => toggleDropdown('difficulties')}
            className={'option-button difficulty-button'}
          />
          {dropdowns.difficulties && (
            <div className="dropdown">
              {getDifficulties().map((difficulty) => (
                <button
                  type="button"
                  key={difficulty}
                  onClick={() => handleSelect('difficulty', difficulty)}
                >
                  {difficulty}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Track Time Dropdown */}
        <div className="option-group">
          <Button
            text={'Track Time?'}
            onClick={() => toggleDropdown('time')}
            className={'option-button track-time-button'}
          />
          {dropdowns.time && (
            <div className="dropdown">
              <button
                type="button"
                onClick={() => handleSelect('trackTime', 'Yes')}
              >
                Yes
              </button>
              <button
                type="button"
                onClick={() => handleSelect('trackTime', 'No')}
              >
                No
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Options;
