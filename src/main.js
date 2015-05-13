/**
 * @file main
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        var devicePixelRatio = window.devicePixelRatio;
        var canvas = {
            context: null,
            init: function (element) {
                var context = element.getContext('2d');

                var width = element.width;
                var height = element.height;

                // http://www.html-js.com/article/2584

                if (devicePixelRatio !== 1) {
                    // scale up
                    element.width = devicePixelRatio * width;
                    element.height = devicePixelRatio * height;
                    context.scale(devicePixelRatio, devicePixelRatio);

                    // scale down
                    element.style.width = width + 'px';
                    element.style.height = height + 'px';
                }

                this.context = context;

                return context;
            }
        };

        return canvas;
    }
);
