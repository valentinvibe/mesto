export default class Api {
    constructor(options) {
        this.url = options.baseUrl;
        this.headers = options.headers;
    }

    getUserData() {
        return fetch(`${this.url}/users/me`, {
            headers: this.headers
        })
        .then(this.checkRequest)
        .then(res => console.log(res))
        .catch(this.catchErr)
    }

    getInitialCards() {

    }

    updateUserData(event) {

    }

    addNewCard(event) {

    }

    deleteCard(id) {

    }

    putLikes(cardId) {

    }

    deleteLikes(cardId) {

    }

    checkRequest(res) {
        if (res.ok) return res.json();
        return Promise.reject(new Error(res.status));
    }
    
    catchErr(err) {
        return Promise.reject(new Error(err.message));
    }

}


