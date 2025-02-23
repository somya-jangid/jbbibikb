document.addEventListener('DOMContentLoaded', () => {
 const tabBtns = document.querySelectorAll('.tab-btn');

 tabBtns.forEach(btn => {
 btn.addEventListener('click', () => {
 const tab = btn.dataset.tab;

 // Deactivate all tabs
 tabBtns.forEach(b => b.classList.remove('active'));

 // Hide all tab contents
 document.querySelectorAll('.tab-content').forEach(content => {
 content.classList.remove('active');
 });

 // Activate clicked tab
 btn.classList.add('active');

 // Show corresponding tab content
 document.getElementById(tab).classList.add('active');
 });
 });

 // Example form submission handling (replace with actual backend logic)
 const signInForm = document.getElementById('signin-form');
 if (signInForm) {
 signInForm.addEventListener('submit', (event) => {
 event.preventDefault();
 alert('Sign In Form Submitted (Placeholder)');
 // Add your sign-in logic here (e.g., AJAX request to backend)
 });
 }

 const signUpForm = document.getElementById('signup-form');
 if (signUpForm) {
 signUpForm.addEventListener('submit', (event) => {
 event.preventDefault();
 alert('Sign Up Form Submitted (Placeholder)');
 // Add your sign-up logic here
 });
 }


 // Placeholder data loading (replace with actual data fetching)
 loadPlaceholderData();

 function loadPlaceholderData(){

 }
});