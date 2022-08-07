const schedules = [
  { id: "a", dependencies: ["b", "c"] },
  { id: "b", dependencies: [] },
  { id: "c", dependencies: ["e"] },
  { id: "d", dependencies: ["m", "a", "c"] },
  { id: "e", dependencies: ["l", "m", "j"] },
  { id: "g", dependencies: ["i", "k", "m"] },
  { id: "h", dependencies: [] },
  { id: "i", dependencies: [] },
  { id: "j", dependencies: [] },
  { id: "k", dependencies: ["a"] },
  { id: "l", dependencies: [] },
  { id: "m", dependencies: [] },
];

const schedules2 = [
  { id: "a", dependencies: ["b", "c"] },
  { id: "b", dependencies: [] },
  { id: "c", dependencies: ["e"] },
  { id: "d", dependencies: [] },
  { id: "e", dependencies: ["c"] },
  { id: "f", dependencies: [] },
];

const schedules3 = [
  { id: "a", dependencies: ["b", "c"] },
  { id: "b", dependencies: [] },
  { id: "c", dependencies: [] },
  { id: "d", dependencies: [] },
  { id: "e", dependencies: [] },
  { id: "f", dependencies: [] },
];

// 4
// b h i j l m e c a

/* You are having jobs to execute for example a,b,c etc....
but these jobs are having a dependency on other jobs as well.
If Any of the dependency is not executed yet you cannot perform that job.
You need to write a logic that can run the jobs in which they are supposed to be
for example in the above example it would be cyclic but assume c and e does not has any dependency then the output will be b, c, d,e,f, a.
You have to write it in JS. */

//* Algorithm:
/* 
- take set as the result and index as 0.
- take a variable cycle to store the count.
- while jobsArray !== result.size check for following:
    - if(dependency.length === 0) result.add(id)
    - else check if dependency is in result if not result.add(id).
- if cycle >= jobsArray.length log "cycle formed".
- if(index > jobsArray.length) index = 0, cycle++;
- else index++;
*/

const scheduleJobs = (jobsArray) => {
  const result = new Set();
  let index = 0;
  let cycle = 0;
  while (jobsArray.length !== result.size) {
    const { id, dependencies } = jobsArray[index];
    if (!dependencies.length) {
      result.add(id);
    } else {
      let bool = dependencies.every((dep) => result.has(dep));
      if (bool) {
        result.add(id);
      }
    }

    if (cycle >= jobsArray.length) {
      return "cycle formed";
    }

    if (index === jobsArray.length - 1) {
      index = 0;
      cycle++;
    } else index++;
  }

  console.log(result);
};

scheduleJobs(schedules);
