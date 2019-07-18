import { HnewsStory } from '@/model/Common'
export class Comment extends HnewsStory {
    private parent: number;
    constructor(id: number, parent: number, by: string,
        time: Date, text: string, kids: number[], score: number, title: string, descendants: number) {
        super(id, by, time, text, kids, score, title, descendants);
        this.parent = parent;
    }

    public getParent(): number {
        return this.parent;
    }
}