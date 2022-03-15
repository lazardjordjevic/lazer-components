import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'lazer-basic-card',
  styleUrl: 'lazer-basic-card.css',
  shadow: true,
})
export class LazerBasicCard {
  /** Title */
  @Prop() cardTitle: string;
  /** image src */
  @Prop() cardImage: string;

  render() {
    return (
      <Host>
        <div class="rainbow-card">
          <div class="rainbow-card__inner">
            <div class="rainbow-card__avatar">
              <img class="rainbow-card__avatar-image" src={this.cardImage} />
            </div>
            <h3 class="rainbow-card__title">{this.cardTitle}</h3>
          </div>
        </div>
      </Host>
    );
  }
}
