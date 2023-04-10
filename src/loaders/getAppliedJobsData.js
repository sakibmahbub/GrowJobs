import { getJobList } from "../utility/fakeDB";

export const appliedJobsData = async () => {
  const jobsData = await fetch("/featured.json");
  const jobs = await jobsData.json();

  const savedJob = getJobList();
  const initialJob = [];
  for (const id in savedJob) {
    const foundJob = jobs.find((job) => job.id == id);
    if (foundJob) {
      const quantity = savedJob[id];
      foundJob.quantity = quantity;
      initialJob.push(foundJob);
    }
  }

  return { jobs, initialJob };
};
