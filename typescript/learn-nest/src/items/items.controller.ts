import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ItemsService, PublicItem } from './items.service';
import { Comment, CommentsService } from '../comments/comments.service';
import { CreateItemDTO } from './item.dto';

interface GetItemWIthCOmmentsResponseType {
    item: PublicItem;
    comments: Comment[];
}

@Controller('items')
export class ItemsController {
    constructor(
        private readonly itemsService: ItemsService,
        private readonly commentsService: CommentsService
    ) { }

    @Post()
    createItem(@Body() CreateItemDTO: CreateItemDTO) {
        return
    }
    @Get()
    getItems(): PublicItem[] {
        return this.itemsService.getPublicItems();
    }

    @Get(':id/comments')
    getItemWithComments(
        @Param()
        param: {
            id: string
        }
    ): GetItemWIthCOmmentsResponseType {
        const item = this.itemsService.getItemById(+param.id)
        const comments = this.commentsService.getCommentsByItemId(+param.id)

        return { item, comments }
    }
}
