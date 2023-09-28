export default class CNPJAPI {
    static valida(body) {
        return new Promise((resolve, reject) => {
         if (!body.CNPJ) {
                console.log("CAIU NO REJECT")
                reject(
                    {
                        code: 403,
                        valido: false,
                        message: "Voce deve informar um CNPJ",
                        bodyExample: {
                            "CNPJ":"10000/0001"
                        },
                    }
                )
            }else {
                if(bodyCNPJ.length != 14) {
                    console.log("Diferente de 14")
                    reject(
                        {
                            code: 403,
                            valido: false,
                            message: "O CNPJ deve ter 14 digitos",
                            bodyExample: {
                                "CNPJ":"10000/0001"
                            },
                        }
                    )
                }
                resolve(
                    {
                        code: 200,
                        valido: true,
                        message: `O CNPJ: ${body.CNPJ} é valido`,
                    }
                )
            }
        })
    }
}