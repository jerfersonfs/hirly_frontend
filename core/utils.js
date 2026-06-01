/*  function firstAssetPrefix(pattern, fallback) {
    var image = Array.prototype.find.call(document.images, function (img) {
      return img.getAttribute("src") && img.getAttribute("src").indexOf(pattern) !== -1;
    });
    if (!image) return fallback;
    var src = image.getAttribute("src");
    return src.slice(0, src.indexOf(pattern) + pattern.length);
  }

  function logoSrc(fileName) {
    return firstAssetPrefix("images/logo/others/", "images/logo/others/") + fileName;
  }

  function iconSrc(fileName) {
    return firstAssetPrefix("images/icons/", "images/icons/") + fileName;
  }*/