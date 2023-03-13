import { memo, useMemo } from 'react'
import config from './config'

// eslint-disable-next-line react/display-name
const Bubles = memo(() => {
  const isMobileScreen = useMemo(() => {
    if (window.innerWidth <= 768) {
      return true
    }
    return false
  }, [])

  return config.map((buble) => (
    <div
      key={buble.key}
      style={{
        position: "fixed",
        borderRadius: '50%',
        zIndex: -1,
        ...buble.base,
        ...isMobileScreen ? buble?.mobile || {} : buble?.desktop || {}
      }}
    />
  ))
});

export default Bubles;
