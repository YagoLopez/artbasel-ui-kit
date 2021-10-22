/* eslint-disable max-len */
import React from 'react';

import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Basic/Colors',
  parameters: {
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
  },
  decorators: [withDesign],
};

export const Colors = () => (
  <>
    <h1>Colors</h1>
    <p>
      Colour is used extensively throughout Art Basel website and apps in
      various contexts such as in the UI, to indicate action, progress and
      through promotional imagery. As such, the primary brand colour palette
      takes a more subtle approach dictated by absence of colour while the
      primary dark and light palettes are used depending on context.
    </p>
    <h2>Primary Palette</h2>
    <hr />
    <p>
      Too led more light into the platform, the palette ‘light theme’ will be
      the primary colour scheme.
    </p>
    <h3>Primary Colors</h3>
    <p>This is the primary color palette use on ArtBasel web.</p>
    <h3>Secondary Colors</h3>
    <p>This is the secondary color palette use on ArtBasel web.</p>
    <h2>Supporting Palette</h2>
    <hr />
    <p>
      Our secondary palette contains colours mainly used in the UI for
      error/success messages or other UI elements We use Text Orange for
      providing feedback or indicating progress while Text Red is used for
      errors and representing authentication.
    </p>
    <h2>Extended Palette</h2>
    <hr />
    <p>
      The extended palette consists of colours representing the ART Basel shows
      and the sectors in which shows are organised in.
    </p>
    <h3>Sub Brands</h3>
    <p>Each of the shows has a specifically and permanently assigned color. </p>
    <h3>Sectors</h3>
    <p>
      Sectors have permanently assigned colours. Recurring/similar sectors
      across the shows share colors. Sector colours are used very rarely.
    </p>
    <h3>Transparencies</h3>
    <p>This is the secondary color palette use on ArtBasel web.</p>
  </>
);

Colors.parameters = {
  design: {
    name: 'Figma Design',
    type: 'figma',
    url:
      'https://www.figma.com/file/TENnOP4K38G6r3vDL3emCP/AB-Style-Guide?node-id=676%3A23168',
  },
};
