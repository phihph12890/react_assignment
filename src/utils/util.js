import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";

export const prices = (x) => {
    return x = x.toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND'
    });
}

export const ErrorMessage = (error) => toast.error(error);
export const SuccessMessage = (success) => toast.success(success);
export const WarningMessage = (warning) => toast.warning(warning);

export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false
    }
    if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user'));
    } else {
        return false
    }
}
export const authenticated = (accessToken) => {
    const user = jwt_decode(accessToken);
    if (typeof window !== 'undefined') {
        return localStorage.setItem('user', JSON.stringify(user));
    }
}


