import { shuffle } from '../../../functions/arrays';
import questions from '../questionsDatabase';

const index = (req, res) => {
    const ids = questions.map(question => question.id);
    res.status(200).json(shuffle(ids));
};

export default index;