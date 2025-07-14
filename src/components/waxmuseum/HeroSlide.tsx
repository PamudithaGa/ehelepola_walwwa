import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import Image1 from '../../assets/gallery/prison-arcade-banner.jpg'

const images = [
  Image1,
  Image1,
  Image1,
  Image1,
  Image1,
  Image1,
  Image1,
  Image1,
  Image1,
  Image1,
  Image1,
];

const HeroSlide: React.FC = () => {
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;

    // Setup image rotation
    const imgs = ring.querySelectorAll<HTMLDivElement>(".img");

    gsap.set(ring, { rotationY: 180 });

    imgs.forEach((img, i) => {
      gsap.set(img, {
        rotateY: i * -36,
        transformOrigin: "50% 50% 500px",
        z: -500,
        backgroundImage: `url(${images[i % images.length]})`,
        backgroundPosition: getBgPos(i),
        backfaceVisibility: "hidden",
      });
    });

    // Animate ring continuously
    gsap.to(ring, {
      rotationY: "+=360",
      ease: "none",
      duration: 60,
      repeat: -1,
      onUpdate: () => {
        imgs.forEach((img, i) =>
          gsap.set(img, {
            backgroundPosition: getBgPos(i),
          })
        );
      },
    });
  }, []);

  const getBgPos = (i: number) => {
    const ringRotation = gsap.getProperty(ringRef.current!, "rotationY") as number;
    const offset = 100 - (gsap.utils.wrap(0, 360, ringRotation - 180 - i * 36) / 360) * 500;
    return `${offset}px 0px`;
  };

  return (
    <div className="w-full h-[100vh] bg-black overflow-hidden flex items-center justify-center">
      <div className="relative w-[300px] h-[400px] perspective-[2000px]">
        <div
          ref={ringRef}
          className="ring w-full h-full transform-style-preserve-3d cursor-default"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="img absolute w-full h-full bg-cover bg-center rounded-xl shadow-lg"
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
