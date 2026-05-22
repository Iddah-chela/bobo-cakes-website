const mobileToggle = document.getElementById('mobileMenuToggle');
const siteNav = document.getElementById('siteNav');

if (mobileToggle && siteNav) {
  mobileToggle.addEventListener('click', () => {
    siteNav.classList.toggle('active');
  });
}

function setupHomeHeaderBehavior() {
  if (!document.body.classList.contains('home-page')) return;

  const hero = document.querySelector('.hero');
  const headerTop = document.querySelector('.header-top');
  if (!hero || !headerTop) return;

  const updateHeaderState = () => {
    const threshold = Math.max(80, hero.offsetHeight - headerTop.offsetHeight - 24);
    document.body.classList.toggle('home-header-solid', window.scrollY > threshold);
  };

  updateHeaderState();
  window.addEventListener('scroll', updateHeaderState, { passive: true });
  window.addEventListener('resize', updateHeaderState);
}

setupHomeHeaderBehavior();

const products = {
  'chocolate-swirl': {
    name: 'Chocolate Swirl',
    description: 'Brown deliciousness in every bite.',
    price: 'Ksh 2000 full cake • Ksh 200 slice',
    image: 'assets/images/chocolate-swirl.jpg',
    category: 'Cake',
  },
  'red-velvet': {
    name: 'Red Velvet',
    description: 'Perfect for birthdays and celebrations.',
    price: 'Ksh 3000 full cake • Ksh 250 slice',
    image: 'assets/images/red-velvet.png',
    category: 'Cake',
  },
  'pink-swan': {
    name: 'Pink Swan',
    description: 'Like a whole new experience.',
    price: 'Ksh 3500 full cake • Ksh 300 slice',
    image: 'assets/images/pink-swan.jpg',
    category: 'Cake',
  },
  'blueberry-muffin': {
    name: 'Blueberry Muffin',
    description: 'Sweetness in every bite.',
    price: 'Ksh 400 each',
    image: 'assets/images/blueberry-muffin.jpg',
    category: 'Muffin',
  },
  'caramel-cupcake': {
    name: 'Caramel Cupcake',
    description: 'Comes with coffee for a tasty pairing.',
    price: 'Ksh 300 each',
    image: 'assets/images/caramel-cupcake.jpg',
    category: 'Cupcake',
  },
  'blackforest-cake': {
    name: 'Blackforest Cake',
    description: 'Like you\'re in the forest yourself.',
    price: 'Ksh 3000 full cake • Ksh 300 slice',
    image: 'assets/images/blackforest-cake.JPG',
    category: 'Cake',
  },
};

function getQueryValue(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

function populateProductPage() {
  const productKey = getQueryValue('product') || 'chocolate-swirl';
  const product = products[productKey];
  if (!product) return;

  const productName = document.getElementById('productName');
  const productDescription = document.getElementById('productDescription');
  const productPrice = document.getElementById('productPrice');
  const productImage = document.getElementById('productImage');
  const productCategory = document.getElementById('productCategory');

  if (productName) productName.textContent = product.name;
  if (productDescription) productDescription.textContent = product.description;
  if (productPrice) productPrice.textContent = product.price;
  if (productImage) {
    productImage.src = product.image;
    productImage.alt = product.name;
  }
  if (productCategory) productCategory.textContent = product.category;
  // Set CTA links for product page (phone, whatsapp, email)
  const phone = '+254112877755';
  const email = 'iddahchelangat1@gmail.com';
  const whatsappBase = 'https://wa.me/254112877755?text=';
  const orderWhatsAppBtn = document.getElementById('orderWhatsAppBtn');
  const orderPhoneBtn = document.getElementById('orderPhoneBtn');
  const orderEmailBtn = document.getElementById('orderEmailBtn');
  const message = `Hi Bobo Cakes, I would like to order: ${product.name}`;
  if (orderWhatsAppBtn) orderWhatsAppBtn.href = whatsappBase + encodeURIComponent(message);
  if (orderPhoneBtn) orderPhoneBtn.href = `tel:${phone}`;
  if (orderEmailBtn) orderEmailBtn.href = `mailto:${email}?subject=${encodeURIComponent('Order: ' + product.name)}&body=${encodeURIComponent(message)}`;
}

if (window.location.pathname.endsWith('product.html')) {
  populateProductPage();
}
