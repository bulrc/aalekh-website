import { Parallax as ReactParallax } from "react-parallax";

interface ParallaxProps {
  image: string;
  alt?: string;
}

export const Parallax: React.FC<ParallaxProps> = ({
  image,
  alt = "Parallax Image",
}) => {
  return (
    <ReactParallax
      bgImage={image}
      bgImageAlt={alt}
      strength={300}
      className="h-[60vh] object-cover"
      bgImageStyle={{ height: "80vh", objectFit: "cover" }}
    />
  );
};
