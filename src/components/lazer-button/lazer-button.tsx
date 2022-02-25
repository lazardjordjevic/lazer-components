import { Component, Host, h, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'lazer-button',
  styleUrl: 'lazer-button.css',
  shadow: true,
})
export class LazerButton {
  /** Inner button text */
  @Prop() buttonText: string;

  /** Button click event */
  @Event({  
    eventName: 'lazerButtonClickEvent'
  })
  buttonClickEvent: EventEmitter

  private _buttonClickHandler = () => {
    this.buttonClickEvent.emit();
  }

  render() {
    return (
      <Host>
        <button type="button" onClick={this._buttonClickHandler}>{this.buttonText}</button>
      </Host>
    );
  }

}
