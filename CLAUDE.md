# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a Jekyll-based static website for the Goodman Family Cookbook. The site is hosted at https://gfamcookbook.com and displays family recipes organized by category.

## Development Commands

### Local Development
```bash
bundle exec jekyll serve
```
Starts the local development server. Most changes hot reload automatically, except changes to `_config.yml` which require a restart.

### Spell Checking
The project uses cspell for spell checking. Configuration is in `.cspell.json` with food-specific terms and recipe-related words in the dictionary.

## Architecture

### Jekyll Collections Structure
The site uses Jekyll collections (not standard posts) to organize recipes by category. Each collection is defined in `_config.yml` and maps to a directory:

- `_about/` - About pages and cookbook information
- `_appetizers/` - Appetizer recipes
- `_soups_and_salads/` - Soup and salad recipes
- `_sides/` - Side dish recipes
- `_meats/` - Meat-based recipes
- `_poultry/` - Poultry recipes
- `_fish_and_seafood/` - Fish and seafood recipes
- `_pastas/` - Pasta recipes
- `_breads/` - Bread and baked goods
- `_mexican/` - Mexican cuisine
- `_casseroles/` - Casserole recipes
- `_desserts/` - Dessert recipes

### Layout System
The site has specialized layouts in `_layouts/`:

- `recipe.html` - Single recipe layout with ingredients/steps split
- `multi-recipe.html` - For pages with multiple recipe variations (uses `<!-- recipe split -->` separator)
- `double-recipe.html` - For recipes with two distinct parts
- `about.html` - For informational pages
- `overview.html` - Homepage layout

### Recipe File Format
Recipes are markdown files with YAML frontmatter:

```markdown
---
layout: recipe
title: Recipe Name
serving_info: Makes X servings
imageurl: path/to/image.jpg  # or use 'image' for local assets
anecdote: Optional story about the recipe
---
<!-- Ingredients -->

quantity | ingredient
quantity | ingredient

<!-- split -->
<!-- Steps -->
1. First step
2. Second step
```

The `<!-- split -->` comment divides ingredients from steps. For multi-recipe layouts, use `<!-- recipe split -->` to separate distinct recipes.

### Interactive Features
The site includes JavaScript (`assets/js/ingredients.js`) that adds interactive checkboxes to ingredient lists:
- Ingredients can be clicked to mark as gathered
- State persists in localStorage per recipe
- Each ingredient section has a reset button
- Works with both `#ingredients` and `.ingredients` class selectors

### Navigation
Navigation is handled by `_includes/nav.html` which provides:
- Previous/Next recipe navigation within collections
- Home button
- Email sharing functionality
- Navigation state is disabled at collection boundaries

## Key Technical Details

- Jekyll version: >=3.6.3
- Ruby gems managed via Bundler (see `Gemfile`)
- HTML validation available via html-proofer gem
- Built site output goes to `_site/` directory
- Assets (CSS, JS, images) are in `assets/`

## Content Guidelines

When adding or modifying recipes:
- Use pipe-separated format for ingredients: `quantity | ingredient description`
- Include `serving_info` in frontmatter when applicable
- Add new recipe-specific terms to `.cspell.json` dictionary
- Images can be local (`image:`) or external (`imageurl:`)
- Number recipe files with prefixes (01-, 02-, etc.) to control order in collections
