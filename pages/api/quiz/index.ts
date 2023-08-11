import questions from '../questionsDatabase';

const index = (req, res) => {
    res.status(200).json(questions.map(question => question.id));
};

export default index;