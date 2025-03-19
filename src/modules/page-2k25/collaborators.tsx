import Image from "next/image";

import { BERKSHIRE_SWASH } from "@/app/fonts";
import { Wrapper } from "@/components/wrapper";
import { cn } from "@/utils/cn";

interface CollaboratorsProps {}

interface Collaborator {
  name: string;
  logo: string;
  width: number;
  height: number;
}

const partnerData: Collaborator[] = [
  {
    name: "Refread",
    logo: "/collaborators/refread-logo.png",
    width: 200,
    height: 41,
  },
];

interface CollaboratorItemProps {
  data: Collaborator;
}

export const CollaboratorItem: React.FC<CollaboratorItemProps> = ({ data }) => {
  const { name, logo, width, height } = data;

  return (
    <div className="text-center flex flex-col items-center">
      <div className="relative mb-6 transform transition-transform duration-300 hover:scale-105">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/60 rounded-lg blur-sm"></div>
        <div className="relative bg-white p-6 rounded-lg flex items-center justify-center">
          <Image
            alt={`${name} logo`}
            src={logo}
            width={width}
            height={height}
            quality={100}
            className="mx-auto"
          />
        </div>
      </div>
      <h5 className="font-bold text-2xl mt-2">{name}</h5>
    </div>
  );
};

export const Collaborators: React.FC<CollaboratorsProps> = ({}) => {
  return (
    <Wrapper className="py-16 md:py-24" id="collaborators">
      <div className="text-center mb-16">
        <span className={cn(BERKSHIRE_SWASH.className, "heading text-4xl md:text-5xl")}>
          Knowledge <span className="text-primary">Partner</span>
        </span>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-primary to-primary/80 p-1 rounded-2xl shadow-xl">
          <div className="bg-white p-8 md:p-12 rounded-2xl">
            <div className="flex flex-col items-center">
              {partnerData.map((data, i) => (
                <CollaboratorItem data={data} key={i} />
              ))}
              
              <p className="mt-8 text-center text-gray-700 max-w-lg mx-auto">
                Proud to collaborate with our trusted knowledge partner who brings expertise and excellence to our shared vision.
              </p>
              
              <div className="mt-8 inline-flex">
                <a 
                  href="#learn-more" 
                  className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};