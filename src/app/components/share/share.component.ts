import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {
  @Input('headerCard') headerCard: string;
  constructor() { }

  ngOnInit() {
  }

}
