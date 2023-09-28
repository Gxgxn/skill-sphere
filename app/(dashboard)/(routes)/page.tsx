import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs/app-beta";
export default function Home() {
  return (
    <div className="h-full">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
