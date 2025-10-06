import { PartialType } from '@nestjs/mapped-types';
import { CreateSiteAccessDto } from './create-site-access.dto';

export class UpdateSiteAccessDto extends PartialType(CreateSiteAccessDto) {}
