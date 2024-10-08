//he product grid sathi ahee


document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { img: 'womens_images/womenstop1.jpg', name: 'Scoop-neck Microfibre Top', price: 'Rs. 799' },
        { img: 'womens_images/womenstop2.png', name: 'Oversized printed T-shirt', price: 'Rs. 1,299' },
        { img: 'womens_images/womenstop3.webp', name: 'Fine-knit polo shirt', price: 'Rs. 1,299.00' },
        { img: 'womens_images/womenstop4.webp', name: 'Overlock-detail ribbed top', price: 'Rs. 799.00' },
        { img: 'womens_images/womenstop5.png', name: 'Oversized T-shirt', price: 'Rs. 799.00' },
        { img: 'womens_images/womenstop6.png', name: 'Overlock-detail smocked top', price: 'Rs. 999.00' },
        { img: 'womens_images/womenstop7.png', name: 'Dusty purple chiffon top', price: 'Rs. 1,499.00' },
        { img: 'womens_images/womenstop8.png', name: 'Red ribbed T-shirt', price: 'Rs. 699.00' },
        { img: 'womens_images/womenstop9.png', name: 'Broderie anglaise blouse', price: 'Rs. 1,899.00' },
        { img: 'womens_images/womenstop10.png', name: 'Textured-weave shirt', price: 'Rs. 1,899.00' },
        { img: 'womens_images/womenstop11.png', name: 'Viscose-blend shirt', price: 'Rs. 1,899.00' },
        { img: 'womens_images/womenstop12.png', name: 'Short vest top', price: 'Rs. 699.00' }
    ];

    const productGrid = document.getElementById('productGrid');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');

        productItem.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;

        // Add event listener for click event on each product
        productItem.addEventListener('click', () => {
            viewProduct(product.img, product.name, product.price, product.description);
        });

        productGrid.appendChild(productItem);
    });
});

// Function to handle product click and redirect to the description page
function viewProduct(image, name, price, description) {
    const product = {
        image/*: image*/,
        name/*: name*/,
        price/*: price*/,
        description/*: description*/
    };
    // Store the product data in localStorage
    localStorage.setItem('selectedProduct', JSON.stringify(product));

    // Redirect to the product details page
    window.location.href = 'product.html';
}
