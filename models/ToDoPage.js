import mongoose from "mongoose";

const ToDoListSchema = new mongoose.Schema({
    toDo : {
        type : String,
        required : "Todo is required"
    },
    tagColor : {
        type : String,
        required : "Color is required"
    },
    startTime : {
        type : Number,
        required: "Start Time is required"
    },
    finishTime : {
        type : Number,
        required : "Finish time is required"
    },
    option : {
        type : Boolean,
        required : "Option is required"
    }
})

const model = mongoose.model("ToDoList", ToDoListSchema);

export default model;