import { HnewsStory } from './Common'


export class Story extends HnewsStory {
    private url: string;
    constructor(id: number, by: string, time: Date, text: string, kids: number[],
        score: number, title: string, descendants: number, url: string) {
        super(id, by, time, text, kids, score, title, descendants);
        this.url = url;
    }

    public getUrl(): string {
        return this.url;
    }
}


