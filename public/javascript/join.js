async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const site_offered = document.querySelector('#site-offered').value.trim();
    const site_username = document.querySelector('#site-username').value.trim();
    const site_password = document.querySelector('#site-password').value.trim();
    const site_wanted = document.querySelector('#site-wanted').value.trim();

    if (username && email && password && site_offered && site_username && site_password && site_wanted) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password,
                site_offered,
                site_username,
                site_password,
                site_wanted
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            console.log('success');
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);