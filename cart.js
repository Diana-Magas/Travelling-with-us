function getCartFromLocalStorage() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart) : [];
}

function saveCartToLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartButton() {
    const cartButton = document.querySelector('.cart-button');
    const cart = getCartFromLocalStorage();
    cartButton.textContent = `Cart (${cart.length})`;
}

function updateCartModal() {
    const cart = getCartFromLocalStorage()
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach((tour, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        const title = document.createElement('span');
        title.classList.add('cart-item__title');
        title.textContent = tour.name;

        const price = document.createElement('span');
        price.classList.add('cart-item__price');
        price.textContent = `$${tour.price}`;

        const removeButton = document.createElement('button');
        removeButton.classList.add('cart-item__remove');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            cart.splice(index, 1);
            saveCartToLocalStorage(cart);
            updateCartButton();
            updateCartModal();
        });
        cartItem.appendChild(title);
        cartItem.appendChild(price);
        cartItem.appendChild(removeButton);

        cartItemsContainer.appendChild(cartItem);
    });
    const total = cart.reduce((sum, tour) => sum + tour.price, 0);
    const totalElement = document.querySelector('.cart-total__value');
    totalElement.textContent = `$${total}`;
}

function showCartModal() {
    const cartModal = document.querySelector('.cart-modal');
    cartModal.style.display = 'flex';
    updateCartModal();
}

function hideCartModal() {
    const cartModal = document.querySelector('.cart-modal');
    cartModal.style.display = 'none';
}

function addEventListeners() {
    const buyButtons = document.querySelectorAll('.tour-card__button-buy');
    buyButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const cart = getCartFromLocalStorage();
            cart.push(toursCardsData[index]);
            saveCartToLocalStorage(cart);
            updateCartButton();
        });
    });
    const cartButton = document.querySelector('.cart-button');
    cartButton.addEventListener('click', showCartModal);

    const closeModalButton = document.querySelector('.cart-modal__close');
    closeModalButton.addEventListener('click', hideCartModal);
}


updateCartButton();
addEventListeners();