import { newSpecPage } from '@stencil/core/testing';
import { LazerRainbowCard } from '../lazer-rainbow-card';

describe('lazer-rainbow-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LazerRainbowCard],
      html: `<lazer-rainbow-card></lazer-rainbow-card>`,
    });
    expect(page.root).toEqualHtml(`
      <lazer-rainbow-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lazer-rainbow-card>
    `);
  });
});
