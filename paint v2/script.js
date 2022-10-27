const canvas = document.getElementById("canvas")
canvas.height = window.innerHeight
canvas.width = window.innerWidth

// if (window.jQuery) {
//     console.log("YES")
// }

const ctx = canvas.getContext("2d")

let prevX = null
let prevY = null

ctx.lineWidth = 5

let draw = false

let clrs = document.querySelectorAll(".clr")
clrs = Array.from(clrs)
clrs.forEach(clr => {
    clr.addEventListener("click", () => {
        ctx.strokeStyle = clr.dataset.clr
    })
})

let clrs2 = document.querySelector("#clr")
clrs2.addEventListener("change", () =>{
    ctx.strokeStyle = clrs2.value
    console.log(clrs2.value)
})



let clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})

// Saving drawing as image
let saveBtn = document.querySelector(".save")
saveBtn.addEventListener("click", () => {
    let data = canvas.toDataURL("imag/png")
    let a = document.createElement("a")
    a.href = data
    // what ever name you specify here
    // the image will be saved as that name
    a.download = "sketch.png"
    a.click()
})

window.addEventListener("mousedown", (e) => draw = true)
window.addEventListener("mouseup", (e) => draw = false)

window.addEventListener("mousemove", (e) => {
    if (prevX == null || prevY == null || !draw) {
        prevX = e.clientX
        prevY = e.clientY
        return
    }

    let currentX = e.clientX
    let currentY = e.clientY

    ctx.beginPath()
    ctx.moveTo(prevX, prevY)
    ctx.lineTo(currentX, currentY)
    ctx.stroke()

    prevX = currentX
    prevY = currentY
})


var canva = document.getElementById('canvas_picker').getContext('2d');

// create an image object and get it’s source
var img = new Image();
// img.src = 'image.jpg';

// copy the image to the canvas
$(img).load(function () {
    canva.drawImage(img, 0, 0);
});

function rgbToHex(R, G, B) {
    return toHex(R) + toHex(G) + toHex(B)
}

function toHex(n) {
    n = parseInt(n, 10);
    if (isNaN(n)) return "00";
    n = Math.max(0, Math.min(n, 255));
    return "0123456789ABCDEF".charAt((n - n % 16) / 16) + "0123456789ABCDEF".charAt(n % 16);
}
$('#canvas_picker').click(function (event) {
    // getting user coordinates
    var x = event.pageX - this.offsetLeft;
    var y = event.pageY - this.offsetTop;
    // getting image data and RGB values
    var img_data = canva.getImageData(x, y, 1, 1).data;
    var R = img_data[0];
    var G = img_data[1];
    var B = img_data[2];
    var rgb = R + ',' + G + ',' + B;
    // convert RGB to HEX
    var hex = rgbToHex(R, G, B);
    // making the color the value of the input
    $('#rgb input').val(rgb);
    $('#hex input').val('#' + hex);
});