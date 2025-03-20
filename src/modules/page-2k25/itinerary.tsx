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
    <Wrapper className="w-full py-10 md:py-16 px-4 sm:px-10" id="itinerary">
      <div className="pb-16 min-[920px]:pb-24 text-center">
        <span className={cn(BERKSHIRE_SWASH.className, "heading")}>
          Itiner<span className="text-primary">a</span>ry
        </span>
      </div>
      <div className="w-full mx-auto overflow-x-auto">
        <Tabs
          defaultValue="day1"
          className={cn(INTER.className, "text-sm font-medium")}
        >
          <div className="w-full flex justify-center mb-4">
            <TabsList className="bg-zinc-200 w-fit">
              <TabsTrigger value="day1">
                {!isLargeScreen ? "Day 1" : `Day 1: Friday, 21st`}
                {isLargeScreen && <sup>st</sup>}
                {isLargeScreen && "⠀March 2025"}
              </TabsTrigger>
              <TabsTrigger value="day2">
                {!isLargeScreen ? "Day 2" : `Day 2: Saturday, 22nd`}
                {isLargeScreen && <sup>nd</sup>}
                {isLargeScreen && "⠀March 2025"}
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="day1">
            <div className="overflow-x-auto">
              <Table className={cn(INTER.className, "text-sm font-medium w-full")}>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-center font-extrabold w-auto md:w-[200px]">
                      Time
                    </TableHead>
                    <TableHead className="text-center font-extrabold" colSpan={2}>
                      Program
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>10:30 AM – 10:35 AM</TableCell>
                    <TableCell>Program Introduction</TableCell>
                    <TableCell>Cerebrum Club</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>10:35 AM – 10:40 AM</TableCell>
                    <TableCell>Lamp Lighting</TableCell>
                    <TableCell>
                      Chief Guest, Shri Ashok Kumar, IPS (Retd.), Dr. Ramesh C. Gaur, Guest of Honour,
                      Director – Library, VP – Marketing & Admissions, Secretary – Cerebrum
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>10:40 AM – 10:45 AM</TableCell>
                    <TableCell>Welcome Address</TableCell>
                    <TableCell>Ms. Hitankshi Thukral, VP – Marketing & Admissions</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>10:45 AM – 10:50 AM</TableCell>
                    <TableCell>The Journey of Aalekh</TableCell>
                    <TableCell>Prof. (Dr.) Sanjay Kataria, Director - Library</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>10:50 AM – 11:10 AM</TableCell>
                    <TableCell>Address by Guest of Honour</TableCell>
                    <TableCell>Prof. (Dr.) Ramesh C Gaur, Professor and Dean (Admin), IGNCA</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>11:10 AM – 11:30 AM</TableCell>
                    <TableCell>Inaugural Address by Chief Guest</TableCell>
                    <TableCell>
                      Shri. Ashok Kumar, IPS (Retd), Former DGP Uttarakhand & Presently Vice-Chancellor, NLU Sonipat,
                      Vice-Chancellor, Sports University of Haryana, Rai
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>11:30 AM – 11:45 AM</TableCell>
                    <TableCell>Guest & Author Felicitation</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>11:45 AM - 11:50 AM</TableCell>
                    <TableCell>Vote of Thanks</TableCell>
                    <TableCell>Dr. Nidhi Sinha, SOM</TableCell>
                  </TableRow>
                  <TableRow className="bg-orange-100">
                    <TableCell>11:50 AM -12:00 PM</TableCell>
                    <TableCell colSpan={2}>High Tea</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>12:00 PM - 1:00 PM</TableCell>
                    <TableCell>
                      Session-I: Finding success in the middle of everything
                    </TableCell>
                    <TableCell>
                      Shri Vivek Atray, IAS (Retd), Columnist, Author & Motivational Speaker in
                      conversation with Prof. Sanjeev Kumar, Dean School of Liberal Arts
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1:00 PM - 2:00 PM</TableCell>
                    <TableCell>
                      Session-II: A talk on &apos;Major Maritime talks&apos; in history
                    </TableCell>
                    <TableCell>
                      Capt. Beetashok Chatterjee in conversation with Capt. Pawan Kaul
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-orange-100">
                    <TableCell>2:00 PM - 3:00 PM</TableCell>
                    <TableCell colSpan={2}>Lunch</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3:00 PM - 4:00 PM</TableCell>
                    <TableCell>
                      Session-III: Exploring the essence of the book &apos;Madam Sir&apos;
                    </TableCell>
                    <TableCell>
                      Smt. Manjari Jaruhar, IPS (Retd), Former Special Director General of the CISF in
                      conversation with Dr. Nidhi Sinha
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>4:00 PM – 5:00 PM</TableCell>
                    <TableCell>
                      Session-IV: Role of Technology & Information Warfare in Modern Terrorism
                    </TableCell>
                    <TableCell>
                      Shri Karnal Singh, IPS (Retd.) & Col. Sukesh Verma SC in conversation with Prof.
                      Ayanjit Sen
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="day2">
            <div className="overflow-x-auto">
              <Table className={cn(INTER.className, "text-sm font-medium w-full")}>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-center font-extrabold w-auto md:w-[200px]">
                      Time
                    </TableHead>
                    <TableHead className="text-center font-extrabold" colSpan={2}>
                      Program
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>10:30 AM - 12:00 PM</TableCell>
                    <TableCell>
                      Session-V: Between history&apos;s facts and fiction&apos;s enchanting haze
                    </TableCell>
                    <TableCell>
                      Dr. Harshali Singh, Ms. Parvati Sharma, & Ms. Sutapa Basu in conversation with
                      Kushagra Joshi
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>12:00 PM – 12:30 PM</TableCell>
                    <TableCell>
                      Session-VI: Bridging Art, Literature, and the Indian Landscape: Kashmir to
                      Kanyakumari
                    </TableCell>
                    <TableCell>Dr. Rajesh Kumar Vyas, Guest Author</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>12:30 PM - 1:00 PM</TableCell>
                    <TableCell>
                      Session-VII: From Inner Stress to Self-Love: A Journey Within
                    </TableCell>
                    <TableCell>Dr. Ritu Soryan, Guest Author</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1:00 PM - 1:30 PM</TableCell>
                    <TableCell>Session-VIII: Deep Dive into the Corporate</TableCell>
                    <TableCell>
                      Dr. Anshuman Kamthan, Training &amp; Development Expert
                    </TableCell>
                  </TableRow>
                  <TableRow className="bg-orange-100">
                    <TableCell>1:30 PM - 2:00 PM</TableCell>
                    <TableCell colSpan={2}>Lunch</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2:00 PM – 6:00 PM</TableCell>
                    <TableCell>
                      Student Activity: Intra-University Competitions by CEREBRUM
                    </TableCell>
                    <TableCell>
                      &apos;The Unheard&apos; Debate Competition, &apos;Popcorn and Playoffs&apos;
                      Quiz Competition, &apos;Psych Quest&apos; Quiz Competition, &apos;Wah Wah kya
                      baat hai?&apos; Poetry Competition
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>6:00 PM – 6:30 PM</TableCell>
                    <TableCell>Valedictory Session</TableCell>
                    <TableCell>See you at Aalekh 2k25!!</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Wrapper>
  ) : null;
};