import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Entities } from './models/content.entity';

@Module({
  providers: [ContentService],
  controllers: [ContentController],
  imports: [TypeOrmModule.forFeature([Entities])]
})
export class ContentModule {}
