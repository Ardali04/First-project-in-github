const topImg = document.querySelector('.top-img');
const desktopWrapper = document.getElementById('desktop-wrapper');
const wrapper = document.getElementById('wrapper');
const form = document.getElementById('wrapper-form');
const submitBtn = document.getElementById('wrapper-submission-btn');
const mobileConfirmationWrapper = document.getElementById('mobile-confirmation-wrapper');
const mobileConfirmationBtn = document.getElementById('mobile-confirmation-btn');
const purchasingEmail = document.getElementById('purchasing-email');

form.addEventListener('submit', e => e.preventDefault());

mobileConfirmationBtn.addEventListener('click', () => {
    mobileConfirmationWrapper.style.display = 'none';
    topImg.style.display = 'block';
    wrapper.style.display = 'grid';
    desktopWrapper.style.visibility = 'visible';
});

const input = document.getElementById('wrapper-input');

input.addEventListener('input', () => {
    const inputVal = input.value;
    const regex = /^[a-z0-9]+([._%+-]?[a-z0-9]+)*@[a-z0-9-]+\.[a-z]{2,7}$/;
    const invalidTitle = document.getElementById('title-invalid');
    
    if (regex.test(inputVal)) {
        submitBtn.addEventListener('click', () => {
            wrapper.style.display = 'none';
            desktopWrapper.style.visibility = 'hidden';
            topImg.style.display = 'none';
            mobileConfirmationWrapper.style.display = 'flex';
            input.value = '';
        });
        input.classList.remove('input-invalid');
        invalidTitle.style.display = 'none';
    } else {
        input.classList.add('input-invalid');
        invalidTitle.style.display = 'flex';
    }

    if (inputVal.length === 0) {
        input.classList.remove('input-invalid');
        invalidTitle.style.display = 'none';
    }

    purchasingEmail.textContent = `${inputVal}.`;
});