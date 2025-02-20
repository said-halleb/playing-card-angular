import { Component, computed, model } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { MonsterType } from '../../ulis/monster.utlis';
import { CommonModule } from '@angular/common';
import { PlayingCardComponent } from '../../components/playing-card/playing-card.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-monster-list',
  standalone: true,
   imports: [CommonModule, PlayingCardComponent, SearchBarComponent, SliderComponent, FooterComponent],
  templateUrl: './monster-list.component.html',
  styleUrl: './monster-list.component.scss'
})
export class MonsterListComponent {
  monsters!: Monster[] ;
  search= model('');
  filteredMonsters=computed(() => {
    return this.monsters.filter(monster => monster.name.includes(this.search())); 
  }
  );
  constructor() {
this.monsters = [];
    const monster1 = new Monster();
    monster1.name = 'pikachu';      
    monster1.description = 'This is a pikachu';
    monster1.image = 'assets/img/peluche-pikachu.jpg';
    monster1.type = MonsterType.Pikachu;
    monster1.value = 20;
    this.monsters.push(monster1);
       const monster2 = new Monster();
    monster2.name = 'Dragon';      
    monster2.description = 'This is a Dragon';
    monster2.image = 'assets/img/dragon.png';
    monster2.type = MonsterType.Dragon;
    monster2.value = 30;
    this.monsters.push(monster2);
       const monster3 = new Monster();
    monster3.name = 'Kraken';      
    monster3.description = 'This is a Kraken';
    monster3.image = 'assets/img/kraken.jpg';
    monster3.type = MonsterType.Kraken;
    monster3.value = 40;
    this.monsters.push(monster3);
     const monster4 = new Monster();
    monster4.name = 'Yeti';      
    monster4.description = 'This is a Yeti';
    monster4.image = 'assets/img/yeti.jpg';
    monster4.type = MonsterType.Yeti;
    monster4.value = 50;
    this.monsters.push(monster4);
       const monster5 = new Monster();
    monster5.name = 'Bigfoot';      
    monster5.description = 'This is a Bigfoot';
    monster5.image = 'assets/img/bigfoot.jpg';
    monster5.type = MonsterType.Bigfoot;
    monster5.value = 50;
    this.monsters.push(monster5);

  }
}
