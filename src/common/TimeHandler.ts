
export class TimeHandler {
    //Emulate the "x hours ago from Hackernews comments and stories"
    static HoursSince(timeStamp: Date): string {
        let hours = Math.abs(new Date().getTime() - timeStamp.getTime()) / 36e5;
        if (hours < 1)
            return Math.round(hours * 60) + " minutes ago"
        else if (hours < 24)
            if (hours > 2) return Math.round(hours) + " hours ago"
            else return Math.round(hours) + " hour ago"
        else
            if (hours > 2) return Math.round(hours / 24) + " days ago"
            else return Math.round(hours / 24) + " day ago"
    }

}