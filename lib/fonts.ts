import { Newsreader, Inter } from "next/font/google";

export const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400"],
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
