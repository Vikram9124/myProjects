import { Component } from '@angular/core';
import { ItemService } from '../item.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  constructor(private itemService: ItemService) {}

  sendItemNameToExpense(itemName: string) {
    this.itemService.setSelectedItem(itemName);
  }
}
