import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularCustomPagination';
  data: any = {
  	currentPage: 0,
  	totalNoOfPages: 20
  }

  goToPage = number => {
  	this.data.currentPage = number;
  }
}
