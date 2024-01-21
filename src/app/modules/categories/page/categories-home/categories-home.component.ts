import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoriesService } from '../../../../services/categories/categories.service';
import { DialogService } from 'primeng/dynamicdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { GetCategoriesResponse } from 'src/app/models/interfaces/categories/responses/GetCategoriesResponse';

@Component({
  selector: 'app-categories-home',
  templateUrl: './categories-home.component.html',
  styleUrls: [],
})
export class CategoriesHomeComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject()
  public categoriesDatas: Array<GetCategoriesResponse> = []

  constructor(
    private categoriesService: CategoriesService,
    private dialogService: DialogService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllCategories()
  }
  getAllCategories() {
    this.categoriesService
      .getAllCategories()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.length > 0) {
            this.categoriesDatas = response
          }
        }, error: (error) => {
          console.log(error);
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao buscar categorias!',
            life: 3000
          })
          this.router.navigate(['/dashboard'])
        }
      })
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
