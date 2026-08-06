import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminActionsModule } from './admin-actions/admin-actions.module';
import { ParfumesModule } from './parfumes/parfumes.module';

@Module({
  imports: [AdminActionsModule, ParfumesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
