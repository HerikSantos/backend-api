import Express from "express";
import swaggerUi from "swagger-ui-express";

import { AppDataSource } from "./database";
import { route } from "./routes";
import swaggerDocument from "./swagger.json";

const app = Express();

app.use(Express.json());

app.use(route);

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

AppDataSource.initialize()
    .then(() =>
        app.listen(3333, () => {
            console.log("rodando na porta 3333");
        }),
    )
    .catch((err) => {
        console.log("Banco de dados sexoooo" + err);
    });

export { app };
