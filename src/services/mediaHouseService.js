import http from './httpService';
import {apiEndPoint} from '../config';

const apiUrl = apiEndPoint + "/media";


export function updateMediaHouse(id, data) {
    return http.patch(`${apiUrl}/${id}`,data);
}

export function getMediaHouses(page = `${apiUrl}/list?page=1`) {
    try{
        return http.get(page);
    } catch (ex) {
        console.log(ex);
    }
}

export function getOwnMediaHouses(page = 1) {
    try{
        return http.get(`${apiUrl}/owned`);
    } catch (ex) {
        console.log(ex);
    }
}
export function getMediaHouse(shortname) {
    try{
        return http.get(`${apiUrl}/${shortname}/information`);
    } catch (ex) {
        console.log(ex);
    }
}

export function uploadAvatar(media, data) {
    return http.post(`${apiUrl}/${media}/upload/avatar`,data);
}
export function uploadCSV(data) {
    return http.post(`${apiUrl}/create/bulk/csv`,data);
}
export function uploadBulkSlotCSV(data,media_house,program) {
    return http.post(`${apiUrl}/${media_house}/program/${program}/slot/create/csv`,data);
}



export function uploadProgramImages(data) {
    return http.post(`${apiEndPoint}/file/upload/images`,data);
}

export function getTypes(page = 1) {
        return http.get(`${apiUrl}/type/list`);
}

export function createType(data) {
    return http.post(`${apiUrl}/type/create`,data);
}
export function createProgram(mediaHouse, data) {
    return http.post(`${apiUrl}/${mediaHouse}/program/create`,data);
}
export function createSlot(mediaHouse,programName, data) {
    return http.post(`${apiUrl}/${mediaHouse}/program/${programName}/slot/create`,data);
}
export function createAgeGroup(data) {
    return http.post(`${apiEndPoint}/age_group/create`,data);
}
export function createLiteracyLevel(data) {
    return http.post(`${apiEndPoint}/literacy_level/create`,data);
}
export function createInterest(data) {
    return http.post(`${apiEndPoint}/interest/create`,data);
}
export function createProfessionalLevel(data) {
    return http.post(`${apiEndPoint}/professional_level/create`,data);
}
export function createCostFactor(data) {
    return http.post(`${apiEndPoint}/cost_factor/create`,data);
}
export function createChannel(data) {
    return http.post(`${apiEndPoint}/channel/create`,data);
}
export function createSubChannel(channel, data) {
    return http.post(`${apiEndPoint}/channel/${channel}/subchannels/create`,data);
}
export function createSchedule(data) {
    return http.post(`${apiEndPoint}/schedule/create`,data);
}
export function createSize(data) {
    return http.post(`${apiEndPoint}/size/create`,data);
}
export function createSocialClass(data) {
    return http.post(`${apiEndPoint}/social_class/create`,data);
}


export function updateAgeGroup(id, data) {
    return http.patch(`${apiEndPoint}/age_group/${id}`,data);
}
export function updateChannel(id, data) {
    return http.patch(`${apiEndPoint}/channel/${id}`,data);
}
export function updateSchedule(id, data) {
    return http.patch(`${apiEndPoint}/schedule/${id}`,data);
}
export function updateSize(id, data) {
    return http.patch(`${apiEndPoint}/size/${id}`,data);
}
export function updateSocialClass(id, data) {
    return http.patch(`${apiEndPoint}/social_class/${id}`,data);
}
export function updateLiteracyLevel(id, data) {
    return http.patch(`${apiEndPoint}/literacy_level/${id}`,data);
}
export function updateInterest(id, data) {
    return http.patch(`${apiEndPoint}/interest/${id}`,data);
}
export function updateProfessionalLevel(id, data) {
    return http.patch(`${apiEndPoint}/professional_level/${id}`,data);
}
export function updateCostFactor(id, data) {
    return http.patch(`${apiEndPoint}/cost_factor/${id}`,data);
}
export function updateSubchannel(channel,id, data) {
    return http.patch(`${apiEndPoint}/channel/${channel}/subchannels/${id}`,data);
}

export function deleteAgeGroup(id) {
    return http.delete(`${apiEndPoint}/age_group/${id}`);
}
export function deleteChannel(id) {
    return http.delete(`${apiEndPoint}/channel/${id}`);
}
export function deleteCostFactor(id) {
    return http.delete(`${apiEndPoint}/cost_factor/${id}`);
}
export function deleteInterest(id) {
    return http.delete(`${apiEndPoint}/interest/${id}`,{name: id});
}
export function deleteLiteracyLevel(id) {
    return http.delete(`${apiEndPoint}/literacy_level/${id}`);
}
export function deleteProfessionalLevel(id) {
    return http.delete(`${apiEndPoint}/professional_level/${id}`);
}
export function deleteSchedule(id) {
    return http.delete(`${apiEndPoint}/schedule/${id}`);
}
export function deleteSize(id) {
    return http.delete(`${apiEndPoint}/size/${id}`);
}
export function deleteSocialClass(id) {
    return http.delete(`${apiEndPoint}/social_class/${id}`);
}
export function deleteSubchannel(channel,id) {
    return http.delete(`${apiEndPoint}/channel/${channel}/subchannels/${id}`);
}


export function getPrograms(mediaHouse) {
    return http.get(`${apiUrl}/${mediaHouse}/program/list`);
}
export function getProgram(mediaHouse,program) {
    return http.get(`${apiUrl}/${mediaHouse}/program/${program}`);
}
export function getSlots(mediaHouse,programName,page=1) {
    return http.get(`${apiUrl}/${mediaHouse}/program/${programName}/slot/list?page=${page}`);
}
export function getSlot(slot_id) {
    return http.get(`${apiEndPoint}/slot/${slot_id}/`);
}

export function getChannels() {
    return http.get(`${apiEndPoint}/channel/list`);
}
export function getSubChannels(channel) {
    return http.get(`${apiEndPoint}/channel/${channel}/subchannels`);
}
export function getMediaHouseByChannel(channel) {
    return http.get(`${apiEndPoint}/channel/${channel}/media/list`);
}
export function getSchedules() {
    return http.get(`${apiEndPoint}/schedule/list`);
}
export function getSizes() {
    return http.get(`${apiEndPoint}/size/list`);
}
export function getSocialClass() {
    return http.get(`${apiEndPoint}/social_class/list`);
}
export function getLiteracyLevel() {
    return http.get(`${apiEndPoint}/literacy_level/list`);
}
export function getInterests() {
    return http.get(`${apiEndPoint}/interest/list`);
}
export function getAgeGroup() {
    return http.get(`${apiEndPoint}/age_group/list`);
}
export function getProfessionalLevel() {
    return http.get(`${apiEndPoint}/professional_level/list`);
}
export function getCostFactor() {
    return http.get(`${apiEndPoint}/cost_factor/list`);
}
export function mapProgramAttributToSelect(data) {
    const newData = [];
    if(Array.isArray(data) && data.length > 0)
        data.map(op => { return newData.push({key: op.id, value: op.name}) });
    return newData;

}
export function mapDataToMultiSelect(data) {
    const newData = [];
    if(Array.isArray(data) && data.length > 0)
        data.map(op => { return newData.push({label: op.name, value: op.id}) });
    return newData;
}
export default {
    getMediaHouses, getOwnMediaHouses, createType, getTypes
}

export function getContactList(mediaHouse){
    return http.get(`${apiEndPoint}/media/${mediaHouse}/contacts`)
}

export function createContact(mediaHouse, data){
    return http.post(`${apiEndPoint}/media/${mediaHouse}/contacts/create`, data)
}

export function getGenders(){
    return http.get(`${apiEndPoint}/gender/list`)
}

export function getMaritalStatus(){
    return http.get(`${apiEndPoint}/marital_status/list`)
}