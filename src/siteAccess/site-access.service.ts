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

  async findAll() {
    return await this.siteAccessModel.find().exec();
  }

  async findOne(dateSiteAccess: string) {
    return await this.siteAccessModel.findOne({dateSiteAccess: dateSiteAccess}).exec();
  }

  //async update(dateAccess: string, updateSiteAccessDto: UpdateSiteAccessDto) {
    //const updateSiteAccess = this.siteAccessModel.updateOne({dateSiteAccess: dateAccess}, updateSiteAccessDto)
    //return await updateSiteAccess.exec()
  //}

  async increment(dateSiteAccess: string, updateSiteAccessDto: UpdateSiteAccessDto) {
    const updateSiteAccess = this.siteAccessModel.updateOne({dateSiteAccess: dateSiteAccess}, { $inc: { countSiteAccess: +1 } })
    return await updateSiteAccess.exec()
  }
}

