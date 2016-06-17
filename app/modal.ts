import dialogs =require("ui/dialogs");
import {Page, ShownModallyData} from "ui/page";
import {Button} from "ui/button";
import {StackLayout} from "ui/layouts/stack-layout";
import {Observable, EventData} from "data/observable";
import placeholder = require("ui/placeholder");

var context: any;
var test:string = "sample text";
var closeCallback: Function;

export function onShownModally(args: ShownModallyData) {
    closeCallback = args.closeCallback;
    console.log(closeCallback);
    console.log()
}

export function loaded(args:EventData){
    var page:Page =<Page> args.object;
    var stacklayout:StackLayout = <StackLayout> page.getViewById("layout"); 
     var button = new Button();
     test ="sample text";
     button.text="Click";
     stacklayout.addChild(button);
     
     
     button.on(Button.tapEvent, function (args) {
        dialogs.alert({title:"test" , message :"Anything" , okButtonText:"ok"})
        .then(function(){
            console.log("Dialog closed!");
            closeCallback(test);
        });
        
        
        
    });
    
    
    
}

export function onTap(args:EventData){
    closeCallback(test);
}