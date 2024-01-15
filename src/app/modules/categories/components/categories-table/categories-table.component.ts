import { Component, Input } from '@angular/core';
import { GetCategoriesResponse } from '../../../../models/interfaces/categories/responses/GetCategoriesResponse';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-categories-table',
  templateUrl: './categories-table.component.html',
  styles: []
})
export class CategoriesTableComponent {
  @Input() public categories: Array<GetCategoriesResponse> = []
}
