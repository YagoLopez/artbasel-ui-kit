import preval from 'preval.macro';

const VersionInfo = () => {
  let buildDate = preval`module.exports = new Date();`;
  buildDate = buildDate.replace('T', ' ');
  buildDate = buildDate.substring(0, buildDate.length - 5);

  const componentsVersion = preval`
  const componentsInfo = require('../../package.json');
  module.exports = componentsInfo.version;`;

  const themesVersion = preval`
  const themesInfo = require('../../../themes/package.json');
  module.exports = themesInfo.version;`;

  // const componentsVersion = preval`module.exports = getComponentsVersion()x`;
  // const themesVersion = preval`module.exports = getThemesVersion()`;

  return (
    <>
      Components Version: <strong>{componentsVersion}</strong> <br/>
      Themes Version: <strong>{ themesVersion }</strong><br/>
      Build Date: { buildDate } UTC
    </>
  );
};

export default VersionInfo;
