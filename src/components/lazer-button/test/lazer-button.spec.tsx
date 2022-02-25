import { newSpecPage } from '@stencil/core/testing';
import { LazerButton } from '../lazer-button';

describe('lazer-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [LazerButton],
      html: `<lazer-button></lazer-button>`,
    });
    expect(page.root).toEqualHtml(`
      <lazer-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </lazer-button>
    `);
  });
});
