import { BaseError } from "./BaseError";
 export class MissingFields extends BaseError{
    constructor(){
        super ("parameter not found ", 404)
    }
 }