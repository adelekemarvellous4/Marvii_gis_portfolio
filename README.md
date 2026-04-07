# Adeleke Marvellous Ayomide GIS Portfolio website

This project is the split-file version of your original single-file portfolio website. The HTML, CSS, responsive CSS, and JavaScript have been separated for easier editing and maintenance.

## Folder structure

```
gis-portfolio-split/
├── index.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   └── script.js
└── assets/
```

## Files

- `index.html` → main page structure
- `css/style.css` → main styling
- `css/responsive.css` → media queries and responsive layout rules
- `js/script.js` → interactivity and dynamic behavior
- `assets/` → place your images, screenshots, certificates, icons, and project visuals here

## How to use

1. Keep all files in the same folder structure shown above.
2. Open `index.html` in your browser.
3. Put your images inside the `assets/` folder and update image paths in `index.html` if needed.

## Common issue

If the page opens but looks unstyled, it usually means one of these happened:

- the `css` folder is missing
- `style.css` or `responsive.css` is in the wrong location
- the file paths in `index.html` were changed

The correct links inside `index.html` are:

```html
<link rel="stylesheet" href="css/style.css"/>
<link rel="stylesheet" href="css/responsive.css"/>
<script src="js/script.js"></script>
```

## Image paths

Example:

```html
<img src="assets/profile.jpeg" alt="Profile photo">
```

## Notes

- External resources like Google Fonts and Font Awesome still load from CDN.
- This split version keeps your original design and logic, only separated into cleaner files.
