import express, { response } from 'express';

const app = express();



/*
    GET : buscas
    POST : criação
    PUT : alteração
    DELETE : deletar
    PATH : alterar uma informação especifica 

*/

app.get("/", (request, response) => {
    return response.json({
        message: "Olá NLW 05",
    });
});

app.post("/users" ,(request, response) => {
    return response.json({
        messsage: "Usuario salvo com sucesso",
    });
});


app.listen(3333, () => console.log("Servers is runing on port 3333"));