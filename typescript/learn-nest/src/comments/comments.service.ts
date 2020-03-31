import { Injectable } from '@nestjs/common'

export interface Comment {
    id: number;
    itemId: number;
    body: string;
}

const comments: Comment[] = [
    {
        id: 1,
        itemId: 1,
        body: 'first'
    },
    {
        id: 2,
        itemId: 2,
        body: 'second',
    },
    {
        id: 3,
        itemId: 3,
        body: 'third'
    }

]

@Injectable()
export class CommentsService {
    getCommentsByItemId(itemId: number): Comment[] {
        return comments.filter(comment => comment.itemId === itemId)
    }
}