import Express from "express";
const app = Express();
const puerto = 8070;
app.use(Express.json());
const timeout = 30000;
let nro = 0;
let envio = '{"resultados": 2,"items": [{"id": "13717","username": "adrian2005","email": "adri*****26@gmail.com","phone": "+580******9804","document": "25000000"},{"id": "28124","username": "manuel23","email": "manu*****ma@gmail.com","phone": "+580******9095","document": "25000000"}],"term": "04247539"}';
const datos = JSON.parse(envio);
app.get("/gecko/api/payall/term/:username/hash/:hash", (request, response) =>
{
    response.setHeader('content-type', 'application/json');
    console.log("<<<<<Nueva Peticion:>>>>>" + (nro++))
    console.log(request.body)
    console.log("<<<<<Fin Peticion>>>>>" + (nro))
    
        response.status(200).json(datos)
      
})
app.listen(puerto, () => console.log("Escuchando en el puerto: "+ puerto))
