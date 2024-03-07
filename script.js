function changeProgrammer(){
    let programmer = document.getElementById('name')
    console.log(programmer.innerHTML);
    programmer.innerHTML = "senior"

    let img = document.getElementById('img')
    console.log(img.innerHTML)
    img.src = "https://www.jamesonlegal.com/wp-content/uploads/2023/04/Software-developer-concept-shot-with-visualisation-of-running-computer-code-on-foreground-portrait-of-handsome-1356364165.jpg"
}