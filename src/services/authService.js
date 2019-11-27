import http from './httpService';
import {apiEndPoint} from '../config';
import jwtDecode from 'jwt-decode';

const apiUrl = apiEndPoint + "/auth";
const tokenKey = "admall-auth-token";

export async function login(email, password) {
    const {data} = await http.post(apiUrl+'/open',{ email, password});
    if(data.result.token) {
        const { user } = data.result;
        const userObject = JSON.stringify({ id: user.id, name: user.name, type: user.type, email: user.email});
        localStorage.setItem(tokenKey,data.result.token);
        localStorage.setItem('adm_user', userObject);
    }
    return data;
}

export function register(data) {
    return http.post(apiUrl + '/new',data);
}

export function loginWithJwt(token) {
    localStorage.setItem(tokenKey,token);
}

export function getCurrentUser() {
    try{
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
    }
    catch(e) {
        return null;
    }
}

export function getCurrentUserObject() {
    try{
        const userObj = localStorage.getItem('adm_user');
        return JSON.parse(userObj);
    }
    catch(e) {
        return null;
    }
}

export function getAuthToken() {
    try{
        const jwt = localStorage.getItem(tokenKey);
        return jwt;
    }
    catch(e) {
        return null;
    }
}

export function logout() {
    localStorage.removeItem(tokenKey);
    localStorage.removeItem('adm_user');
}

export default {
    login, loginWithJwt, register, getCurrentUser, getCurrentUserObject, getAuthToken, logout
}

