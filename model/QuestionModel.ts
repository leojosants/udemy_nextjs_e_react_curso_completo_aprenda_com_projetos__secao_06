import ResponseModel from "./ResponseModel";

export default class QuestionModel {
    #id: number;
    #statement: string;
    #answers: ResponseModel[];
    #hit: boolean;

    constructor(
        id: number,
        statement: string,
        answers: ResponseModel[],
        hit = false,
    ) {
        this.#id = id;
        this.#statement = statement;
        this.#answers = answers;
        this.#hit = hit;
    };

    get id() {
        return this.#id;
    };

    get statement() {
        return this.#statement;
    };

    get answers() {
        return this.#answers;
    };

    get hit() {
        return this.#hit;
    };

    get answered() {
        for (let answer of this.#answers) {
            if (answer.revealed) return true;
        };
        return false;
    };

};