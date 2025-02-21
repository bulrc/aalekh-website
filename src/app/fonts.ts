import { Cormorant_Garamond, Berkshire_Swash, Inter } from "next/font/google";

export const CORMORANT_GARAMOND = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const BERKSHIRE_SWASH = Berkshire_Swash({
  subsets: ["latin"],
  weight: ["400"],
});

export const INTER = Inter({
  subsets: ["latin"],
  weight: ["500", "800"],
});
