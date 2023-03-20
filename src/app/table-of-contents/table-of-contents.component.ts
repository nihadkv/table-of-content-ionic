import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.scss'],
})
export class TableOfContentsComponent  implements OnInit {

  @Input() contents: any
  @Input() detectedElms: any;
  constructor() { }

  ngOnInit() {}

}
