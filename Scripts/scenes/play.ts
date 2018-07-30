module scenes {
    export class Play extends objects.Scene {
        // member variables
        private _plane:objects.Plane;
        private _ocean:objects.Ocean;
        private _bullet:objects.Bullet;
        private _clouds:objects.Cloud[];
        private _cloudNum:number;
        
        

        // constructors
        constructor() {
            super();

            this.Start();
        }

        // private methods
        private _buildClouds():void {
            for (let count = 0; count < this._cloudNum; count++) {
                this._clouds.push(new objects.Cloud());
                //this._clouds[count] = new objects.Cloud();
            }
        }

        // public methods
        public Start():void {
            

            this._bullet = new objects.Bullet();
            this._plane = new objects.Plane();
            this._ocean = new objects.Ocean();
            
            

            // creates an empty array of type Cloud
            this._clouds = new Array<objects.Cloud>();
            this._cloudNum = 5;

            this._buildClouds();
           
            this.Main();
        }

        public Update():void {
           
            this._plane.Update();
            this._ocean.Update();
            
            this._bullet.Update();
            if (this._bullet.deathSignal == true)
            {
                this.removeChild(this._bullet);
            }
            

            

            this._clouds.forEach(cloud => {
                cloud.Update();
                managers.Collision.check(this._plane, cloud);
            });
            
        }

        public Reset():void {
            
        }

        public Destroy():void {
            this.removeAllChildren();
        }

        public Main():void {
            console.log(`Starting - PLAY SCENE`);

            // adding the ocean to the scene
            this.addChild(this._ocean);

            
            // adding the plane to the scene
            this.addChild(this._plane);

            // adding the cloud to the scene
            for (const cloud of this._clouds) {
                this.addChild(cloud);
            }
            this.on("click", function(){
                console.log("blam blam blam");
                this.removeChild(this._bullet);
             
                this.addChild(this._bullet);
                
            }, this);
        }
    }
}