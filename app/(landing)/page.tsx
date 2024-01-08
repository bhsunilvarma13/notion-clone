import { Heading } from "@/app/(landing)/_components/heading";
import { Footer } from "./_components/footer";

export default function LandingPage() {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
      <div className="flex-1 px-6 pb-10">
        <Heading />
      </div>
      <Footer />
    </div>
  );
}
