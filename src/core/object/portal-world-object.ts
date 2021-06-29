import {WorldObject} from './world-object';
import {Object3D} from 'three';
import {createLight} from "../light/light.utils";
import {LightColor} from "../light/light.model";

export class PortalWorldObject extends WorldObject {
   private destination?: PortalWorldObject;

   constructor(
      object: Object3D | null,
      private name: string,
      private destinationWorldName: string,
      private destinationPortalName: string,
      private teleportEnabled: boolean,
      private color: LightColor,
   ) {
      super();
      if (this.color) {
         this.add(createLight(color));
      }
      this.addPhysicalObject(object);
   }

   getDestinationWorldName(): string {
      return this.destinationWorldName;
   }

   getDestinationPortalName(): string {
      return this.destinationPortalName;
   }

   setDestination(portal: PortalWorldObject): void {
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
}
