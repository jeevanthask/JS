//this references the object that is executing the current function.

//if a function is a part of the object we call it as a method.if a function is a method in a function
//this references the object itself.

//method -> obj

//otherwise if that funcion is a regular function which means it is not a part of the object
//this references the global object which is window object in browsers and global in node

//function -> global(window,global)

const video = {
  title: "a",
  play() {
    console.log(this); //{ title: 'a', play: [Function: play] } we get our video object on the console
    //this method is part of the video object so 'this' references the object itself
  },
};

video.play();

function playVideo() {
  console.log(this); //global/window object is coming!
}

playVideo();

//what about a constructor function
function Video(title) {
  this.title = title;
  console.log(this); //Video { title: 'a' }
}

const v = new Video("a");
//when u use the new operator it creates a new empty object and sets 'this' in the constructor
//function in to this new empty object.

const video2 = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    // this.tags.forEach((c) => {
    //   console.log(this.title, c);
    // a a
    // a b
    // a c
    // });

    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
      // undefined a
      // undefined b
      // undefined c
      //the reason is here this is referencing the window object.coz we are inside a call back function
      //and it is a regular function.the only method we have here is showTags()
    });

    //another way to solve this
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);

    //another way to solve this
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  },
};

video2.showTags();

//with call() , apply() and bind() we can set the 'this' argument for a given function.
