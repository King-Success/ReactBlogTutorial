import axios from 'axios';

export const FETCH_POST = 'FETCH_POSTS';
const ROOT_URL = 'http://reduxblog.herokuapp.com/api/';
const API_KEY = '?key=asdfljh';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}posts${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}