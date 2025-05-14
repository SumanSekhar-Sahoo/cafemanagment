// Menu functionality
const menuTabs = document.querySelectorAll('.menu-tab');
const menuGrid = document.getElementById('menuGrid');

// Function to display menu items with quantity controls
function displayMenuItems(category) {
    menuGrid.innerHTML = '';
    
    menuItems[category].forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.dataset.id = item.id;
        
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-item-img" loading="lazy">
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3>${item.name}</h3>
                    <span class="price">$${item.price.toFixed(2)}</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn decrement-btn" aria-label="Decrease quantity">-</button>
                        <input type="number" value="1" min="1" max="10" class="quantity-input" aria-label="Quantity">
                        <button class="quantity-btn increment-btn" aria-label="Increase quantity">+</button>
                    </div>
                    <button class="add-to-cart-btn" data-id="${item.id}">Add to Cart</button>
                </div>
            </div>
        `;
        
        menuGrid.appendChild(menuItem);
        
        // Set up the observer for this menu item
        const menuItemObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    menuItemObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        menuItemObserver.observe(menuItem);
    });
    
    // Set up quantity control event listeners
    setupQuantityControls();
    
    // Set up add to cart event listeners
    setupAddToCartButtons();
}

// Function to handle quantity controls
function setupQuantityControls() {
    // Decrement quantity
    document.querySelectorAll('.decrement-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const input = e.target.parentNode.querySelector('.quantity-input');
            const currentValue = parseInt(input.value);
            if (currentValue > 1) {
                input.value = currentValue - 1;
            }
        });
    });
    
    // Increment quantity
    document.querySelectorAll('.increment-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const input = e.target.parentNode.querySelector('.quantity-input');
            const currentValue = parseInt(input.value);
            if (currentValue < 10) {
                input.value = currentValue + 1;
            }
        });
    });
    
    // Enforce min/max on manual input
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', (e) => {
            let value = parseInt(e.target.value);
            if (isNaN(value) || value < 1) {
                e.target.value = 1;
            } else if (value > 10) {
                e.target.value = 10;
            }
        });
    });
}

// Function to handle add to cart buttons
function setupAddToCartButtons() {
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const menuItem = e.target.closest('.menu-item');
            const itemId = e.target.getAttribute('data-id');
            const quantity = parseInt(menuItem.querySelector('.quantity-input').value);
            
            // Call the addToCart function from cart.js
            addToCart(itemId, quantity);
            
            // Show added to cart animation
            e.target.classList.add('added');
            e.target.textContent = 'Added!';
            e.target.style.animation = 'addToCartSuccess 0.5s';
            
            setTimeout(() => {
                e.target.classList.remove('added');
                e.target.textContent = 'Add to Cart';
                e.target.style.animation = '';
            }, 1500);
        });
    });
}

// Tab switching functionality
menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        menuTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Animate menu grid out
        menuGrid.style.opacity = '0';
        menuGrid.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            displayMenuItems(tab.dataset.category);
            
            // Animate menu grid back in
            setTimeout(() => {
                menuGrid.style.opacity = '1';
                menuGrid.style.transform = 'translateY(0)';
                menuGrid.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            }, 50);
        }, 300);
    });
});

// Initialize menu with first category
displayMenuItems('coffee');