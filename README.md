# Bobo Cakes Website Prototype

This static website prototype is built for Bobo Cakes, a cake business in Eldoret.

## Folder Structure

- `index.html` - Home page
- `menu.html` - Cake menu and product listing
- `product.html` - Product detail page (uses query string)
- `custom-order.html` - Custom order form page
- `gallery.html` - Cake gallery
- `about.html` - About page
- `contact.html` - Contact page
- `faq.html` - FAQ and policy page
- `admin.html` - Admin placeholder page
- `assets/css/styles.css` - Main styling
- `assets/js/main.js` - Mobile nav and product page logic
- `assets/images/` - Place logo and cake images here

## Logo and Photo Instructions

Place your logo as:

- `assets/images/logo.png`

Place cake photos with these names:

- `assets/images/chocolate-swirl.jpg`
- `assets/images/red-velvet.jpg`
- `assets/images/pink-swan.jpg`
- `assets/images/blueberry-muffin.jpg`
- `assets/images/caramel-cupcake.jpg`
- `assets/images/blackforest-cake.jpg`

If you want extra gallery photos, add them in `assets/images/` and update `gallery.html`.

## How to use

Open `index.html` in your browser to view the site prototype.

## Notes

- The product detail page loads content based on the query parameter `product`. Example:
  - `product.html?product=red-velvet`
- This is a static HTML/CSS/JS prototype with no backend.
- Analytics can be added later by inserting a tracking script into the `<head>` of each page.
- The site currently uses placeholder text for About, testimonials, social links, and business/legal details.
