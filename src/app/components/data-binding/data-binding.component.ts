import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html'
  // styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  interpolatedString: string = "Hey, there! I'm defined in the DataBindingComponent";
  interpolatedNumber: number = 3;
  interpolatedBoolean: boolean = true;

  btnClass: string = 'btn btn-outline-primary';
  btnText: string = "Submit";
  btnClassDisabled: string = 'btn btn-outline-danger';
  disabledText: string = "Disabled :(";
  btnClassEnabled: string = 'btn btn-outline-success';
  enabledText: string = "Enabled! :)"

  showButtonText: string = "Show the picture!";
  isDisplayed: boolean = false;
  imageWidth: number = 250;

  listItemText:string = "";

  username: string = "";
  password: string = "";
  email: string = "";
  name: string = "";

  constructor() { }

  ngOnInit() {
  }


  showPicture(): void {
    this.isDisplayed = !this.isDisplayed;
  }

  showText(): void {
    this.listItemText = "Event Binding => mind blown";
  }

  hideText(): void {
    this.listItemText = "";
  }
}
