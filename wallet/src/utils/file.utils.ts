import fs from "fs";
import path from "path";


export function readJSON(file:string){

    if(!fs.existsSync(file)){
        return {};
    }


    return JSON.parse(
        fs.readFileSync(file,"utf-8")
    );

}



export function writeJSON(
    file:string,
    data:any
){

    const dir =
    path.dirname(file);


    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir,{
            recursive:true
        });
    }


    fs.writeFileSync(
        file,
        JSON.stringify(
            data,
            null,
            2
        )
    );

}