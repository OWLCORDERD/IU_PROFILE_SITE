import service from "./index";

const example = {
  getComment: () => {
    return service({
      url: "/comment",
    }).then((res) => res.data);
  },
  getGallary: () => {
    return service({
      url: "/Gallary",
    }).then((res) => res.data);
  },
  getGallarySlider: () => {
    return service({
      url: "/GallarySlider",
    }).then((res) => res.data);
  },
};

export default example;
