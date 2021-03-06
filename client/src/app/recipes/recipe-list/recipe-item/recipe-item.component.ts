import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input()
  recipe!: Recipe;
  @Input()
  index!: number;


  constructor(private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  // onSelected() {
  //   const name = this.route.snapshot.params['name'];
  //   this.recipeService.getRecipe(name)


  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }

}
