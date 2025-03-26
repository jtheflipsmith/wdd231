// -- COLOR --
const dialog = document.querySelector("#color");
const showButton = document.querySelector("#color + button");
const closeButton = document.querySelector("#color button")


// Show the dialog
showButton.addEventListener("click", () => {
    dialog.showModal();
});

closeButton.addEventListener("click", () => {
    dialog.close();
})

const testDialog = document.querySelector("#section")
const testShow = document.querySelector("#section + #test")
const testButton = document.querySelector("#section #test")

testShow.addEventListener("click", () => {
    testDialog.showModel();
})