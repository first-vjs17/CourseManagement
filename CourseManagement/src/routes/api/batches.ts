import { Request, Response, Router } from "express";
import { Teacher, Subject, Batch} from "../../db";
import { BatchModel } from "../../models/Batch";

const route: Router = Router();


route.get("/", (req:Request, res:Response) => {
  Batch.findAll()
    .then((batches:BatchModel[]) => {
      res.status(200).send(batches);
    })
    .catch((error:Error) => {
      res.status(500).send({
        error: "Could not retrieve batches"
      });
    });
});


export default route;