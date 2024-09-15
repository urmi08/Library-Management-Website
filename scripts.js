document.addEventListener('DOMContentLoaded', () => {
    const popupContainer = document.getElementById('popupContainer');

    const showPopup = (title, buttons) => {
        popupContainer.innerHTML = `
            <h2>${title}</h2>
            ${buttons.map(button => `<button onclick="window.location.href='${button.href}'">${button.text}</button>`).join('')}
            <button onclick="closePopup()">Close</button>
        `;
        popupContainer.style.display = 'block';
    };

    const closePopup = () => {
        popupContainer.style.display = 'none';
    };

    document.getElementById('booksBtn').addEventListener('click', () => {
        showPopup('Books', [
            { text: 'Insert', href: 'books_insert.html' },
            { text: 'Update', href: 'books_update.html' },
            { text: 'Delete', href: 'books_delete.html' }
        ]);
    });

    document.getElementById('authorBtn').addEventListener('click', () => {
        showPopup('Author', [
            { text: 'Insert', href: 'author_insert.html' },
            { text: 'Update', href: 'author_update.html' },
            { text: 'Delete', href: 'author_delete.html' }
        ]);
    });

    document.getElementById('orderBtn').addEventListener('click', () => {
        window.location.href = 'order.html';
    });

    document.getElementById('customerBtn').addEventListener('click', () => {
        window.location.href = 'customer.html';
    });

    document.getElementById('aboutUsBtn').addEventListener('click', () => {
        window.location.href = 'about_us.html';
    });

    window.closePopup = closePopup;
});
