import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenParfumesModule } from './men-parfumes/men-parfumes.module';
import { WomenParfumesModule } from './women-parfumes/women-parfumes.module';
import { TrendParfumesModule } from './trend-parfumes/trend-parfumes.module';
import { AdminActionsModule } from './admin-actions/admin-actions.module';

@Module({
  imports: [MenParfumesModule, WomenParfumesModule,TrendParfumesModule, AdminActionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
