import { Component, Host, h, Listen, Prop, State } from '@stencil/core';

interface StatsInterface {
  strength: number;
  agility: number;
  inteligence: number;
}

@Component({
  tag: 'lazer-rainbow-card',
  styleUrl: 'lazer-rainbow-card.css',
  shadow: true,
})
export class LazerRainbowCard {
  /** Title */
  @Prop() cardTitle: string;
  /** image src */
  @Prop() cardImage: string;

  @State() statsState: StatsInterface = {
    strength: 53,
    inteligence: 62,
    agility: 12,
  };

  @State() test: number = 5;

  @Listen('lazerButtonClickEvent', { target: 'document' })
  buttonClickListener() {
    this.statsState = { agility: this.statsState.agility + 1, strength: this.statsState.strength + 1, inteligence: this.statsState.inteligence + 1 };
    console.log(this.statsState);
  }

  render() {
    return (
      <Host>
        <div class="rainbow-card">
          <div class="rainbow-card__inner">
            <div class="rainbow-card__avatar">
              <img class="rainbow-card__avatar-image" src={this.cardImage} />
            </div>
            <h3 class="rainbow-card__title">{this.cardTitle}</h3>
            <div class="rainbow-card__stats">
              <div class="rainbow-card__line">
                <span class="rainbow-card__description">Strength</span>
                <span class="rainbow-card__value">{this.statsState.strength}</span>
              </div>
              <div class="rainbow-card__line">
                <span class="rainbow-card__description">Agility</span>
                <span class="rainbow-card__value">{this.statsState.agility}</span>
              </div>
              <div class="rainbow-card__line">
                <span class="rainbow-card__description">Inteligence</span>
                <span class="rainbow-card__value">{this.statsState.inteligence}</span>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
