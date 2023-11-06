import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
@Directive({
    selector:'[cpDelay]'
})
export class cpDelayDirective{
    constructor(private templatRef:TemplateRef<any>,private conatiner:ViewContainerRef){}

    @Input() set cpDelay(delay:number){
        this.conatiner.clear()

        setTimeout(() => {
            this.conatiner.createEmbeddedView(this.templatRef);
        }, delay);
    

    }

}