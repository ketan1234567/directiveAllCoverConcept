import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
@Directive({
    selector:'[cpLoop]'
})
export class cpLoopDecorator{
    constructor(private templateRef:TemplateRef<any>,private viewContainer:ViewContainerRef){}

    @Input('cpLoop') set loop(num:number){
        for(var i=0; i < num;i++){
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        
    }

}