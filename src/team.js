export default class Team {
  constructor() {
    this.characters = new Set();
  }

  addAll(...characters) {
    for (const character of characters) {
      this.characters.add(character);
    }
    return this.characters;
  }

  toArray() {
    return Array.from(this.characters);
  }

  [Symbol.iterator]() {
    let current = 0;
    const members = this.toArray();

    return {
      next() {
        if (current < members.length) {
          const member = members[current];
          current += 1;

          return {
            done: false,
            value: member,
          };
        }

        return {
          done: true,
        };
      },
    };
  }
}
