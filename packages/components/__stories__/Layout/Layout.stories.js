import React from 'react';

import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Basic/Layout',
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
  },
  decorators: [withDesign],
};

export const Layout = () => (
  <>
    <h1>Layout</h1>
    <p>
      The layout is simple and clearly structured and offers a high level of
      flexibility.
    </p>
    <h3>Breakpoints and dimensions</h3>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Minimum width</th>
          <th scope="col">Breakpoint</th>
          <th scope="col"># Columns</th>
          <th scope="col">Gutters</th>
          <th scope="col">Margin</th>
          <th scope="col">Type of Grid width</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0-412 px</td>
          <td>XS</td>
          <td>4</td>
          <td>16px</td>
          <td>16px</td>
          <td>Fluid, 100%</td>
        </tr>
        <tr>
          <td>413-767 px</td>
          <td>SM</td>
          <td>6</td>
          <td>16px</td>
          <td>16px</td>
          <td>Fluid, 100%</td>
        </tr>
        <tr>
          <td>768-1023 px</td>
          <td>MD</td>
          <td>12</td>
          <td>24px</td>
          <td>24px</td>
          <td>Fluid, 100%</td>
        </tr>
        <tr>
          <td>1024-1279 px</td>
          <td>LG</td>
          <td>12</td>
          <td>24px</td>
          <td>32px</td>
          <td>Fluid, 100%</td>
        </tr>
        <tr>
          <td>1280-1535 px</td>
          <td>XL</td>
          <td>12</td>
          <td>24px</td>
          <td>32px</td>
          <td>Fluid, 100%</td>
        </tr>
        <tr>
          <td>1536 px +</td>
          <td>2XL</td>
          <td>12</td>
          <td>32px</td>
          <td>32px</td>
          <td>Fixed, 1536 px, centered</td>
        </tr>
      </tbody>
    </table>
  </>
);

Layout.parameters = {
  design: {
    name: 'Figma Design',
    type: 'figma',
    url:
      'https://www.figma.com/file/TENnOP4K38G6r3vDL3emCP/AB-Style-Guide?node-id=166%3A8291',
  },
};
