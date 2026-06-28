/**
 * FLAMEIES - Multi-View Luxury Architecture Studio Engine with Admin Moderation Control Gates
 */

const SETTINGS = {
    whatsappNumber: "918080229051",      // Verified Active Order Channel
    instagramHandle: "flameies",         // Verified Brand Instagram Hook
    adminPassword: "flameiesadmin123"    // 🔒 Change your admin password here
};

let shoppingCartMemory = {};
let isAdminSessionAuthenticated = false; // Tracks if the administrator has successfully logged in

// 1. Core Navigation Routing Engine
window.navigateTo = function(targetViewId) {
    const views = document.querySelectorAll('.page-view');
    views.forEach(view => {
        view.classList.remove('active-view');
    });

    const targetedPanel = document.getElementById(`view-${targetViewId}`);
    if (targetedPanel) {
        targetedPanel.classList.add('active-view');
        window.scrollTo(0, 0); 
    }
};

const candleInventory = [
    {
        id: "01",
        name: "Peony Flower Jar Candle",
        description: "Handcrafted with 100% natural soy wax, this stunning peony-topped candle brings bespoke fragrance and sculptural elegance to any sanctuary.(per piece price)",
        price: 499,
        images: [
            "Peonyflowerjarcandle.png", 
            "Peonyflowerjarcandle2.png",
            "Peonyflowerjarcandle4.png",
            "Peonyflowerjarcandle5.png",  
            "Peonyflowerjarcandle6.png",
        ],
        scentProfile: {
            top: "Fresh Petals, Spring Air",
            heart: "Blooming Peony",
            base: "Multiple fragrance & color options available"
        },
        specs: { weight: " ", burnTime: "Approx. 40 Hours", wax: "100% Sustainable Soy" }
    },
    {
        id: "02",
        name: "Daisy Jar Candle",
        description: "Handcrafted with 100% natural soy wax, this charming daisy-topped candle brings bespoke fragrance and whimsical elegance to any sanctuary.",
        price: 499,
        images: [
            "daisyjar1.png", 
            "daisyjar2.png",
            "daisyjar3.png",
            "daisyjar4.png",
        ],
        scentProfile: {
            top: "light scents perceived immediately",
            heart: "balanced body of the fragrance",
            base: "deep, long-lasting foundation that lingers longest."
        },
        specs: { weight: " ", burnTime: "Approx. 40 Hours", wax: "100% Sustainable Soy" }
    },
    {
        id: "03",
        name: "Small Golden lid Jar Candle",
        description: "Handcrafted with 100% natural soy wax, these charming golden-lidded jars are available in a bespoke selection of curated fragrances to bring effortless luxury to any space.",
        price: 119,
        images: [
            "goldlidjar6.png", 
            "goldlidjar2.png",
            "goldlidjar3.png",
            "goldlidjar4.png",  
            "goldlidjar5.png",
        ],
        scentProfile: {
            top: "Sparkling Citrus",
            heart: "Multiple fragrances",
            base: "Earthy Woods"
        },
        specs: { weight: " ", burnTime: "Approx. 12 Hours", wax: "100% Sustainable Soy" }
    },
{
        id: "04",
        name: "Heart Edition Glass Jar Candle",
        description: "Handcrafted with 100% natural soy wax, this romantic heart-topped candle is available in multiple fragrances to bring a warm, whimsical touch to any sanctuary.",
        price: 499,
        images: [
            "heartglassjar1.png", 
            "heartglassjar2.png",
            "heartglassjar3.png",
            "heartglassjar4.png",     
        ],
        scentProfile: {
            top: "Sweet, Fresh",
            heart: "Romantic Rose, Creamy Vanilla",
            base: "Soft Musk, Warm Amber"
        },
        specs: { weight: " ", burnTime: "Approx. 40 Hours", wax: "100% Sustainable Soy" }
    },
{
        id: "05",
        name: "Secret Message Candle (Customisable)",
        description: "Handcrafted with 100% natural soy wax, this thoughtful candle reveals a personalized, hidden message as it burns, making it the perfect bespoke gift for someone special.",
        price: 449,
        images: [
            "secretmessage1.png", 
            "secretmessage2.png",
            "secretmessage3.png",
            "secretmessage4.png",
        ],
        scentProfile: {
            top: ": Calming Lavender, Soft Bergamot",
            heart: "Gentle Jasmine",
            base: "Warm Sandalwood, Subtle Musk"
        },
        specs: { weight: " ", burnTime: "Approx. 40 Hours", wax: "100% Sustainable Soy" }
    },
{
        id: "06",
        name: "Ladoo Candle (per piece)",
        description: "Handcrafted with 100% natural soy wax, this festive, hyper-realistic Ladoo candle brings a touch of traditional warmth and bespoke fragrance to your celebrations.",
        price: 45,
        images: [
            "ladoo2.jpeg", 
            "ladoo1.jpeg",
            "ladoo3.jpeg",
        ],
        scentProfile: {
            top: "Sweet Saffron, Cardamom",
            heart: "Roasted Nuts, Warm Milk",
            base: "Brown Sugar, Rich Vanilla"
        },
        specs: { weight: " ", burnTime: "Approx. 9 Hours", wax: "100% Sustainable Soy" }
    },
{
        id: "07",
        name: "Modak Candle (per piece)",
        description: "Handcrafted with 100% natural soy wax, this festive, hyper-realistic Modak candle brings a touch of traditional warmth and bespoke fragrance to your celebrations.",
        price: 39,
        images: [
            "modak1.jpeg", 
            "modak2.jpeg",
            "modak3.jpeg", 
        ],
        scentProfile: {
            top: "Sweet Jaggery, Coconut",
            heart: "Cardamom Spice, Saffron",
            base: "Warm Ghee, Rich Vanilla"
        },
        specs: { weight: " ", burnTime: "Approx. 9 Hours", wax: "100% Sustainable Soy" }
    },
{
        id: "08",
        name: "Heart Shape Tealight with container candle (per piece)",
        description: "Handcrafted with 100% natural soy wax, this charming heart-shaped candle is available in a bespoke selection of vibrant colors and curated fragrances, making it the perfect aromatic statement piece for any romantic occasion",
        price: 25,
        images: [
            "heart1.jpeg", 
            "heart2.jpeg",
            "heart3.jpeg",
        ],
        scentProfile: {
            top: "Sweet Berries, Fresh Petals",
            heart: "Romantic Rose, Creamy Vanilla",
            base: "Soft Musk, Warm Amber"
        },
        specs: { weight: " ", burnTime: "Approx. 6 Hours", wax: "100% Sustainable Soy" }
    },
{
        id: "09",
        name: "Ice Latte Candle (per piece)",
        description: "Handcrafted with 100% natural soy wax, this playful and hyper-realistic iced latte candle brings a unique, coffee-inspired warmth and bespoke fragrance to any space.",
        price: 599,
        images: [
             "icelatte3.png", 
            "icelatte4.png",
            "icelatte1.jpeg",
            "icelatte5.png",
            "icelatte2.jpeg",

        ],
        scentProfile: {
            top: "Roasted Coffee Bean, Caramel",
            heart: "Whipped Cream, Espresso",
            base: "Vanilla Bean, Brown Sugar"
        },
        specs: { weight: " ", burnTime: "Approx. 40 Hours", wax: "100% Sustainable Soy" }
    },
{
        id: "10",
        name: "Flower Card Candle (Customisable)",
        description: "Handcrafted with 100% natural soy wax, this beautifully designed card candle features a delicate floral topper and a heartfelt message, making it the perfect bespoke gift for your loved ones.",
        price: 69,
        images: [
             "flowercard1.png", 
            "flowercard2.png",
            "flowercard3.png",
        ],
        scentProfile: {
            top: "Fresh Spring Air, Dewy Petals",
            heart: "Soft Daisy, Subtle Jasmine",
            base: "Clean Musk, Gentle Vanilla"
        },
        specs: { weight: " ", burnTime: "Approx. 5 Hours", wax: "100% Sustainable Soy" }
    },
{
        id: "11",
        name: "Small Daisy Flower Floating Candle (per piece)",
        description: "Handcrafted with 100% natural soy wax, these charming daisy-shaped candles are available in a bespoke selection of vibrant colors and curated fragrances, making them a whimsical, aromatic statement piece for any sanctuary.",
        price: 49,
        images: [
             "daisysmall1.jpeg", 
            "daisysmall2.jpeg",
            "daisysmall3.jpeg",
            "daisysmall4.jpeg",
            "daisysmall5.jpeg",
        ],
        scentProfile: {
            top: "Fresh Spring Air, Dewy Petals",
            heart: "Soft Daisy, Subtle Jasmine",
            base: "Clean Musk, Gentle Vanilla"
        },
        specs: { weight: " ", burnTime: "Approx. 5 Hours", wax: "100% Sustainable Soy" }
    },
{
        id: "12",
        name: "Small Peony Flower Floating Candle (per piece)",
        description: "Handcrafted with 100% natural soy wax, these charming peony-shaped candles are available in a bespoke selection of vibrant colors and curated fragrances, making them a dreamy, aromatic statement piece for any sanctuary.",
        price: 49,
        images: [
            "peonysmall1.jpeg", 
            "peonysmall2.jpeg",
            "peonysmall3.jpeg",
        ],
        scentProfile: {
            top: "Fresh Petals, Spring Air",
            heart: "Blooming Peony, Soft Rose",
            base: "Light Musk, Sweet Cream"
        },
        specs: { weight: " ", burnTime: "Approx. 5 Hours", wax: "100% Sustainable Soy" }
    },
{
        id: "13",
        name: "Curate Your Own Hamper- Flameies Special",
        description: "Handcrafted with 100% natural, sustainable materials, this bespoke gift hamper allows you to curate a unique selection of your favorite candles and scents, making it the perfect personalized gift for any special occasion.",
        price: 00,
        images: [
            "customisablehamper.jpeg", 
        ],
        scentProfile: {
            top: "Customizable based on selection",
            heart: "Varies by product",
            base: "Fully customizable to your preference"
        },
        specs: { weight: " ", burnTime: "Approx. 00 Hours", wax: "100% Sustainable Soy" }
    },

];

function initBoutiqueStore() {
    const gridContainer = document.getElementById("product-grid");
    if (!gridContainer) return;
    gridContainer.innerHTML = ""; 

    candleInventory.forEach((candle, pIndex) => {
        const instagramUrl = `https://www.instagram.com/flameies?igsh=MTBwdTZ4eWk0aDA2Zw==`;
        let thumbnailHTML = "";
        candle.images.forEach((imgUrl, iIndex) => {
            thumbnailHTML += `<img src="${imgUrl}" class="thumb-nail ${iIndex === 0 ? 'active-thumb' : ''}" onclick="switchProductPhoto(this, ${pIndex}, ${iIndex})" alt="Angle">`;
        });

        const dynamicCard = `
            <div class="product-card">
                <div class="product-image-wrapper" onclick="openLightbox('${candle.images[0]}')">
                    <img id="main-photo-${pIndex}" src="${candle.images[0]}" alt="${candle.name}" class="product-image" loading="lazy">
                </div>
                <div class="product-gallery-nav">${thumbnailHTML}</div>
                <div class="product-info">
                    <div class="product-header">
                        <h3>${candle.id}. ${candle.name}</h3>
                        <span class="price">₹${candle.price}</span>
                    </div>
                    <p class="product-desc">${candle.description}</p>
                    <div class="scent-pyramid">
                        <h4>Scent Notes</h4>
                        <div class="note-row"><span class="note-label">Top:</span> <span class="note-value">${candle.scentProfile.top}</span></div>
                        <div class="note-row"><span class="note-label">Heart:</span> <span class="note-value">${candle.scentProfile.heart}</span></div>
                        <div class="note-row"><span class="note-label">Base:</span> <span class="note-value">${candle.scentProfile.base}</span></div>
                    </div>
                    <div class="product-specs-table">
                        <div class="spec-cell"><strong>Weight</strong><span>${candle.specs.weight}</span></div>
                        <div class="spec-cell"><strong>Burn Time</strong><span>${candle.specs.burnTime}</span></div>
                        <div class="spec-cell"><strong>Wax Base</strong><span>${candle.specs.wax}</span></div>
                    </div>
                    <div class="action-buttons">
                        <button onclick="addItemToCart(${pIndex})" class="btn-order btn-buy">Buy Now</button>
                        <a href="${instagramUrl}" target="_blank" class="btn-order btn-ig">Instagram</a>
                    </div>
                </div>
            </div>
        `;
        gridContainer.innerHTML += dynamicCard;
    });
}

window.switchProductPhoto = function(thumbElement, productIndex, imageIndex) {
    const parentCard = thumbElement.closest('.product-card');
    const mainPhoto = document.getElementById(`main-photo-${productIndex}`);
    const imageWrapper = mainPhoto.closest('.product-image-wrapper');
    const targetUrl = candleInventory[productIndex].images[imageIndex];
    
    mainPhoto.src = targetUrl;
    imageWrapper.setAttribute('onclick', `openLightbox('${targetUrl}')`);
    parentCard.querySelectorAll('.thumb-nail').forEach(t => t.classList.remove('active-thumb'));
    thumbElement.classList.add('active-thumb');
};

window.openLightbox = function(imageUrl) {
    document.getElementById("lightbox-target-img").src = imageUrl;
    document.getElementById("lightbox-modal").classList.add("active");
};

window.closeLightbox = function() {
    document.getElementById("lightbox-modal").classList.remove("active");
};

window.addItemToCart = function(index) {
    const selectedItem = candleInventory[index];
    if (!shoppingCartMemory[selectedItem.name]) {
        shoppingCartMemory[selectedItem.name] = { price: selectedItem.price, quantity: 0 };
    }
    shoppingCartMemory[selectedItem.name].quantity += 1;
    renderCartRows();
    document.getElementById("checkout-modal").classList.add("active");
};

function renderCartRows() {
    const listContainer = document.getElementById("modal-cart-items");
    const grandTotalContainer = document.getElementById("modal-grand-total");
    if (!listContainer) return;

    listContainer.innerHTML = ""; 
    let workingTotal = 0;

    Object.keys(shoppingCartMemory).forEach(itemName => {
        const itemData = shoppingCartMemory[itemName];
        if (itemData.quantity <= 0) return;
        const computedRowCost = itemData.price * itemData.quantity;
        workingTotal += computedRowCost;

        listContainer.innerHTML += `
            <div class="cart-item-row">
                <span class="cart-item-name">${itemName}</span>
                <div class="cart-qty-controls">
                    <button class="qty-btn" onclick="updateQty('${itemName}', -1)">-</button>
                    <strong>${itemData.quantity}</strong>
                    <button class="qty-btn" onclick="updateQty('${itemName}', 1)">+</button>
                </div>
                <span class="cart-item-price">₹${computedRowCost}</span>
            </div>
        `;
    });

    listContainer.innerHTML += `
        <div style="text-align: center; margin-top: 20px; border-top: 1px solid var(--border-light); padding-top: 15px;">
            <button type="button" onclick="closeCheckout()" style="background: none; border: none; font-family: var(--font-sans); font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.15em; color: var(--text-muted); cursor: pointer; text-decoration: underline; font-weight: 600;">
                ← Add More Candles
            </button>
        </div>
    `;

    grandTotalContainer.innerText = `₹${workingTotal}`;
}

window.updateQty = function(itemName, directionalForce) {
    if (!shoppingCartMemory[itemName]) return;
    shoppingCartMemory[itemName].quantity += directionalForce;
    if (shoppingCartMemory[itemName].quantity <= 0) delete shoppingCartMemory[itemName];
    renderCartRows();
    if (Object.keys(shoppingCartMemory).length === 0) closeCheckout();
};

window.closeCheckout = function() {
    document.getElementById("checkout-modal").classList.remove("active");
};

function handleOrderCheckout(event) {
    event.preventDefault();

    const name = document.getElementById("cust-name").value.trim();
    const phone = document.getElementById("cust-phone").value.trim();
    const address = document.getElementById("cust-address").value.trim();

    let itemsPayloadListString = "";
    let itemsUrlParameterString = "";
    let aggregatedInvoiceTotal = 0;

    Object.keys(shoppingCartMemory).forEach(itemName => {
        const item = shoppingCartMemory[itemName];
        const lineCost = item.price * item.quantity;
        aggregatedInvoiceTotal += lineCost;
        
        itemsPayloadListString += `• ${item.quantity} x ${itemName} (₹${item.price} each) - ₹${lineCost}\n`;
        itemsUrlParameterString += `${item.quantity}x${itemName.replace(/[^a-zA-Z0-9]/g, '')}(${lineCost}),`;
    });

    const randomInvoiceId = "FLM-" + Math.floor(100000 + Math.random() * 900000);

    const messagePayload = `*--- NEW FLAMEIES MULTI-ORDER ---*\n\n` + 
                           `*Invoice ID:* ${randomInvoiceId}\n\n` +
                           `*Items Ordered:*\n${itemsPayloadListString}\n` +
                           `*Total Amount:* ₹${aggregatedInvoiceTotal}\n\n` +
                           `*Customer Details:*\n• Name: ${name}\n• Phone: ${phone}\n\n` +
                           `*Delivery Address:*\n${address}\n\n` +
                           `Please share payment details to confirm order.`;

    let currentAdminDatabase = JSON.parse(localStorage.getItem("flameies_admin_orders")) || [];
    currentAdminDatabase.push({
        id: randomInvoiceId,
        name: name,
        phone: phone,
        total: aggregatedInvoiceTotal,
        address: address,
        items: itemsUrlParameterString.slice(0, -1)
    });
    localStorage.setItem("flameies_admin_orders", JSON.stringify(currentAdminDatabase));

    window.open(`https://wa.me/${SETTINGS.whatsappNumber}?text=${encodeURIComponent(messagePayload)}`, '_blank');
    
    shoppingCartMemory = {};
    closeCheckout();
    document.getElementById("checkout-form").reset();
}

function evaluateUrlParametersForReceipts() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('receipt') === 'true') {
        document.body.classList.add('viewing-receipt');
        
        const id = urlParams.get('id');
        const name = urlParams.get('name');
        const phone = urlParams.get('phone');
        const total = urlParams.get('total');
        const address = urlParams.get('address');
        const itemsRaw = urlParams.get('items');

        let rowsHTML = "";
        if (itemsRaw) {
            const itemsArray = itemsRaw.split(',');
            itemsArray.forEach(itemStr => {
                const matches = itemStr.match(/(.*)x(.*)\((.*)\)/);
                if (matches) {
                    const qty = matches[1];
                    const cleanName = matches[2].replace(/([A-Z])/g, ' $1').trim();
                    const lineCost = matches[3];
                    rowsHTML += `<tr><td><strong>${cleanName}</strong><br><span style="font-size:0.75rem; color:#666;">Artisanal Organic Candle</span></td><td style="text-align:center;">${qty}</td><td style="text-align:right; font-weight:600;">₹${lineCost}.00</td></tr>`;
                }
            });
        }

        const today = new Date();
        document.getElementById("inv-date").innerText = today.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
        document.getElementById("inv-id").innerText = id;
        document.getElementById("inv-cust-name").innerText = name;
        document.getElementById("inv-cust-phone").innerText = "+91 " + phone;
        document.getElementById("inv-cust-address").innerText = address;
        document.getElementById("invoice-items-rows").innerHTML = rowsHTML;
        document.getElementById("inv-subtotal").innerText = `₹${total}.00`;
        document.getElementById("inv-grandtotal").innerText = `₹${total}.00`;
    }
}

function renderAdminDashboardLog() {
    const container = document.getElementById("admin-log-target");
    if (!container) return;

    let orders = JSON.parse(localStorage.getItem("flameies_admin_orders")) || [];
    if (orders.length === 0) {
        container.innerHTML = `<p style="text-align:center; color:var(--text-muted); font-style:italic; padding: 40px 0;">No orders registered in system yet.</p>`;
        return;
    }

    container.innerHTML = "";
    orders.slice().reverse().forEach(order => {
        container.innerHTML += `
            <div class="admin-order-card">
                <div class="admin-order-details">
                    <h4>${order.name} — Invoice: ${order.id}</h4>
                    <p><strong>Contact phone:</strong> +91 ${order.phone}</p>
                    <p><strong>Total value cost:</strong> ₹${order.total}</p>
                    <p><strong>Address:</strong> ${order.address}</p>
                </div>
                <button class="btn-admin-print" onclick="triggerAdminPrintReceipt('${order.id}')">Print Receipt</button>
            </div>
        `;
    });
}

window.triggerAdminPrintReceipt = function(orderId) {
    let orders = JSON.parse(localStorage.getItem("flameies_admin_orders")) || [];
    const order = orders.find(o => o.id === orderId);
    if (!order) return;

    document.getElementById("inv-date").innerText = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById("inv-id").innerText = order.id;
    document.getElementById("inv-cust-name").innerText = order.name;
    document.getElementById("inv-cust-phone").innerText = "+91 " + order.phone;
    document.getElementById("inv-cust-address").innerText = order.address;
    document.getElementById("inv-subtotal").innerText = `₹${order.total}.00`;
    document.getElementById("inv-grandtotal").innerText = `₹${order.total}.00`;

    let rowsHTML = "";
    const itemsArray = order.items.split(',');
    itemsArray.forEach(itemStr => {
        const matches = itemStr.match(/(.*)x(.*)\((.*)\)/);
        if (matches) {
            const qty = matches[1];
            const cleanName = matches[2].replace(/([A-Z])/g, ' $1').trim();
            const lineCost = matches[3];
            rowsHTML += `<tr><td><strong>${cleanName}</strong><br><span style="font-size:0.75rem; color:#666;">Artisanal Organic Candle</span></td><td style="text-align:center;">${qty}</td><td style="text-align:right; font-weight:600;">₹${lineCost}.00</td></tr>`;
        }
    });
    
    document.getElementById("invoice-items-rows").innerHTML = rowsHTML;
    document.getElementById("invoice-modal").classList.add("active-modal");
};

window.closeInvoiceModal = function() {
    document.getElementById("invoice-modal").classList.remove("active-modal");
};

window.triggerNativePrint = function() {
    window.print();
};

// Listen to secret command combination Ctrl + M keypress loops with Password Prompt Protection Gate
document.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key.toLowerCase() === "m") {
        event.preventDefault();
        triggerAdminLoginFlow();
    }
});

function triggerAdminLoginFlow() {
    const userProvidedKey = prompt("Flameies Security Protocol:\nPlease enter the secure master password to access the order history logs:");
    if (userProvidedKey === SETTINGS.adminPassword) {
        isAdminSessionAuthenticated = true; 
        window.navigateTo('admin');
        renderAdminDashboardLog();
        displayLiveReviews(); // Instantly refreshes the view grid to show edit options
    } else if (userProvidedKey !== null) {
        alert("Access Denied: Incorrect administrator password entered.");
    }
}

// --- PERSISTENT LIFETIME STORAGE REVIEWS MANAGER ---
const defaultReviews = [
    { id: "def-1", ownerToken: "system", name: "Priyal S.", city: "Mumbai", text: "The French Lavender & Amber candle completely transforms my study space. It burns so cleanly!" },
    { id: "def-2", ownerToken: "system", name: "Riya M.", city: "Pune", text: "I love the minimalist aesthetic. It looks so elegant on my bedside table." }
];

function getOrCreateUserToken() {
    let token = localStorage.getItem("flameies_user_token");
    if (!token) {
        token = "usr-" + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
        localStorage.setItem("flameies_user_token", token);
    }
    return token;
}

function fetchActiveReviewsList() {
    let data = localStorage.getItem("flameies_reviews");
    if (!data) {
        localStorage.setItem("flameies_reviews", JSON.stringify(defaultReviews));
        return defaultReviews;
    }
    return JSON.parse(data);
}

function displayLiveReviews() {
    const container = document.getElementById("live-reviews-container");
    if (!container) return;
    
    let currentDatabase = fetchActiveReviewsList();
    container.innerHTML = ""; 
    const activeUserToken = getOrCreateUserToken();

    currentDatabase.slice().reverse().forEach(rev => {
        let controlActionsHTML = "";
        // Show controls if it belongs to the writer OR if you are logged in as admin
        if (rev.ownerToken === activeUserToken || isAdminSessionAuthenticated === true) {
            controlActionsHTML = `
                <div style="margin-top: 15px; display: flex; gap: 15px; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em;">
                    <span onclick="editCustomerReview('${rev.id}')" style="color: #137333; cursor: pointer; font-weight: 600; text-decoration: underline;">Edit</span>
                    <span onclick="deleteCustomerReview('${rev.id}')" style="color: #c92a2a; cursor: pointer; font-weight: 600; text-decoration: underline;">Delete</span>
                </div>
            `;
        }

        container.innerHTML += `
            <div class="review-card" id="card-${rev.id}">
                <div>
                    <div class="review-stars">✦ ✦ ✦ ✦ ✦</div>
                    <p class="review-text" id="text-${rev.id}">"${rev.text}"</p>
                </div>
                <div>
                    <span class="review-author">— ${rev.name}, ${rev.city}</span>
                    ${controlActionsHTML}
                </div>
            </div>
        `;
    });
}

function handleReviewSubmission(event) {
    event.preventDefault();
    const name = document.getElementById("reviewer-name").value.trim();
    const city = document.getElementById("reviewer-city").value.trim();
    const text = document.getElementById("reviewer-text").value.trim();
    const activeUserToken = getOrCreateUserToken();

    let currentReviews = fetchActiveReviewsList();
    
    currentReviews.push({
        id: "rev-" + Date.now(),
        ownerToken: activeUserToken,
        name: name,
        city: city,
        text: text
    });
    
    localStorage.setItem("flameies_reviews", JSON.stringify(currentReviews));
    displayLiveReviews();
    document.getElementById("real-review-form").reset();
}

window.editCustomerReview = function(reviewId) {
    let currentReviews = fetchActiveReviewsList();
    const matchIndex = currentReviews.findIndex(r => r.id === reviewId);
    if (matchIndex === -1) return;

    const currentText = currentReviews[matchIndex].text;
    const upgradedText = prompt("Admin Moderation System:\nEdit this review text comment:", currentText);
    
    if (upgradedText !== null && upgradedText.trim() !== "") {
        currentReviews[matchIndex].text = upgradedText.trim();
        localStorage.setItem("flameies_reviews", JSON.stringify(currentReviews));
        displayLiveReviews();
    }
};

window.deleteCustomerReview = function(reviewId) {
    const message = isAdminSessionAuthenticated ? "Admin Privilege Alert:\nAre you sure you want to permanently delete this review from your website?" : "Are you sure you want to remove your review?";
    if (confirm(message)) {
        let currentReviews = fetchActiveReviewsList();
        const filteredReviews = currentReviews.filter(r => r.id !== reviewId);
        
        localStorage.setItem("flameies_reviews", JSON.stringify(filteredReviews));
        displayLiveReviews();
    }
};

document.addEventListener("DOMContentLoaded", () => {
    initBoutiqueStore();
    displayLiveReviews();
    
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('admin') === 'true') {
        triggerAdminLoginFlow();
    } else {
        evaluateUrlParametersForReceipts();
    }
    
    document.getElementById("checkout-form").addEventListener("submit", handleOrderCheckout);
    document.getElementById("real-review-form").addEventListener("submit", handleReviewSubmission);
});