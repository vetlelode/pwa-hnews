export abstract class HnewsStory {
    public id: number;
    private by: string;
    private time: Date;
    private text: string;
    private kids: number[];
    private score: number;
    private title: string;
    private descendants: number;

    constructor(id: number, by: string, time: Date, text: string, kids: number[],
        score: number, title: string, descendants: number) {
        this.id = id;
        this.by = by;
        this.time = time;
        this.text = text;
        this.kids = kids;
        this.score = score;
        this.title = title;
        this.descendants = descendants;
    }

    public setTitle(title: string) {
        this.title = title;
    }

    public getTitle(): string {
        return this.title;
    }

    public getKids(): number[] {
        return this.kids;
    }

}
