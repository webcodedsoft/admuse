import http from './httpService';
import {apiEndPoint} from '../config';

const apiUrl = apiEndPoint + "/user";

export function createUser(data) {
    return http.post(apiUrl + '/create',data);
}

export function getAllUsers(page = `${apiEndPoint}/users/all?page=1`) {
    try{
        return http.get(page);
    } catch (ex) {
        console.log(ex);
    }
} 

export function getUserById(id) {
    try{
        return http.get(apiUrl + '/'+id+'/view');
    } catch (ex) {
        console.log(ex);
    }
}

export function verifyPayment(reference) {
    return http.post(apiUrl + '/wallet/verify/'+reference);
}

export function fundWallet(data) {
    return http.post(apiUrl + '/wallet/credit/',data);
}

export function updateUser(id, data) {
    return http.post(`${apiUrl}/${id}/edit`,data);
}

export function getUser() {
    try{
        return http.get(apiUrl + '/profile');
    } catch (ex) {
        console.log(ex);
    }
}

export function getBalance() {
    return null;
}
export function getWalletHistory() {
    try{
        return http.get(apiUrl + '/transactions');
    } catch (ex) {
        console.log(ex);
    }
}
export function getBanks() {
    try{
        return http.get('https://api.paystack.co/bank');
    } catch (ex) {
        console.log(ex);
    }
}
export function getNameOnBank(bank_code, acc) {
    try{
        return http.get(`${apiUrl}/bank/user_info?number=${acc}&bank_code=${bank_code}`);
    } catch (ex) {
        console.log(ex);
    }
}
export function createBankAccount(data) {
    try{
        return http.post(`${apiUrl}/bank/create`,data);
    } catch (ex) {
        console.log(ex);
    }
}


export default {
    getUser, getBalance, getWalletHistory
}

