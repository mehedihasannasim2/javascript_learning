// method -> obj 
// function -> global (window, global)


// for change this
// const self = this
// .bind(this)
// call back = this.tags.forEach(tag =>{

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this;
        this.tags.forEach(tag =>{
            console.log(self.title, tag);
        });
    }
};

video.showTags();





// function playVideo(a, b) {
//     console.log(this);
// }

// playVideo.call({ name: 'nasim'}, 1, 2);
// playVideo.apply({ name: 'neaz'}, [1, 2]);
// playVideo.bind({ name: 'mehedi'})();

// playVideo();
