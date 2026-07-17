import app from "./app";
import { ENV } from "./config/env";

import "./scheduler/balance.scheduler";


app.listen(
    ENV.PORT,
    () => {

        console.log(
            `Server running on port ${ENV.PORT}`
        );

    }
);