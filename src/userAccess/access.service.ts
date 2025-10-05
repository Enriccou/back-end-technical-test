import { Injectable } from '@nestjs/common';
import { CreateAccessDto } from './dto/create-access.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AccessService {

  constructor(
    @InjectModel('Access') private readonly accessModel: Model<CreateAccessDto>,
  ) {}

  async create(createAccessDto: CreateAccessDto) {
    const createAccess = new this.accessModel(createAccessDto);
    return await createAccess.save();
  }

  async findAll() {
    return await this.accessModel.find().exec();
  }

  async findCount(id: string) {
    return await this.accessModel.find({userID: id}).countDocuments().exec()
  }

  async findAccess(id: string) {
    return await this.accessModel.find({userID: id}).exec()
  }
}
