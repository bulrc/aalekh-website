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

const sponsersData: Collaborator[] = [
  {
    name: "Krishna Book Distributors",
    logo: "/collaborators/krishna-book-distributors-logo.png",
    width: 96,
    height: 31.5,
  },
  {
    name: "CELECT",
    logo: "/collaborators/celect-logo.png",
    width: 250,
    height: 37.14,
  },
];

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
    <div className={`text-center h-full flex flex-col justify-end`}>
      <div className={`grid items-center h-full`}>
        <Image
          alt={`${name} logo`}
          src={logo}
          width={width}
          height={height}
          quality={100}
          className={`mx-auto`}
        />
      </div>
      <h5 className={`font-bold text-xl leading-5 mt-5`}>{name}</h5>
    </div>
  );
};

export const Collaborators: React.FC<CollaboratorsProps> = ({}) => {
  return (
    <Wrapper className={`py-10 md:py-16`} id="collaborators">
      <div className={`pb-16 min-[920px]:pb-24`}>
        <span className={cn(BERKSHIRE_SWASH.className, `heading`)}>
          Collabor<span className={`text-primary`}>a</span>tors
        </span>
      </div>
      <div
        className={`flex gap-10 border-8 border-primary rounded-3xl flex-col md:flex-row`}
      >
        <div className={`basis-[55%] p-6`}>
          <h4 className={`mb-8 text-center font-bold text-3xl`}>Sponsors</h4>
          <div className={`flex gap-10 md:gap-20 justify-center items-center`}>
            {sponsersData.map((data, i) => (
              <CollaboratorItem data={data} key={i} />
            ))}
          </div>
        </div>

        <div
          className={`basis-[45%] p-6 bg-primary text-white rounded-b-xl md:rounded-r-xl`}
        >
          <h4 className={`mb-8 text-center font-bold text-3xl`}>
            Knowledge Partner
          </h4>
          <div className={`flex gap-20 justify-center items-center`}>
            {partnerData.map((data, i) => (
              <CollaboratorItem data={data} key={i} />
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
