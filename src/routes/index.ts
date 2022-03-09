import express from "express";
import bakersRoute from "./apis/bakers";
import fishersRoute from "./apis/fishers";

const routes =  express.Router();

const logger = (req : express.Request, res: express.Response, next: Function): void => {
    console.log('the middleware is working');
    next();
}
 
routes.get('/', logger, (req: express.Request, res: express.Response) => {
    res.send('Saying hi from the base route');
})

routes.use('/bakers', logger, bakersRoute);

routes.use('/fishers', logger, fishersRoute);



export default routes;