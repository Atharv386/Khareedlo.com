
var products = [
    {
        id: 1,
        title: "Men's Smart Watch Waterproof",
        price: 2499,
        sold: 5000,
        image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        title: "Shockproof Case For iPhone 17",
        price: 499,
        sold: 10000,
        image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYY63_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=eWh0Z2gvak5rRjJpVFErQzFEczNPVlZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUTQrUHZTelZKY3dTdjA3TWluNUpLY3c"
    },
    {
        id: 3,
        title: "Wireless Bluetooth Earphones",
        price: 1299,
        sold: 8000,
        image: "https://www.boat-lifestyle.com/cdn/shop/files/ACCG6DS7WDJHGWSH_0_1024x.png?v=1727669669"
    },
    {
        id: 4,
        title: "Mini Thermal Printer",
        price: 1999,
        sold: 300,
        image: "https://m.media-amazon.com/images/I/51a4-GJTpCL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 5,
        title: "Vintage Retro Sunglasses",
        price: 799,
        sold: 2000,
        image: "https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        title: "RGB LED Strip Lights",
        price: 899,
        sold: 12000,
        image: "https://m.media-amazon.com/images/I/71UFJEB-fDL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        id: 7,
        title: "Bohemian Summer Dress",
        price: 1499,
        sold: 1500,
        image: "https://image.made-in-china.com/202f0j00SBthyuwHSjgm/Women-Summer-Boho-Floral-Print-Square-Neck-Ruffle-Swing-Beach-Long-Maxi-Dress.webp"
    },
    {
        id: 8,
        title: "4K Action Camera Waterproof",
        price: 4999,
        sold: 850,
        image: "https://m.media-amazon.com/images/I/61Mv3GvgvhL.jpg"
    },
    {
        id: 9,
        title: "Cute Cat Ear Headphones",
        price: 1899,
        sold: 4200,
        image: "https://m.media-amazon.com/images/I/41ygvsbaNlL.jpg"
    },
    {
        id: 10,
        title: "Men's Leather Wallet RFID",
        price: 999,
        sold: 6000,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 11,
        title: "USB C Hub Adapter 7-in-1",
        price: 1599,
        sold: 3100,
        image: "https://rukminim2.flixcart.com/image/480/640/xif0q/docking-station/7/o/3/1-pro-hub-7-inbase-original-imah3g4fadqy27qu.jpeg?q=90"
    },
    {
        id: 12,
        title: "Stainless Steel Kitchen Knife Set",
        price: 2499,
        sold: 900,
        image: "https://rukminim2.flixcart.com/image/480/480/xif0q/kitchen-knife/5/j/k/6-er-0588-8-kitchen-sharp-original-imagmrxypz3yhzrw.jpeg?q=90"
    },
    {
        id: 13,
        title: "Yoga Mat Non-Slip",
        price: 899,
        sold: 5500,
        image: "https://sppartos.com/cdn/shop/files/31VX-aIlgWL_580x.jpg?v=1702469142"
    },
    {
        id: 14,
        title: "Gaming Mouse RGB",
        price: 1299,
        sold: 11000,
        image: "https://www.xmpow.com/cdn/shop/products/GEPC205AB_YTUS_A1_V01_180730_1ef61dd6-b576-41e5-a649-75ea355763a3_800x.jpg?v=1667562396"
    },
    {
        id: 15,
        title: "Portable Blender Juicer",
        price: 1199,
        sold: 2300,
        image: "https://www.shopper52.in/cdn/shop/products/BOTJUICER.jpg?v=1676354131"
    },
    {
        id: 16,
        title: "Soft Plush Throw Blanket",
        price: 999,
        sold: 8000,
        image: "https://m.media-amazon.com/images/I/81SeAye92fL._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 19,
        title: "Kids Touch Screen Smart Watch",
        price: 99,
        sold: 500,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80"
    }
];


var cart = [];


function showHome() {
    document.getElementById('home-view').style.display = 'block';
    document.getElementById('product-view').style.display = 'none';
    document.getElementById('cart-view').style.display = 'none';
    document.getElementById('signin-view').style.display = 'none';
    document.getElementById('account-view').style.display = 'none';
    window.scrollTo(0, 0);
}

function showCart() {
    document.getElementById('home-view').style.display = 'none';
    document.getElementById('product-view').style.display = 'none';
    document.getElementById('cart-view').style.display = 'block';
    document.getElementById('signin-view').style.display = 'none';
    document.getElementById('account-view').style.display = 'none';
    renderCart();
    window.scrollTo(0, 0);
}

function showSignin() {
    document.getElementById('home-view').style.display = 'none';
    document.getElementById('product-view').style.display = 'none';
    document.getElementById('cart-view').style.display = 'none';
    document.getElementById('signin-view').style.display = 'block';
    document.getElementById('account-view').style.display = 'none';
    window.scrollTo(0, 0);
}

function showProductPage() {
    document.getElementById('home-view').style.display = 'none';
    document.getElementById('product-view').style.display = 'block';
    document.getElementById('cart-view').style.display = 'none';
    document.getElementById('signin-view').style.display = 'none';
    document.getElementById('account-view').style.display = 'none';
    window.scrollTo(0, 0);
}



function renderFlashDeals() {
    var container = document.getElementById('flash-deals');
    var htmlContent = "";


    for (var i = 0; i < 4; i++) {
        var p = products[i];
        htmlContent = htmlContent +
            '<div class="flash-card" onclick="showProduct(' + p.id + ')">' +
            '<img src="' + p.image + '">' +
            '<div class="flash-title">' + p.title + '</div>' +
            '<div class="flash-price">₹' + p.price + '</div>' +
            '</div>';
    }

    container.innerHTML = htmlContent;
}

function renderProductGrid() {
    var grid = document.getElementById('product-list');
    var htmlContent = "";


    for (var i = 4; i < products.length; i++) {
        var p = products[i];
        if (p.id === 19) continue;
        var mrp = Math.floor(p.price * 1.5);

        htmlContent = htmlContent +
            '<div class="card" onclick="showProduct(' + p.id + ')">' +
            '<img src="' + p.image + '">' +
            '<div class="card-title">' + p.title + '</div>' +
            '<div class="card-price">₹' + p.price + '</div>' +
            '<div class="card-mrp">MRP: <del>₹' + mrp + '</del></div>' +
            '</div>';
    }

    grid.innerHTML = htmlContent;
}

function showProduct(id) {
    var product = null;

    for (var i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            product = products[i];
        }
    }

    var container = document.getElementById('pdp-container');

    container.innerHTML =
        '<div class="pdp-gallery">' +
        '<img src="' + product.image + '">' +
        '</div>' +
        '<div class="pdp-info">' +
        '<h1>' + product.title + '</h1>' +
        '<div class="pdp-price">₹' + product.price + '</div>' +
        '<div class="buy-actions">' +
        '<button class="btn-cart" onclick="addToCart(' + product.id + ')">Add to Cart</button>' +
        '<button class="btn-buy" onclick="alert(\'Buying...\')">Buy Now</button>' +
        '</div>' +
        '<div class="pdp-description">' +
        '<h3>Description</h3>' +
        '<p>This is a high-quality product that meets all your needs. It features durable materials, modern design, and excellent performance. Perfect for daily use.</p>' +
        '</div>' +
        '<div class="pdp-reviews">' +
        '<h3>Reviews</h3>' +
        '<div class="review-item"><strong>Rahul Kumar:</strong> Great product! Highly recommended. ⭐⭐⭐⭐⭐</div>' +
        '<div class="review-item"><strong>Vishal Singh:</strong> Value for money. Fast delivery. ⭐⭐⭐⭐</div>' +
        '</div>' +
        '</div>';

    showProductPage();
}



function addToCart(id) {
    var product = null;
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            product = products[i];
        }
    }

    cart.push(product);
    updateCartCount();
    alert("Item added to cart!");
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
    updateCartCount();
}

function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
    document.getElementById('cart-total-qty').innerText = cart.length;
}

function renderCart() {
    var container = document.getElementById('cart-items');
    var recGrid = document.getElementById('cart-rec-grid');


    var recHtml = "";
    for (var i = 0; i < 3; i++) {
        var p = products[i];
        recHtml = recHtml +
            '<div class="rec-card" onclick="showProduct(' + p.id + ')">' +
            '<img src="' + p.image + '">' +
            '<div>₹' + p.price + '</div>' +
            '</div>';
    }
    recGrid.innerHTML = recHtml;


    if (cart.length === 0) {
        container.innerHTML = "<p>Cart is empty</p>";
        document.getElementById('subtotal-display').innerText = "₹0.00";
        document.getElementById('total-display').innerText = "₹0.00";
        return;
    }

    var total = 0;
    var cartHtml = "";

    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        total = total + item.price;

        cartHtml = cartHtml +
            '<div class="cart-item">' +
            '<img src="' + item.image + '">' +
            '<div>' +
            '<h4>' + item.title + '</h4>' +
            '<div style="color:#fd384f; font-weight:bold; margin-top:5px">₹' + item.price + '</div>' +
            '<button class="btn-remove" onclick="removeFromCart(' + i + ')">Remove</button>' +
            '</div>' +
            '</div>';
    }

    container.innerHTML = cartHtml;

    var totalString = "₹" + total.toFixed(2);
    document.getElementById('subtotal-display').innerText = totalString;
    document.getElementById('total-display').innerText = totalString;
}

function login() {
    alert("Logged in successfully!");
    showHome();
}


renderProductGrid();
renderFlashDeals();
updateCartCount();
