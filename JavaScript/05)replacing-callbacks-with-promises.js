function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("reading user from the database....");
      resolve({ id: id, githubUserName: "JeevanthaSK" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("calling gitthub repositories...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("calling github commits...");
      resolve(["commit"]);
    }, 2000);
  });
}

getUser(1)
  .then((user) => getRepositories(user.githubUserName))
  .then((repos) => getCommits(repos[0]))
  .then((commits) => console.log("commits ", commits))
  .catch((err) => console.log(err.message));

// getUser(1, (user) => {
//   getRepositories(user.githubUserName, (repo) => {
//     getCommits(repo[0], (commit) => {
//       console.log(commit);
//     });
//   });
// });
