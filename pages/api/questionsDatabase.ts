import QuestionModel from '../../model/QuestionModel';
import ResponseModel from '../../model/ResponseModel';

const questions: QuestionModel[] = [
    new QuestionModel(306, 'Qual animal/inseto transmite a Doença de Chagas?',
        [
            ResponseModel.wrong('Abelha'),
            ResponseModel.wrong('Barata'),
            ResponseModel.wrong('Pulga'),
            ResponseModel.right('Barbeiro'),
        ]
    ),
    new QuestionModel(202, 'Qual fruto é conhecido no Norte e Nordeste como "JERIMUM"',
        [
            ResponseModel.wrong('Caju'),
            ResponseModel.wrong('Côco'),
            ResponseModel.wrong('Chuchu'),
            ResponseModel.right('Abóbora'),
        ],
    ),
];

export default questions;