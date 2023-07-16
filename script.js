const generateMemeButton = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-title");
let i = 0;


const updateDetails = (name, url) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = name;
};


const generateMeme = () => {
    const api = "https://api.imgflip.com/get_memes";

    fetch(api)
    .then(response => response.json())
    .then(data => {

        if (data.success === true) {
            updateDetails(data.data.memes[`${i}`].name,data.data.memes[`${i}`].url);
            i++
        };

    });
};

generateMemeButton.addEventListener("click", generateMeme);


