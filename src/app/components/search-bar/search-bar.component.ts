import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
   styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  //   @Input() search='test'; 
  //  @Output() searchchange=new EventEmitter<string>();


  // @Output() searchButtonClick = new EventEmitter();
  // searchClick() {
  //   this.searchButtonClick.emit();
  // }
  // updateSearch(value: string) {    
  // this.searchchange.emit(value);
  // }
 @Input() search: string = ''; 
  @Output() searchChange = new EventEmitter<string>();

  updateSearch(value: string) {    
    this.searchChange.emit(value);
  }
}
