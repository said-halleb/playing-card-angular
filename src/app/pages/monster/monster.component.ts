import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-monster',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './monster.component.html',
  styleUrl: './monster.component.scss'
})
export class MonsterComponent {
  // Données du monstre
  monster = {
    name: 'Dragon',
    description: 'Un puissant dragon cracheur de feu.',
    imageUrl: 'assets/img/dragon.png', 
    health: 100,
    isAlive: true,
  };

  // Propriété pour le two-way binding
  monsterName: string = this.monster.name;

  // Méthode pour gérer un événement
  takeDamage() {
    if (this.monster.health > 0) {
      this.monster.health -= 10;
      if (this.monster.health <= 0) {
        this.monster.isAlive = false;
      }
    }
  }

  // Méthode pour mettre à jour le nom du monstre
  updateMonsterName(newName: string) {
    this.monster.name = newName;
  }
}