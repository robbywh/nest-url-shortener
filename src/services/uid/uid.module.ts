import { Module } from '@nestjs/common';
import { UidService } from './uid.service';

@Module({
  providers: [UidService],
})
export class UidModule {}
