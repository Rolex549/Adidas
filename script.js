// Featured Products Data
const products = [
    {
        id: 1,
        title: "Ultraboost 22",
        price: "$180",
        image: "a0.jpg",
        category: "Running"
    },
    {
        id: 2,
        title: "NMD R1",
        price: "$130",
        image: "a1.jpg",
        category: "Casual"
    },
    {
        id: 3,
        title: "Forum Low",
        price: "$110",
        image: "a2.jpg",
        category: "Lifestyle"
    },
    {
        id: 4,
        title: "Superstar",
        price: "$90",
        image: "a3.jpg",
        category: "Originals"
    },
    {
        id: 5,
        title: "Ozweego",
        price: "$120",
        image: "a4.jpg",
        category: "Lifestyle"
    },
    {
        id: 6,
        title: "Stan Smith",
        price: "$85",
        image: "a5.jpg",
        category: "Originals"
    },
    {
        id: 7,
        title: "Rocksstar",
        price: "$100",
        image: "a6.jpg",
        category: "Casuals"
    },
    {
        id: 8,
        title: "Maxico",
        price: "$100",
        image: "a7.jpg",
        category: "Dailyuse"
    }
];

// Load products when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
});

// Function to load products
function loadProducts() {
    const productsContainer = document.querySelector('.products-container');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-img">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-category">${product.category}</p>
            <p class="product-price">${product.price}</p>
            <button class="btn add-to-cart" data-id="${product.id}">Add to Cart</button>
        `;
        productsContainer.appendChild(productCard);
    });
    
    // Add event listeners to cart buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });
}

// Add to cart function
function addToCart(e) {
    const productId = e.target.getAttribute('data-id');
    const product = products.find(p => p.id == productId);
}

// Mobile menu toggle (would be implemented in a real project)
function toggleMobileMenu() {
    // Implementation for mobile menu
}