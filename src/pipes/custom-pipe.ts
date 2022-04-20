import { ArgumentMetadata } from "@nestjs/common";
import { Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class CustomValidationPipe implements PipeTransform{
    transform(value: any, metadata: ArgumentMetadata) {
        console.log('console pipe',value);
        
        return value;
    }  

}