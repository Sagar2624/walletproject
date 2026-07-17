import express from "express";

import walletRoutes from "./routes/wallet.routes";
import withdrawalRoutes from "./routes/withdrawal.routes";

import {
    swaggerUi,
    swaggerSpec
} from "./swagger/swagger";

import {
    errorMiddleware
} from "./middleware/error.middleware";


const app = express();


app.use(express.json());


// Swagger
app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);


// Health Check
app.get("/", (req, res) => {

    res.json({

        service: "Custody Backend Service",

        network: "Ethereum Sepolia",

        status: "running"

    });

});



// API Routes

app.use(
    "/api",
    walletRoutes
);


app.use(
    "/api",
    withdrawalRoutes
);



// Error Handler

app.use(errorMiddleware);



export default app;