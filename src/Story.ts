
/*
    Class for what is defined in the hnews api as "stories"
*/
export class Story {
    id: number;
    deleted: boolean;
    type: string;
    by: string;
    time: Date;
    text: string;
    kids: number[];
    score: number;
    title: string;
    descendants: number[];
    
    constructor(id: number,deleted: boolean, type: string, by: string, time: Date, text: string,kids: number[], score: number, title: string, descendants: number[]){
        this.id = id;
        this.deleted = deleted;
        this.type = type;
        this.by = by;
        this.time = time;
        this.text = text;
        this.kids = kids;
        this.score = score;
        this.title = title;
        this.descendants = descendants;
    }
    
}
