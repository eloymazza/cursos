import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output("srvCreated") serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output("bpCreated") bluePrintCreated = new EventEmitter<{bluePrintName: string, bluePrintContent: string}>();
  // newServerName = '';
  @ViewChild('serverContentInput', { static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(newServerNameInput: HTMLInputElement ){
    this.serverCreated.emit({
      serverName: newServerNameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBluePrint(newServerNameInput: HTMLInputElement ){
    this.bluePrintCreated.emit({
      bluePrintName: newServerNameInput.value, 
      bluePrintContent: this.serverContentInput.nativeElement.value
    });
  }

}
