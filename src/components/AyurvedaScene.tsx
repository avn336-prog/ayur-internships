import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * AyurvedaScene — a lightweight, interactive 3D background for the auth
 * screen. Renders a gently blooming lotus with rotating mandala rings,
 * floating herb leaves and golden dust, and follows the pointer with a
 * soft parallax. Pure three.js (no react wrapper) so it stays stable on
 * React 19; fully disposed on unmount.
 */
export default function AyurvedaScene() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);
    renderer.setPixelRatio(dpr);
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100,
    );
    camera.position.set(0, 0, 9);

    // ---------- Lights ----------
    const ambient = new THREE.AmbientLight(0xfff3e0, 0.9);
    scene.add(ambient);

    const warm = new THREE.PointLight(0xffb45e, 1.6, 30);
    warm.position.set(2, 2, 5);
    scene.add(warm);

    const cool = new THREE.DirectionalLight(0xbfe3c4, 0.9);
    cool.position.set(-3, 4, 2);
    scene.add(cool);

    const rim = new THREE.PointLight(0xffd9a0, 0.7, 20);
    rim.position.set(-2, -2, 4);
    scene.add(rim);

    // ---------- Colors from the Ayurveda clay palette ----------
    const C = {
      petalDeep: 0xd97757, // terracotta
      petalMid: 0xe8a33d, // saffron
      petalLight: 0xf6c98a,
      lotusCore: 0xffcf7d,
      leaf: 0x4f9e63,
      leafDark: 0x2f7a4d,
      gold: 0xf0b95e,
      dust: 0xffd98a,
    };

    // ---------- Center group: lotus + mandala ----------
    const center = new THREE.Group();
    scene.add(center);

    // Lotus bloom — layered "petals" made from scaled spheres
    const lotus = new THREE.Group();
    center.add(lotus);

    const petalGeo = new THREE.SphereGeometry(0.32, 14, 10);
    petalGeo.scale(0.42, 1.6, 0.22);

    const petalOuter = new THREE.MeshStandardMaterial({
      color: C.petalMid,
      flatShading: true,
      roughness: 0.75,
      metalness: 0.05,
      emissive: C.petalMid,
      emissiveIntensity: 0.06,
    });
    const petalInner = new THREE.MeshStandardMaterial({
      color: C.petalDeep,
      flatShading: true,
      roughness: 0.7,
      metalness: 0.05,
      emissive: C.petalDeep,
      emissiveIntensity: 0.05,
    });
    const petals = new THREE.Group();
    lotus.add(petals);

    // Outer ring: 8 petals tilted outward
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const petal = new THREE.Mesh(petalGeo, petalOuter);
      petal.position.set(Math.cos(angle) * 0.55, -0.1, Math.sin(angle) * 0.55);
      petal.rotation.x = Math.cos(angle) * -0.5;
      petal.rotation.z = Math.sin(angle) * -0.5;
      petal.rotation.y = -angle;
      petals.add(petal);
    }
    // Inner ring: 6 petals, more upright
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2 + 0.35;
      const petal = new THREE.Mesh(petalGeo, petalInner);
      petal.position.set(Math.cos(angle) * 0.3, 0.28, Math.sin(angle) * 0.3);
      petal.rotation.x = Math.cos(angle) * -0.28;
      petal.rotation.z = Math.sin(angle) * -0.28;
      petal.rotation.y = -angle;
      petals.add(petal);
    }
    // Heart of the lotus
    const core = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 16, 12),
      new THREE.MeshStandardMaterial({
        color: C.lotusCore,
        roughness: 0.35,
        metalness: 0.1,
        emissive: C.lotusCore,
        emissiveIntensity: 0.25,
      }),
    );
    core.position.y = 0.5;
    lotus.add(core);

    // Leaf pad under the bloom
    const pad = new THREE.Mesh(
      new THREE.CircleGeometry(1.05, 28),
      new THREE.MeshStandardMaterial({
        color: C.leafDark,
        roughness: 0.8,
        side: THREE.DoubleSide,
      }),
    );
    pad.rotation.x = -Math.PI / 2;
    pad.position.y = -0.85;
    lotus.add(pad);

    // Mandala rings around the bloom
    const ringMat = new THREE.MeshStandardMaterial({
      color: C.gold,
      roughness: 0.35,
      metalness: 0.6,
      emissive: C.gold,
      emissiveIntensity: 0.18,
    });
    const ringA = new THREE.Mesh(new THREE.TorusGeometry(2.1, 0.028, 12, 90), ringMat);
    ringA.rotation.x = Math.PI / 2.15;
    center.add(ringA);

    const ringB = new THREE.Mesh(new THREE.TorusGeometry(2.7, 0.018, 12, 110), ringMat);
    ringB.rotation.x = Math.PI / 1.85;
    ringB.rotation.y = 0.6;
    center.add(ringB);

    const ringC = new THREE.Mesh(new THREE.TorusGeometry(3.3, 0.012, 10, 130), ringMat);
    ringC.rotation.x = Math.PI / 1.7;
    ringC.rotation.z = 0.4;
    center.add(ringC);

    // Small herb sprigs orbiting the bloom
    const herbMat = new THREE.MeshStandardMaterial({
      color: C.leaf,
      roughness: 0.7,
      flatShading: true,
    });
    const sprigGeo = new THREE.ConeGeometry(0.06, 0.34, 5);
    const sprigs: THREE.Mesh[] = [];
    for (let i = 0; i < 10; i++) {
      const angle = (i / 10) * Math.PI * 2;
      const r = 1.45 + (i % 3) * 0.3;
      const sprig = new THREE.Mesh(sprigGeo, herbMat);
      sprig.position.set(Math.cos(angle) * r, -0.75, Math.sin(angle) * r);
      sprig.rotation.z = Math.PI / 2 - angle;
      sprig.rotation.x = Math.PI / 2;
      center.add(sprig);
      sprigs.push(sprig);
    }

    // ---------- Floating leaves (drift upward, wrap around) ----------
    const leaves: {
      mesh: THREE.Mesh;
      speed: number;
      phase: number;
      drift: number;
    }[] = [];
    const leafMat = new THREE.MeshStandardMaterial({
      color: C.leaf,
      roughness: 0.75,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });
    const leafMatSaffron = new THREE.MeshStandardMaterial({
      color: 0xe8a33d,
      roughness: 0.75,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.7,
    });
    const leafGeo = new THREE.PlaneGeometry(0.34, 0.58);

    for (let i = 0; i < 22; i++) {
      const mesh = new THREE.Mesh(
        leafGeo,
        i % 5 === 0 ? leafMatSaffron : leafMat,
      );
      mesh.position.set(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 9,
        -2 - Math.random() * 4,
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      const scale = 0.6 + Math.random() * 1.1;
      mesh.scale.setScalar(scale);
      scene.add(mesh);
      leaves.push({
        mesh,
        speed: 0.12 + Math.random() * 0.28,
        phase: Math.random() * Math.PI * 2,
        drift: 0.3 + Math.random() * 0.8,
      });
    }

    // ---------- Golden dust / spores ----------
    const dustCount = 240;
    const dustPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      dustPos[i * 3] = (Math.random() - 0.5) * 16;
      dustPos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      dustPos[i * 3 + 2] = -1 - Math.random() * 5;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPos, 3));
    const dustMat = new THREE.PointsMaterial({
      color: C.dust,
      size: 0.06,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
    });
    const dust = new THREE.Points(dustGeo, dustMat);
    scene.add(dust);

    // ---------- Pointer interaction ----------
    const pointer = { x: 0, y: 0 };
    const target = { x: 0, y: 0 };
    const onPointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    // ---------- Resize ----------
    const resize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", resize);

    // ---------- Animation loop ----------
    const clock = new THREE.Clock();
    let raf = 0;
    let disposed = false;

    const animate = () => {
      if (disposed) return;
      const t = clock.getElapsedTime();
      const dt = Math.min(clock.getDelta(), 0.05);

      // Lotus breathing + slow spin
      lotus.rotation.y = t * 0.22;
      lotus.position.y = Math.sin(t * 0.9) * 0.12;

      // Mandala rings
      ringA.rotation.z = t * 0.1;
      ringB.rotation.z = -t * 0.07;
      ringC.rotation.z = t * 0.05;
      ringC.rotation.x = Math.PI / 1.7 + Math.sin(t * 0.3) * 0.05;

      // Herb sprigs orbit gently
      sprigs.forEach((sprig, i) => {
        const base = (i / 10) * Math.PI * 2;
        const r = 1.45 + (i % 3) * 0.3;
        sprig.position.x = Math.cos(base + t * 0.25) * r;
        sprig.position.z = Math.sin(base + t * 0.25) * r;
      });

      // Leaves drift upward and spin
      for (const leaf of leaves) {
        const m = leaf.mesh;
        m.position.y += leaf.speed * dt;
        m.position.x += Math.sin(t * 0.6 + leaf.phase) * leaf.drift * dt;
        m.rotation.z += dt * (0.3 + Math.random() * 0.2);
        m.rotation.x += dt * 0.1;
        if (m.position.y > 5.2) {
          m.position.y = -5.2;
          m.position.x = (Math.random() - 0.5) * 14;
        }
      }

      // Dust cloud slowly rotates
      dust.rotation.y = t * 0.02;

      // Camera parallax toward pointer (lerped for smoothness)
      target.x += (pointer.x - target.x) * 0.04;
      target.y += (pointer.y - target.y) * 0.04;
      camera.position.x = target.x * 0.9;
      camera.position.y = -target.y * 0.55;
      camera.position.z = 9 + target.y * 0.4;
      camera.lookAt(0, 0, 0);

      // Center group tilts subtly with the pointer
      center.rotation.y = target.x * 0.12;
      center.rotation.x = target.y * 0.06;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    // ---------- Cleanup ----------
    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Points) {
          obj.geometry?.dispose();
          const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
          materials.forEach((mat) => mat?.dispose());
        }
      });
      dustGeo.dispose();
      dustMat.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden"
      style={{ pointerEvents: "none" }}
    />
  );
}