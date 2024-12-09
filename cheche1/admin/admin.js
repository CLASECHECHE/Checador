document.addEventListener('DOMContentLoaded', () => {
    const btnCreateUser = document.getElementById('btn-create-user');
    const btnCreateAdmin = document.getElementById('btn-create-admin');
    const btnLogout = document.getElementById('btn-logout');

    const formContainer = document.getElementById('form-container');
    const userForm = document.getElementById('user-form');
    const adminForm = document.getElementById('admin-form');

    // Mostrar formulario para crear usuario
    btnCreateUser.addEventListener('click', () => {
        formContainer.style.display = 'block';
        userForm.style.display = 'block';
        adminForm.style.display = 'none';
    });

    // Mostrar formulario para crear administrador
    btnCreateAdmin.addEventListener('click', () => {
        formContainer.style.display = 'block';
        userForm.style.display = 'none';
        adminForm.style.display = 'block';
    });

    // Regresar al login
    btnLogout.addEventListener('click', () => {
        window.location.href = '../index.html'; // Ajusta esta ruta según tu estructura
    });

    // Guardar Usuario en Local Storage
    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userId = document.getElementById('user-id').value;
        const userName = document.getElementById('user-name').value;
        const userPassword = document.getElementById('user-password').value;

        // Obtener usuarios almacenados
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ id: userId, name: userName, password: userPassword });
        localStorage.setItem('users', JSON.stringify(users));

        alert(`Usuario con ID ${userId} creado exitosamente.`);
        formContainer.style.display = 'none';
        userForm.reset();
    });

    // Guardar Administrador en Local Storage
    adminForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const adminId = document.getElementById('admin-id').value;
        const adminName = document.getElementById('admin-name').value;
        const adminPassword = document.getElementById('admin-password').value;

        // Obtener administradores almacenados
        let admins = JSON.parse(localStorage.getItem('admins')) || [];
        admins.push({ id: adminId, name: adminName, password: adminPassword });
        localStorage.setItem('admins', JSON.stringify(admins));

        alert(`Administrador con ID ${adminId} creado exitosamente.`);
        formContainer.style.display = 'none';
        adminForm.reset();
    });
});
