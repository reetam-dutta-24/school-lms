import Link from "next/link";
import Menue from "@/components/Menue";
import Navbar from "@/components/Navbar";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  bg-white">
        <Link href="" className="flex text-black p-5 gap-2">
            <img src = "logo.png" alt = "Logo"></img>
            <span>School LMS</span>
        </Link>
        <Menue/>
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f5f6f8] flex flex-col">
        <Navbar/>
        <div className="max-h-screen  overflow-y-auto">
            {children}
        </div>
      </div>
      
    </div>
  );
}
