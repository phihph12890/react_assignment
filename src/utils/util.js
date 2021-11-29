import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export const prices = (x) => {
    return x = x.toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND'
    });
}

