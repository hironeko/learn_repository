import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module'
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [ItemsModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
