// method -> onj

const video = {
    title: 'a',
    play() {
        console.log(this)
    }
}; 

video.play();

video.stop = function() {
    console.log(this);
};

video.stop();


// function -> global (window, global)

function Video(title) {
    this.title = title;
    console.log(this); 
}
const v = new Video('b'); // new empty obj {}
