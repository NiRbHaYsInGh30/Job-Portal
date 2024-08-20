

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
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Job Seekers</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Find Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Upload Resume
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Job Alerts
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Career Advice
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Employers</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Post a Job
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Search Resumes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Employer Branding
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-4">
        <div className="container mx-auto text-center text-gray-500 text-sm">
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
