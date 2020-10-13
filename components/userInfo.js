export default class UserInfo {
    constructor({ nameSelector, jobSelector, photoSelector, api}) {
        this._nameSelector = nameSelector;
        this._jobSelector = jobSelector;
        this._photoSelector = document.querySelector(photoSelector);
        this._api = api;

        this._nameInput = document.querySelector(this._nameSelector);
        this._jobInput = document.querySelector(this._jobSelector);
    }

    getUserInfo() {
        this._userInfo = {
            name: this._nameInput.textContent,
            job: this._jobInput.textContent
        }
        return this._userInfo;
    }

    setUserInfo({ name, job }) {
        this._nameInput.textContent = name;
        this._jobInput.textContent = job;
    }
}