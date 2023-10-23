window.addEventListener('scroll', function () {
    let positionItems = document.getElementById("positionItems")
    console.log(positionItems, "displayed")
    if (window.scrollY > 150) {
        positionItems.style.backgroundColor = "black"

    }
    else {
        positionItems.style.backgroundColor = "rgba(24, 27, 30, .1)"
    }
})

function func1(id) {
    switch (id) {
        case id = "downArrowBtn":
            document.getElementById("listOne").classList.remove("d-none");
            document.getElementById("upperArrowBtn").classList.remove("d-none");
            document.getElementById("downArrowBtn").classList.add("d-none");
            break;
        case id = "upperArrowBtn":
            document.getElementById("listOne").classList.add("d-none");
            document.getElementById("upperArrowBtn").classList.add("d-none");
            document.getElementById("downArrowBtn").classList.remove("d-none");
            break;
        case id = "downArrowBtnSecond":
            document.getElementById("listOneSecond").classList.remove("d-none");
            document.getElementById("upperArrowBtnSecond").classList.remove("d-none");
            document.getElementById("downArrowBtnSecond").classList.add("d-none");
            break;
        case id = "upperArrowBtnSecond":
            document.getElementById("listOneSecond").classList.add("d-none");
            document.getElementById("upperArrowBtnSecond").classList.add("d-none");
            document.getElementById("downArrowBtnSecond").classList.remove("d-none");
            break;
        case id = "downArrowBtnThird":
            document.getElementById("listOneThird").classList.remove("d-none");
            document.getElementById("upperArrowBtnThird").classList.remove("d-none");
            document.getElementById("downArrowBtnThird").classList.add("d-none");
            break;
        case id = "upperArrowBtnThird":
            document.getElementById("listOneThird").classList.add("d-none");
            document.getElementById("upperArrowBtnThird").classList.add("d-none");
            document.getElementById("downArrowBtnThird").classList.remove("d-none");
            break;
        case id = "downArrowBtnFourth":
            document.getElementById("listOneFourth").classList.remove("d-none");
            document.getElementById("upperArrowBtnFourth").classList.remove("d-none");
            document.getElementById("downArrowBtnFourth").classList.add("d-none");
            break;
        case id = "upperArrowBtnFourth":
            document.getElementById("listOneFourth").classList.add("d-none");
            document.getElementById("upperArrowBtnFourth").classList.add("d-none");
            document.getElementById("downArrowBtnFourth").classList.remove("d-none");
    }
}