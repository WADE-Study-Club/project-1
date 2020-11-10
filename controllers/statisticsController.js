import ToDo from '../models/ToDo';
import ToDoTag from '../models/ToDoTag';

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

// req 객체는 클라이언트의 request에 대한 정보,
// res 객체는 서버가 클라이언트에게 response할 정보.
// 따라서 res.render('todos', { title: 'Todos' }) 는
// 서버가 클라이언트에게 todos.ejs를 렌더링하여 보내겠다는 의미이다
// ejs 파일이 렌더링되고, html이 되어 화면에 보여짐.

export const postTodos = async (req,res) => {
    const { body : { title } } = req;

    const todo = await ToDo.create({
        title
    });
    console.log(todo + 'sss');
    res.render('todos',{ pageTitle : 'Todos'})
    
    // res.send(req.body);

    // res.redirect('/');
    //데이터 보내고, 로드되는 페이지.
}

export const dailyPage = (req,res) => {
    res.render('dailyPage',{ pageTitle : 'dailyPage'})
}

export const setPlan = async (req,res) => {
    try {
        const todotags = await ToDoTag.find({})
        
        res.render('setPlan',{ pageTitle : 'setPlan', todotags })
    } catch(e) {
        console.log(e);
        res.render('setPlan',{ pageTitle : 'setPlan',todotags :[] })
    }
}


export const postDailyPage = async (req,res) => {
    const { body : { tagName, tagColor } } = req;

    const colorTag = await ToDoTag.create({
        tagName,
        tagColor 
    });

    // res.send(req.body);

    res.render('dailyPage',{ pageTitle : 'dailyPage'})

    console.log(colorTag);
    
    // res.redirect('/dailyPage');
    //데이터 보내고, 로드되는 페이지.
}