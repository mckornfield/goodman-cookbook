// Interactive ingredient checkbox functionality
(function() {
  'use strict';

  // Initialize on page load
  document.addEventListener('DOMContentLoaded', function() {
    // Find all ingredient containers (both #ingredients and .ingredients)
    const ingredientContainers = document.querySelectorAll('#ingredients, .ingredients');

    if (!ingredientContainers.length) return;

    const recipeId = getRecipeId();

    // Process each ingredient section
    ingredientContainers.forEach(function(container, sectionIndex) {
      const table = container.querySelector('table');
      if (!table) return;

      const rows = table.querySelectorAll('tr');

      // Add click handler to each row
      rows.forEach(function(row, rowIndex) {
        // Skip if row is empty or has no content
        if (!row.textContent.trim()) return;

        // Make row interactive
        row.style.cursor = 'pointer';
        row.classList.add('ingredient-row');

        // Create unique index combining section and row
        const uniqueIndex = sectionIndex + '_' + rowIndex;

        // Check if this ingredient was previously checked
        if (isIngredientChecked(recipeId, uniqueIndex)) {
          row.classList.add('checked');
        }

        // Toggle checked state on click
        row.addEventListener('click', function(e) {
          e.preventDefault();
          row.classList.toggle('checked');
          saveIngredientState(recipeId, uniqueIndex, row.classList.contains('checked'));
        });
      });

      // Add reset button for this section
      addResetButton(container, recipeId, rows, sectionIndex);
    });
  });

  // Get unique recipe ID from URL
  function getRecipeId() {
    return window.location.pathname;
  }

  // Check if ingredient is marked as checked in localStorage
  function isIngredientChecked(recipeId, index) {
    const key = 'ingredients_' + recipeId;
    const data = localStorage.getItem(key);
    if (!data) return false;

    try {
      const checked = JSON.parse(data);
      return checked[index] === true;
    } catch (e) {
      return false;
    }
  }

  // Save ingredient checked state to localStorage
  function saveIngredientState(recipeId, index, isChecked) {
    const key = 'ingredients_' + recipeId;
    let data = {};

    try {
      const existing = localStorage.getItem(key);
      if (existing) {
        data = JSON.parse(existing);
      }
    } catch (e) {
      data = {};
    }

    data[index] = isChecked;
    localStorage.setItem(key, JSON.stringify(data));
  }

  // Add reset button to clear all checkmarks for a section
  function addResetButton(container, recipeId, rows, sectionIndex) {
    if (!container) return;

    const resetBtn = document.createElement('button');
    resetBtn.className = 'reset-btn';
    resetBtn.textContent = 'Reset';
    resetBtn.title = 'Clear all checkmarks for this section';

    resetBtn.addEventListener('click', function() {
      // Clear visual state
      rows.forEach(function(row) {
        row.classList.remove('checked');
      });

      // Clear from localStorage
      const key = 'ingredients_' + recipeId;
      try {
        const data = JSON.parse(localStorage.getItem(key) || '{}');
        // Remove entries for this section
        Object.keys(data).forEach(function(k) {
          if (k.startsWith(sectionIndex + '_')) {
            delete data[k];
          }
        });
        if (Object.keys(data).length > 0) {
          localStorage.setItem(key, JSON.stringify(data));
        } else {
          localStorage.removeItem(key);
        }
      } catch (e) {
        // Ignore errors
      }
    });

    container.appendChild(resetBtn);
  }
})();
