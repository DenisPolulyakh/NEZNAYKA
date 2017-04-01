import {Component, OnInit, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'plugins-list',
  templateUrl: './plugins-list.html',
  providers: [],
  styles: [require('./slyle.scss')]
})

export class PluginsList implements OnInit {
  @Input() title:string;

  constructor() {
  }

  ngOnInit() {
  }


}
