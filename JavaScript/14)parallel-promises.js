const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async operation number 1");
    resolve(1);
  }, 2000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("async operation number 2");
    resolve(2);
  }, 2000);
});

Promise.all([p1, p2]).then((result) => console.log("result"));

//u don't want to wait for all of them to complete, if just want to do sth
//if first operation completes => Promise.race()

//async and await
async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.githubUserName);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log("error ", err.message);
  }
}
