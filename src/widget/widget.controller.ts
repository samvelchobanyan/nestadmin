import {Controller, Get, Render} from '@nestjs/common';
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
}
