import { Controller, Get, Render } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('content')
export class ContentController {
    constructor(private contentService: ContentService){}

    @Get()
    @Render('content_list')
    getAllAcontent(){
        this.contentService.findAll().then((payload)=>{
           console.log('controller',payload)
           return payload;
        })
    }

}
