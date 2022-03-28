import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Entities } from './models/content.entity';

@Injectable()
export class ContentService {
    constructor(
        @InjectRepository(Entities)
        private contentRepo: Repository<Entities>
    ){}

    findAll(): Promise<Entities[]>{
        return this.contentRepo.find();
    }

    findOne(id: string): Promise<Entities>{
        return this.contentRepo.findOne(id);
    }
}
