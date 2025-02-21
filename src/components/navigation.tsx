"use client";

import { Cross1Icon, HamburgerMenuIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { useWindowScroll } from "@uidotdev/usehooks";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { DetailedHTMLProps, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { BERKSHIRE_SWASH } from "@/app/fonts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/sheet";
import { Wrapper } from "@/components/wrapper";
import { cn } from "@/utils/cn";
import { minWidth } from "@/utils/media-query";

// Updated navigation links with new ordering and labels.
const navigationLinksData = [
  { label: "Aalekh 2k25", href: "/" }, // New button at first place
  { label: "About Aalekh", href: "/about-aalekh" },
  { label: "About LRC", href: "/about-lrc" },
  { label: "Cerebrum", href: "/cerebrum" },
  {
    label: "Aalekh Archive", // Renamed dropdown and moved to last
    type: "dropdown",
    items: [
      { label: "Aalekh 2k24", href: "/2k24" },
      { label: "Aalekh 2k23", href: "/2k23" },
    ],
  },
];

interface NavigationProps
  extends DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  atTop?: boolean;
  forceWhite?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  className,
  atTop = true,
  forceWhite = false,
  ...props
}) => {
  const router = useRouter(); // Add useRouter
  const isLaptop = useMediaQuery({ query: minWidth(1280) });
  const isSmallScreen = useMediaQuery({ query: minWidth(480) });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [logoWidth] = useState(163);
  const [logoHeight] = useState(55);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close sidebar on route change.
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  const isHomePage = pathname === "/2k25";
  const backgroundColor = forceWhite
    ? "bg-white"
    : isHomePage && atTop
    ? "bg-[#ffeec3]"
    : "bg-white";

  if (!mounted || (!forceWhite && !isHomePage)) return null;

  const cerebrumLogo = (
    <Link href="https://library.bennett.edu.in/" target="_blank">
      <Image
        alt="lrc and cerebrum logo"
        src={
          isHomePage
            ? "/2k25/lrc-cerebrum-logo-dark.png"
            : "/lrc-cerebrum-logo-dark.webp"
        }
        width={logoWidth}
        height={logoHeight}
        priority
        quality={100}
      />
    </Link>
  );

  const bennettLogo = (
    <Link href="https://www.bennett.edu.in/" target="_blank">
      <Image
        alt="bennett university logo"
        src="/bennett-colored-logo.png"
        width={logoWidth}
        height={logoHeight}
        priority
        quality={100}
      />
    </Link>
  );

  const renderNavLink = (item: any, linkClassName?: string) => {
    if (item.type === "dropdown") {
      return (
        <DropdownMenu key={item.label}>
          <DropdownMenuTrigger
            className={cn(
              "duration-200 flex items-center gap-1 text-gray-800 hover:text-gray-600",
              linkClassName
            )}
          >
            {item.label}
            <ChevronDownIcon className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white z-[3100] shadow-lg rounded-md py-2 mt-2">
            {item.items.map((dropdownItem: any) => (
              <DropdownMenuItem
                key={dropdownItem.href}
                className="px-4 py-2 hover:bg-gray-100 transition-colors"
                onSelect={() => {
                  setIsSidebarOpen(false);
                  router.push(dropdownItem.href); // Use router.push instead of Link
                }}
              >
                {dropdownItem.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <Link
        key={item.href}
        href={item.href}
        className={cn("duration-200 hover:text-red-500 text-black", linkClassName)}
        onClick={() => setIsSidebarOpen(false)}
      >
        {item.label}
      </Link>
    );
  };

  const navLinks = (linkClassName?: string) => {
    return navigationLinksData.map((item) => renderNavLink(item, linkClassName));
  };

  return mounted ? (
    <div
      className={cn(className, backgroundColor, !isHomePage && "shadow-lg")}
      {...props}
    >
      <Wrapper className="flex justify-between items-center py-6">
        <div className="flex gap-2">
          {cerebrumLogo}
          {isSmallScreen && (
            <>
              <div className="border border-black mx-1" />
              {bennettLogo}
            </>
          )}
        </div>
        {isLaptop ? (
          <div className={cn(BERKSHIRE_SWASH.className, "flex gap-10")}>
            {navLinks()}
          </div>
        ) : (
          <Sheet open={isSidebarOpen}>
            {!isSidebarOpen && (
              <div
                className="grid cursor-pointer"
                aria-label="Open Menu"
                onClick={() => setIsSidebarOpen(true)}
              >
                <HamburgerMenuIcon className="w-5 h-5 min-[340px]:w-7 min-[340px]:h-7" />
              </div>
            )}
            <SheetContent className="h-screen max-w-[100vw] min-w-[100vw] sm:min-w-[50vw] md:min-w-[40vw]">
              <SheetHeader>
                <div className="flex justify-between items-center flex-row">
                  <SheetTitle>{cerebrumLogo}</SheetTitle>
                  {isSidebarOpen && (
                    <div
                      className="grid cursor-pointer"
                      aria-label="Close Menu"
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <Cross1Icon
                        className="w-5 h-5 min-[340px]:w-7 min-[340px]:h-7"
                        strokeWidth={2.7}
                      />
                    </div>
                  )}
                </div>
              </SheetHeader>
              <div
                className={cn(
                  BERKSHIRE_SWASH.className,
                  "my-16 flex flex-col gap-10 text-center"
                )}
              >
                {navLinks("text-lg sm:text-2xl")}
              </div>
            </SheetContent>
          </Sheet>
        )}
      </Wrapper>
    </div>
  ) : null;
};

interface FixedNavigationProps {}

export const FixedNavigation: React.FC<FixedNavigationProps> = () => {
  const [{ y }] = useWindowScroll();
  const [atTop, setAtTop] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/cerebrum") {
      setAtTop(false);
      return;
    }
    if (y !== null) {
      setAtTop(y < 600);
    }
  }, [y, pathname]);

  const isCerebrum = pathname === "/cerebrum";
  const showNav = isCerebrum || (y !== null && y >= 600);

  return (
    <Navigation
      className={cn(
        showNav ? "fixed animate-in slide-in-from-top" : "hidden",
        "z-[3000] top-0 left-0 right-0"
      )}
      atTop={atTop}
      forceWhite
    />
  );
};
