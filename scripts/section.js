import {list} from '../src/utils/constants.js';

export default class Section {
    constructor({items,renderer}, list) {
        this._items = items;
        this._renderer = renderer;
        this._list = document.querySelector(list);
    }

    renderAllItems() {
        this._items.forEach(item => {
            this.renderer(item)
        })
    }

    addItem(cardElement) {
        this.list.prepend(cardElement);
    }
}