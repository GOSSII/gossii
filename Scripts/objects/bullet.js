var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        //constructor
        function Bullet() {
            var _this = _super.call(this, "bullet") || this;
            _this.Start();
            return _this;
        }
        //private methods
        Bullet.prototype._checkBounds = function () {
            if (this.y < 0) {
                this.Reset();
            }
        };
        Bullet.prototype.Start = function () {
            this.x = managers.Game.Stage.mouseX;
            this.y = 500;
            this._verticalSpeed = -5;
            this.deathSignal = false;
        };
        Bullet.prototype.Update = function () {
            this.y += this._verticalSpeed;
            this._checkBounds();
        };
        Bullet.prototype.Reset = function () {
            this.y = 700;
            this._verticalSpeed = 0;
            this.deathSignal = true;
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map