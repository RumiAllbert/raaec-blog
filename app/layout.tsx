import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/mode-toggle"; // Import the ModeToggle component
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {/* Home button */}
          {/* <div
            style={{
              position: "fixed",
              top: "1rem",
              left: "1rem",
              zIndex: 1000,
            }}
          >
            <Link href="/">
              <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 transition-colors duration-200">
                Home
              </button>
            </Link>
          </div> */}
          {/* Mode toggle */}
          <div
            style={{
              position: "fixed",
              top: "1rem",
              right: "1rem",
              zIndex: 1000,
            }}
          >
            <ModeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
