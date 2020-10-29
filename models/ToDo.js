import mongoose from "mongoose";

const ToDoSchema = new mongoose.Schema({
    title : {
        type : String,
        required : "Title is required"
    },
})

const model = mongoose.model("ToDo", ToDoSchema);

export default model;