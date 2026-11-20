\# ☕ Brew \& Bite Cafe — Website \& Interactive Menu



A simple, multi-page cafe website and interactive menu built using vanilla \*\*HTML\*\*, \*\*CSS\*\*, and \*\*JavaScript\*\*. Visitors can explore the cafe's landing page, filter menu items by category, and calculate their order total in real time.



\## ✨ Features



\* \*\*Welcoming Landing Page (`home.html`):\*\* Features a hero banner, cafe highlights, opening hours, and smooth navigation to the menu.

\* \*\*Category Filtering:\*\* Quickly switch between \*All\*, \*Coffee\*, \*Tea\*, and \*Pastries\* on the menu page.

\* \*\*Live Order Calculator:\*\* Add items to the sticky order bar to automatically update the total item count and price.

\* \*\*Responsive Design:\*\* Adapts cleanly to mobile, tablet, and desktop screens using CSS Grid and Flexbox.

\* \*\*Easy Customization:\*\* Menu items are stored in a JavaScript array for effortless updates.



\## 🛠️ Technologies Used



\* \*\*HTML5\*\* – Multi-page structure and semantic layout

\* \*\*CSS3\*\* – Custom styling, Flexbox, and responsive CSS Grid

\* \*\*JavaScript (ES6)\*\* – Dynamic DOM rendering, filtering, and cart logic



\[click to view](https://minshida-latheef.github.io/cafe-menu-website/)



\## 📂 Project Structure



```text

interactive-cafe-menu/

├── home.html       # Landing page with hero section \& cafe highlights

├── index.html      # Interactive menu page

├── style.css       # Styling for the menu page

├── script.js       # Menu data, category filtering \& cart logic

└── README.md       # Project documentation

```



\*(Tip: If hosting on GitHub Pages, rename `index.html` to `menu.html` and `home.html` to `index.html` so visitors land on the Home page first.)\*



\## 🎨 Customization



To add or edit menu items, open `script.js` and modify the `menuItems` array:



```javascript

const menuItems = \[

&#x20; { id: 1, name: "Item Name", category: "coffee", price: 150, desc: "Short description here." }

];

```



\## 📄 License



This project is open-source and available under the \[MIT License](LICENSE).



