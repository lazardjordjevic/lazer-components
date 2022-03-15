import { newSpecPage } from '@stencil/core/testing';
import { LazerBasicCard } from '../lazer-basic-card';

describe('lazer-basic-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LazerBasicCard],
      html: `<lazer-basic-card></lazer-basic-card>`,
    });
    expect(page.root).toEqualHtml(`
      <lazer-basic-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lazer-basic-card>
    `);
  });
});
