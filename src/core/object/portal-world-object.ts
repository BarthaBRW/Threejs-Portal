import {WorldObject} from "./world-object";
import {Object3D} from "three";

// import TWEEN from '@tweenjs/tween.js';

export class PortalWorldObject extends WorldObject {
   private destination?: PortalWorldObject;

   constructor(object: Object3D | null,
               private name: string,
               private destinationSceneName: string,
               private destinationPortalName: string,
               private teleportEnabled: boolean) {
      super();
      this.addPhysicalObject(object);
      // this.startAnimation();
   }

   getDestinationSceneName(): string {
      return this.destinationSceneName;
   }

   getDestinationPortalName(): string {
      return this.destinationPortalName;
   }

   setDestination(portal: PortalWorldObject) {
      this.destination = portal;
   }

   getDestination(): PortalWorldObject {
      return this.destination;
   }

   getName(): string {
      return this.name;
   }

   isTeleportEnabled(): boolean {
      return this.teleportEnabled;
   }

   /*
   private startAnimation() {
      const tweenA = new TWEEN.Tween(this.mesh.position)
         .to({
            x: 0,
            y: .4,
            z: 0
         }, 3000)
         .easing(TWEEN.Easing.Sinusoidal.InOut)
         .start();
      const tweenB = new TWEEN.Tween(this.mesh.position)
         .to({
            x: 0,
            y: 0,
            z: 0
         }, 3000)
         .easing(TWEEN.Easing.Sinusoidal.InOut);
      tweenA.chain(tweenB);
      tweenB.chain(tweenA);
   }
    */
}
