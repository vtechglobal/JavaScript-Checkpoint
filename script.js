document.addEventListener('DOMContentLoaded', () => {
    const updateTotalPrice = () => {
        let total = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const quantity = parseInt(item.querySelector('.quantity').innerText);
            const price = parseInt(item.querySelector('.price').innerText);
            total += quantity * price;
        });
        document.getElementById('total-price').innerText = total;
    };

    document.querySelectorAll('.increment').forEach(button => {
        button.addEventListener('click', () => {
            const quantitySpan = button.previousElementSibling;
            quantitySpan.innerText = parseInt(quantitySpan.innerText) + 1;
            updateTotalPrice();
        });
    });

    document.querySelectorAll('.decrement').forEach(button => {
        button.addEventListener('click', () => {
            const quantitySpan = button.nextElementSibling;
            const currentQuantity = parseInt(quantitySpan.innerText);
            if (currentQuantity > 1) {
                quantitySpan.innerText = currentQuantity - 1;
                updateTotalPrice();
            }
        });
    });

    document.querySelectorAll('.delete').forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.remove();
            updateTotalPrice();
        });
    });

    document.getElementById('clear-cart').addEventListener('click', () => {
        const cartItems = document.querySelectorAll('.cart-item');
        cartItems.forEach(item => {
            item.remove();
        });
        updateTotalPrice();
    });

    document.getElementById('checkout').addEventListener('click', () => {
        alert('Proceeding to checkout...');
    });

    updateTotalPrice();
});