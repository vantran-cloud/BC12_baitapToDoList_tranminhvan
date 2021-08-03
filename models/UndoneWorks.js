import Works from "./Works.js";

export default class UndoneWork extends Works{
    constructor(work) {
        super(work);
        this.status = false;
    };

    renderUndoneWork(){

    };
};