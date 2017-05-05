import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "search",
    pure: false,
})
export class SearchPipe implements PipeTransform {
    transform(players: any, term: any): any {
        // check if search term is undefined
        if(term === undefined) return players;
        // return updated players array
        return players.filter(function(player){
            return player.user.username.toLowerCase().includes(term.toLowerCase());
        })
    }
}