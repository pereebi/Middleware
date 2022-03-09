import express from "express";
import bakersRoute from "./apis/bakers";
import fishersRoute from "./apis/fishers";

const routes =  express.Router();

const logger = (req : express.Request, res: express.Response, next: Function): void => {
    const route = (`${req.url} was just visited.`);
    console.log(route);
    next();
}
 
routes.get('/', logger, (req: express.Request, res: express.Response) => {
    res.send('Saying hi from the base route');
})

routes.use('/', logger, bakersRoute);

routes.use('/', logger, fishersRoute);



export default routes;