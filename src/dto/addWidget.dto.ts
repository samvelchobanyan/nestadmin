import { IsNotEmpty, IsOptional, IsString} from "class-validator"
export class createWidgetDto{

    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsString()
    char_1: string;
    @IsOptional()
    @IsString()
    char_2: string;
    @IsOptional()
    @IsString()
    char_3: string;
    @IsOptional()
    @IsString()    
    char_4: string;
    
    @IsOptional()
    @IsString()
    text_1: string;
    @IsOptional()
    @IsString()
    text_2: string;
    @IsOptional()
    @IsString()    
    text_3: string;
    @IsOptional()
    @IsString()
    text_4: string;
    
}