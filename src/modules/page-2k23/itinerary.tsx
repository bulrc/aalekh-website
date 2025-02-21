"use client";

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { BERKSHIRE_SWASH, INTER } from "@/app/fonts";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/table";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/tabs";
import { Wrapper } from "@/components/wrapper";
import { cn } from "@/utils/cn";
import { minWidth } from "@/utils/media-query";

interface ItineraryProps {}

export const Itinerary: React.FC<ItineraryProps> = ({}) => {
  const isLargeScreen = useMediaQuery({ query: minWidth(620) });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? (
    <Wrapper className="py-10 md:py-16" id="itinerary">
      <div className="pb-16 min-[920px]:pb-24">
        <span className={cn(BERKSHIRE_SWASH.className, "heading")}>
          Itiner<span className="text-primary">a</span>ry
        </span>
      </div>
      <div className="w-full m-auto">
        <Tabs
          defaultValue="day1"
          className={cn(INTER.className, "text-sm font-medium")}
        >
          <div className="w-full flex justify-center mb-4">
            <TabsList className="bg-zinc-200 w-fit">
              <TabsTrigger value="day1">
                {!isLargeScreen ? "Day 1" : "Day 1: Thursday, 19"}
                {isLargeScreen ? <sup>th</sup> : null}
                {isLargeScreen ? " January 2023" : null}
              </TabsTrigger>
              <TabsTrigger value="day2">
                {!isLargeScreen ? "Day 2" : "Day 2: Friday, 20"}
                {isLargeScreen ? <sup>th</sup> : null}
                {isLargeScreen ? " January 2023" : null}
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Day 1 Content */}
          <TabsContent value="day1">
            <Table className={cn(INTER.className, "text-sm font-medium")}>
              <TableHeader>
                <TableRow>
                  <TableHead
                    className="text-center font-extrabold w-auto md:w-[200px]"
                  >
                    Time
                  </TableHead>
                  <TableHead
                    className="text-center font-extrabold"
                    colSpan={2}
                  >
                    Program
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>11:00 AM to 11:05 PM</TableCell>
                  <TableCell className="w-auto md:w-[220px]">
                    Welcome Address
                  </TableCell>
                  <TableCell>Cerebrum Club, Bennett University</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>11:06 AM to 11:10 AM</TableCell>
                  <TableCell>Lamp Lighting</TableCell>
                  <TableCell>
                    Dr. Ramesh Pokhriyal Nishank, Former Union Education
                    Minister, Govt of India, Former Chief Minister Uttarakhand
                    and Member of Parliament
                    <br />
                    Dr. Prabhu Kumar Agarwal, Vice Chancellor, Bennett
                    University
                    <br />
                    Mr. Sudhanshu Varma, Chief Operating Officer, Bennett
                    University
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>11:11 AM to 11:20 AM</TableCell>
                  <TableCell>About Aalekh 2K23: Carnival of Books</TableCell>
                  <TableCell>
                    Prof (Dr.) Sanjay Kataria, University Librarian
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>11:21 AM to 11:30 AM</TableCell>
                  <TableCell>Address by Vice Chancellor & COO</TableCell>
                  <TableCell>
                    · Dr. Prabhu Kumar Aggarwal
                    <br />· Mr. Sudhanshu Varma
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>11:31 PM -12:00 Noon</TableCell>
                  <TableCell>Address by Chief Guest</TableCell>
                  <TableCell>
                    Hon’ble Dr. Ramesh Pokhriyal ‘Nishank’, Former Union
                    Education Minister, Govt of India, Former Chief Minister
                    Uttarakhand, Member of Parliament
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>12:01 – 12:30 PM</TableCell>
                  <TableCell>
                    Address by Guest of Honor (Online)
                  </TableCell>
                  <TableCell>Dr. Kiran Bedi (IPS), Former Lieutenant Governor of Puducherry</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>12:31 – 01:00 PM</TableCell>
                  <TableCell>Felicitation of Students</TableCell>
                  <TableCell>
                    Dr. Ramesh Pokhriyal Nishank, Chief Guest
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>01:01 – 01:10 PM</TableCell>
                  <TableCell>Vote of Thanks</TableCell>
                  <TableCell>
                    Dr. Nidhi Sinha, Associate Professor, School of Management
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>01:11 – 02:00 PM</TableCell>
                  <TableCell colSpan={2}>High Tea & Book Exhibition</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>02:01 – 03:00 PM</TableCell>
                  <TableCell>Motivational Talk</TableCell>
                  <TableCell>
                    · Mr. Harjeet Khanduja, International Author, Speaker, Poet,
                    Inventor, Influencer and HR Leader.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>03:01 – 04:00 PM</TableCell>
                  <TableCell>Motivational Talk</TableCell>
                  <TableCell>
                    · Ms. Swapna Liddle, Celebrated Author & Delhi Historian
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>04:01 – 05:01 PM</TableCell>
                  <TableCell>Motivational Talk</TableCell>
                  <TableCell>
                    Mr. Ankit Jhamb, Chief Learning Officer, Grant Thornton
                    Bharat LLP, BRICS CCI Advisor, Author ~ Lost and Found at 35,
                    Lights Please & Chasing Fireflies, Top 50 Influential Author
                    of 2021
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>5:00 PM to 7:00 PM</TableCell>
                  <TableCell colSpan={2}>Open Mic - Cerebrum Club Students</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>

          {/* Day 2 Content */}
          <TabsContent value="day2">
            <Table className={cn(INTER.className, "text-sm font-medium")}>
              <TableHeader>
                <TableRow>
                  <TableHead
                    className="text-center font-extrabold w-auto md:w-[200px]"
                  >
                    Time
                  </TableHead>
                  <TableHead
                    className="text-center font-extrabold"
                    colSpan={2}
                  >
                    Program
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>10:00 AM to 10:31 AM</TableCell>
                  <TableCell className="w-auto md:w-[220px]">
                    Registration
                  </TableCell>
                  <TableCell>Team Bennett</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>10:30 AM to 11:00 AM</TableCell>
                  <TableCell>General Awareness Quiz on Minti.com</TableCell>
                  <TableCell>
                    Dr. Sanjay Kataria
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>11:00 AM to 12:00 PM</TableCell>
                  <TableCell>Motivational Talk</TableCell>
                  <TableCell>
                    Mr. Ankit Jhamb - Chief Learning Officer - Grant Thornton
                    Bharat LLP BRICS CCI Advisor Author ~ Lost and Found at 35,
                    Lights Please & Chasing Fireflies Top 50 Influential Author
                    of 2021
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>12:01 PM- 1.00 PM</TableCell>
                  <TableCell>“Panel Discussion with the AutHers”</TableCell>
                  <TableCell>
                    Ms. Sutapa Basu, Poet, Author, Educationist & Winner of TOI’s
                    AutHer Awards & Write India.
                    <br /> 
                    Dr. Harshali Singh, Author, Poet, Painter & Winner of Write
                    India.
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1:00 PM to 1:30 PM</TableCell>
                  <TableCell>Engagement Activity/Learning Game</TableCell>
                  <TableCell>
                    Ms. Suchi Rastogi / Dr. Nidhi Sinha
                    <br />
                    Career Services Team, Bennett University
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1:30 PM onwards</TableCell>
                  <TableCell colSpan={2}>Book Exhibition Visit</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </div>
    </Wrapper>
  ) : null;
};