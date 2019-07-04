import { Story } from '@/Story'
import Axios from 'axios'

/*
    Api interaction is done here
*/

export class Api {
    //Method for fetching a story or comment from the hnews api
    static QueryStory(id: number): Story {
        let queriedStory: Story = new Story(1, false, "a", "a", new Date(), "a", [1, 2], 0, "a", [1, 2])
        Axios.get("https://hacker-news.firebaseio.com/v0/item/" + id + ".json")
            .then(response => {
                console.log(response.data);
            })
        return queriedStory;
    }
    //Method for fetching the top stories from the hnews frontpage
    static QueryFrontPage(): number[] {
        let stories: number[] = [];
        Axios.get("https://hacker-news.firebaseio.com/v0/topstories.json")
            .then(response => {
                for (let resp of response.data) {
                    if (typeof resp !== 'number')
                        resp = parseInt(resp);
                    if (typeof resp === 'number')
                        stories.push(resp);
                }
            })
        return stories;
    }

}
export default { Api };