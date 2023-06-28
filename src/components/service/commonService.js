import service from "./index";

const example = {
  getComment: () => {
    return service({
      url: "/Comment",
    }).then((res) => res.data);
  },
  getGallary: () => {
    return service({
      url: "/Gallary",
    }).then((res) => res.data);
  },
  getMainSlider: () => {
    return service({
      url: "/MainSlider",
    }).then((res) => res.data);
  },
  getGallarySlider: () => {
    return service({
      url: "/GallarySlider",
    }).then((res) => res.data);
  },
  getDiscoGraphy: () => {
    return service({
      url: "/DiscoGraphy",
    }).then((res) => res.data);
  },
  getIntroIndex: () => {
    return service({
      url: "/IntroIndex",
    }).then((res) => res.data);
  },
  getSubMenu: () => {
    return service({
      url: "/SubMenu",
    }).then((res) => res.data);
  },
};

export default example;
