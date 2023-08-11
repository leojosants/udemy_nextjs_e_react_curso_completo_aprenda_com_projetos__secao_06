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
    new QuestionModel(203, 'Qual é o coletivo de cães?',
        [
            ResponseModel.wrong('Manada'),
            ResponseModel.wrong('Alcateia'),
            ResponseModel.wrong('Rebanho'),
            ResponseModel.right('Matilha'),
        ],
    ),
    new QuestionModel(204, 'Qual é o triângulo que tem todos os lados diferentes?',
        [
            ResponseModel.wrong('Equilátero'),
            ResponseModel.wrong('Isóceles'),
            ResponseModel.wrong('Trapézio'),
            ResponseModel.right('Escaleno'),
        ],
    ),
];

export default questions;