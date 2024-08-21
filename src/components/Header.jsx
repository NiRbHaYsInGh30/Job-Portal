import { Link, useSearchParams } from "react-router-dom";
import { Button } from "../components/ui/button";
import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";
import { Briefcase, BriefcaseBusiness, PenBox } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
      setSearch({});
    }
  }, [search]);

  const handleClicker = (e) => {
    if (e.target === e.currentTarget) {
      setShowSignIn(false);
    }
  };
  // const [showSignIn,setShowSignIn]=useState(false);
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link>
          <img src="/logo.png" className="h-20"></img>
        </Link>
        <div className="flex gap-8">
          <SignedOut>
            <Button variant="indigo" onClick={() => setShowSignIn(true)}>
              Login
            </Button>
          </SignedOut>
          <SignedIn>
            <Button variant="purple">
              <PenBox size={20} className="mr-2"></PenBox>
              Post a Job
            </Button>
            <Link to="/post-job"></Link>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link label="My-Jobs"
                labelIcon={<BriefcaseBusiness size={15}></BriefcaseBusiness>}
                href="/my-job"
                />
                <UserButton.Link label="Saved-Jobs"
                labelIcon={<BriefcaseBusiness size={15}></BriefcaseBusiness>}
                href="/saved-job"
                />
              </UserButton.MenuItems>
            </UserButton>
          </SignedIn>
        </div>
      </nav>

      {showSignIn && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleClicker}
        >
          <SignIn
            signUpForceRedirectUrl="/onboarding"
            fallbackRedirectUrl="/onboarding"
          />
        </div>
      )}
    </>
  );
};

export default Header;
