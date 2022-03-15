import { newE2EPage } from '@stencil/core/testing';

describe('lazer-basic-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<lazer-basic-card></lazer-basic-card>');

    const element = await page.find('lazer-basic-card');
    expect(element).toHaveClass('hydrated');
  });
});
