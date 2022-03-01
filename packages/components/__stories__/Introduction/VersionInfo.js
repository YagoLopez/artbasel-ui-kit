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
      <hr />
      Build Date: {buildDate} UTC<br/>
      Components Version: {componentsVersion} <br/>
      Themes Version: {themesVersion} <br/>
    </>
  );
};

export default VersionInfo;
