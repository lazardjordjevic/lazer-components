import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'lazer-card',
  styleUrl: 'lazer-card.css',
  shadow: true,
})
export class LazerCard {
  /** Card title */
  @Prop() cardTitle: string;
  /** Card description */
  @Prop() cardDescription: string;
  /** Card date */
  @Prop() cardDate: string;

  render() {
    return (
      <Host>
        <div class="lazer-card">
          <h5 class="lazer-card__title">{this.cardTitle}</h5>
          <span class="lazer-card__date">{this.cardDate}</span>
          <span class="lazer-card__description">{this.cardDescription}</span>
        </div>
      </Host>
    );
  }
}
