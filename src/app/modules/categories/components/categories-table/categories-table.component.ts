import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GetCategoriesResponse } from '../../../../models/interfaces/categories/responses/GetCategoriesResponse';
import { EditCategoryAction } from 'src/app/models/interfaces/categories/event/EditCategoryAction';
import { CategoryEvent } from 'src/app/models/enums/categories/CategoryEvent';
import { DeleteCategoryAction } from 'src/app/models/interfaces/categories/event/DeleteCategoryAction';


@Component({
  selector: 'app-categories-table',
  templateUrl: './categories-table.component.html',
  styles: []
})
export class CategoriesTableComponent {
  @Input() public categories: Array<GetCategoriesResponse> = []
  @Output() public categoryEvent = new EventEmitter<EditCategoryAction>()
  @Output() public deleteCategoryEvent = new EventEmitter<DeleteCategoryAction>()
  public categorySelected!: GetCategoriesResponse
  public addCategoryAction = CategoryEvent.ADD_CATEGORY_ACTION
  public editCategoryAction = CategoryEvent.EDIT_CATEGORY

  handleDeleteCategoryEvent(category_id: string, category_name: string): void {
    if (category_id !== '' && category_name !== '') {
      this.deleteCategoryEvent.emit({ category_id, category_name })
    }
  }
}
