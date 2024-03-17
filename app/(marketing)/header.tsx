import { Button } from "@/components/ui/button";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

const Header = () => {
  return (
    <header className="h-20 w-full border-b-2 border-slate-200 px-4">
      <div className="mx-auto flex h-full items-center justify-between lg:max-w-screen-lg">
        <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <Image
            src={"/mascot-lexia.svg"}
            height={40}
            width={40}
            alt="mascot"
          />
          <h1 className="text-2xl font-extrabold tracking-wide text-green-500">
            Lexia
          </h1>
        </div>
        {/* On Loading */}
        <ClerkLoading>
          <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
        </ClerkLoading>

        {/* After Loaded, show User button*/}
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          {/* On Signout, show sign-in button */}
          <SignedOut>
            <SignInButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
            >
              <Button size="lg" variant="ghost">
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
};
export default Header;
