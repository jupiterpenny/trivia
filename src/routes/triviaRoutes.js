import {
    addNewQuestion,
    getQuestionWithId,
    getQuestions,
    updateQuestion,
    deleteQuestion
} from '../controllers/triviaController';


const routes = (app) => {
        app.route('/Questions')
        .get((req, res, next) => {
            //middleware
            console.log(`Request from ${req.originalUrl}`)
            console.log(`Request type ${req.method}`)
            next();
        }, getQuestions)


         //post endpoint
        .post(addNewQuestion);


        app.route('/Questions/:QuestionsId')
            //get specific question

            .get(getQuestionWithId)

            // put request
            .put (updateQuestion)



    //         (req, res) =>
    // res.send('Put request successfull')
                //generic
            //delete request
            .delete(deleteQuestion);
}

export default routes;


