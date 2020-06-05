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
    static QueryFrontPage(): number[] {
        let stories: number[] = [];
        Axios.get("https://hacker-news.firebaseio.com/v0/topstories.json")
            .then(response => {
                let i: number = 0;
                for (let resp of response.data) {
                    if (i >= 30)
                        break;
                    else if (typeof resp !== 'number')
                        resp = parseInt(resp);
                    if (typeof resp === 'number')
                        stories.push(resp);
                    i++;
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