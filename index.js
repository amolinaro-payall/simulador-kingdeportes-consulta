import Express from "express";
const app = Express();
const puerto = 8085;
app.use(Express.json());
const timeout = 30000;
let nro = 0;
app.post("/gecko/api/payall/payin/", (request, response) =>
{
    console.log("<<<<<Nueva Peticion:>>>>>" + (nro++))
    console.log(request.body)
    console.log("<<<<<Fin Peticion>>>>>" + (nro))
    
    if(request.body.transaction_c2p.destination_bank_id == '0163' && request.body.transaction_c2p.trx_type == 'compra')
    {
        setTimeout(() =>
        {
        response.status(400).send(
            {
                "Merchant_Identify":
                {
                    "integratorId": "1",
                    "merchantId": "150332",
                    "terminalId": "1"
                },
                "transaction_c2p_response":
                {
                    "processing_date": "2019-09-12 03:07:53 VET",
                    "trx_status": "approved",
                    "trx_type": "compra",
                    "payment_method": "c2p",
                    "payment_reference": "0057718281656",
                    "invoice_number": "113466",
                    "amount": 1.00,
                    "currency": "ves",
                    "trx_internal_status": "0000",
                    "authorization_code": "002166",
                    "service_fee": "0"
                }
            }
            )
        }, timeout);
    }else{
        response.status(200).send(
            {
                "Merchant_Identify":
                {
                    "integratorId": "1",
                    "merchantId": "150332",
                    "terminalId": "1"
                },
                "transaction_c2p_response":
                {
                    "processing_date": "2019-09-12 03:07:53 VET",
                    "trx_status": "approved",
                    "trx_type": "compra",
                    "payment_method": "c2p",
                    "payment_reference": "0057718281656",
                    "invoice_number": "113466",
                    "amount": 1.00,
                    "currency": "ves",
                    "trx_internal_status": "0000",
                    "authorization_code": "002166"
                }
            }
        )
        }
    })
app.listen(puerto, () => console.log("Escuchando en el puerto: "+ puerto))