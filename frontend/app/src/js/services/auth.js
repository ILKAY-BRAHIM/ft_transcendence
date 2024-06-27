export function isAuthenticated() {
    // Example logic for checking authentication
    return !!localStorage.getItem('authToken');
}

export function login(token) {
    localStorage.setItem('authToken', token);
}

export function logout() {
    localStorage.removeItem('authToken');
}
