import { AfterViewInit, Directive, ElementRef, Input } from "@angular/core";


@Directive({
    selector:'[cpColor]'
})


export  class cpColorDirective implements AfterViewInit{

     // Initialize with an empty string

    constructor(private elf:ElementRef){}

    ngAfterViewInit(): void {
        this.elf.nativeElement.style.color='green';
       
    }

}