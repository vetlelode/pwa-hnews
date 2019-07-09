
/*
    Class for what is defined in the hnews api as "stories"
*/
export class Story {
    public id: number;
    private type: string;
    private by: string;
    private time: Date;
    private text: string;
    private kids: number[];
    private score: number;
    private title: string;
    private descendants: number;
    private url: string;

    constructor(id: number, type: string, by: string, time: Date, text: string, kids: number[], score: number, title: string, descendants: number, url: string) {
        this.id = id;
        this.type = type;
        this.by = by;
        this.time = time;
        this.text = text;
        this.kids = kids;
        this.score = score;
        this.title = title;
        this.descendants = descendants;
        this.url = url;
    }

    setTitle(title: string) {
        this.title = title;
    }
    getTitle(): string {
        return this.title;
    }
    getUrl(): string {
        return this.url;
    }


}
