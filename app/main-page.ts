import { EventData } from "data/observable";
import { Page } from "ui/page";

var page:Page;

export function onLoaded(args: EventData) {
    // Get the event sender
    page = <Page>args.object;
}
export function btnClick(args){
    page.showModal("modal", "" , function(arg:string){
        console.log("value module page "+arg);
    },true); 
}