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
    <Wrapper className={`py-10 md:py-16`} id="itinerary">
      <div className={`pb-16 min-[920px]:pb-24`}>
        <span className={cn(BERKSHIRE_SWASH.className, `heading`)}>
          Itiner<span className={`text-primary`}>a</span>ry
        </span>
      </div>
      <div className={`w-full m-auto`}>
        <Tabs
          defaultValue="day1"
          className={cn(INTER.className, `text-sm font-medium`)}
        >
          <div className={`w-full flex justify-center mb-4`}>
            <TabsList className={`bg-zinc-200 w-fit`}>
              <TabsTrigger value="day1">
                {!isLargeScreen ? "Day 1" : `Day 1: Wednesday, 20`}
                {isLargeScreen ? <sup>th</sup> : null}
                {isLargeScreen ? "⠀March 2024" : null}
              </TabsTrigger>
              <TabsTrigger value="day2">
                {!isLargeScreen ? "Day 2" : `Day 2: Thursday, 21`}
                {isLargeScreen ? <sup>st</sup> : null}
                {isLargeScreen ? "⠀March 2024" : null}
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="day1">
            <Table className={cn(INTER.className, `text-sm font-medium`)}>
              <TableHeader>
                <TableRow>
                  <TableHead
                    className={`text-center font-extrabold w-auto md:w-[200px]`}
                  >
                    Time
                  </TableHead>
                  <TableHead
                    className={`text-center font-extrabold`}
                    colSpan={2}
                  >
                    Program
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>10:30 AM – 10:35 AM</TableCell>
                  <TableCell className={`w-auto md:w-[220px]`}>
                    Program Introduction
                  </TableCell>
                  <TableCell>Alumni & Cerebrum Club</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>10:35 AM – 10:40 AM</TableCell>
                  <TableCell>Lamp Lighting</TableCell>
                  <TableCell>
                    Officiating Vice Chancellor, Dr. (Prof.) Ajith Abraham Guest
                    of Honour, Smt. Mrudula Garg Chief Guest, Dr. Shiv Khera VP
                    Admissions & Marketing, Ms. Hitankshi Thukral Professor &
                    Librarian, Dr. Sanjay Kataria
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>10:40 AM – 10:45 AM</TableCell>
                  <TableCell>Welcome Address</TableCell>
                  <TableCell>
                    Dr. (Prof.) Ajith Abraham, officiating Vice Chancellor
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>10:45 AM – 10:50 AM</TableCell>
                  <TableCell>About Aalekh 2k24: Carnival of Books</TableCell>
                  <TableCell>
                    Dr. Sanjay Kataria, Professor & Librarian, Bennett
                    University
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>10:50 AM – 11:30 AM</TableCell>
                  <TableCell>
                    Discussion with the Sahitya Akademi Award Winner
                  </TableCell>
                  <TableCell>
                    Smt. Mrudula Garg in conversation Ms. Manisha Choudhary,
                    Guest Moderator
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>11:30 AM – 11:35 AM</TableCell>
                  <TableCell>Felicitation of Guest of Honour</TableCell>
                  <TableCell>
                    Officiating Vice Chancellor, Dr. (Prof.) Ajith Abraham
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>11:35 AM – 12:30 PM</TableCell>
                  <TableCell>Inaugural Address by Chief Guest</TableCell>
                  <TableCell>Dr. Shiv Khera</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>12:30 PM - 12:40 PM</TableCell>
                  <TableCell>Guest and Author Felicitation</TableCell>
                  <TableCell>
                    Dr. (Prof.) Ajith Abraham, officiating Vice Chancellor
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>12:40 PM -12:45 PM</TableCell>
                  <TableCell>Vote of Thanks</TableCell>
                  <TableCell>
                    Prof. Nidhi Sinha, Associate Professor, School of Management
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>12:45 PM – 1:00 PM</TableCell>
                  <TableCell colSpan={2}>
                    Inauguration of Book Exhibition and Hi-Tea
                  </TableCell>
                </TableRow>
                <TableRow className={`bg-orange-100`}>
                  <TableCell>1:00 PM – 1:45 PM</TableCell>
                  <TableCell colSpan={2}>Lunch</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    1:45 PM – 2:30 PM <br /> Session-I
                  </TableCell>
                  <TableCell>Motivational Talk</TableCell>
                  <TableCell>
                    <strong>How to Manage Stress & Anxiety</strong> <br />
                    Ms. Radhika Kawlra Singh, Guest Author <br />
                    Ms. Mimansa Singh Tanwar, Guest Author
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    2:30 PM – 3:15 PM <br /> Session-II
                  </TableCell>
                  <TableCell>
                    Author Discussion <br />
                    <strong>
                      The Art of Writing Fiction: AI and other Influences
                    </strong>
                  </TableCell>
                  <TableCell>
                    Ms. Kanchana Banerjee, Guest Author <br />
                    Dr. Harshali Singh, Guest Author <br />
                    in conversation with <br />
                    Mr. Dipankar Mukherjee, Guest Moderator
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    3:15 PM - 4:00 PM <br /> Session-III
                  </TableCell>
                  <TableCell>
                    Fireside Chat <br />
                    <strong>When Ardhsatya met Himmatwala</strong>
                  </TableCell>
                  <TableCell>
                    Mr. Avijit Ghosh, Guest Author <br />
                    in conversation with <br />
                    Dr. Sanjeev Ratna Singh, Dean, Times School of Media
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    4:00 PM – 5:00 PM <br /> Session-IV
                  </TableCell>
                  <TableCell>
                    Author Discussion <br />
                    <strong>Exploring Corporate Narratives</strong>
                  </TableCell>
                  <TableCell>
                    Mr. Jitender Girdhar, Guest Author
                    <br />
                    Mr. Ujwal Kalra, Guest Author
                    <br />
                    Mr. Sidharth Balakrishna, Guest Author
                    <br />
                    in conversation with <br />
                    Dr. Nilanjan Chattopadhyay, Dean, School of Management
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>6:00 PM onwards</TableCell>
                  <TableCell>Student Activity</TableCell>
                  <TableCell>
                    <strong>Intra-University Competitions</strong>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="day2">
            <Table className={cn(INTER.className, `text-sm font-medium`)}>
              <TableHeader>
                <TableRow>
                  <TableHead
                    className={`text-center font-extrabold w-auto md:w-[200px]`}
                  >
                    Time
                  </TableHead>
                  <TableHead
                    className={`text-center font-extrabold`}
                    colSpan={2}
                  >
                    Program
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>10:30 AM – 10:40 AM</TableCell>
                  <TableCell className={`w-auto md:w-[220px]`}>
                    Opening Remarks
                  </TableCell>
                  <TableCell>
                    Dr. Sanjay Kataria, Professor & Librarian
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>10:40 AM – 10:45 AM</TableCell>
                  <TableCell>Felicitation of Guests</TableCell>
                  <TableCell>
                    Officiating Vice Chancellor, Dr. (Prof.) Ajith Abraham
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>10:40 AM – 10:45 AM</TableCell>
                  <TableCell>Welcome Address</TableCell>
                  <TableCell>
                    Dr. (Prof.) Ajith Abraham, officiating Vice Chancellor
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    11:00 AM – 11:45 AM <br /> Session-V
                  </TableCell>
                  <TableCell>
                    <strong>Author Discussion</strong>
                    <br />
                    The 7 Layers of Delhi
                  </TableCell>
                  <TableCell>
                    Ms. Parvati Sharma, Guest Author
                    <br />
                    in conversation with <br />
                    Shantanu Vyas, Student
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    11:45 AM – 12:30 PM
                    <br /> Session-VI
                  </TableCell>
                  <TableCell>
                    <strong>Motivational Talk</strong>
                    <br />
                    How to be an Influencer
                  </TableCell>
                  <TableCell>
                    Mr. Suvir Saran, Influencer
                    <br />
                    Mr. Gaurav Wasan
                    <br />
                    in conversation with <br />
                    Kushagra Joshi, Alumni
                  </TableCell>
                </TableRow>

                <TableRow className={`bg-orange-100`}>
                  <TableCell>12:30 PM – 1:15 PM</TableCell>
                  <TableCell colSpan={2}>Lunch</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    1:15 PM - 2:00 PM <br /> Session-VII
                  </TableCell>
                  <TableCell>
                    <strong>Author Discussion</strong>
                    <br />
                    Journalism and Authorship – Navigating between Fact and
                    Fiction
                  </TableCell>
                  <TableCell>
                    Ms. Prachi Gupta, Guest Author
                    <br />
                    in conversation with <br />
                    Pranavi Ambati, Student
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>
                    2:00 PM - 2:45 PM <br /> Session-VIII
                  </TableCell>
                  <TableCell>
                    <strong>Keynote Address</strong>
                    <br />
                    Corporate Voices in the Literary World
                  </TableCell>
                  <TableCell>Mr. Rajnish Tomar, Guest Author</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>2:45 PM – 5:30 PM</TableCell>
                  <TableCell>Student Activity</TableCell>
                  <TableCell>
                    <strong>Intra-University Competitions by CEREBRUM</strong>{" "}
                    <br />
                    <em>‘The Unheard’ Debate Competition</em> <br />
                    <em>‘Dead Poets Society’ Poetry Competition</em> <br />
                    <em>‘Magic & Literary Odyssey’ Quiz Competition </em>
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>5:30 PM – 6:00 PM</TableCell>
                  <TableCell colSpan={2}>Valedictory Session</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </div>
    </Wrapper>
  ) : null;
};
