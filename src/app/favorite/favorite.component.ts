import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent /* implements OnInit */ {
  @Input('isFavorite')
  isSelected: boolean = false;

  @Output() change = new EventEmitter();

  isFavorite: boolean | undefined;

  // constructor() {}
  // ngOnInit() {}
  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit();
  }
}
