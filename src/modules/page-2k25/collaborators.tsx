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
  description: string;
  type: "knowledge" | "gifting";
  website: string;
}

const partnerData: Collaborator[] = [
  {
    name: "Refread",
    logo: "/collaborators/refread-logo.png",
    width: 200,
    height: 41,
    description: "Knowledge expertise that elevates our shared vision",
    type: "knowledge",
    website: "https://www.refread.com/"
  },
  {
    name: "FNP",
    logo: "/collaborators/FNP-Logo_c.png",
    width: 180,
    height: 70,
    description: "Premium gifting solutions that delight and inspire",
    type: "gifting",
    website: "https://www.fnp.com"
  }
];

interface CollaboratorItemProps {
  data: Collaborator;
}

export const CollaboratorItem: React.FC<CollaboratorItemProps> = ({ data }) => {
  const { name, logo, width, height, description, type, website } = data;
  
  const gradientClasses = type === "knowledge" 
    ? "from-primary/30 to-primary/60" 
    : "from-yellow-500/30 to-yellow-500/60";
  
  const bgClasses = type === "knowledge" 
    ? "bg-primary/95" 
    : "bg-yellow-500/95";
    
  const highlightClasses = type === "knowledge"
    ? "ring-4 ring-primary/30"
    : "";

  return (
    <div className="text-center flex flex-col items-center w-full max-w-sm mx-auto mb-10 md:mb-0">
      <a href={website} target="_blank" rel="noopener noreferrer" className="block w-full">
        <div className={`relative mb-6 transform transition-transform duration-300 hover:scale-105 w-full ${highlightClasses} rounded-lg`}>
          <div className={`absolute -inset-1 bg-gradient-to-r ${gradientClasses} rounded-lg blur-sm`}></div>
          <div className={`relative ${bgClasses} p-6 rounded-lg flex items-center justify-center h-36`}>
            <div className="flex justify-center items-center w-auto">
              <Image
                alt={`${name} logo`}
                src={logo}
                width={width}
                height={height}
                quality={100}
              />
            </div>
          </div>
        </div>
      </a>
      <h5 className="font-bold text-2xl mt-2">{name}</h5>
      <span className={`text-sm uppercase tracking-wider font-medium mt-1 ${type === "knowledge" ? "text-primary font-bold" : "text-gray-500"}`}>
        {type === "knowledge" ? "Knowledge Partner" : "Gifting Partner"}
      </span>
      <p className="text-gray-700 mt-3 max-w-xs">{description}</p>
    </div>
  );
};

export const Collaborators: React.FC<CollaboratorsProps> = ({}) => {
  return (
    <Wrapper className="py-16 md:py-24" id="collaborators">
      <div className="text-center mb-16">
        <span className={cn(BERKSHIRE_SWASH.className, "heading text-4xl md:text-5xl")}>
          Trusted <span className="text-primary">Partners</span>
        </span>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Collaborating with industry leaders to bring you the best experience
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-primary via-yellow-500 to-primary/80 p-1 rounded-2xl shadow-xl">
          <div className="bg-white p-8 md:p-12 rounded-2xl">
            <div className="flex flex-col md:flex-row md:space-x-8 items-center justify-center">
              {partnerData.map((data, i) => (
                <CollaboratorItem data={data} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
