import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directiveAllCoverConcept';
  myColor = '';
  showCpIf=true;
  showCpDelay = false;
   delayInSec = 0;
   
   changeCondition(flag: boolean) {
    console.log(this.showCpIf = flag);
      
   }
}
