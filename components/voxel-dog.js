import { useState, useEffect, useRef, useCallback } from "react";
import { Box } from "@chakra-ui/react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { loadGLTFModel } from "../lib/model";

const VoxelDog = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const refContainer = useRef();
  const [renderer, setRenderer] = useState();
  const [camera] = useState(
    new THREE.OrthographicCamera(-6, 6, 6, -6, 0.01, 50000)
  );
  const [target] = useState(new THREE.Vector3(-0.5, 1.2, 0));
  const [initialCameraPosition] = useState(
    new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      10,
      20 * Math.cos(0.2 * Math.PI)
    )
  );
  const [scene] = useState(new THREE.Scene());
  const [controls, setControls] = useState();

  useEffect(() => {
    const { current: container } = refContainer;
    if (container && !renderer) {
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      setRenderer(renderer);

      console.log();
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;
      setControls(controls);

      loadGLTFModel(scene, "dog.glb", {
        receiveShadow: false,
        castShadow: false
      });

      let req = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const invF = 100 - frame;
          const p = initialCameraPosition;
          const rotSpeed = (invF * invF) / 300;

          camera.position.y = 10;
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, []);

  return <Box ref={refContainer} className="voxel-dog" w={300} h={240}></Box>;
};

export default VoxelDog;
