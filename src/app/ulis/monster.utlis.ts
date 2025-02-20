export enum MonsterType {
    Pikachu = 'Pikachu',
    Dragon = 'Dragon',
    Kraken = 'Kraken',
    Yeti = 'Yeti', 
    Bigfoot = 'Bigfoot',
}

export interface IMonsterProperties {
    color: string;
    imageUrl: string;
}

export const MonsterTypeProperties: { [key: string]: IMonsterProperties } = {
    [MonsterType.Pikachu]: {
        color: '#FFD700', 
        imageUrl: 'assets/img/peluche-pikachu.jpg',
    },
    [MonsterType.Dragon]: {
        color: '#FF4500', 
        imageUrl: 'assets/img/dragon.png',
    },
    [MonsterType.Kraken]: {
        color: '#1E90FF', 
        imageUrl: 'assets/img/kraken.jpg',
    },
    [MonsterType.Yeti]: {
        color: '#D3D3D3', 
        imageUrl: 'assets/img/yeti.jpg',
    },
    [MonsterType.Bigfoot]: {
        color: '#8B4513', 
        imageUrl: 'assets/img/bigfoot.jpg',
    },
};
