import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useEffect, useRef, useState } from "react";

function AvatarModel() {
    const { scene } = useGLTF('/RPM_avatar.glb');
    const headRef = useRef();
    const [targetRotation, setTargetRotation] = useState({ x: 0, y: 0 });

    // Get the head reference from the scene
    const head = scene.getObjectByName('Head');
    if (head) {
        headRef.current = head;
    }

    useEffect(() => {
        const handleMouseMove = (event) => {
            const x = (event.clientX / window.innerWidth) * 2 - 1;
            const y = (event.clientY / window.innerHeight) * 2 - 1;
            setTargetRotation({ x: y * 0.5, y: x * 0.5 });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useFrame(() => {
        if (headRef.current) {
            headRef.current.rotation.x += (targetRotation.x - headRef.current.rotation.x) * 0.1;
            headRef.current.rotation.y += (targetRotation.y - headRef.current.rotation.y) * 0.1;
        }
    });

    return <primitive object={scene} />;
}

export default function Avatar() {
    return (
        <Canvas
            camera={{ position: [0, 1.5, 1], fov: 40}}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={1} />

            <AvatarModel />

            <OrbitControls
                target={[0, 1.65, 0]}
                enablePan={false}
                enableRotate={false}
                enableZoom={false}
                maxPolarAngle={Math.PI / 2}
                minDistance={1}
                maxDistance={3}
            />
        </Canvas>
    );
}
