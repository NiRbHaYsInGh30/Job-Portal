import { getJobs } from "/src/api/apiJobs";
import useFetch from "/src/hooks/use-fetch";
import { useEffect } from "react";

const JobListing = () => {
  const {
    fn: fnJobs,
    data: dataJobs,
    loading: loadingJobs,
  } = useFetch(getJobs, {});
  console.log(dataJobs);

  useEffect(() => {
    fnJobs();
  }, []);
  return <div></div>;
};

export default JobListing;
