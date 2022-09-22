var getlorem = require('getlorem');

module.exports = function () {
  return {
    imgURL: function (w, h, r) {
      var r = r !== undefined ? r : 1;
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
    paragraphs: function (c, p) {
      var output = ' ';
      var x;
      var y = c;
      var low = c / p / 1.5;
      var high = (c / p) * 1.5;
      for (let i = 1; i < p; i++) {
        x = Math.floor(Math.random() * y) + 1;
        x = x < low ? low : x;
        x = x > high ? high : x;
        y -= x;
        if (y <= 20) {
          x += y;
          i = p;
          y = 0;
        }
        output += '<p>' + getlorem.bytes(x) + '</p>';
      }
      if (y > 0) {
        output += '<p>' + getlorem.bytes(y) + '</p>';
      }
      return output;
    },
    char: function (c) {
      return getlorem.bytes(c);
    },
  };
};
