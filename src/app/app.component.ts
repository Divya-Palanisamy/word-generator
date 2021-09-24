import { Component } from '@angular/core';
import arrayOfWords from '../utils/words'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  limit = 10;
  RandomLimit = 0;
  word='';
  RandomWords = '';


  sliderValue(e: any){
    this.limit = e.target.value;
  }

  generateRandom(){
    this.RandomLimit = Math.ceil( Math.random() * 10);
    this.RandomWords = arrayOfWords.slice(0, this.RandomLimit).join(' ');
  }

  generateWords(){
    this.word = arrayOfWords.slice(0,this.limit).join(' ');
  }

  
}
