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

  @Post('increment')
  async increment(@Body() updateSiteAccessDto: UpdateSiteAccessDto){
    return this.siteAccessService.increment(updateSiteAccessDto);
  }

  @Get()
  async findAll() {
    return this.siteAccessService.findAll();
  }

  @Get(':oneDateSiteAccess')
  async findOne(@Param('oneDateSiteAccess') oneDateSiteAccess: string ) {
    return this.siteAccessService.findOne(oneDateSiteAccess);
  }
  
}
