import { Injectable } from '@nestjs/common';
import { CreateSiteAccessDto } from './dto/create-site-access.dto';
import { UpdateSiteAccessDto } from './dto/update-site-access.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SiteAccessService {

  constructor(
    @InjectModel('siteAccess') private readonly siteAccessModel: Model<CreateSiteAccessDto>
  ) {}

  async create(createSiteAccessDto: CreateSiteAccessDto) {
    return await new this.siteAccessModel(createSiteAccessDto).save();
  }

  async increment(updateSiteAccessDto: UpdateSiteAccessDto) {
    return await this.siteAccessModel.findOneAndUpdate(updateSiteAccessDto, { $inc: { countSiteAccess: +1 }}).exec()
  }

  async findAll() {
    return await this.siteAccessModel.find().exec();
  }

  async findOne(oneDateSiteAccess: string) {
    return await this.siteAccessModel.find({dateSiteAccess: oneDateSiteAccess}).exec();
  }

}

