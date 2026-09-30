const CLAVE_TOKEN = 'token';
export function obtenerToken() {
    try {
        return localStorage.getItem(CLAVE_TOKEN);
    }
    catch {
        return null;
    }
}
export function guardarToken(token) {
    try {
        localStorage.setItem(CLAVE_TOKEN, token);
    }
    catch {
        // Si el navegador bloquea el storage, la sesión dura lo que dure la pestaña.
    }
}
export function borrarToken() {
    try {
        localStorage.removeItem(CLAVE_TOKEN);
    }
    catch {
        // Nada que limpiar.
    }
}
//# sourceMappingURL=sesion.js.map