import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {

  messages : string[] = [];
  
  constructor() { }

  addMessage(msg :string){
    this.messages.push(msg);
  }
  
  clearMessages(){
    this.messages =[];
  }
}
