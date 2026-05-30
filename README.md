# Reading the ZIP Code — Two Opinions

A small website that presents **two opposing opinions** about the practice of using
ZIP (postal) codes to make predictions about people — in insurance, lending,
advertising, and beyond.

The product takes **no side**. Both opinions are given equal space and equal care:

- **In favour** — "It's just good information." Geography carries real signal and pricing by place is honest and useful.
- **Against** — "You're judging my neighbours, not me." A ZIP code is often a proxy for race and income, recreating discrimination by other means.

Each opinion lives on an interactive flip card: tap (or press Enter/Space) to read
the full argument. A short "common ground" section and a personal opinion picker
invite the viewer to reach their own conclusion.

## Run it

It's a static site — no build step. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Files

- `index.html` — content and structure
- `styles.css` — layout, flip-card and responsive styling
- `script.js` — card flipping and the opinion picker
