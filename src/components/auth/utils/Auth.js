export function isTokenValid() {
    const token = localStorage.getItem('token');
    return !!token;
}