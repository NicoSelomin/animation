const maBoite = document.getElementById("maBoite");

function ajouterAnimation(animationProps) {
    gsap.to(maBoite, {
        duration: animationProps.duration,
        ...animationProps.to
    });
}

function passerSouri() {
    maBoite.innerHTML = `<p class="text-center text-white fw-bold fs-2">Tu viens de passer sur mon domaine</p>`;
    maBoite.style.backgroundColor = "purple";
    ajouterAnimation({
        duration: 0.3,
        to: { scale: 1.1, opacity: 1 }
    });
}

function click() {
    maBoite.innerHTML = `<p class="text-center text-white fw-bold fs-2">Tu viens de cliquer</p>`;
    maBoite.style.backgroundColor = "green";
    ajouterAnimation({
        duration: 0.3,
        to: { x: 30, opacity: 1 }
    });
}

function doubleClick() {
    maBoite.innerHTML = `<p class="text-center text-white fw-bold fs-2">Tu viens de double cliquer petit</p>`;
    maBoite.style.backgroundColor = "red";
    ajouterAnimation({
        duration: 0.3,
        to: { x: 0, rotation: 50, opacity: 1 }
    });
}

function mouseout() {
    maBoite.innerHTML = `<p class="text-center text-white fw-bold fs-2">Tu viens d'enlever ta souris <br> Terrain neutre</p>`;
    maBoite.style.backgroundColor = "gray";
    ajouterAnimation({
        duration: 0.3,
        to: { x: 0, rotation:0, y: 0, opacity: 1 }
    });
}

function clickDroit() {
    maBoite.innerHTML = `<p class="text-center text-white fw-bold fs-2">Tu as fais un clic droit</p>`;
    maBoite.style.backgroundColor = "orange";
    ajouterAnimation({
        duration: 0.3,
        to: { scale: 1, opacity: 1 }
    });
}

maBoite.addEventListener("mouseover", passerSouri);
maBoite.addEventListener("dblclick", doubleClick);
maBoite.addEventListener("click", click);
maBoite.addEventListener("mouseout", mouseout);
maBoite.addEventListener("contextmenu", clickDroit);
