import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  boxId: number = 1;
  currentRoomId: number = 0;  // this will be displayed in HTML
  newRoomId: number = 0;  // this will be bound to the input field

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.refreshCurrentRoomId();
  }

  refreshCurrentRoomId(): void {
    this.http.get<any[]>('http://77.99.153.55:8080/api/v1/roomsFromBox?boxId=' + this.boxId).subscribe(
      response => {
        if(response.length > 0){
            this.currentRoomId = response[0].roomId;  // update currentRoomId with the response
            console.log('currentRoomId has been updated: ' + this.currentRoomId);
        } else {
            console.log('No data received from the server.');
        }
      },
      error => {
        console.log(error);
      }
    );
}


  updateBoxToRoom(boxId: number, roomId: number): void {
    const url = 'http://77.99.153.55:8080/api/v1/boxToRooms/' + boxId;
    const headers = { 'Content-Type': 'application/json' };
    const body = { "boxId": boxId, "roomId": roomId };
    
    this.http.put(url, body, { headers }).subscribe(
      response => {
        console.log(response);
        this.refreshCurrentRoomId();  // Refresh currentRoomId after updating
      },
      error => {
        console.log(error);
      }
    );
  }
}
