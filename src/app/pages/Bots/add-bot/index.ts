import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {ImportService} from '../../../shared/import.service.ts';
import {NotificationsService} from 'angular2-notifications';

@Component({
  selector: 'add-bot-form',
  templateUrl: './import-form.html',
  providers: [ImportService, NotificationsService],
  styleUrls: ['./style.scss'],
})

export class BotComponent implements OnInit {
  @Input() title:string;

  public options = {
    timeOut: 5000,
    lastOnBottom: true,
    clickToClose: true,
    maxLength: 0,
    maxStack: 7,
    showProgressBar: true,
    pauseOnHover: true,
    preventDuplicates: false,
    preventLastDuplicates: 'visible',
    rtl: false,
    animate: 'scale',
    position: ['right', 'bottom']
  };
  private loadingFile:boolean = false
  private formData:FormData = new FormData();

  constructor(private importService:ImportService,
              private _notificationsService:NotificationsService) {
  }

  ngOnInit() {
  }

  fileChange(event) {
    this.formData = null;
    let fileList:FileList = event.target.files;
    if (fileList.length > 0) {
      let file:File = fileList[0];
      this.formData.append('uploadFile', file, file.name);
    }


  }

  add() {
    this._notificationsService.success(
      'Success',
      'Бот успешно добавлен',
      this.options
    )
  }
}
