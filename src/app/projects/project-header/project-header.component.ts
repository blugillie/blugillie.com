import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-header',
  templateUrl: './project-header.component.html',
  styleUrls: ['./project-header.component.less']
})
export class ProjectHeaderComponent implements OnInit {

  @Input() title: string;
  @Input() logoUrl: string;


  constructor() { }

  ngOnInit() {
  }

}
