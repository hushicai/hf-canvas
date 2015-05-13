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
                var width = element.width;
                var height = element.height;

                element.style.width = width + 'px';
                element.style.height = height + 'px';

                element.width = devicePixelRatio * width;
                element.height = devicePixelRatio * height;

                var context = element.getContext('2d');

                if (devicePixelRatio !== 1) {
                    context.scale(devicePixelRatio, devicePixelRatio);
                }

                this.context = context;

                return context;
            }
        };

        return canvas;
    }
);
