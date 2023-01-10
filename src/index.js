console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function(){
    fetchImages()
    fetchBreeds()
})

const fetchImages = () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(res => res.json())
    .then(results => {
        results.message.forEach(image => appendImageToDOM(image))
    }
)}

const appendImageToDOM = (image) => {
    let container = document.querySelector('#dog-image-container')
    let newImage = document.createElement('img')
    newImage.src = image
    container.appendChild(newImage)
}

const fetchBreeds = () => {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(res = res.json())
    .then(results => {
        let breeds = Object.keys(results.message)
        updateBreedList(breeds)
        
        let breedDropdown = document.querySelector('#breed-dropdown')
        breedDropdown.addEventListener('change', function (e){
            let filterValue = e.target.value
            let filteredBreeds = breed.filter(breed => breed[0] === filterValue)
            updateBreedList(filteredBreeds)
        })
    })

}


