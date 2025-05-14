// Cart functionality
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const checkoutBtn = document.getElementById('checkoutBtn');

// Cart data structure
let cart = [];

// Toggle cart modal
function toggleCartModal() {
    cartModal.classList.toggle('show');
    
    if (cartModal.classList.contains('show')) {
        updateCartDisplay();
    }
}

// Add item to cart
function addToCart(itemId, quantity) {
    // Find item data from menuItems
    let foundItem = null;
    
    // Search through all categories
    for (const category in menuItems) {
        const found = menuItems[category].find(item => item.id === itemId);
        if (found) {
            foundItem = found;
            break;
        }
    }
    
    if (!foundItem) {
        console.error('Item not found:', itemId);
        return;
    }
    
    // Check if item is already in cart
    const existingItemIndex = cart.findIndex(item => item.id === itemId);
    
    if (existingItemIndex >= 0) {
        // Update quantity if already in cart
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Add new item to cart
        cart.push({
            id: itemId,
            name: foundItem.name,
            price: foundItem.price,
            image: foundItem.image,
            quantity: quantity
        });
    }
    
    // Update cart count display
    updateCartCount();
    
    // Save cart to local storage
    saveCart();
    
    // Show notification
    showNotification(`Added ${quantity} ${foundItem.name} to cart`);
}

// Remove item from cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartCount();
    updateCartDisplay();
    saveCart();
}

// Update cart count display
function updateCartCount() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Animate the cart icon when count changes
    cartBtn.classList.add('pulse');
    setTimeout(() => {
        cartBtn.classList.remove('pulse');
    }, 500);
}

// Update cart display in modal
function updateCartDisplay() {
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="text-center">Your cart is empty</p>';
        cartTotal.textContent = '$0.00';
        checkoutBtn.disabled = true;
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" width="50" height="50" style="object-fit: cover; border-radius: 4px;">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)} × ${item.quantity}</div>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn cart-decrement" data-id="${item.id}">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn cart-increment" data-id="${item.id}">+</button>
            </div>
            <button class="remove-item" data-id="${item.id}">&times;</button>
        `;
        
        cartItems.appendChild(cartItemElement);
    });
    
    cartTotal.textContent = `$${total.toFixed(2)}`;
    checkoutBtn.disabled = false;
    
    // Add event listeners to cart item buttons
    setupCartItemControls();
}

// Setup cart item control buttons
function setupCartItemControls() {
    // Remove item buttons
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemId = e.target.getAttribute('data-id');
            removeFromCart(itemId);
        });
    });
    
    // Decrement quantity buttons
    document.querySelectorAll('.cart-decrement').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemId = e.target.getAttribute('data-id');
            const itemIndex = cart.findIndex(item => item.id === itemId);
            
            if (itemIndex >= 0) {
                if (cart[itemIndex].quantity > 1) {
                    cart[itemIndex].quantity--;
                    updateCartCount();
                    updateCartDisplay();
                    saveCart();
                } else {
                    removeFromCart(itemId);
                }
            }
        });
    });
    
    // Increment quantity buttons
    document.querySelectorAll('.cart-increment').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const itemId = e.target.getAttribute('data-id');
            const itemIndex = cart.findIndex(item => item.id === itemId);
            
            if (itemIndex >= 0 && cart[itemIndex].quantity < 10) {
                cart[itemIndex].quantity++;
                updateCartCount();
                updateCartDisplay();
                saveCart();
            }
        });
    });
}

// Save cart to local storage
function saveCart() {
    localStorage.setItem('cozyCornerCart', JSON.stringify(cart));
}

// Load cart from local storage
function loadCart() {
    const savedCart = localStorage.getItem('cozyCornerCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Create notification styles if not already in document
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background-color: var(--color-primary);
                color: white;
                padding: 12px 20px;
                border-radius: 4px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                z-index: 9999;
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.3s, transform 0.3s;
            }
            .notification.show {
                opacity: 1;
                transform: translateY(0);
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Show notification with animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove notification after delay
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Checkout functionality
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) return;
    
    alert('Thank you for your order! Your order is being processed.');
    cart = [];
    updateCartCount();
    updateCartDisplay();
    saveCart();
    toggleCartModal();
});

// Event listeners
cartBtn.addEventListener('click', toggleCartModal);

// Close the cart modal when close button is clicked
document.querySelectorAll('.close-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.target.closest('.modal').classList.remove('show');
    });
});

// Close the cart modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('show');
    }
});

// Load cart on page load
document.addEventListener('DOMContentLoaded', loadCart);