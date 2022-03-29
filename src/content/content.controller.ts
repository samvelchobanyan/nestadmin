import { Controller, Get, Render } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('content')
export class ContentController {
    constructor(private contentService: ContentService){}

    @Get()
    @Render('content_list')
    async getAllAcontent(){
        const content_data = await this.contentService.findAll()
        return({payload: content_data})
    }

}
