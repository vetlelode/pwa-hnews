import { Story } from '@/model/Story'
import { Comment } from '@/model/Comment'
import Axios from 'axios'

/*
    Api interaction is done here
*/

export class Api {
    //Method for fetching a story or comment from the hnews api
    static async QueryStory(id: number): Promise<Story> {
        return Axios.get("https://hacker-news.firebaseio.com/v0/item/" + id + ".json")
            .then(response => {
                return new Story(response.data.id, response.data.by, new Date(response.data.time * 1000), response.data.text, response.data.kids,
                    response.data.score, response.data.title, response.data.descendants, response.data.url);
            })
    }


    //Method for fetching the top stories from the hnews frontpage
    static QueryFrontPage(type: string = "topstories", from: number = 0, to: number = 30): number[] {
        let stories: number[] = [];
        let url: string = ""
        if (type == "topstories" || type == "newstories" || type == "beststories")
            url = "https://hacker-news.firebaseio.com/v0/" + type + ".json"
        else
            url = "https://hacker-news.firebaseio.com/v0/topstories.json"

        Axios.get(url)
            .then(response => {
                let i: number = from;
                console.log(from, to)
                for (let resp of response.data) {
                    if (i >= from && i <= to) {
                        stories.push(parseInt(resp))
                        console.log(i)
                    } i++;
                }
            })
            .catch(error => {
                console.log(error);
            })
        return stories;
    }

    static QueryComments(children: number[]): Comment[] {
        let stories: Comment[] = [];
        for (let childID of children) {
            Axios.get("https://hacker-news.firebaseio.com/v0/item/" + childID + ".json")
                .then(response => {
                    stories.push(new Comment(response.data.id, response.data.parent, response.data.by, new Date(response.data.time * 1000), response.data.text, response.data.kids,
                        response.data.score, response.data.title, response.data.descendants));
                })
                .catch(error => {
                    console.log(error);
                })
        }
        return stories;
    }

}
export default { Api };