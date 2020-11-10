import mongoose from "mongoose";

const ToDoTagSchema = new mongoose.Schema({
    tagName : {
        type : String,
        required : "Title is required"
    },
    // Color_light : {
    //     type : String,
    //     required : "Color_light is required"
    // },
    tagColor : {
        type : String,
        required : "Color_dark is required"
    },
})


const model = mongoose.model("ToDoTag", ToDoTagSchema);

export default model;