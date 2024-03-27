const count = document.getElementById("count");
const increment = document.getElementById("increment");
const decrement = document.getElementById("decrement");
const save = document.getElementById("save");
const clear = document.getElementById("clear");
const value = document.getElementById("value");

let countValue = 0;

increment.addEventListener("click", function() {
    countValue += 1;
    count.textContent = countValue;
})

decrement.addEventListener("click", function() {
    countValue -= 1;
    count.textContent = countValue;
})

save.addEventListener("click", function() {
    value.textContent += countValue + " ";
})

clear.addEventListener("click", function() {
    value.textContent = "Previous Value: "; 
})