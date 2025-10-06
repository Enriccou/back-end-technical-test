import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('Users') private readonly userModel: Model<CreateUserDto>,
  ) {}

  async findAll() {
    return await this.userModel.find().exec();
  }

  async findOne(id: string) {
    return await this.userModel.findById(id).exec();
  }

  async create(createUserDto: CreateUserDto) {
    const hashPassword = await bcrypt.hash(createUserDto.password, 10);
    const createdUser = new this.userModel({...createUserDto, password: hashPassword});
    return await createdUser.save();
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const updateUser = this.userModel.updateOne({_id: id}, updateUserDto)
    return await updateUser.exec()
  }

  async delete(id: string) {
    return await this.userModel.deleteOne({_id: id}).exec();
  }
}
