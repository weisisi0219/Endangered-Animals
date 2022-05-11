function setAnimalinfo(index) {
    const bigTitle = document.getElementById("c-title-1");
    bigTitle.innerHTML = animalInfo[index].Name;

    const rightImage = document.getElementById("rightImage");
    rightImage.setAttribute("src", animalInfo[index].image);

    const introText = document.getElementById("intro-text");
    introText.innerHTML = animalInfo[index].animalIntroduction;

    const timeToRead = document.getElementById("time-to-read");
    timeToRead.innerHTML = animalInfo[index].timeToRead;

    const animalHabitat = document.getElementById("w-node-_35239683-8a33-07ea-f545-7d38c925a6a3-f1e4b8ca");
    animalHabitat.innerHTML = animalInfo[index].habitats;

    const animalHeight = document.getElementById("w-node-c9265aab-f82c-db62-efe1-32bd978a0084-f1e4b8ca");
    animalHeight.innerHTML = animalInfo[index].height;

    const animalWeight = document.getElementById("w-node-_28dffc12-0083-2350-8d7c-700070640827-f1e4b8ca");
    animalWeight.innerHTML = animalInfo[index].weight;

    const animalStatus = document.getElementById("w-node-f4d0246d-2d49-46d4-a3b1-ca17d7320585-f1e4b8ca");
    animalStatus.innerHTML = animalInfo[index].status;

    const nextAnimalSideImage = document.getElementById("next-side-image");
    nextAnimalSideImage.setAttribute("src", animalInfo[index].nextSideImage);

    const nextAnimalSideName = document.getElementById("next-animal-name");
    nextAnimalSideName.innerHTML = animalInfo[index].nextAnimalName;

    const nextAnimalSideStatus = document.getElementById("next-animal-status");
    nextAnimalSideStatus.innerHTML = animalInfo[index].nextAnimalStatus;

    const preAnimaSidelName = document.getElementById("pre-animal-image");
    preAnimaSidelName.setAttribute("src", animalInfo[index].PreviousSideImage);

    const preAnimalSideName = document.getElementById("pre-animal-name");
    preAnimalSideName.innerHTML = animalInfo[index].previousAnimalName;

    const preAnimalSideStatus = document.getElementById("pre-animal-status");
    preAnimalSideStatus.innerHTML = animalInfo[index].previousAnimalAtatus;
}

var index = localStorage.getItem("index") - 1;

setAnimalinfo(index)

const nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", function () {
    if (index != 19) {
        index++;
        setAnimalinfo(index)
    }
})

const preButton = document.getElementById("pre-button");
preButton.addEventListener("click", function () {
    if (index != 0) {
        index--;
        setAnimalinfo(index)
    }
})
