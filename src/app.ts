import { urlencoded,json } from "body-parser";
import express,{ Request,Response,NextFunction} from "express";
import connection from "./db/config";
import todoRoutes from "./routes/todos";

const app = express();
app.use(json());
app.use(urlencoded({extended:true}));
app.use("/todos",todoRoutes);
app.use((err:Error,
          req: Request,  
          res:Response,
          next:NextFunction
)=>{
    res.status(500).json({message:err.message});
})

connection.sync().then(()=>{
    console.log("Database synced successfully");    
}).catch((err)=>{
    console.log("Err",err);    
});

app.listen(3000); 