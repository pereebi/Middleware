import express from "express";

const fishersRoute =  express.Router();
 
fishersRoute.get('/fishers', (req: express.Request, res: express.Response) => {
    res.send('Alot of seafood on this end');
})

export default fishersRoute;