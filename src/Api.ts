import {Story} from '@/Story'
import Axios from 'node_modules/axios'

/*
    Api interaction is done here
*/

class Api {
    static QueryStory(id: number) : Story {
        let queriedStory: Story = new Story(1, false, "a", "a", new Date(), "a", [1,2], 0, "a", [1,2]);
        Axios.get("https://hacker-news.firebaseio.com/v0/item/"+ id +".json")
        .then(response => {
            console.log(response.data);
        })
        return queriedStory;
    }

}
export default {Api};