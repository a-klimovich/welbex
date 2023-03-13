export default [
  {
    key: "red_light",
    base: {
      background: '#961A1A',
      opacity: 0.5,
      filter: 'blur(196px)',
    },
    desktop: {
      width: "calc(var(--index-size) * 31.8)",
      height: "calc(var(--index-size) * 31.8)",
      top: "25%",
      left: "-5%",
    },
    mobile: {
      top: "241px",
      left: "-55px",
      width: "211px",
      height: "211px",
    }
  },
  {
    key: "red_boll",
    base: {
      background: "radial-gradient(64% 64% at 27.25% 26.5%, rgba(255, 208, 208, 0.536) 0%, rgba(212, 93, 93, 0.264) 59.67%, rgba(167, 49, 49, 0.248) 78.59%, rgba(130, 25, 25, 0.248) 100%)",
      boxShadow: "3px 6px 27px -10px rgba(223, 125, 125, 0.25)",
      backdropFilter: "blur(2px)"
    },
    desktop: {
      width: "83px",
      height: "83px",
      top: "83px",
      left: "41.2%",
    },
    mobile: {
      top: "440px",
      left: "29px",
      width: "43px",
      height: "43px",
    }
  },
  {
    key: "purple_light",
    base: {
      background: '#833AB4',
    opacity: 0.5,
    filter: 'blur(196px)',
    },
    desktop: {
      width: "calc(var(--index-size) * 27)",
      height: "calc(var(--index-size) * 27)",
      top: "-15%",
      left: "45%",
    },
    mobile: {
      top: "107px",
      left: "84%",
      width: "259px",
      height: "259px",
    }
  },
  {
    key: "purple_ball",
    base: {
      background: 'radial-gradient(64% 64% at 27.25% 26.5%, rgba(236, 208, 255, 0.64) 0%, rgba(161, 93, 207, 0.24) 59.67%, rgba(118, 49, 164, 0.208) 78.59%, rgba(86, 24, 128, 0.232) 100%)',
      boxShadow: '3px 6px 27px -10px rgba(177, 118, 217, 0.25)',
      backdropFilter: 'blur(2px)',
      filter: 'blur(5px)',
    },
    desktop: {
      width: "60px",
      height: "60px",
      top: "0.2%",
      left: "60%",
    },
    mobile: {
      top: "236px",
      left: "96%",
      width: "40px",
      height: "40px",
    }
  },
  {
    key: "yellow_light",
    base: {
      background: '#FCB045',
      opacity: '0.4',
      filter: 'blur(196px)',
    },
    mobile: {
      width: "200px",
      height: "200px",
      top: "519px",
      left: "-66px"
    }
  },
]