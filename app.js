/* ==========================================================================
   Bikaneri Bliss - Application Logic
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // Initialize icons
    lucide.createIcons();
    
    // Core Application State
    const state = {
        products: [
            {
                id: "saffron-kaju-katli",
                name: "Royal Saffron Kaju Katli",
                category: "sweets",
                price: 350, // 250g price
                rating: 4.9,
                reviews: 148,
                image: "images/saffron-kaju-katli.jpg",
                fallbackImage: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
                ingredients: "Premium Cashew Nuts, Organic Kashmiri Saffron, Sugar, Cardamom, Pure Silver Foil (Vark)",
                shelflife: "20 Days",
                desc: "An aristocratic Rajasthani classic. Creamy cashew paste layered with organic Kashmiri saffron threads and embellished with delicate edible silver foil."
            },
            {
                id: "bikaneri-bhujia",
                name: "Signature Bikaneri Bhujia",
                category: "savories",
                price: 120,
                rating: 4.8,
                reviews: 320,
                image: "images/bikaneri-bhujia.jpg",
                fallbackImage: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=600&q=80",
                ingredients: "Dew Bean Flour (Moth Dal), Gram Flour (Besan), Pure Ghee, Asafoetida (Hing), Black Pepper, Ginger Powder, Cardamom",
                shelflife: "90 Days",
                desc: "The legend of Bikaner. Made from regional dew bean flour and custom ground spices, fried to absolute crisp gold in pure cold-pressed oil."
            },
            {
                id: "royal-rasgulla",
                name: "Royal Chena Rasgulla",
                category: "sweets",
                price: 180,
                rating: 4.9,
                reviews: 215,
                image: "images/royal-rasgulla.jpg",
                fallbackImage: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=600&q=80",
                ingredients: "Cow Milk Chena, Sugar, Saffron Threads, Rose Water, Cardamom",
                shelflife: "7 Days (Refrigerated)",
                desc: "Cloud-soft spheres of fresh milk chena, boiled in a light syrup infused with rose water and cardamom. Squeeze and savor true bliss."
            },
            {
                id: "kesar-ghevar",
                name: "Traditional Kesar Ghevar",
                category: "sweets",
                price: 480,
                rating: 4.7,
                reviews: 95,
                image: "images/kesar-ghevar.jpg",
                fallbackImage: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80",
                ingredients: "Wheat Flour (Maida), Pure Buffalo Ghee, Saffron Rabdi, Pistachios, Almonds, Sugar Syrup",
                shelflife: "10 Days",
                desc: "A honeycomb-textured Rajasthani masterpiece cooked in pure ghee. Loaded with a rich layer of creamy saffron Rabdi and silver almonds."
            },
            {
                id: "namkeen-mathri",
                name: "Achaari Methi Mathri",
                category: "savories",
                price: 110,
                rating: 4.6,
                reviews: 84,
                image: "images/namkeen-mathri.jpg",
                fallbackImage: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=600&q=80",
                ingredients: "Whole Wheat Flour, Dried Fenugreek (Kasuri Methi), Carom Seeds (Ajwain), Ghee, Peppercorn, Pickle Spices",
                shelflife: "60 Days",
                desc: "Crispy, flaky savory crackers flavored with fragrant fenugreek leaves, ajwain, and a subtle tang of home-pickled mango spice."
            },
            {
                id: "royal-shahi-box",
                name: "Shahi Rajwadi Gift Box",
                category: "gifts",
                price: 1250,
                rating: 5.0,
                reviews: 112,
                image: "images/royal-shahi-box.jpg",
                fallbackImage: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80",
                ingredients: "Assortment of Kaju Katli (250g), Dry Fruit Laddoo (250g), Royal Bhujia (250g), and Premium Salted Pistachios",
                shelflife: "30 Days",
                desc: "An imperial velvet-embossed box packed with our finest selections. A regal gift for family, friends, or corporate colleagues."
            },
            {
                id: "rajasthani-soan-papdi",
                name: "Elachi Soan Papdi",
                category: "sweets",
                price: 150,
                rating: 4.7,
                reviews: 130,
                image: "images/rajasthani-soan-papdi.jpg",
                fallbackImage: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80",
                ingredients: "Gram Flour, Wheat Flour, Sugar, Pure Ghee, Almonds, Pistachios, Cardamom Powder",
                shelflife: "30 Days",
                desc: "Fine, delicate, and crisp sugar threads cooked in pure ghee, melting instantly on the tongue with a sweet cardamon aroma."
            },
            {
                id: "royal-dryfruit-platter",
                name: "Marwar Dry Fruit Platter",
                category: "gifts",
                price: 1650,
                rating: 4.9,
                reviews: 74,
                image: "images/royal-dryfruit-platter.jpg",
                fallbackImage: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=600&q=80",
                ingredients: "Premium Saffron Almonds, Cashews, Salted Pistachios, and Turkish Apricots",
                shelflife: "120 Days",
                desc: "A handcarved wooden serving tray stacked with selected jumbo dry fruits, lightly roasted in ghee and infused with saffron dust."
            }
        ],
        cart: [],
        customBox: {
            size: 9, // default Royal Nonet
            sweets: [], // filled elements
            itemsAllowed: [
                { id: "saffron-katli", name: "Saffron Katli", color: "#F6E2C3", img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=100&q=80" },
                { id: "gold-ladoo", name: "Besan Ladoo", color: "#F2C94C", img: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=100&q=80" },
                { id: "shahi-pedha", name: "Kesar Peda", color: "#EB5757", img: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=100&q=80" },
                { id: "rasgulla-mini", name: "Rasgulla", color: "#FFFDF9", img: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=100&q=80" },
                { id: "motichoor-laddu", name: "Motichoor", color: "#F2994A", img: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=100&q=80" },
                { id: "gulab-jamun", name: "Gulab Jamun", color: "#824C28", img: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=100&q=80" }
            ],
            prices: {
                4: 250,
                9: 450,
                16: 750
            }
        },
        currentModalProduct: null,
        currentPackMultiplier: 1,
        currentPackLabel: "250g"
    };

    // --- DOM Elements Cache ---
    const DOM = {
        header: document.getElementById("main-header"),
        ambient: document.getElementById("ambient-decor"),
        productsGrid: document.getElementById("products-grid"),
        tabButtons: document.querySelectorAll(".tab-btn"),
        cartBadge: document.getElementById("cart-badge"),
        cartBtn: document.getElementById("cart-btn"),
        cartDrawer: document.getElementById("cart-drawer"),
        cartBackdrop: document.getElementById("cart-backdrop"),
        closeCartBtn: document.getElementById("close-cart-btn"),
        closeCartLink: document.querySelector(".close-cart-link"),
        cartEmptyState: document.getElementById("cart-empty-state"),
        cartItemsList: document.getElementById("cart-items-list"),
        cartSubtotal: document.getElementById("cart-subtotal"),
        cartGst: document.getElementById("cart-gst"),
        cartGrandtotal: document.getElementById("cart-grandtotal"),
        checkoutBtn: document.getElementById("checkout-btn"),
        
        // Modal
        modalBackdrop: document.getElementById("modal-backdrop"),
        productModal: document.getElementById("product-modal"),
        modalCloseBtn: document.getElementById("modal-close-btn"),
        modalProdImg: document.getElementById("modal-product-img"),
        modalProdCat: document.getElementById("modal-product-cat"),
        modalProdTitle: document.getElementById("modal-product-title"),
        modalProdRating: document.getElementById("modal-product-rating"),
        modalProdPrice: document.getElementById("modal-product-price"),
        modalProdDesc: document.getElementById("modal-product-desc"),
        modalProdIngredients: document.getElementById("modal-product-ingredients"),
        modalProdShelflife: document.getElementById("modal-product-shelflife"),
        modalQtyMinus: document.getElementById("modal-qty-minus"),
        modalQtyPlus: document.getElementById("modal-qty-plus"),
        modalQtyVal: document.getElementById("modal-qty-val"),
        modalAddToCartBtn: document.getElementById("modal-add-to-cart-btn"),
        packSizeBtns: document.querySelectorAll(".pack-size-btn"),
        
        // Gifting
        boxGrid: document.getElementById("box-grid"),
        boxStatusText: document.getElementById("box-status-text"),
        statusProgressFill: document.getElementById("status-progress-fill"),
        sweetsSelectorGrid: document.getElementById("sweets-selector-grid"),
        sizeOptBtns: document.querySelectorAll(".size-opt-btn"),
        customBoxPrice: document.getElementById("custom-box-price"),
        addBoxToCartBtn: document.getElementById("add-box-to-cart-btn"),

        // Catering & General
        cateringForm: document.getElementById("catering-form"),
        newsletterForm: document.getElementById("newsletter-form"),
        toast: document.getElementById("toast-notification"),
        toastMessage: document.getElementById("toast-message"),
        searchBtn: document.getElementById("search-btn"),
        searchOverlay: document.getElementById("search-overlay"),
        closeSearchBtn: document.getElementById("close-search-btn"),
        searchInput: document.getElementById("search-input"),
        
        // Image Placeholders
        heroImg: document.getElementById("hero-img"),
        heritageImg: document.getElementById("heritage-img")
    };

    // --- Dynamic Fallback/Real Image Setter ---
    function initImages() {
        if (DOM.heroImg) DOM.heroImg.src = state.products[0].image;
        if (DOM.heritageImg) DOM.heritageImg.src = "images/bikaneri-bhujia.jpg";
    }
    initImages();

    // --- Ambient Particle Generator ---
    function initAmbientDecor() {
        const colors = ["#C5A059", "#FAF6EE", "#E29A72", "#9C224E"];
        const particleCount = 20;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("div");
            particle.classList.add("ambient-particle");
            
            const size = Math.random() * 8 + 4;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.left = `${Math.random() * 100}vw`;
            
            const delay = Math.random() * 15;
            const duration = Math.random() * 20 + 15;
            particle.style.animationDelay = `-${delay}s`;
            particle.style.animationDuration = `${duration}s`;
            
            DOM.ambient.appendChild(particle);
        }
    }
    initAmbientDecor();

    // --- Header Scroll Effect ---
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            DOM.header.classList.add("scrolled");
        } else {
            DOM.header.classList.remove("scrolled");
        }
    });

    // --- Toast / Notification Manager ---
    let toastTimeout;
    function showToast(message, isSuccess = true) {
        DOM.toastMessage.textContent = message;
        const icon = DOM.toast.querySelector("i");
        if (isSuccess) {
            icon.setAttribute("data-lucide", "check-circle");
            DOM.toast.style.borderColor = "var(--border-gold)";
        } else {
            icon.setAttribute("data-lucide", "alert-circle");
            DOM.toast.style.borderColor = "red";
        }
        lucide.createIcons();
        
        DOM.toast.classList.add("active");
        
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            DOM.toast.classList.remove("active");
        }, 3000);
    }

    // --- Render Product Grid ---
    function renderProducts(category = "all", filterQuery = "") {
        DOM.productsGrid.innerHTML = "";
        
        const filtered = state.products.filter(p => {
            const matchesCat = category === "all" || p.category === category;
            const matchesSearch = filterQuery === "" || p.name.toLowerCase().includes(filterQuery.toLowerCase()) || p.desc.toLowerCase().includes(filterQuery.toLowerCase());
            return matchesCat && matchesSearch;
        });

        if (filtered.length === 0) {
            DOM.productsGrid.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 4rem 0; color: var(--text-muted);">
                    <i data-lucide="info" style="width: 48px; height: 48px; margin-bottom: 1rem; color: var(--gold);"></i>
                    <p>No culinary delights match your criteria.</p>
                </div>
            `;
            lucide.createIcons();
            return;
        }

        filtered.forEach(p => {
            const card = document.createElement("article");
            card.classList.add("product-card");
            
            const stars = Array(5).fill("").map((_, i) => {
                const filled = i < Math.floor(p.rating) ? "fill-gold" : "";
                return `<i data-lucide="star" class="${filled}"></i>`;
            }).join("");

            card.innerHTML = `
                <div class="product-img-container">
                    <img class="product-card-img" src="${p.image}" alt="${p.name}" loading="lazy">
                    <span class="card-badge">${p.category === 'sweets' ? 'Pure Ghee' : p.category === 'savories' ? 'Spicy & Crispy' : 'Assortment'}</span>
                </div>
                <div class="card-details">
                    <div class="card-rating">
                        ${stars}
                        <span>${p.rating} (${p.reviews} Reviews)</span>
                    </div>
                    <h3 class="card-title">${p.name}</h3>
                    <p class="card-desc">${p.desc}</p>
                    <div class="card-footer">
                        <span class="card-price">₹${p.price} <span>/ 250g</span></span>
                        <button class="card-add-btn" aria-label="Add to bag" data-id="${p.id}">
                            <i data-lucide="plus"></i>
                        </button>
                    </div>
                </div>
            `;
            
            // Add click listeners to launch detail modal
            const imgContainer = card.querySelector(".product-img-container");
            const titleEl = card.querySelector(".card-title");
            const plusBtn = card.querySelector(".card-add-btn");

            [imgContainer, titleEl].forEach(el => {
                el.addEventListener("click", () => openProductModal(p.id));
                el.style.cursor = "pointer";
            });

            plusBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                addToCart(p.id, "250g", 1);
            });

            DOM.productsGrid.appendChild(card);
        });

        lucide.createIcons();
    }
    renderProducts("all");

    // Category Tabs Logic
    DOM.tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            DOM.tabButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderProducts(btn.getAttribute("data-category"));
        });
    });

    // --- Search Overlay Logic ---
    DOM.searchBtn.addEventListener("click", () => {
        DOM.searchOverlay.classList.add("active");
        DOM.searchInput.focus();
    });

    [DOM.closeSearchBtn, DOM.searchOverlay].forEach(el => {
        if (el === DOM.searchOverlay) {
            el.addEventListener("click", (e) => {
                if (e.target === DOM.searchOverlay) DOM.searchOverlay.classList.remove("active");
            });
        } else {
            el.addEventListener("click", () => DOM.searchOverlay.classList.remove("active"));
        }
    });

    DOM.searchInput.addEventListener("input", (e) => {
        const query = e.target.value;
        const activeTab = document.querySelector(".tab-btn.active").getAttribute("data-category");
        renderProducts(activeTab, query);
    });

    // --- Cart Drawer Animation Logic ---
    const toggleCart = (open) => {
        if (open) {
            DOM.cartDrawer.classList.add("active");
            DOM.cartBackdrop.classList.add("active");
            renderCart();
        } else {
            DOM.cartDrawer.classList.remove("active");
            DOM.cartBackdrop.classList.remove("active");
        }
    };

    DOM.cartBtn.addEventListener("click", () => toggleCart(true));
    DOM.closeCartBtn.addEventListener("click", () => toggleCart(false));
    DOM.cartBackdrop.addEventListener("click", () => toggleCart(false));
    if (DOM.closeCartLink) DOM.closeCartLink.addEventListener("click", () => toggleCart(false));

    // --- Cart Core Engine ---
    function addToCart(productId, packSize, quantity, customBoxDetails = null) {
        if (productId === "custom-box") {
            // Special custom box item addition
            const existingCustom = state.cart.find(item => item.id === productId && item.desc === customBoxDetails.description);
            if (existingCustom) {
                existingCustom.quantity += 1;
            } else {
                state.cart.push({
                    id: productId,
                    name: customBoxDetails.name,
                    packSize: "Custom Box",
                    price: customBoxDetails.price,
                    quantity: 1,
                    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=100&q=80",
                    desc: customBoxDetails.description
                });
            }
            showToast("Custom Box added to bag!");
        } else {
            const product = state.products.find(p => p.id === productId);
            if (!product) return;

            // Compute price adjusted for packSize
            let multiplier = 1;
            if (packSize === "500g") multiplier = 1.9; // Slight discount for bigger packs
            if (packSize === "1kg") multiplier = 3.6; // Even more discount for bulk

            const itemPrice = Math.round(product.price * multiplier);

            const existingItem = state.cart.find(item => item.id === productId && item.packSize === packSize);
            
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.cart.push({
                    id: productId,
                    name: product.name,
                    packSize: packSize,
                    price: itemPrice,
                    quantity: quantity,
                    image: product.image
                });
            }
            showToast(`Added ${quantity}x ${product.name} (${packSize}) to bag!`);
        }

        renderCart();
    }

    function renderCart() {
        const totalItemsCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
        DOM.cartBadge.textContent = totalItemsCount;
        
        if (state.cart.length === 0) {
            DOM.cartEmptyState.style.display = "flex";
            DOM.cartItemsList.style.display = "none";
            DOM.cartSubtotal.textContent = "₹0";
            DOM.cartGst.textContent = "₹0";
            DOM.cartGrandtotal.textContent = "₹0";
            return;
        }

        DOM.cartEmptyState.style.display = "none";
        DOM.cartItemsList.style.display = "flex";
        DOM.cartItemsList.innerHTML = "";

        state.cart.forEach((item, index) => {
            const cartItemEl = document.createElement("div");
            cartItemEl.classList.add("cart-item");
            cartItemEl.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-pack">${item.packSize}${item.desc ? ` - ${item.desc}` : ''}</p>
                    <div class="cart-item-qty-price">
                        <div class="mini-qty-counter">
                            <button class="minus-qty-btn" data-index="${index}"><i data-lucide="minus"></i></button>
                            <span>${item.quantity}</span>
                            <button class="plus-qty-btn" data-index="${index}"><i data-lucide="plus"></i></button>
                        </div>
                        <span class="cart-item-price">₹${item.price * item.quantity}</span>
                    </div>
                </div>
                <button class="remove-cart-item" data-index="${index}" aria-label="Remove item">
                    <i data-lucide="trash-2"></i>
                </button>
            `;

            // Quantity adjust and delete listeners
            cartItemEl.querySelector(".minus-qty-btn").addEventListener("click", () => {
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    state.cart.splice(index, 1);
                }
                renderCart();
            });

            cartItemEl.querySelector(".plus-qty-btn").addEventListener("click", () => {
                item.quantity++;
                renderCart();
            });

            cartItemEl.querySelector(".remove-cart-item").addEventListener("click", () => {
                state.cart.splice(index, 1);
                renderCart();
            });

            DOM.cartItemsList.appendChild(cartItemEl);
        });

        // Totals computations
        const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const gst = Math.round(subtotal * 0.05);
        const grandtotal = subtotal + gst;

        DOM.cartSubtotal.textContent = `₹${subtotal}`;
        DOM.cartGst.textContent = `₹${gst}`;
        DOM.cartGrandtotal.textContent = `₹${grandtotal}`;

        lucide.createIcons();
    }

    // Checkout simulate
    DOM.checkoutBtn.addEventListener("click", () => {
        showToast("Processing Order... Order simulation successful! Enjoy Bikaneri Bliss.");
        state.cart = [];
        toggleCart(false);
        renderCart();
    });

    // --- Product Details Modal Controller ---
    function openProductModal(productId) {
        const product = state.products.find(p => p.id === productId);
        if (!product) return;

        state.currentModalProduct = product;
        state.currentPackMultiplier = 1;
        state.currentPackLabel = "250g";

        // Reset pack size buttons active state
        DOM.packSizeBtns.forEach(btn => {
            btn.classList.remove("active");
            if (btn.getAttribute("data-label") === "250g") btn.classList.add("active");
        });

        DOM.modalQtyVal.textContent = "1";
        
        DOM.modalProdImg.src = product.image;
        DOM.modalProdCat.textContent = product.category === 'sweets' ? 'Pure Ghee Sweet' : product.category === 'savories' ? 'Authentic Savory' : 'Gift Box';
        DOM.modalProdTitle.textContent = product.name;
        DOM.modalProdDesc.textContent = product.desc;
        DOM.modalProdIngredients.textContent = product.ingredients;
        DOM.modalProdShelflife.textContent = product.shelflife;
        
        updateModalPrice();

        DOM.productModal.classList.add("active");
        DOM.modalBackdrop.classList.add("active");
    }

    function closeProductModal() {
        DOM.productModal.classList.remove("active");
        DOM.modalBackdrop.classList.remove("active");
        state.currentModalProduct = null;
    }

    function updateModalPrice() {
        if (!state.currentModalProduct) return;
        const base = state.currentModalProduct.price;
        const currentPrice = Math.round(base * state.currentPackMultiplier);
        DOM.modalProdPrice.innerHTML = `₹${currentPrice} <span class="wt-suffix">/ ${state.currentPackLabel}</span>`;
    }

    DOM.modalCloseBtn.addEventListener("click", closeProductModal);
    DOM.modalBackdrop.addEventListener("click", closeProductModal);

    DOM.packSizeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            DOM.packSizeBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            state.currentPackMultiplier = parseFloat(btn.getAttribute("data-multiplier"));
            state.currentPackLabel = btn.getAttribute("data-label");
            updateModalPrice();
        });
    });

    DOM.modalQtyMinus.addEventListener("click", () => {
        let qty = parseInt(DOM.modalQtyVal.textContent);
        if (qty > 1) {
            qty--;
            DOM.modalQtyVal.textContent = qty;
        }
    });

    DOM.modalQtyPlus.addEventListener("click", () => {
        let qty = parseInt(DOM.modalQtyVal.textContent);
        qty++;
        DOM.modalQtyVal.textContent = qty;
    });

    DOM.modalAddToCartBtn.addEventListener("click", () => {
        if (!state.currentModalProduct) return;
        const qty = parseInt(DOM.modalQtyVal.textContent);
        addToCart(state.currentModalProduct.id, state.currentPackLabel, qty);
        closeProductModal();
    });

    // --- Interactive Custom Gift Box Customizer ---
    function initCustomBoxSuite() {
        // Render selector sweets
        DOM.sweetsSelectorGrid.innerHTML = "";
        state.customBox.itemsAllowed.forEach(sweet => {
            const sweetBtn = document.createElement("div");
            sweetBtn.classList.add("select-sweet-item");
            sweetBtn.innerHTML = `
                <img class="select-sweet-img" src="${sweet.img}" alt="${sweet.name}">
                <span class="select-sweet-name">${sweet.name}</span>
            `;
            sweetBtn.addEventListener("click", () => addSweetToCustomBox(sweet));
            DOM.sweetsSelectorGrid.appendChild(sweetBtn);
        });

        // Set initial box grid setup
        renderBoxGrid();
    }

    function renderBoxGrid() {
        DOM.boxGrid.className = `box-grid grid-${state.customBox.size}`;
        DOM.boxGrid.innerHTML = "";

        const totalSlots = state.customBox.size;
        for (let i = 0; i < totalSlots; i++) {
            const slot = document.createElement("div");
            slot.classList.add("box-slot");
            
            const filledSweet = state.customBox.sweets[i];
            if (filledSweet) {
                slot.classList.add("filled");
                slot.innerHTML = `
                    <div class="slot-visual">
                        <img class="slot-sweet-pic" src="${filledSweet.img}" alt="${filledSweet.name}">
                    </div>
                    <span class="slot-label">${filledSweet.name}</span>
                    <button class="remove-slot-btn" data-index="${i}"><i data-lucide="x"></i></button>
                `;
                slot.querySelector(".remove-slot-btn").addEventListener("click", (e) => {
                    e.stopPropagation();
                    removeSweetFromCustomBox(i);
                });
            } else {
                slot.innerHTML = `
                    <span style="font-size: 0.65rem; color: var(--gold); opacity: 0.7;">Empty</span>
                `;
            }
            DOM.boxGrid.appendChild(slot);
        }

        lucide.createIcons();
        updateCustomBoxStatus();
    }

    function addSweetToCustomBox(sweet) {
        if (state.customBox.sweets.length >= state.customBox.size) {
            showToast("Your gift box is full. Please remove some items or choose a larger size.", false);
            return;
        }

        state.customBox.sweets.push(sweet);
        renderBoxGrid();
    }

    function removeSweetFromCustomBox(index) {
        state.customBox.sweets.splice(index, 1);
        renderBoxGrid();
    }

    function updateCustomBoxStatus() {
        const filled = state.customBox.sweets.length;
        const total = state.customBox.size;
        DOM.boxStatusText.textContent = `Box Capacity: ${filled} / ${total} Pieces`;
        
        const percentage = (filled / total) * 100;
        DOM.statusProgressFill.style.width = `${percentage}%`;

        // Update price label
        const basePrice = state.customBox.prices[total];
        DOM.customBoxPrice.textContent = `₹${basePrice}`;

        // Enable/disable add to cart button
        if (filled === total) {
            DOM.addBoxToCartBtn.disabled = false;
        } else {
            DOM.addBoxToCartBtn.disabled = true;
        }
    }

    // Size Selection trigger
    DOM.sizeOptBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            DOM.sizeOptBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const size = parseInt(btn.getAttribute("data-size"));
            state.customBox.size = size;
            state.customBox.sweets = []; // clear sweets on resize
            
            renderBoxGrid();
        });
    });

    // Add Box to Cart Trigger
    DOM.addBoxToCartBtn.addEventListener("click", () => {
        const sizeName = state.customBox.size === 4 ? "Imperial Quad" : state.customBox.size === 9 ? "Royal Nonet" : "Maharaja Festive";
        
        // Summarize sweets in box
        const counts = {};
        state.customBox.sweets.forEach(s => {
            counts[s.name] = (counts[s.name] || 0) + 1;
        });

        const descriptionString = Object.entries(counts).map(([name, count]) => `${count}x ${name}`).join(", ");
        const finalPrice = state.customBox.prices[state.customBox.size];

        addToCart("custom-box", "Custom Box", 1, {
            name: `Custom Sweet Box (${sizeName})`,
            price: finalPrice,
            description: descriptionString
        });

        // Reset Box Builder state
        state.customBox.sweets = [];
        renderBoxGrid();
    });

    initCustomBoxSuite();

    // --- Catering & Forms Form Submissions ---
    DOM.cateringForm.addEventListener("submit", (e) => {
        e.preventDefault();
        showToast("Consultation Request Received! A Royal Concierge will contact you within 24 hours.");
        DOM.cateringForm.reset();
    });

    DOM.newsletterForm.addEventListener("submit", (e) => {
        e.preventDefault();
        showToast("Subscription successful! Check your email for special welcome gifts.");
        DOM.newsletterForm.reset();
    });
});
