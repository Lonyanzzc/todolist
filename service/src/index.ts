import "reflect-metadata";
import { Request, Response } from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import { AppRoutes } from "./routes";


const app = express();
app.use(bodyParser.json());

AppRoutes.forEach(route => {
    app[route.method](route.path, (request: Request, response: Response, next: Function) => {
        route.action(request, response)
            .then(() => next)
            .catch(err => next(err));
    });
});

app.listen(3306, () => {
    console.log("服务器成功运行");
})
