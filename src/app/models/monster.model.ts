import { MonsterType } from "../ulis/monster.utlis";

export class Monster {  
id:number = -1;
 name: string = 'Playing Card';
 image: string = 'assets/img/peluche-pikachu.jpg';
 type: MonsterType = MonsterType.Pikachu;
 description: string = 'A playing card component';
 value: number = 20;
 valueBtn: string = 'Play';
}