getUser(1, (user) => {
  getRepositories(user.githubUserName, (repo) => {
    getCommits(repo[0], (commit) => {
      console.log(commit);
    });
  });
});

function getUser(id, callback) {
  setTimeout(() => {
    console.log("reading user from the database....");
    callback({ id: id, githubUserName: "JeevanthaSK" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("calling gitthub repositories...");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}

function getCommits(repo, callback) {
  setTimeout(() => {
    console.log("calling github commits...");
    callback(["commit"]);
  }, 2000);
}
