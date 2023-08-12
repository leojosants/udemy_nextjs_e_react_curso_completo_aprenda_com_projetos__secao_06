import { shuffle } from "../functions/arraysFn";
import AnswerModel from "./AnswerModel";

export default class QuestionModel {
    #id: number;
    #statement: string;
    #answers: AnswerModel[];
    #hit: boolean;

    constructor(
        id: number,
        statement: string,
        answers: AnswerModel[],
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

    get notAnswered() {
        return !this.answered;
    };

    toAnswerWith(indice: number): QuestionModel {
        const hit = this.#answers[indice]?.right;

        const answers = this.#answers.map((answer, i) => {
            const answerSelected = indice === i;
            const mustReveal = answerSelected || answer.right;
            return mustReveal ? answer.toReveal() : answer;
        });

        return new QuestionModel(this.id, this.statement, answers, hit);
    };

    shuffleAnswers(): QuestionModel {
        let mixedAnswers = shuffle(this.#answers);
        return new QuestionModel(this.#id, this.#statement, mixedAnswers, this.#hit);
    };

    static createUsingObject(obj: QuestionModel): QuestionModel {
        const answers = obj.answers.map(answer => AnswerModel.createUsingObject(answer));
        return new QuestionModel(obj.id, obj.statement, answers, obj.hit);
    };

    convertToObject() {
        return {
            id: this.#id,
            answered: this.answered,
            hit: this.#hit,
            statement: this.#statement,
            answers: this.#answers.map(answer => answer.convertToObject()),
        };
    };
};