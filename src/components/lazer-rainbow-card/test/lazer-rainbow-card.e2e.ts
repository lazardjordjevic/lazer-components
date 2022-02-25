import { newE2EPage } from '@stencil/core/testing';

describe('lazer-rainbow-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lazer-rainbow-card></lazer-rainbow-card>');

    const element = await page.find('lazer-rainbow-card');
    expect(element).toHaveClass('hydrated');
  });
});
