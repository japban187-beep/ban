const dev=document.querySelector("#dev");
const nav=document.querySelector("nav");

dev.addEventListener("click", function () {
	nav.classList.add("visible");
})

const closedev=document.querySelector("#close-dev");

closedev.addEventListener("click", function () {
	nav.classList.remove("visible");
})


const soudure=document.querySelector("#soudure");
const divsoudure=document.querySelector("#divsoudure");

soudure.addEventListener("click", function () {
	divsoudure.classList.add("visible");

})

const closesoudure=document.querySelector("#close-soudure");

closesoudure.addEventListener("click", function () {
	divsoudure.classList.remove("visible");
})


const meca=document.querySelector("#meca");
const divmeca=document.querySelector("#divmeca");

meca.addEventListener("click", function () {
	divmeca.classList.add("visible");

})

const closemeca=document.querySelector("#close-meca");

closemeca.addEventListener("click", function () {
	divmeca.classList.remove("visible");
})


const avion=document.querySelector("#avion");
const divavion=document.querySelector("#divavion");

avion.addEventListener("click", function () {
	divavion.classList.add("visible");

})

const closeavion=document.querySelector("#close-avion");

closeavion.addEventListener("click", function () {
	divavion.classList.remove("visible");
})



const vente=document.querySelector("#vente");
const infovente=document.querySelector("#infovente");

vente.addEventListener("click", function () {
	infovente.classList.add("visible");
	closevente.classList.remove("hidden");
})

const closevente=document.querySelector("#close-vente");

closevente.addEventListener("click", function () {
	infovente.classList.remove("visible");
	closevente.classList.add("hidden");
})


const agro=document.querySelector("#agro");
const infoagro=document.querySelector("#infoagro");

agro.addEventListener("click", function () {
	infoagro.classList.add("visible");
	closeagro.classList.remove("hidden");
})

const closeagro=document.querySelector("#close-agro");

closeagro.addEventListener("click", function () {
	infoagro.classList.remove("visible");
	closeagro.classList.add("hidden");
})

const sport=document.querySelector("#sport");
const infosport=document.querySelector("#infosport");

sport.addEventListener("click", function () {
	infosport.classList.add("visible");
	closesport.classList.remove("hidden");
})

const closesport=document.querySelector("#close-sport");

closesport.addEventListener("click", function () {
	infosport.classList.remove("visible");
	closesport.classList.add("hidden");

})


