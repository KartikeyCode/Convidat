import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Convidat",
  description: "Convidat transforms co-working by connecting freelancers, startups, and remote workers with diverse workspaces, including cafes, homes, and co-working brands like WeWork. Leveraging underused spaces, it offers flexible solutions and helps venue owners optimize their potential. Features like easy booking, availability tracking, and a focus on community collaboration position Convidat as a future leader in workspace innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
