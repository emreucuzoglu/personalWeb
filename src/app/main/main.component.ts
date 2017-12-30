import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/retry';
import {MainService} from './main.service';
import {MainData} from './Data';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  data: MainData;

  constructor(private mainService: MainService) {
  }

  ngOnInit() {
    this.mainService.getData()
      .subscribe(data => this.data = data);
  }

}


