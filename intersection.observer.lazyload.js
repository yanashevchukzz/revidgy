// Intersection Observer Lazy Load v1.0
// Compatible with Mika Tuupola's jQuery Lazy Load v1.9.7 default syntax
// Expects IntersectionObserver in window
var IntersectionObserverLoader = function() {
  var observer;
  var imageCount;

  var handleIntersect = function(entries) {
    if (imageCount === 0) {
      observer.disconnect();
    }

    entries.forEach(function(entry) {
      if (entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        imageCount = imageCount - 1;
        loadImage(entry.target);
      }
    });
  };

  var loadImage = function(image) {
    var original = image.getAttribute('data-original');
    var srcset = image.getAttribute('data-srcset');

    if (srcset !== null) {
      image.setAttribute('srcset', srcset);
    }

    image.setAttribute('src', original);
    image.classList.add('lazyImg-loaded');
  };

  var lazyload = function(selector) {
    var images = document.querySelectorAll(selector);
    var imagesArray = Array.from(images);
    var config = {
      rootMargin: '50px 0px',
      threshold: 0.01
    };

    imageCount = imagesArray.length;
    observer = new IntersectionObserver(handleIntersect, config);

    imagesArray
      .filter(function(image) {
        return !image.classList.contains('lazyImg-loaded');
      })
      .forEach(function(image) {
        observer.observe(image);
      });
  };

  return {
    lazyload: lazyload
  };
};
