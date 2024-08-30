// Register and login switch
document.addEventListener('DOMContentLoaded', function () {
    // Get elements
    const modal = document.querySelector('.modal');
    const modalOverlay = document.querySelector('.modal__overlay');
    const switchButtons = document.querySelectorAll('.auth-form__switch-btn');
    const backButtons = document.querySelectorAll('.auth-form__controls-back');
    const openRegisterBtn = document.querySelector('.open-register'); // Add class to open register form
    const openLoginBtn = document.querySelector('.open-login'); // Add class to open login form

    // Show the modal
    function showModal() {
        modal.classList.add('active');
    }

    // Hide the modal
    function hideModal() {
        modal.classList.remove('active');
       
    }

    // Switch to register form
    function showRegisterForm() {
        const registerForm = document.querySelector('.auth-form:nth-child(1)');
        const loginForm = document.querySelector('.auth-form:nth-child(2)');
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    }

    // Switch to login form
    function showLoginForm() {
        const registerForm = document.querySelector('.auth-form:nth-child(1)');
        const loginForm = document.querySelector('.auth-form:nth-child(2)');
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    }

    // Event listeners for switching forms
    switchButtons.forEach(button => {
        button.addEventListener('click', function () {
            if (this.textContent.includes('Đăng Ký')) {
                showRegisterForm();
            } else {
                showLoginForm();
            }
        });
    });

    // Event listeners for back buttons
    backButtons.forEach(button => {
        button.addEventListener('click', function () {
            hideModal();
        });
    });

    // Event listeners for modal overlay click
    modalOverlay.addEventListener('click', function () {
        hideModal();
    });

    // Event listeners for opening forms
    if (openRegisterBtn) {
        openRegisterBtn.addEventListener('click', function () {
            showModal();
            showRegisterForm();
        });
    }

    if (openLoginBtn) {
        openLoginBtn.addEventListener('click', function () {
            showModal();
            showLoginForm();
        });
    }
});

//Lọc sản phẩm
document.addEventListener('DOMContentLoaded', function () {
    const categoryItems = document.querySelectorAll('.category-item');
    const products = document.querySelectorAll('.home-product .grid__column-2-4');

    categoryItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();

            // Xóa lớp active khỏi tất cả các mục danh mục
            categoryItems.forEach(i => i.classList.remove('category-item--active'));
            // Thêm lớp active vào mục danh mục được nhấp vào
            this.classList.add('category-item--active');

            const category = this.textContent.trim().toLowerCase();

            if (category === 'tất cả') {
                // Hiển thị tất cả các sản phẩm
                products.forEach(product => product.classList.remove('hidden'));
            } else {
                // Lọc theo danh mục được chọn
                products.forEach(product => {
                    if (product.getAttribute('data-category') === category) {
                        product.classList.remove('hidden');
                    } else {
                        product.classList.add('hidden');
                    }
                });
            }
        });
    });
});

