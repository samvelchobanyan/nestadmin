import {Body, Controller, Get, Param, Post, Render} from '@nestjs/common';
import { createWidgetDto } from 'src/dto/addWidget.dto';
import {WidgetService} from "./widget.service";

@Controller('widget')
export class WidgetController {
    constructor(private widgetServise: WidgetService){}

    @Get()
    @Render('widgets')
    async GetWidgets(){
        const data = await this.widgetServise.findAll();
        console.log('widgets controller',data)
        return({payload:data})
    }

    @Get('add')
    @Render('add_widget')
    AddWidget(){        
        console.log('add widget')
        // return('add widget')
    }

    @Get(':id')
    async EditWidgets(@Param('id') id:string){
        const data = await this.widgetServise.findOne(id);
        console.log('widgets controller1',data)
        return({payload:data})
    }

    @Post()
    @Render('add_widget')
    SaveWidget(@Body() newWidget: createWidgetDto){
        console.log('controller log',newWidget);      
        this.widgetServise.saveWidget(newWidget);  
    }
}
