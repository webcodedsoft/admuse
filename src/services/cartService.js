import http from './httpService';
import {apiEndPoint} from '../config';


export function addToCart(data) {
    const cart = JSON.parse(localStorage.getItem('admuse_cart'));
    if(cart === null || cart.length === 0) {
        localStorage.setItem('admuse_cart',JSON.stringify([data]))
    } else {
        cart.push(data);
        localStorage.setItem('admuse_cart',JSON.stringify(cart));
    }
    return true;
}

export function getCartSize() {
    const cart = JSON.parse(localStorage.getItem('admuse_cart'));
    if(cart !== null) {
        return cart.length;
    } else {
        return 0;
    }
}

export function getCart() {
    const cart = JSON.parse(localStorage.getItem('admuse_cart'));
    return cart;
}

export function removeCartItem(index) {
    const cart = JSON.parse(localStorage.getItem('admuse_cart'));
    cart.splice(index,1);
    localStorage.setItem('admuse_cart',JSON.stringify(cart));
    return cart;
}

export function emptyCart() {
    const cart = [];
    localStorage.setItem('admuse_cart',JSON.stringify(cart));
    return true;
}


export function saveBooking(slots) {
    try{
        return http.post(`${apiEndPoint}/cart/book`,slots);
    } catch (ex) {
        console.log(ex);
    }
}

export function getBookings(page = `${apiEndPoint}/booking/list?page=1`) {
    try{
        return http.get(page);
    } catch (ex) {
        console.log(ex);
    }
}