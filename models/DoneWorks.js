import Works from "./Works.js";

export default class DoneWork extends Works{
    constructor(work) {
        super(work);
        this.status = true;
    };

    renderDoneWork(){

    };
};