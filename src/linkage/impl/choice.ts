import { StoryElementId } from '../../element';
import { StoryNode } from '../../node';
import { StoryLinkage } from '../api';

export class Choice extends StoryLinkage {
    public constructor(
        protected id: StoryElementId,
        protected text: string,
        protected previousNode: StoryNode,
        protected nextNode: StoryNode
    ) {
        super(id, previousNode, nextNode);
    }

    public getText(): string {
        return this.text;
    }
}
