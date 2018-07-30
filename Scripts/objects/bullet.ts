namespace objects {
    export class Bullet extends objects.GameObject {
        //private Variables
        private _verticalSpeed:number;
        //public Variables
        public deathSignal:boolean;
        //constructor
        constructor() {
            super("bullet");

            this.Start();

        }
        //private methods
        private _checkBounds() {
            if (this.y < 0) {
                this.Reset();
              }
        }
        public Start(): void {
            this.x = managers.Game.Stage.mouseX;
            this.y = 500;
            this._verticalSpeed = -5;
            this.deathSignal = false;
            
        }
        public Update(): void {
            this.y += this._verticalSpeed;
            this._checkBounds();
        }
        public Reset(): void {
            this.y = 700;
            this._verticalSpeed = 0;
            this.deathSignal = true;
        }



            

    }
}