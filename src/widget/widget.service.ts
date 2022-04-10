import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {WidgetTypes} from "./widget.entity";
import {Repository} from "typeorm";

@Injectable()
export class WidgetService {
    constructor(
        @InjectRepository(WidgetTypes) private WidgetRepo: Repository<WidgetTypes>
    ){}

    findAll(): Promise<WidgetTypes[]>{
        // const tmpData = new WidgetTypes();
        // tmpData.name = 'image_text';
        // tmpData.description = 'image_text';
        // tmpData.conf = {"first":{"field_name":"test widget","field_type":"rich_text1"},"secong":{"field_name":"test widget","field_type":"rich_text1"}};
        // this.WidgetRepo.save(tmpData);

        const widget_data = this.WidgetRepo.find();
        console.log(widget_data);
        // console.log(JSON.parse())
        return widget_data;
    }
}
