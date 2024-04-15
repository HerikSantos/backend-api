import Express from "express";
import swaggerUi from "swagger-ui-express";

import { route } from "./routes";
import swaggerDocument from "./swagger.json";

const app = Express();

app.use(Express.json());

app.use(route);

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export { app };
