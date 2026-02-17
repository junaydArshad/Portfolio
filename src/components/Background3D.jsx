import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(8000), { radius: 1.5 }));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 15;
        ref.current.rotation.y -= delta / 25;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#FFFFFF"
                    size={0.0015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
};

const FloatingParticles = () => {
    const ref = useRef();
    const [sphere] = useState(() => random.inSphere(new Float32Array(1000), { radius: 2.5 }));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 30;
        ref.current.rotation.y -= delta / 40;
    });

    return (
        <group rotation={[0, 0, Math.PI / 3]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#888888"
                    size={0.0025}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.4}
                />
            </Points>
        </group>
    );
}


const Background3D = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none', background: '#000' }}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
                <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                    <FloatingParticles />
                </Float>
            </Canvas>
        </div>
    );
};

export default Background3D;
