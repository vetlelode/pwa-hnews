import { Story, Comment } from '@/Story'
import Axios from 'axios'

/*
    Api interaction is done here
*/

export class Api {

    //Method for fetching a story or comment from the hnews api
    static QueryStory(id: number): Promise<Story> {
        let promiseData = Axios.get("https://hacker-news.firebaseio.com/v0/item/" + id + ".json")
            .then(response => {
                return response.data

            })
            .catch(error => {
                console.log(error);
            })
        return promiseData.then(data => {
            return new Story(data.id, data.by, new Date(""), data.text, data.kids,
                data.score, data.title, data.descendants, data.url);
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
                    i++
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
                    stories.push(new Comment(response.data.id, response.data.parent, response.data.by, new Date(""), response.data.text, response.data.kids,
                        response.data.score, response.data.title, response.data.descendants))

                })
        }
        console.log(stories);
        return stories;
    }

}
export default { Api };