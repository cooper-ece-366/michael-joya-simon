//Michael Bentivegna
//Contains all API endpoints needed for the app


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

//Get object of logged in user
export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

//Update data of the logged in user
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

//Get only the users that satisfy the parameters in the body of the POST request
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

//Get all friends of the logged in user
export function getFriends() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/friends/friend",
        method: 'GET'
    })
}

//Get all outgoing friend requests
export function getFriendRequests() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/friends/requester",
        method: 'GET'
    })
}

//Get all incoming friend requests
export function getFriendAddressee() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/friends/addressee",
        method: 'GET'
    })
}

//Accept a friend request
export function postAccept(id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/friends/accept/" + id,
        method: 'GET'
    })
}

//Create new friend request
export function postAdd(id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/friends/add/" + id,
        method: 'GET'
    })
}

//Remove a friend request
export function postDelete(id) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/friends/decline/" + id,
        method: 'GET'
    })
}

//Create new meeting for logged in user
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

//Get all outgoing meeting invitations
export function getMeetingOutgoing() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/meeting/outgoing",
        method: 'GET'
    })
}

//Get all incoming meeting invitations
export function getMeetingIncoming() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/meeting/incoming",
        method: 'GET'
    })
}

//Get all confirmed meetings
export function getMeetingScheduled() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/meeting/meet",
        method: 'GET'
    })
}

//Accept an incoming meeting request
export function acceptMeeting(input) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/meeting/accept/" + input,
        method: 'GET'
    })
}

//Remove a potential meeting
export function removeMeeting(input) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/meeting/remove/" + input,
        method: 'GET'
    })
}
