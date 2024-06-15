import * as OBC from 'openbim-components';
import * as THREE from 'three';

export type ToDoPriority = "Low" | "Medium" | "High"

export interface ToDo {
    description: string
    date: Date
    fragmentMap: OBC.FragmentIdMap
    camera: { position: THREE.Vector3, target: THREE.Vector3 }
    priority: ToDoPriority
}