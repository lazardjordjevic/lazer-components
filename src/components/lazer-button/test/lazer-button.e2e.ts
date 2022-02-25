import { newE2EPage } from '@stencil/core/testing';

describe('lazer-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lazer-button></lazer-button>');

    const element = await page.find('lazer-button');
    expect(element).toHaveClass('hydrated');
  });
});
