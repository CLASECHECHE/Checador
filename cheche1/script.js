document.addEventListener('DOMContentLoaded', () => {
    const loginIdInput = document.getElementById('login-id');
    const validateIdButton = document.getElementById('btn-validate-id');
    const step2Section = document.getElementById('step-2');
    const passwordInput = document.getElementById('login-password');
    const loginButton = document.getElementById('btn-login');

    let currentUserId = null;

    // Step 1: Validate ID
    validateIdButton.addEventListener('click', () => {
        const loginId = loginIdInput.value.trim();

        if (!loginId) {
            alert('Por favor, ingresa tu ID.');
            return;
        }

        // Retrieve stored users and admins
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const admins = JSON.parse(localStorage.getItem('admins')) || [];

        // Check if ID exists
        const userExists = users.some(u => u.id === loginId);
        const adminExists = admins.some(a => a.id === loginId);

        if (userExists || adminExists) {
            currentUserId = loginId; // Save current user ID
            step2Section.style.display = 'block'; // Show password section
            alert('ID válido. Ahora ingresa tu contraseña.');
        } else {
            alert('El ID no existe. Verifica tus datos.');
        }
    });

    // Step 2: Validate Password
    loginButton.addEventListener('click', () => {
        const loginPassword = passwordInput.value;

        if (!loginPassword) {
            alert('Por favor, ingresa tu contraseña.');
            return;
        }

        // Retrieve stored users and admins
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const admins = JSON.parse(localStorage.getItem('admins')) || [];

        // Find user or admin with matching credentials
        const user = users.find(u => u.id === currentUserId && u.password === loginPassword);
        const admin = admins.find(a => a.id === currentUserId && a.password === loginPassword);

        if (user) {
            alert(`Bienvenido Usuario ${user.name}`);
            window.location.href = './user.html'; // Redirect to user panel
        } else if (admin) {
            alert(`Bienvenido Administrador ${admin.name}`);
            window.location.href = './admin/admin.html'; // Redirect to admin panel
        } else {
            alert('Contraseña incorrecta. Inténtalo nuevamente.');
        }
    });
});
