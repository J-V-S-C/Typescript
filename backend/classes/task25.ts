export const task25 = () => {
  abstract class Character {
    protected abstract emoji: string;

    constructor(
      protected name: string,
      protected atack: number,
      protected life: number
    ) {}

    atacking(character: Character): void {
      this.catchPhrase();
      character.loseLife(this.atack);
    }

    loseLife(atackForce: number): void {
      this.life -= atackForce;
      if (this.life < 0) {
        this.life = 0;
      }

      console.log(
        `${this.emoji} - ${this.name} now has ${this.life} life points...`
      );
      if (this.life === 0) {
        console.log(`${this.emoji} - ${this.name} has died...`);
      }
    }

    abstract catchPhrase(): void;
  }

  class Warrior extends Character {
    protected emoji = '\u{1F9DD}';
    catchPhrase(): void {
      console.log(this.emoji + 'I will KIILLLL YOUUU MUDAFUCKA!!!!!');
    }
  }

  class Monster extends Character {
    protected emoji = '\u{1F9DF}';
    catchPhrase(): void {
      console.log(this.emoji + 'AHHHHHHHHHHH I AM A MONSTER!!!! *slap*');
    }
  }

  const Warrior1 = new Warrior('Warrior1', 300, 1000);
  const Monster1 = new Monster('Monster1', 487, 1000);

  Warrior1.atacking(Monster1);
  Warrior1.atacking(Monster1);
  Warrior1.atacking(Monster1);
  Monster1.atacking(Warrior1);
  Monster1.atacking(Warrior1);
  Warrior1.atacking(Monster1);
};
