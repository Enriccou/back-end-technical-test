import { Controller, Get, Post, Body, Patch, Param, Put } from '@nestjs/common';
import { SiteAccessService } from './site-access.service';
import { CreateSiteAccessDto } from './dto/create-site-access.dto';
import { UpdateSiteAccessDto } from './dto/update-site-access.dto';

@Controller('siteAccess')
export class SiteAccessController {
  constructor(private readonly siteAccessService: SiteAccessService) {}

  @Post()
  async create(@Body() createSiteAccessDto: CreateSiteAccessDto) {
    return this.siteAccessService.create(createSiteAccessDto);
  }

  @Get()
  async findAll() {
    return this.siteAccessService.findAll();
  }

  @Get('oneDateSiteAccess')
  async findOne(@Body('dateSiteAccess') dateSiteAccess: string) {
    return this.siteAccessService.findOne(dateSiteAccess);
  }
  
  @Post('/increment')
  async increment(@Body("dateSiteAccess") dateSiteAccess: string, updateSiteAccessDto: UpdateSiteAccessDto){
    return this.siteAccessService.increment(dateSiteAccess, updateSiteAccessDto);
  }
}
