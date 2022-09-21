module.exports = function () {
  return {
    imgURL: function (w, h, r) {
      if (r !== undefined) {
        r = r;
      } else {
        r = 1;
      }
      return (
        'https://picsum.photos/' +
        w +
        '/' +
        h +
        '.jpg?random=' +
        r +
        ''
      );
    },
  };
};
