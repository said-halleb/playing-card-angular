import { Component, computed, input, Input, OnChanges } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { __values } from 'tslib';
import { MonsterTypeProperties } from '../../ulis/monster.utlis';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.scss'
})
export class PlayingCardComponent  {
// @Input({
//   alias:'my-monster',
//   transform: (value: Monster) => {
//     value.value = value.value * 2;
//     return value;
    
//   } 
// }) monster: Monster=new Monster();

monster = input(new Monster());
monsterTypeImage=computed(() => {
return MonsterTypeProperties[this.monster().type].imageUrl;
}
);

backgroundColor=computed(() => {
  return MonsterTypeProperties[this.monster().type].color;

}
);


}
