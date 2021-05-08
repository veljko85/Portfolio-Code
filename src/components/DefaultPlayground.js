import React from "react";
import {
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  Color4,
  Tools,
  Color3,
  StandardMaterial,
} from "@babylonjs/core";
import SceneComponent from "./SceneComponent"; // uses above component in same directory

const onSceneReady = (scene) => {
  //camera
  var camera = new ArcRotateCamera(
    "Camera",
    0,
    0,
    0,
    new Vector3(0, 0, 0),
    scene
  );
  camera.setPosition(new Vector3(10, 0, -13)); /*0,0,13*/
  //transperent canvas
  scene.clearColor = new Color4(0, 0, 0, 0);
  //disable zoom
  camera.lowerRadiusLimit = camera.upperRadiusLimit = camera.radius = 13;

  const canvas = scene.getEngine().getRenderingCanvas();
  camera.attachControl(canvas, true);
  //light
  var light = new HemisphericLight("light", new Vector3(1, 1, 0), scene);
  light.intensity = 5;

  //logo build
  //V letter
  let lineVLeft = MeshBuilder.CreateBox("lineVLeft", { size: 3 }, scene);
  lineVLeft.rotation.z = Tools.ToRadians(20.5);
  lineVLeft.scaling = new Vector3(0.3, 2, 0.2);
  lineVLeft.position = new Vector3(-0.995, -1, 0.2);
  const lineVMat = new StandardMaterial("lineVMat");
  lineVMat.diffuseColor = new Color3(0, 0, 0);
  lineVLeft.material = lineVMat;

  let lineVRight = lineVLeft.createInstance("lineVRight");
  lineVRight.rotation.z = Tools.ToRadians(-20.5);
  lineVRight.position = new Vector3(0.995, -1, 0.2);

  function buildFillDown() {
    let fillDown = MeshBuilder.CreateBox("fillDown", { size: 3 }, scene);
    fillDown.scaling = new Vector3(0.2, 0.3, 0.2);
    fillDown.position.y = -3.5;
    fillDown.position.z = 0.2;
    fillDown.material = lineVMat;
  }

  function buildPoint() {
    let point = MeshBuilder.CreateCylinder(
      "point",
      { diameter: 1, height: 2, tessellation: 3 },
      scene
    );
    point.rotation.y = Tools.ToRadians(90);
    point.rotation.z = Tools.ToRadians(-90);
    point.scaling = new Vector3(1.2, 0.3, 0.9);
    point.position.y = -4.2;
    point.position.z = 0.2;
    point.material = lineVMat;
  }
  buildFillDown();
  buildPoint();

  //back green of V letter
  let lineVBackLeft = MeshBuilder.CreateBox(
    "lineVBackLeft",
    { size: 3 },
    scene
  );
  lineVBackLeft.rotation.z = Tools.ToRadians(20.5);
  lineVBackLeft.scaling = new Vector3(0.3, 1.87, 0.05);
  lineVBackLeft.position = new Vector3(-0.9, -0.8, 0.1);
  const lineVBackMat = new StandardMaterial("lineVBackMat");
  lineVBackMat.diffuseColor = new Color3(0, 0.2, 0);
  lineVBackLeft.material = lineVBackMat;

  let lineVBackLeft2 = lineVBackLeft.createInstance("lineVBackLeft2");
  lineVBackLeft2.position = new Vector3(-1.25, -1.2, 0.2);
  lineVBackLeft2.scaling = new Vector3(0.3, 2.2, 0.05);

  let lineVBackRight = lineVBackLeft.createInstance("lineVBackRight");
  lineVBackRight.rotation.z = Tools.ToRadians(-20.5);
  lineVBackRight.position = new Vector3(0.8, -0.5, 0.1);

  let lineVBackRight2 = lineVBackLeft.createInstance("lineVBackRight2");
  lineVBackRight2.rotation.z = Tools.ToRadians(-20.5);
  lineVBackRight2.position = new Vector3(1.25, -1.4, 0.2);
  lineVBackRight2.scaling = new Vector3(0.3, 2.2, 0.05);

  let lineVBackLeftPoint = lineVBackLeft.createInstance("lineVBackLeftPoint");
  lineVBackLeftPoint.position = new Vector3(-0.3, -4.4, 0.2);
  lineVBackLeftPoint.scaling = new Vector3(0.15, 0.35, 0.05);

  let lineVBackRightPoint = lineVBackLeft.createInstance("lineVBackRightPoint");
  lineVBackRightPoint.rotation.z = Tools.ToRadians(-20.5);
  lineVBackRightPoint.position = new Vector3(0.37, -4.4, 0.2);
  lineVBackRightPoint.scaling = new Vector3(0.15, 0.37, 0.05);

  //M letter

  let middleLineMLeft = lineVLeft.createInstance("middleLineMLeft");
  middleLineMLeft.rotation.z = Tools.ToRadians(45);
  middleLineMLeft.position = new Vector3(-0.6, 3.2, 0.4);
  middleLineMLeft.scaling = new Vector3(0.2, 0.75, 0.2);

  let middleLineMRight = lineVLeft.createInstance("middleLineMRight");
  middleLineMRight.rotation.z = Tools.ToRadians(-45);
  middleLineMRight.position = new Vector3(0.6, 3.2, 0.4);
  middleLineMRight.scaling = new Vector3(0.2, 0.75, 0.2);

  let lineMLeft = lineVLeft.createInstance("lineMLeft");
  lineMLeft.rotation.z = Tools.ToRadians(0);
  lineMLeft.position = new Vector3(-1.35, 2.4, 0.4);
  lineMLeft.scaling = new Vector3(0.2, 1.2, 0.2);

  let lineMRight = lineVLeft.createInstance("lineMRight");
  lineMRight.rotation.z = Tools.ToRadians(0);
  lineMRight.position = new Vector3(1.35, 2.4, 0.4);
  lineMRight.scaling = new Vector3(0.2, 1.2, 0.2);

  //back green of M letter

  let lineMBackLeft = lineVBackLeft.createInstance("lineMBackLeft");
  lineMBackLeft.rotation.z = Tools.ToRadians(0);
  lineMBackLeft.position = new Vector3(-1.6, 2.6, 0.4);
  lineMBackLeft.scaling = new Vector3(0.2, 1.2, 0.05);

  let lineMBackLeft2 = lineVBackLeft.createInstance("lineMBackLeft2");
  lineMBackLeft2.rotation.z = Tools.ToRadians(0);
  lineMBackLeft2.position = new Vector3(-1, 1.5, 0.4);
  lineMBackLeft2.scaling = new Vector3(0.2, 1.4, 0.05);

  let lineMBackRight = lineVBackLeft.createInstance("lineMBackRight");
  lineMBackRight.rotation.z = Tools.ToRadians(0);
  lineMBackRight.position = new Vector3(1.6, 2.6, 0.4);
  lineMBackRight.scaling = new Vector3(0.2, 1.2, 0.05);

  let lineMBackRight2 = lineVBackLeft.createInstance("lineMBackRight2");
  lineMBackRight2.rotation.z = Tools.ToRadians(0);
  lineMBackRight2.position = new Vector3(1, 1.5, 0.4);
  lineMBackRight2.scaling = new Vector3(0.2, 1.4, 0.05);

  let middleLineMBackLeft = lineVBackLeft.createInstance("middleLineMBackLeft");
  middleLineMBackLeft.rotation.z = Tools.ToRadians(45);
  middleLineMBackLeft.position = new Vector3(-0.6, 3.1, 0.4);
  middleLineMBackLeft.scaling = new Vector3(0.3, 0.7, 0.05);

  let middleLineMBackRight = lineVBackLeft.createInstance(
    "middleLineMBackRight"
  );
  middleLineMBackRight.rotation.z = Tools.ToRadians(-45);
  middleLineMBackRight.position = new Vector3(0.6, 3.1, 0.4);
  middleLineMBackRight.scaling = new Vector3(0.3, 0.7, 0.05);
};

export default () => (
  <div>
    <SceneComponent
      antialias
      onSceneReady={onSceneReady}
      className="my-canvas"
    />
  </div>
);
