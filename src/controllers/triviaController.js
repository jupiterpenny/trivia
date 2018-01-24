import mongoose from 'mongoose';
import { QuestionsSchema} from '../models/triviaModels'

const Questions = mongoose.model('Questions', QuestionsSchema);

export const addNewQuestion = (req, res) => {
    let newQuestion = new Questions(req.body);

    newQuestion.save((err, Questions) => {
        if (err) {
            res.send(err);
        }
        res.json(Questions);
    });
};

export const getQuestions = (req, res) => {
    Questions.find({}, (err, Questions) =>{
        if (err) {
            res.send(err);
        }
        res.json(Questions);
    });
};

export const getQuestionWithId = (req, res) => {
    Questions.findById(req.params.QuestionsId, (err, Questions) =>{
        if (err) {
            res.send(err);
        }
        res.json(Questions);
    });
};

export const updateQuestion = (req,res) =>{
    Questions.findOneAndUpdate({ _id: req.params.QuestionsId}, req.body, { new: true }, (err, Questions) =>{
        if (err) {
            res.send(err);
        }
        res.json(Questions);
    });
};


export const deleteQuestion = (req, res) =>{
    Questions.remove({ _id: req.params.QuestionsId}, (err, Questions) => {
        if (err) {
            res.send(err);
        }
        res.json( {message: 'Successfully deleted questions'});
    })
}