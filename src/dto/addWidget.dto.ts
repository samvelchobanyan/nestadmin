import { IsNotEmpty, IsString} from "class-validator"
export class createWidgetDto{

    @IsNotEmpty()
    name: string;

    char_1: string;
    char_2: string;
    char_3: string;
    char_4: string;
    
    text_2: string;
    text_1: string;
    text_3: string;
    text_4: string;
    
}