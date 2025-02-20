export const task54 = () => {
  type VotationOption = {
    numberOfVotes: number;
    option: string;
  };

  class Votation {
    private _votationOptions: VotationOption[] = [];
    constructor(public details: string) {}

    addVotationOption(votationOption: VotationOption): void {
      this._votationOptions.push(votationOption);
    }

    vote(votationIndex: number): void {
      if (!this._votationOptions[votationIndex]) return;
      this._votationOptions[votationIndex].numberOfVotes += 1;
    }

    get votationOptions(): VotationOption[] {
      return this._votationOptions;
    }
  }

  class VotationApp {
    private votations: Votation[] = [];

    addVotation(votation: Votation): void {
      this.votations.push(votation);
    }

    showVotations(): void {
      for (const votation of this.votations) {
        console.log(votation.details);
        for (const votationOption of votation.votationOptions) {
          console.log(votationOption.option, votationOption.numberOfVotes);
        }

        console.log('###');
        console.log('');
      }
    }
  }

  const votation1 = new Votation('O que você prefere de linguagem');
  votation1.addVotationOption({ option: 'Python', numberOfVotes: 0 });
  votation1.addVotationOption({ option: 'JavaScript', numberOfVotes: 0 });
  votation1.addVotationOption({ option: 'TypeScript', numberOfVotes: 0 });
  votation1.vote(1);
  votation1.vote(1);
  votation1.vote(0);
  votation1.vote(2);
  votation1.vote(2);
  votation1.vote(2);
  votation1.vote(2);
  votation1.vote(2);
  votation1.vote(3);

  const votation2 = new Votation('O que voce prefere de cor?');
  votation2.addVotationOption({ option: 'Vermelho', numberOfVotes: 0 });
  votation2.addVotationOption({ option: 'Verde', numberOfVotes: 0 });
  votation2.addVotationOption({ option: 'Azul', numberOfVotes: 0 });
  votation2.addVotationOption({ option: 'Roxo', numberOfVotes: 0 });
  votation2.addVotationOption({ option: 'Marron', numberOfVotes: 0 });
  votation2.vote(0);
  votation2.vote(2);
  votation2.vote(2);
  votation2.vote(1);
  votation2.vote(4);
  votation2.vote(2);

  const votationApp = new VotationApp();
  votationApp.addVotation(votation1);
  votationApp.addVotation(votation2);
  votationApp.showVotations();
};
