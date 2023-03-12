import config from './config'

const Buble = ({ size, variant = {}, top = 0, left = 0, transform, children }) => (
  <div
    style={{
      position: "fixed",
      top,
      left,
      width: size,
      height: size,
      borderRadius: '50%',
      zIndex: -1,
      transform,
      ...config[variant] || {}
    }}
  >
    { children }
  </div>
);

export default Buble;



