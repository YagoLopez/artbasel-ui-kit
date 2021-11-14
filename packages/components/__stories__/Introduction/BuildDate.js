import preval from 'preval.macro';

const BuildDate = () => {
  let d = preval`module.exports = new Date();`;
  d = d.replace('T', ' ');
  d = d.substring(0, d.length - 5);
  return (
    <>
      <hr />
      Build Date: {d} UTC
    </>
  );
};

export default BuildDate;
