import React from 'react';
import { withDesign } from 'storybook-addon-designs';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import docPageMdx from './docPage.mdx';

export default {
  title: 'Basic',
  parameters: {
    docs: {
      page: docPageMdx,
    },
  },
  decorators: [withDesign],
};

export const Spacing = () => (
  <>
    <h1>Spacing</h1>
    <p>Spacing is critical for having a consistent and clear visual design.</p>
    <h3>Spacing scale</h3>
    <p>Our spacing is based on a 16-pixel grid. Please use only these sizes:</p>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">SASS Variable</th>
          <th scope="col">rem</th>
          <th scope="col">px</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>$spacing-0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>$spacing-1</td>
          <td>0.125 rem</td>
          <td>2 px</td>
        </tr>
        <tr>
          <td>$spacing-2</td>
          <td>0.25 rem</td>
          <td>4 px</td>
        </tr>
        <tr>
          <td>$spacing-3</td>
          <td>0.5 rem</td>
          <td>8 px</td>
        </tr>
        <tr>
          <td>$spacing-4</td>
          <td>0.75 rem</td>
          <td>12 px</td>
        </tr>
        <tr>
          <td>$spacing-5</td>
          <td>1 rem</td>
          <td>16 px</td>
        </tr>
        <tr>
          <td>$spacing-6</td>
          <td>1.25 rem</td>
          <td>20 px</td>
        </tr>
        <tr>
          <td>$spacing-7</td>
          <td>1.5 rem</td>
          <td>24 px</td>
        </tr>
        <tr>
          <td>$spacing-8</td>
          <td>2 rem</td>
          <td>32 px</td>
        </tr>
        <tr>
          <td>$spacing-9</td>
          <td>2.5 rem</td>
          <td>40 px</td>
        </tr>
        <tr>
          <td>$spacing-10</td>
          <td>3 rem</td>
          <td>48 px</td>
        </tr>
        <tr>
          <td>$spacing-11</td>
          <td>3.5 rem</td>
          <td>56 px</td>
        </tr>
        <tr>
          <td>$spacing-12</td>
          <td>4 rem</td>
          <td>64 px</td>
        </tr>
        <tr>
          <td>$spacing-13</td>
          <td>4.5 rem</td>
          <td>72 px</td>
        </tr>
        <tr>
          <td>$spacing-14</td>
          <td>5 rem</td>
          <td>80 px</td>
        </tr>
        <tr>
          <td>$spacing-15</td>
          <td>6 rem</td>
          <td>96 px</td>
        </tr>
        <tr>
          <td>$spacing-16</td>
          <td>7 rem</td>
          <td>112 px</td>
        </tr>
      </tbody>
    </table>
    <div>
      <h3 className="mt-8">Margin and padding</h3>
      <p>
        Assign responsive-friendly <code>margin</code> or <code>padding</code>{' '}
        values to an element or a subset of its sides with shorthand classes.
        Includes support for individual properties, all properties, and vertical
        and horizontal properties. Classes are built from a default Sass map
        ranging from <code>.125rem</code> to <code>7rem</code>.
      </p>
      <h4>Notation</h4>
      <p>
        Spacing utilities that apply to all breakpoints, from <code>xs</code> to{' '}
        <code>xxl</code>, have no breakpoint abbreviation in them. This is
        because those classes are applied from <code>min-width: 0</code> and up,
        and thus are not bound by a media query. The remaining breakpoints,
        however, do include a breakpoint abbreviation.
      </p>
      <p>
        The classes are named using the format{' '}
        <code>&#123;property&#125;&#123;sides&#125;-&#123;size&#125;</code> for{' '}
        <code>xs</code> and
        <code>
          &#123;property&#125;&#123;sides&#125;-&#123;breakpoint&#125;-&#123;size&#125;
        </code>{' '}
        for <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>,
        and <code>xxl</code>.
      </p>
      <p>
        Where <em>property</em> is one of:
      </p>
      <ul>
        <li>
          <code>m</code> - for classes that set <code>margin</code>
        </li>
        <li>
          <code>p</code> - for classes that set <code>padding</code>
        </li>
      </ul>
      <p>
        Where <em>sides</em> is one of:
      </p>
      <ul>
        <li>
          <code>t</code> - for classes that set <code>margin-top</code> or{' '}
          <code>padding-top</code>
        </li>
        <li>
          <code>b</code> - for classes that set <code>margin-bottom</code> or{' '}
          <code>padding-bottom</code>
        </li>
        <li>
          <code>s</code> - (start) for classes that set <code>margin-left</code>{' '}
          or <code>padding-left</code> in LTR, <code>margin-right</code> or{' '}
          <code>padding-right</code> in RTL
        </li>
        <li>
          <code>e</code> - (end) for classes that set <code>margin-right</code>{' '}
          or <code>padding-right</code> in LTR, <code>margin-left</code> or{' '}
          <code>padding-left</code> in RTL
        </li>
        <li>
          <code>x</code> - for classes that set both <code>*-left</code> and{' '}
          <code>*-right</code>
        </li>
        <li>
          <code>y</code> - for classes that set both <code>*-top</code> and{' '}
          <code>*-bottom</code>
        </li>
        <li>
          blank - for classes that set a <code>margin</code> or{' '}
          <code>padding</code> on all 4 sides of the element
        </li>
      </ul>
      <p>
        Where <em>size</em> is one of:
      </p>
      <ul>
        <li>
          <code>0</code> - for classes that eliminate the <code>margin</code> or{' '}
          <code>padding</code> by setting it to <code>$spacing-0</code>
        </li>
        <li>
          <code>1</code> - (by default) for classes that set the{' '}
          <code>margin</code> or <code>padding</code> to <code>$spacing-1</code>
        </li>
        <li>
          <code>2</code> - (by default) for classes that set the{' '}
          <code>margin</code> or <code>padding</code> to <code>$spacing-2</code>
        </li>
        <li>
          <code>3</code> - (by default) for classes that set the{' '}
          <code>margin</code> or <code>padding</code> to <code>$spacing-3</code>
        </li>
        <li>
          <code>4</code> - (by default) for classes that set the{' '}
          <code>margin</code> or <code>padding</code> to <code>$spacing-4</code>
        </li>
        ...
        <li>
          <code>16</code> - (by default) for classes that set the{' '}
          <code>margin</code> or <code>padding</code> to{' '}
          <code>$spacing-16</code>
        </li>
        <li>
          <code>auto</code> - for classes that set the <code>margin</code> to
          auto
        </li>
      </ul>
      <h6 className="mt-8">Some examples for using as HMTL classes</h6>
      <code>class=&quot;mt-8&quot;</code> - 32px (2 rem) for margin-top <br />
      <code>class=&quot;p-5&quot;</code> - 16px (1 rem) for padding <br />
      <code>class=&quot;mx-10&quot;</code> - 48px (3 rem) for both margin-left
      and margin-right
    </div>
    <h4 className="mt-8">Application Example</h4>
    <Row className="mt-5">
      <Col className="p-3 m-3 bg-light">Item 1</Col>
      <Col className="p-3 m-3 bg-light">Item 2</Col>
      <Col className="p-3 m-3 bg-light">Item 3</Col>
    </Row>
    <Row className="mt-2">
      <Col className="p-5 m-3 bg-light">Item 4</Col>
      <Col className="p-5 m-3 bg-light">Item 5</Col>
      <Col className="p-5 m-3 bg-light">Item 6</Col>
    </Row>

    <p>Please check the code for the above example on Docs tab</p>
  </>
);

Spacing.parameters = {
  design: {
    name: 'Figma Design',
    type: 'figma',
    url:
      'https://www.figma.com/file/TENnOP4K38G6r3vDL3emCP/AB---Style-Guide?node-id=1006%3A25558',
  },
};
