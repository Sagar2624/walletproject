import {Request,Response,NextFunction}
from "express";


export function validate(schema:any){


return (

req:Request,

res:Response,

next:NextFunction

)=>{


try{


schema.parse(
req.body
);


next();


}
catch(error:any){


res.status(400).json({

message:"Validation failed",

errors:
error.errors

});


}



};



}