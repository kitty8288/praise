(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define([], factory);
    } else if (typeof exports !== "undefined") {
        factory();
    } else {
        var mod = {
            exports: {}
        };
        factory();
        global.index = mod.exports;
    }
})(this, function () {
    'use strict';

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var PraiseButton = function () {
        function PraiseButton() {
            _classCallCheck(this, PraiseButton);

            this.showPraiseText = this.showPraiseText.bind(this);
            this.praiseText = null;
            this.praiseHand = null;
            this.count = 0;
        }

        _createClass(PraiseButton, [{
            key: 'drawPraiseText',
            value: function drawPraiseText() {
                this.praiseHand = document.getElementById('hand');
                this.praiseText = document.getElementById('praise-text');
                this.praiseText.innerText = '+1';
                this.praiseHand.onclick = this.showPraiseText;
                this.count++;
            }
        }]);

        return PraiseButton;
    }();

    var Thumb = function (_PraiseButton) {
        _inherits(Thumb, _PraiseButton);

        function Thumb() {
            _classCallCheck(this, Thumb);

            return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).apply(this, arguments));
        }

        _createClass(Thumb, [{
            key: 'showPraiseText',
            value: function showPraiseText() {
                var _this2 = this;

                this.drawPraiseText();
                this.praiseText.classList.add("text-show");
                if (this.count === 11) {
                    var handDiv = document.getElementById('hand');
                    handDiv.style.backgroundColor = "#c7c4c4";
                }
                setTimeout(function () {
                    _this2.hidePraiseText();
                }, 500);
            }
        }, {
            key: 'hidePraiseText',
            value: function hidePraiseText() {
                this.praiseText.classList.remove("text-show");
            }
        }]);

        return Thumb;
    }(PraiseButton);
});
