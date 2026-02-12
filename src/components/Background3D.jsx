import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#BB86FC"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const FloatingParticles = () => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(500), { radius: 2 }));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 20;
        ref.current.rotation.y -= delta / 25;
    });

    return (
        <group rotation={[0, 0, Math.PI / 3]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#03DAC6"
                    size={0.003}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.6}
                />
            </Points>
        </group>
    );
}


const Background3D = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
                <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    <FloatingParticles />
                </Float>
            </Canvas>
        </div>
    );
};

export default Background3D;
