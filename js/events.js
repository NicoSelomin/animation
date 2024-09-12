const maBoite = document.getElementById("maBoite");

function ajouterAnimation(animationProps) {
    gsap.fromTo(maBoite, animationProps.from, animationProps.to);
}

function passerSouri() {
    maBoite.innerHTML = `<p class="text-center text-white fw-bold fs-2">Tu viens de passer sur mon domaine</p>`;
    maBoite.style.backgroundColor = "purple";
    ajouterAnimation({
        from: { scale: 0.5, opacity: 0 },
        to: { scale: 1, opacity: 1, duration: 0.5 }
    });
}

function click() {
    maBoite.innerHTML = `<p class="text-center text-white fw-bold fs-2">Tu viens de cliquer</p>`;
    maBoite.style.backgroundColor = "green";
    ajouterAnimation({
        from: { x: -100, opacity: 0 },
        to: { x: 0, opacity: 1, duration: 0.5 }
    });
}

function doubleClick() {
    maBoite.innerHTML = `<p class="text-center text-white fw-bold fs-2">Tu viens de double cliquer petit</p>`;
    maBoite.style.backgroundColor = "red";
    ajouterAnimation({
        from: { rotation: -45, opacity: 0 },
        to: { rotation: 0, opacity: 1, duration: 0.5 }
    });
}

function mouseout() {
    maBoite.innerHTML = `<p class="text-center text-white fw-bold fs-2">Tu viens d'enlever ta souris <br> Terrain neutre</p>`;
    maBoite.style.backgroundColor = "gray";
    ajouterAnimation({
        from: { y: 50, opacity: 0 },
        to: { y: 0, opacity: 1, duration: 0.5 }
    });
}

function clickDroit() {
    maBoite.innerHTML = `<p class="text-center text-white fw-bold fs-2">Tu as fais un clique droit</p>`;
    maBoite.style.backgroundColor = "orange";
    ajouterAnimation({
        from: { scale: 0.2, opacity: 0 },
        to: { scale: 1, opacity: 1, duration: 0.5 }
    });
}

maBoite.addEventListener("mouseover", passerSouri);
maBoite.addEventListener("dblclick", doubleClick);
maBoite.addEventListener("click", click);
maBoite.addEventListener("mouseout", mouseout);
maBoite.addEventListener("contextmenu", clickDroit);
