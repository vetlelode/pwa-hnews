

abstract class hnewsStory {
    public id: number;
    private type: string;
    private by: string;
    private time: Date;
    private text: string;
    private kids: number[];
    private score: number;
    private title: string;
    private descendants: number;

    constructor(id: number, type: string, by: string, time: Date, text: string, kids: number[], score: number, title: string, descendants: number) {
        this.id = id;
        this.type = type;
        this.by = by;
        this.time = time;
        this.text = text;
        this.kids = kids;
        this.score = score;
        this.title = title;
        this.descendants = descendants;
    }

    setTitle(title: string) {
        this.title = title;
    }
    getTitle(): string {
        return this.title;
    }

}

export class Story extends hnewsStory {
    private url: string;
    constructor(id: number, type: string, by: string, time: Date, text: string, kids: number[], score: number, title: string, descendants: number, url: string) {
        super(id, type, by, time, text, kids, score, title, descendants);
        this.url = url;
    }
    getUrl(): string {
        return this.url;
    }
}
