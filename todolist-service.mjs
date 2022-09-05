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
        const json = this.getJsonTodoList();
        res.write(json);
        res.end();
    }
}