import { OnInit } from '@angular/core';
import { Component,  } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'appTest3';


  constructor(private spinner: NgxSpinnerService) {
}

ngOnInit(): void {
  this.spin();
}

spin():void{
  this.spinner.show()
   setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 2000);

}


}
