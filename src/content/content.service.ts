import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Content } from './models/content.entity';

@Injectable()
export class ContentService {
    constructor(
        @InjectRepository(Content)
        private contentRepo: Repository<Content>
    ){}

    findAll(): Promise<Content[]>{
        return this.contentRepo.find();
    }

    findOne(id: string): Promise<Content>{
        return this.contentRepo.findOne(id);
    }
}
