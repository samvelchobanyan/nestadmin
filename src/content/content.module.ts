import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Content, Tmp } from './models/content.entity';

@Module({
  providers: [ContentService],
  controllers: [ContentController],
  imports: [TypeOrmModule.forFeature([Content,Tmp])]
})
export class ContentModule {}
