// import { response } from 'express';
import http from 'http';
import {TodolistService} from "./todolist-service.mjs";

const service = new TodolistService();
const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","application/json");
    // if (req.method === "GET") {
    //     service.getTodoList(req,res);        
    // }
    switch (req.method) {
        case "GET":
            service.getTodoList(req,res);
            break;
        case "POST":
            service.createTodo(req,res);
            break;
        case "PUT":
            service.updateTodo(req,res);
            break;
        case "DELETE":
            service.deleteTodo(req,res);
            break;
    
        default:
            break;
    }
})

server.listen(3000);