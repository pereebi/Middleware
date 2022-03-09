import express from "express";

const bakersRoute =  express.Router();
 
bakersRoute.get('/', (req: express.Request, res: express.Response) => {
    res.send('With sweet thoughts from the bakers');
})

export default bakersRoute;