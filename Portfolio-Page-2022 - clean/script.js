'use strict'

console.log("---------------------toggle resume on/off-------------------------------")

const resumeToggle = document.querySelector(".resume-toggle");
const closeResume = document.querySelector(".btn-close-resume")

resumeToggle.addEventListener(`click`, () => {
    document.body.classList.toggle(`resume-open`)
})

closeResume.addEventListener(`click`, () => {
    document.body.classList.remove("resume-open")
})



console.log("------------------closing gallery window---------------------")


document.querySelector(".gallery-showcase span").onclick = () => {
    document.querySelector(".gallery-showcase").style.transform = "translateX(100%)";
};


console.log("------------------Gallery image - array of objects---------------------")


const images = [
    {
        title: "art-show",
        galleryTitle: "Student Art Show Poster",
        src: "img/artshow-gallery.jpg",
        icon: ["icons/photoshop.svg", "icons/illustrator.svg", "icons/inDesign-logo.svg", "icons/default.svg"],
        desc: `Poster made to advertise an art show for my university. Mainly using Photoshop, Illustrator and InDesign. \r\n \r\n Objective was to put emphesis on typography and muted colors`
    },
    {
        title: "book-cover",
        galleryTitle: "Book Cover Redesign",
        src: "img/Book-Cover-gallery.jpg",
        icon: ["icons/photoshop.svg", "icons/illustrator.svg", "icons/default.svg", "icons/default.svg"],
        desc: `Book cover redesign on existing book. Used photoshop, Illustrator and Indesign. Indesigned was heavily used for layout purposes.`
    },
    {
        title: "fantasy",
        galleryTitle: "Fantasy Image Manipulation",
        src: "img/fantasy-gallery.jpg",
        icon: ["icons/photoshop.svg", "icons/default.svg", "icons/default.svg", "icons/default.svg"],
        desc: `Image manipulation project where several images were taken together to create a fantasy piece. Photoshop was the main tool used in creating this piece.`
    },
    {
        title: "halloween",
        galleryTitle: "Halloween Slot App Design",
        src: "img/halloween-gallery.jpg",
        icon: ["icons/photoshop.svg", "icons/illustrator.svg", "icons/default.svg", "icons/default.svg"],
        desc: `App design comission for a develeper making a slot app game with a halloween theme. Lots of images used for various situations.`
    },
    {
        title: "jet-band",
        galleryTitle: "Jet Magazine Spread",
        src: "img/jet-band-gallery.jpg",
        icon: ["icons/photoshop.svg", "icons/inDesign-logo.svg", "icons/default.svg", "icons/default.svg"],
        desc: `Magazine spread design for a band I'm a fan about. Used photoshop for the image manipulation and InDesign for the page layout.`
    },
    {
        title: "pig",
        galleryTitle: "Printmaking Pop-art",
        src: "img/pig-gallery.jpg",
        icon: ["icons/illustrator.svg", "icons/default.svg", "icons/default.svg", "icons/default.svg"],
        desc: `The pig image was done freehand and used illustrator for other variations then transferred to a linolium sheet to hand carve. Ink is applied after a sheet is pressed to get final image.`
    },
    {
        title: "resident-evil",
        galleryTitle: "Resident Evil Game Cover",
        src: "img/RE-booklet-gallery.jpg",
        icon: ["icons/photoshop.svg", "icons/default.svg", "icons/default.svg", "icons/default.svg"],
        desc: `Very fun project to work with. Took an existing game cover and redisigned all of its contents: game case, cd cover, game booklet. Mainly used photoshop for this project.`
    },
    {
        title: "run-tattoo",
        galleryTitle: "Run Tattoo Arm Design",
        src: "img/run-tattoos-gallery.jpg",
        icon: ["icons/photoshop.svg", "icons/illustrator.svg", "icons/default.svg", "icons/default.svg"],
        desc: `Worked closely with one of the event coordinators to create a tattoo that would go on the runner's arm after they complete the race. Designed using both Photoshop and Illustrator.`
    }
]

console.log("------------------function Test-NOTHING TO DO WITH METHODS 1-2--------------------")

function loopTest(name) {

    const img = images.find(image => image.title === name)


    if (name === img.title) {
        document.querySelector(".gallery-showcase-item").src = img.src
        document.querySelector(".showcase-title").textContent = img.galleryTitle
        document.querySelector(".showcase-desc").textContent = img.desc
        document.querySelector("body > div.gallery-showcase > div > div:nth-child(1) > img").src = img.icon[0]
        document.querySelector("body > div.gallery-showcase > div > div:nth-child(2) > img").src = img.icon[1]
        document.querySelector("body > div.gallery-showcase > div > div:nth-child(3) > img").src = img.icon[2]
        document.querySelector("body > div.gallery-showcase > div > div:nth-child(4) > img").src = img.icon[3]
        return "You got it!"
    }
    return "You don't got it"

}

console.log("------------------function for dom changes Test---------------------")

function namesrc(name) {


    for (const source of images) {
        console.log(source.title)
        if (name === source.title) {
            document.querySelector(".gallery-showcase-item").src = source.src
            document.querySelector(".showcase-title").textContent = source.galleryTitle
            document.querySelector(".showcase-desc").textContent = source.desc
            document.querySelector("body > div.gallery-showcase > div > div:nth-child(1) > img").src = source.icon[0]
            document.querySelector("body > div.gallery-showcase > div > div:nth-child(2) > img").src = source.icon[1]
            document.querySelector("body > div.gallery-showcase > div > div:nth-child(3) > img").src = source.icon[2]
            document.querySelector("body > div.gallery-showcase > div > div:nth-child(4) > img").src = source.icon[3]
            return `We found ${source.title}`
        }
    }
    return `We found nothing`
}



document.querySelectorAll(".gallery img").forEach((image) => {
    image.onclick = () => {
        document.querySelector(".gallery-showcase").style.transform = "translateX(0)";
        document.querySelector(".gallery-showcase-item").src =
            image.getAttribute("src");

        const name = document.querySelector(".gallery-showcase-item").title = image.getAttribute("title")
        console.log(name)

        namesrc(name)

    };
});