// Modal functionality
const userMenuBtn = document.getElementById('userMenuBtn');
const userModal = document.getElementById('userModal');
const modalTabs = document.querySelectorAll('.modal-tab');
const modalContents = document.querySelectorAll('.modal-tab-content');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');

// Toggle user modal
userMenuBtn.addEventListener('click', () => {
    userModal.classList.toggle('show');
});

// Modal tabs
modalTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabName = tab.getAttribute('data-tab');
        
        // Update active tab
        modalTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Update active content
        modalContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === `${tabName}Tab`) {
                content.classList.add('active');
            }
        });
    });
});

// Form submissions
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Here you would typically handle login logic
    console.log('Login attempt:', { email, password });
    
    alert('Login functionality will be implemented soon!');
    loginForm.reset();
    userModal.classList.remove('show');
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    
    // Here you would typically handle signup logic
    console.log('Signup attempt:', {name, email, password });
    
    alert('Sign up functionality will be implemented soon!');
    signupForm.reset();
    userModal.classList.remove('show');
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.remove('show');
    }
});