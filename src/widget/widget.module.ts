import { Module } from '@nestjs/common';
import { WidgetController } from './widget.controller';
import { WidgetService } from './widget.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {WidgetTypes} from "./widget.entity";

@Module({
  controllers: [WidgetController],
  providers: [WidgetService],
  imports: [TypeOrmModule.forFeature([WidgetTypes])]
})
export class WidgetModule {}
