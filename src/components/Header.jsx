import { Link, useSearchParams } from "react-router-dom";
import { Button } from "../components/ui/button";
import { SignedIn, SignedOut, SignIn, UserButton, useUser } from "@clerk/clerk-react";
import {  BriefcaseBusiness, PenBox } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [search, setSearch] = useSearchParams();
  const {user}=useUser();

  useEffect(() => {
    if (search.get("sign-in")) {
      setShowSignIn(true);
      setSearch({});
    }
  // }, [search, setSearch]);
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
            {user?.unsafeMetadata?.role === "recruiter" && (
              <Link to="/post-job">
                <Button variant="destructive" className="rounded-full">
                  <PenBox size={20} className="mr-2" />
                  Post a Job
                </Button>
              </Link>
            )}
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                },
              }}
            >
              <UserButton.MenuItems>
                <UserButton.Link
                  label="My-Jobs"
                  labelIcon={<BriefcaseBusiness size={15}></BriefcaseBusiness>}
                  href="/my-job"
                />
                <UserButton.Link
                  label="Saved-Jobs"
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
