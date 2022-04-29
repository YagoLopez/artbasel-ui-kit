/* eslint-disable max-len */
import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { ColorTag } from './ColorTag';

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
    <h2 className="mt-10">Primary Palette</h2>
    <hr />
    <p>
      Too led more light into the platform, the palette ‘light theme’ will be
      the primary colour scheme.
    </p>
    <h3 className="mt-10">Definitions</h3>
    <p>Each color bellow have the following data:</p>
    <div className="d-flex">
      <ColorTag
        color="RGB Color Value"
        name="Color Name"
        scssVar="SCSS var name"
        bsVar="CSS root var name"
      />
    </div>
    <h3 className="mt-10">Primary Colors</h3>
    <p>This is the primary color palette use on ArtBasel web.</p>
    <div className="d-flex">
      <ColorTag
        color="#1d2327"
        name="MCH Black"
        scssVar="$color-mch-black"
        bsVar="--bs-mch-black"
      />
      <ColorTag
        color="#ffffff"
        name="MCH White"
        scssVar="$color-mch-white"
        bsVar="--bs-mch-white"
      />
    </div>
    <h3 className="mt-10">Secondary Colors</h3>
    <p>This is the secondary color palette use on ArtBasel web.</p>
    <div className="d-flex">
      <ColorTag
        color="#444749"
        name="MCH Grey 500"
        scssVar="$color-mch-gray-500"
        bsVar="--bs-mch-gray-500"
      />
      <ColorTag
        color="#757575"
        name="MCH Grey 400"
        scssVar="$color-mch-gray-400"
        bsVar="--bs-mch-gray-400"
      />
      <ColorTag
        color="#babfc4"
        name="MCH Grey 300"
        scssVar="$color-mch-gray-300"
        bsVar="--bs-mch-gray-300"
      />
      <ColorTag
        color="#f0f2f5"
        name="MCH Grey 200"
        scssVar="$color-mch-gray-200"
        bsVar="--bs-mch-gray-200"
      />
      <ColorTag
        color="#f7f7f7"
        name="MCH Grey 100"
        scssVar="$color-mch-gray-100"
        bsVar="--bs-mch-gray-100"
      />
    </div>
    <h2 className="mt-10">Supporting Palette</h2>
    <hr />
    <p>
      Our secondary palette contains colours mainly used in the UI for
      error/success messages or other UI elements We use Text Orange for
      providing feedback or indicating progress while Text Red is used for
      errors and representing authentication.
    </p>
    <div className="d-flex">
      <ColorTag
        color="#bf8519"
        name="Text Orange"
        scssVar="$color-mch-text-orange"
        bsVar="--bs-mch-text-orange"
      />
      <ColorTag
        color="#c9012f"
        name="Text Red"
        scssVar="$color-mch-text-red"
        bsVar="--bs-mch-text-red"
      />
      <ColorTag
        color="#018661"
        name="Text Green"
        scssVar="$color-mch-text-green"
        bsVar="--bs-mch-text-green"
      />
    </div>
    <div className="d-flex">
      <ColorTag
        color="#f19d00"
        name="Orange"
        scssVar="$color-mch-orange"
        bsVar="--bs-mch-orange"
      />
      <ColorTag
        color="#ff003b"
        name="Red"
        scssVar="$color-mch-red"
        bsVar="--bs-mch-red"
      />
      <ColorTag
        color="#019f53"
        name="Green"
        scssVar="$color-mch-green"
        bsVar="--bs-mch-green"
      />
    </div>

    <h2 className="mt-10">Extended Palette</h2>
    <hr />
    <p>
      The extended palette consists of colours representing the ART Basel shows
      and the sectors in which shows are organised in.
    </p>
    <p>Each of the shows has a specifically and permanently assigned color. </p>

    <h3 className="mt-10">Sub Brands</h3>
    <div className="d-flex">
      <ColorTag
        color="#00a0cf"
        name="Basel"
        scssVar="$color-mch-basel"
        bsVar="--bs-mch-basel"
      />
      <ColorTag
        color="#00c18b"
        name="Miami"
        scssVar="$color-mch-miami"
        bsVar="--bs-mch-miami"
      />
      <ColorTag
        color="#e0004d"
        name="Hong Kong"
        scssVar="$color-mch-hongkong"
        bsVar="--bs-mch-hongkong"
      />
      <ColorTag
        color="#fa4616"
        name="Cities"
        scssVar="$color-mch-cities"
        bsVar="--bs-mch-cities"
      />
      <ColorTag
        color="#1e1e1e"
        name="Paris Plus"
        scssVar="$color-mch-parisplus"
        bsVar="--bs-mch-parisplus"
      />
    </div>
    <h3 className="mt-10">Sectors</h3>
    <p>
      Sectors have permanently assigned colours. Recurring/similar sectors
      across the shows share colors. Sector colours are used very rarely.
    </p>
    <div className="d-flex">
      <ColorTag
        color="#f7dce9"
        name="Film"
        scssVar="$color-mch-film"
        bsVar="--bs-mch-film"
      />
      <ColorTag
        color="#cddff2"
        name="Parcour"
        scssVar="$color-mch-parcour"
        bsVar="--bs-mch-parcour"
      />
      <ColorTag
        color="#cddff2"
        name="Public"
        scssVar="$color-mch-public"
        bsVar="--bs-mch-public"
      />
      <ColorTag
        color="#dff0cb"
        name="Unlimited"
        scssVar="$color-mch-unlimited"
        bsVar="--bs-mch-unlimited"
      />
      <ColorTag
        color="#dff0cb"
        name="Encounters"
        scssVar="$color-mch-encounters"
        bsVar="--bs-mch-encounters"
      />
      <ColorTag
        color="#dff0cb"
        name="Meridians"
        scssVar="$color-mch-meridians"
        bsVar="--bs-mch-meridians"
      />
    </div>
    <div className="d-flex">
      <ColorTag
        color="#d2d3ec"
        name="Discoveries"
        scssVar="$color-mch-discoveries"
        bsVar="--bs-mch-discoveries"
      />
      <ColorTag
        color="#d2d3ec"
        name="Statements"
        scssVar="$color-mch-statements"
        bsVar="--bs-mch-statements"
      />
      <ColorTag
        color="#d2d3ec"
        name="Positions"
        scssVar="$color-mch-positions"
        bsVar="--bs-mch-positions"
      />
      <ColorTag
        color="#eaeaea"
        name="Galleries"
        scssVar="$color-mch-galleries"
        bsVar="--bs-mch-galleries"
      />

      <ColorTag
        color="#d8eeeb"
        name="Feature"
        scssVar="$color-mch-feature"
        bsVar="--bs-mch-feature"
      />
      <ColorTag
        color="#d8eeeb"
        name="Nova"
        scssVar="$color-mch-nova"
        bsVar="--bs-mch-nova"
      />
    </div>
    <div className="d-flex">
      <ColorTag
        color="#fff7bf"
        name="Edition"
        scssVar="$color-mch-edition"
        bsVar="--bs-mch-edition"
      />
      <ColorTag
        color="#fcdfaa"
        name="Kabinett"
        scssVar="$color-mch-kabinett"
        bsVar="--bs-mch-kabinett"
      />
      <ColorTag
        color="#fcd5d7"
        name="Insights"
        scssVar="$color-mch-insights"
        bsVar="--bs-mch-insights"
      />
      <ColorTag
        color="#fcd5d7"
        name="Survey"
        scssVar="$color-mch-survey"
        bsVar="--bs-mch-survey"
      />
      <ColorTag
        color="#dcdcdc"
        name="Dialogues"
        scssVar="$color-mch-dialogues"
        bsVar="--bs-mch-dialogues"
      />
      <ColorTag
        color="#dcdcdc"
        name="Satellite"
        scssVar="$color-mch-satellite"
        bsVar="--bs-mch-satellite"
      />
    </div>
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
