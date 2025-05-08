import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'twowaybinding13';
  // two way binding me formsmodule integrate karte hai iske liye hum ngModule se karte hai [()] yeh banana box bolte hai isse
  // iska means hai ke hum aise karte hao code ke .ts and .html wale file sink me hote hai
// jo changes hum .ts me karte hai wo .html me dekhte hai and jo changes .ts me karrte  hai wo .html me dekhte hai
name='aniln'
v1='nandini'
changeName(event:Event){
   const val=(event.currentTarget as HTMLInputElement).value;
  this.name=val;
}
}
