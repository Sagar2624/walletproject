import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";


const options = {


    definition: {


        openapi: "3.0.0",


        info: {

            title: "Custody Backend Service API",

            version: "1.0.0",

            description:
            "Ethereum Sepolia custody wallet service"

        },


        servers: [

            {
                url: "http://localhost:3000",
                description: "Local server"
            }

        ]

    },


    apis: [

        "./src/routes/*.ts"

    ]


};



export const swaggerSpec =
    swaggerJsdoc(options);



export {
    swaggerUi
};