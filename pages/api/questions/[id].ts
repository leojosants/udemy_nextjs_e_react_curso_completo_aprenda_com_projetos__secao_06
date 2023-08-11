// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import questions from '../questionsDatabase';

export default function handler(req, res) {
    const idSelected = +req.query.id;
    const onlyQuestionOrAnything = questions.filter(question => question.id === idSelected);

    if (onlyQuestionOrAnything.length === 1) {
        const questionSelected = onlyQuestionOrAnything[0];
        res.status(200).json(questionSelected.convertToObject());
    } else {
        res.status(204).send();
    }
};
