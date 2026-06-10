import "./globals.css";
import SiteNavbar from "./components/SiteNavbar";
import AxiosInterceptor from "./components/AxiosInterceptor";

export const metadata = {
  title: "Inventory Management System",
  description: "Inventory App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#050816] text-white">
        <SiteNavbar />
        <AxiosInterceptor />
        {children}
      </body>
    </html>
  );
}