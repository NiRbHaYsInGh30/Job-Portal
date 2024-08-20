import { Link } from "react-router-dom";
// import { Button } from "../components/ui/button";
import { SignedIn, SignedOut,  SignInButton, UserButton } from "@clerk/clerk-react";
// import { useState } from "react";


const Header = () => {
  // const [showSignIn,setShowSignIn]=useState(false);
  return (
    <>
      <nav className="py-4 flex justify-between items-center">
        <Link>
          <img src="/logo.png" className="h-20"></img>
        </Link>
        <SignedOut>
          <SignInButton/>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        {/* <div className="">
          <SignedOut>
        <Button variant="blue" onClick={() =>setShowSignIn(true) }>Login</Button>
            
          </SignedOut>
          <SignedIn>
            <link to="/post-job"></link>
            <Button variant="destructive" className="rounded-full">post a job</Button>
          </SignedIn>
       </div> */}
      </nav>
      {/* {showSignIn && <div>
        <SignIn
        signUpFallbackRedirectUrl="/onboarding"
        FallbackRedirectUrl="/onboarding"
        ></SignIn>onboarding
        </div>} */}
    </>
  );

};

export default Header;
