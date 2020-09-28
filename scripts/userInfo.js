export class UserInfo {
    constructor({nameSelector, jobSelector}) {
        this._nameSelector = nameSelector;
        this._jobSelector = jobSelector;

        this._nameInput = document.querySelector(this._nameSelector);
        this._jobInput = document.querySelector(this._jobSelector);
    }

    getUserInfo() {
        this._userInfo = {
            name: this._nameSelector.textContent;
            job: this._jobSelector.textContent;
        }
    }

    setUserInfo({name,job}) {
        this._nameInput.textContent = name;
        this._jobInput.textContent = job;
    }
}