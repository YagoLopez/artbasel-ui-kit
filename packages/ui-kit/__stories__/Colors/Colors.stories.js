/* eslint-disable max-len */
import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Color } from './Color';

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
    <div className="d-flex">
      <Color color="#1d2327" name="MCH Black" />
      <Color color="#ffffff" name="MCH White" />
    </div>
    <p>This is the primary color palette use on ArtBasel web.</p>
    <h3>Secondary Colors</h3>
    <div className="d-flex">
      <Color color="#f7f7f7" name="MCH Grey 500" />
      <Color color="#f0f2f5" name="MCH Grey 400" />
      <Color color="#babfc4" name="MCH Grey 300" />
      <Color color="#f0f2f5" name="MCH Grey 200" />
      <Color color="#f7f7f7" name="MCH Grey 100" />
    </div>
    <p>This is the secondary color palette use on ArtBasel web.</p>
    <h2>Supporting Palette</h2>
    <div className="d-flex">
      <Color color="#bf8519" name="Text Orange" />
      <Color color="#c9012f" name="Text Red" />
      <Color color="#018661" name="Text Green" />
    </div>
    <div className="d-flex">
      <Color color="#f19d00" name="Orange" />
      <Color color="#ff003b" name="Red" />
      <Color color="#019f53" name="Green" />
    </div>
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
    <div className="d-flex">
      <Color color="#00a0cf" name="Basel" />
      <Color color="#00c18b" name="Miami" />
      <Color color="#e0004d" name="Hong Kong" />
      <Color color="#fa4616" name="Cities" />
    </div>
    <p>Each of the shows has a specifically and permanently assigned color. </p>
    <h3>Sectors</h3>
    <div className="d-flex">
      <Color color="#f7dce9" name="Film" />
      <Color color="#cddff2" name="Parcour, Public" />
      <Color color="#dff0cb" name="Unlimited, Encounters, Meridians" />
      <Color color="#d2d3ec" name="Discoveries, Statements, Positions" />
      <Color color="#eaeaea" name="Galleries" />
    </div>
    <div className="d-flex">
      <Color color="#d8eeeb" name="Feature, Nova" />
      <Color color="#fff7bf" name="Edition" />
      <Color color="#fcdfaa" name="Kabinett" />
      <Color color="#fcd5d7" name="Insights, Survey" />
      <Color color="#dcdcdc" name="Dialogues" />
    </div>
    <p>
      Sectors have permanently assigned colours. Recurring/similar sectors
      across the shows share colors. Sector colours are used very rarely.
    </p>
    <h3>Transparencies</h3>
    <div className="d-flex">
      <Color color="rgba(29, 35, 39, 0.3)" name="Tile Overlay" />
      <Color color="rgba(240, 242, 245, 1)" name="Tile Hover" />
    </div>
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
