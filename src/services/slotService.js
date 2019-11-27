import http from './httpService';
import {apiEndPoint} from '../config';

const apiUrl = apiEndPoint + "/slots";

export function getSlotsByQuery({query, reach_min, reach_max, price_min, price_max, media_house_ids, channel_ids, sub_channel_ids}) {
    try{
        return http.get(`${apiUrl}/search?query=${query}&reach_min=${reach_min}&reach_max=${reach_max}&price_min[]=${price_min}&price_max=${price_max}&media_house_ids[]=${media_house_ids}&channel_ids[]=${channel_ids}&sub_channel_ids[]=${sub_channel_ids}`);
    } catch (ex) {
        console.log(ex);
    }
}

export function getSlots(page = `${apiUrl}`) {
    //${apiUrl}/list?page=1
    try{
        return http.get(page);
    } catch (ex) {
        console.log(ex);
    }
}

export default {
    getSlotsByQuery
}

