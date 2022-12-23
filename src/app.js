import Team from './team';
import Character from './character';

const objOfChar = {
  bowman: new Character('Лучник', 'Bowman', 25, 25),
  swordsman: new Character('Фехтовальщик', 'Swordsman', 25, 25),
  magician: new Character('Фокусник', 'Magician', 50, 20),
  zombie: new Character('Зомби', 'Zombie', 40, 10),
  daemon: new Character('Демон', 'Daemon', 10, 40),
  undead: new Character('Нежить', 'Undead', 20, 50),
};

const team = new Team();
team.addAll(objOfChar);

for (const element of team) {
  /* eslint-disable */
  console.log(element);
}
