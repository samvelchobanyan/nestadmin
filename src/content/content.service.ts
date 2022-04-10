import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Content } from './models/content.entity';

@Injectable()
export class ContentService {
    constructor(
        @InjectRepository(Content) private contentRepo: Repository<Content>,
        //@InjectRepository(WidgetTypes) private tmpRepo: Repository<WidgetTypes>

        // @InjectRepository(Tmp)
        // private tmpRepo: Repository<Tmp>;
    ){}

    findAll(): Promise<Content[]>{
            // const tmpData = new WidgetTypes();
            // tmpData.name = 'vacho';
            // tmpData.description = 'nkarich';
            //
            // this.tmpRepo.save(tmpData);

        return this.contentRepo.find();
    }

    findOne(id: string): Promise<Content>{
        return this.contentRepo.findOne(id);
    }
}
