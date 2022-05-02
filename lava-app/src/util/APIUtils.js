import { API_BASE_URL, ACCESS_TOKEN } from '../constants';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};

export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export function updateCurrentUser(updateProfile) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/update",
        method: 'POST',
        body: JSON.stringify(updateProfile)
    });
}

export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/auth/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

export function getFilteredUsers(filterRequest) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/list",
        method: 'POST',
        body: JSON.stringify(filterRequest)
    });
}

export function getFriends() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/friends/friend",
        method: 'GET'
    })
}

export function getFriendRequests() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/friends/requester",
        method: 'GET'
    })
}

export function getFriendAddressee() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/friends/addressee",
        method: 'GET'
    })
}

export function postAccept(id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/friends/accept/" + id,
        method: 'GET'
    })
}

export function postAdd(id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/friends/add/" + id,
        method: 'GET'
    })
}

export function postDelete(id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/friends/decline/" + id,
        method: 'GET'
    })
}

export function addMeeting(data) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/meeting/add",
        method: 'POST',
        body: JSON.stringify(data)
    });
}

export function getMeetingOutgoing() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/meeting/outgoing",
        method: 'GET'
    })
}

export function getMeetingIncoming() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/meeting/incoming",
        method: 'GET'
    })
}

export function getMeetingScheduled() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/meeting/meet",
        method: 'GET'
    })
}

export function acceptMeeting(input) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/meeting/accept/" + input,
        method: 'GET'
    })
}

export function removeMeeting(input) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/meeting/remove/" + input,
        method: 'GET'
    })
}
