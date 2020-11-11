import ToDo from '../models/ToDo';
import ToDoList from '../models/ToDoPage';

export const dairy = async (req,res) => {
    try {
        const todos = await ToDo.find({})
        
        res.render('dairy',{ pageTitle : 'Dairy', todos })
    } catch(e) {
        console.log(e);
        res.render('dairy',{ pageTitle : 'Dairy',todos :[] })
    }
}

export const monthly = (req,res) => {
    res.render('monthly',{ pageTitle : 'Monthly'})
}

export const weekly = (req,res) => {
    res.render('weekly',{ pageTitle : 'Weekly'})
}

export const getTodos = (req,res) => {
    res.render('todos',{ pageTitle : 'Todos'})
}

export const postTodos = async (req,res) => {
    const { body : { title } } = req;

    const todo = await ToDo.create({
        title,
    });
    console.log(todo);
    
    res.redirect('/');
}

export const todopage = (req,res) => {
    res.render('todopage',{ pageTitle : 'Todopage'})
}

// import한 ToDoList -> export 처리?
export const createTodo = async (req,res) => {
    const { body : { title } } = req;

    const todo = await ToDoList.create({
        title,
    });
    console.log(todo);
    
    res.redirect('/');
}