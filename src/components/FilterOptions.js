import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa'; // FontAwesome icon, can be replaced with any other icon library
import './FilterOptions.css';

function FilterOptions({ onFilterChange }) {
  const [showFilters, setShowFilters] = useState(false); // State to toggle filter visibility

  const handleFilterChange = (filterType, checked) => {
    onFilterChange(filterType, checked);
  };

  return (
    <div className="filter-container">
      {/* Filter Title and Icon */}
      <div className="filter-header" onClick={() => setShowFilters(!showFilters)}>
        <FaFilter className="filter-icon" />
        <span className="filter-title">Filters</span>
      </div>

      {/* Filter Options */}
      {showFilters && (
        <div className="filter-options">
          <label>
            <input
              type="checkbox"
              onChange={(e) => handleFilterChange('spicy', e.target.checked)}
            />
            Spicy
          </label>
          <label>
            <input
              type="checkbox"
              onChange={(e) => handleFilterChange('glutenFree', e.target.checked)}
            />
            Gluten-Free
          </label>
          <label>
            <input
              type="checkbox"
              onChange={(e) => handleFilterChange('vegetarian', e.target.checked)}
            />
            Vegetarian
          </label>
          <label>
            <input
              type="checkbox"
              onChange={(e) => handleFilterChange('nonVegetarian', e.target.checked)}
            />
            Non-Vegetarian
          </label>
        </div>
      )}
    </div>
  );
}

export default FilterOptions;
