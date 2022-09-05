export class TodolistService {
    todolist = ["Web","Programmer","Thoyib","PHP"];

    getJsonTodoList(){
        return JSON.stringify({
            code: 200,
            status: "OK",
            data: this.todolist.map((val,id)=>{
                return {
                    id:id,
                    todo:val
                }
            })
        });
    }

    getTodoList(req,res){
        res.write(this.getJsonTodoList());
        res.end();
    }

    createTodo(req,res){
        req.addListener("data",(data)=>{
            const body = JSON.parse(data.toString());
            this.todolist.push(body.todo);

            res.write(this.getJsonTodoList());
            res.end();
        });        
    }

    updateTodo(req,res){
        req.addListener("data",(data)=>{
            const body = JSON.parse(data.toString());
            if (this.todolist[body.id]) {
                this.todolist[body.id] = body.todo;
            }

            res.write(this.getJsonTodoList());
            res.end();
        }); 
    }

    deleteTodo(req,res){
        req.addListener("data",(data)=>{
            const body = JSON.parse(data.toString());
            if (this.todolist[body.id]) {
                this.todolist.splice(body.id,1);
            }

            res.write(this.getJsonTodoList());
            res.end();
        }); 
    }
}