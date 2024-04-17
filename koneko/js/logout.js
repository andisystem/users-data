const logout = () => {
    localStorage.removeItem('code');
    window.location = './';
}

const logoutClick = document.querySelector('#logoutClick');

logoutClick.addEventListener('click', logout);