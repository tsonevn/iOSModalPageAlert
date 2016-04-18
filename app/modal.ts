import dialogs =require("ui/dialogs");
import {Page} from "ui/page";
import {Button} from "ui/button";
import {StackLayout} from "ui/layouts/stack-layout";
import {Observable, EventData} from "data/observable";
import placeholder = require("ui/placeholder");

export function loaded(args:EventData){
    var page:Page =<Page> args.object;
    var stacklayout:StackLayout = <StackLayout> page.getViewById("layout"); 
     var button = new Button();
     button.text="Click";
     stacklayout.addChild(button);
     
     button.on(Button.tapEvent, function (args) {
        dialogs.alert({title:"test" , message :"Anything" , okButtonText:"ok"})
        .then(function(){
            console.log("Dialog closed!");
        });
    });
    
    
    
}

