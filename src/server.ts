import { app } from ".";
import { AppDataSource } from "./database";

AppDataSource.initialize()
    .then(() =>
        app.listen(3000, () => {
            console.log("rodando na porta 3000");
        }),
    )
    .catch((err: Error) => {
        console.log("Banco de dados " + err.stack);
    });
