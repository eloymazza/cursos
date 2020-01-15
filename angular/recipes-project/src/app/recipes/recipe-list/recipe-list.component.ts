import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Test desc', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fc%2Fcf%2FAngular_full_color_logo.svg%2F250px-Angular_full_color_logo.svg.png&imgrefurl=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FAngular_(framework)&docid=0Ow4TsoiCK0rLM&tbnid=e3Hi4Q4pfozoNM%3A&vet=10ahUKEwjt4bO_7ITnAhWrELkGHZM-Di8QMwhOKAAwAA..i&w=250&h=250&bih=625&biw=1366&q=angular&ved=0ahUKEwjt4bO_7ITnAhWrELkGHZM-Di8QMwhOKAAwAA&iact=mrc&uact=8')
  ];

  constructor() { }

  ngOnInit() {
  }

}
