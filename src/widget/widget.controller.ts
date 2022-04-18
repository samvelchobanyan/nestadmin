import {Body, Controller, Get, Post, Render} from '@nestjs/common';
import { createWidgetDto } from 'src/dto/addWidget.dto';
import {WidgetService} from "./widget.service";

@Controller('widget')
export class WidgetController {
    constructor(private widgetServise: WidgetService){}

    @Get()
    @Render('add_widget')
    async GetWidgets(){
        const data = await this.widgetServise.findAll();
        console.log(data[1])
        return({payload:data})
    }

    @Post()
    @Render('add_widget')
    SaveWidget(@Body() newWidget: createWidgetDto){
        console.log('controller log',newWidget);      
        this.widgetServise.saveWidget(newWidget);  
    }
}
