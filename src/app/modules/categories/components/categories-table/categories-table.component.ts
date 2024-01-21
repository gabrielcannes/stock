import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GetCategoriesResponse } from '../../../../models/interfaces/categories/responses/GetCategoriesResponse';
import { EditCategoryAction } from 'src/app/models/interfaces/categories/event/EditCategoryAction';


@Component({
  selector: 'app-categories-table',
  templateUrl: './categories-table.component.html',
  styles: []
})
export class CategoriesTableComponent {
  @Input() public categories: Array<GetCategoriesResponse> = []
  @Output() public categoryEvent = new EventEmitter<EditCategoryAction>()
  public categorySelected!: GetCategoriesResponse
}
