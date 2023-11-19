import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private selectedItem = new BehaviorSubject<string>('');

  constructor() {}

  setSelectedItem(item: string) {
    this.selectedItem.next(item);
  }

  getSelectedItem() {
    return this.selectedItem.asObservable();
  }
}
