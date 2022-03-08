import { newSpecPage } from '@stencil/core/testing';
import { LazerCard } from '../lazer-card';

describe('lazer-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LazerCard],
      html: `<lazer-card></lazer-card>`,
    });
    expect(page.root).toEqualHtml(`
      <lazer-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lazer-card>
    `);
  });
});
