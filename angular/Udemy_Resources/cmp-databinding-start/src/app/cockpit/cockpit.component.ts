import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  //creating 2 new properties and making sure these are events that we can emit. To make them events we need to assign a value to these properties using new EventEmitter<DEFINE_THE_TYPE_OF_EVENT_DATA_YOU_WANT_TO_EMIT>()..
  //Add paranthesis in the end to call the constructor of the EventEmitter and create a new EventEmitter object which is now stored in the below properties.
  //EventEmitter is an object in Angular Framework which allows you to emit your own events.  
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  newServerName = '';
  newServerContent = '';

  onAddServer() {
    //the below emit method will emit a new event of the serverCreated type.
    this.serverCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent })
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({ serverName: this.newServerName, serverContent: this.newServerContent })
  }


}
