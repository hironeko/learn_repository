import { ItemsController } from './items.controller';
import { ItemsService, PublicItem } from './items.service';
import { CommentsService, Comment } from '../comments/comments.service';

describe('AppController', () => {

    let itemsController: ItemsController;
    let itemsService: ItemsService;
    let commentsService: CommentsService

    beforeEach(async () => {
        itemsService = new ItemsService();
        commentsService = new CommentsService();
        itemsController = new ItemsController(itemsService, commentsService);
    })

    describe('/items', () => {
        it('should return public items', () => {
            jest.spyOn(itemsService, 'getPublicItems').mockImplementation(() => {
                const item: PublicItem = {
                    id: 1,
                    title: 'mock',
                    body: 'mock body'
                }
                return [item]
            })
            expect(itemsController.getItems()).toHaveLength(1);
        });
    });

    describe('/items/1/comments', () => {
        it('should return public item and comments', () => {
            const item: PublicItem = {
                id: 1,
                title: 'mock Title',
                body: ' mock Body'
            }
            const comments: Comment[] = [
                {
                    id: 1,
                    itemId: 1,
                    body: 'mock comments'
                }
            ]

            jest.spyOn(itemsService, 'getItemById').mockImplementation(() => {
                return item
            })
            jest
                .spyOn(commentsService, 'getCommentsByItemId')
                .mockImplementation(() => {
                    return comments
                })

            expect(itemsController.getItemWithComments({ id: '1' })).toEqual({
                item,
                comments
            })
        })
    })
});
