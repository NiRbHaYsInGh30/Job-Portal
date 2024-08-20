import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Job Portal</h3>
          <p className="text-gray-400">
            Your trusted platform to connect job seekers and employers.
          </p>
          <p className="mt-2 text-sm text-gray-400">
            © 2024 Job Portal. All rights reserved.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
            
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Job Seekers</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/jobs" className="hover:text-white">
                Find Jobs
              </Link>
            </li>
            <li>
              <Link to="/upload-resume" className="hover:text-white">
                Upload Resume
              </Link>
            </li>
            <li>
              <Link to="/post-job" className="hover:text-white">
                Post a Job
              </Link>
            </li>
            <li>
              <Link to="/job-alerts" className="hover:text-white">
                Job Alerts
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Employers</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/employer-branding" className="hover:text-white">
                Employer Branding
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-white">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4">
        <div className="container mx-auto text-center text-gray-500 text-sm">
          <p>
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>{" "}
            |
            <Link to="/terms-of-service" className="hover:text-white">
              {" "}
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
