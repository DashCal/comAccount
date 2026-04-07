
// document.title = "Sign In | 登录 - LocalWu Content Manager"

// let Copyright = document.getElementById('Copyright');
// Copyright.textContent = 'Copyright © LocalWu. Passion Drives.';
// let SystemName = document.getElementById('SystemName');
// SystemName.textContent = 'Sign In | 登录';

document.getElementById('signInForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let errorMessage = document.getElementById('errorMessage');
    if (username === 'your_username' && password === 'your_password' && false) {
        // window.location.href = '/dashboard.html';
    } else {
        errorMessage.textContent = '用户名或密码错误';
        setTimeout(() => {
            errorMessage.textContent = '';
        }, 3000);
    }
});
