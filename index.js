import Express from "express";
const app = Express();
const puerto = 8070;
app.use(Express.json());
const timeout = 30000;
let nro = 0;
app.post("/gecko/api/payall/term/", (request, response) =>
{
    console.log("<<<<<Nueva Peticion:>>>>>" + (nro++))
    console.log(request.body)
    console.log("<<<<<Fin Peticion>>>>>" + (nro))
    
    if(request.body)
    {
        response.status(200).send(
            {
                "resultados": 2,
                "items": [
                  {
                    "id": "13717",
                    "username": "adrian2005",
                    "email": "adri*****26@gmail.com",
                    "phone": "+580******9804",
                    "document": "25000000"
                  },
                  {
                    "id": "28124",
                    "username": "manuel23",
                    "email": "manu*****ma@gmail.com",
                    "phone": "+580******9095",
                    "document": "25000000"
                  }
                ],
                "term": "04247539"
              }
        )
    }else
    {
        response.status(200).send(
            {
                "resultados": 2,
                "items": [
                  {
                    "id": "13717",
                    "username": "adrian2005",
                    "email": "adri*****26@gmail.com",
                    "phone": "+580******9804",
                    "document": "25000000"
                  },
                  {
                    "id": "28124",
                    "username": "manuel23",
                    "email": "manu*****ma@gmail.com",
                    "phone": "+580******9095",
                    "document": "25000000"
                  }
                ],
                "term": "04247539"
              }
        )
    }
})
app.listen(puerto, () => console.log("Escuchando en el puerto: "+ puerto))