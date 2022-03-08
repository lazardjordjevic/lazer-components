import { newE2EPage } from '@stencil/core/testing';

describe('lazer-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lazer-card></lazer-card>');

    const element = await page.find('lazer-card');
    expect(element).toHaveClass('hydrated');
  });
});
