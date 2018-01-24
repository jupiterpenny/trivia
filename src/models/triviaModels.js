import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const QuestionsSchema = new Schema({
    question: {
        type: String,
        required: "Enter a question"
    },
    answer: {
      type: String,
      required: "Enter an answer to your question"
    },
    hint: {
        type: String,
        required: "Enter a hint to your question"
    },
    category: {
        type: String,
        required: "Enter a category for your question"
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});

