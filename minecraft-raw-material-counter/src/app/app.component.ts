import { Component, OnInit } from '@angular/core';
import { MinecraftRecipeService } from 'src/services/minecraft-recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public MinecraftRecipes: Array<object>;

  constructor(
    private minecraftRecipeService: MinecraftRecipeService
  ) { }

  title = 'Minecraft Raw Material Counter';

  public json: Array<string> = [];

  ngOnInit(): void {
    this.MinecraftRecipes = this.minecraftRecipeService.getMinecraftRecipes();
    this.json.push(
      JSON.stringify(this.MinecraftRecipes)
    );
  }

}
