/**
 * @author Vijay Sharma
 */

 import  express, { Request, Response, urlencoded } from 'express';
 import  path  from 'path';
 

 import apiRoutes from './routes/api';

 const app=express();
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));
 app.use("/", express.static(path.join(__dirname, "public")));
 

 app.use('/',apiRoutes);

 app.use((req:Request,res:Response)=>{
     res.status(404).send('Not Found');
 });

 
 app.listen(8000,()=>{
     console.log("Server is running at http://localhost:8000");
     
 });