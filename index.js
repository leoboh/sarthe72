/* ----------------------------------------------------------------------------------------------- */
/* ------------------------------------------ VARIABLES ------------------------------------------ */
/* ----------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------- */

const body = document.querySelector("body");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const sectionBoard = document.querySelector("#sectionBoard");
const footer = document.querySelector("footer");

/* ----------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------- */
/* --------------------------------------------- BTN --------------------------------------------- */
/* ----------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------- */

const imgNavLogo = document.querySelector("#imgNavLogo");
const svgNavDashBoard = document.querySelector("#svgNavDashBoard");
const divLunchUnit = document.querySelector("#divLunchUnit");
const divGreenSpaceUnit = document.querySelector("#divGreenSpaceUnit");
const pMentionsLegales = document.querySelector("#pMentionsLegales");

/* ----------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------- */
/* -------------------------------------- FONCTION PREPAREE -------------------------------------- */
/* ----------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------- */

const removeClass = () => {
    sectionBoard.classList.remove(
        "sectionBoardLunch",
        "sectionBoardGreenSpace",
        "sectionBoardContact",
        "sectionBoardActu",
        "sectionBoardMentionsLegales",
        "sectionBoardLunchMenu",
        "sectionBoardLunchContrat",
        "sectionBoardHome",
        "resizeDashBoard",
    );
};
/**/
/**/
/**/
/**/
/**/
const navBoard = () => {
    document.querySelector("#sectionBoard").innerHTML = `
        <div id="divSectionBoardDashBoard" class="">
            <div id="divSectionBoardDashBoardOne" class="divSectionBoardDashBoardElements">
                <h2 class="h2ElemDashBoard">Livraison de repas à domicile</h2>
                <svg class="svgElemDashBoard" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M32 96c0-35.3 28.7-64 64-64l224 0c23.7 0 44.4 12.9 55.4 32l40.4 0c32.4 0 61.6 19.6 74 49.5l43.8 106.3 1.7 4.2 24.7 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-.4 0c.2 2.6 .4 5.3 .4 8 0 48.6-39.4 88-88 88s-88-39.4-88-88c0-2.7 .1-5.4 .4-8l-144.7 0c.2 2.6 .4 5.3 .4 8 0 48.6-39.4 88-88 88s-88-39.4-88-88c0-3.6 .2-7.1 .6-10.5-19-6.4-32.6-24.4-32.6-45.5l0-48c-17.7 0-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32l0-32zm352 32l0 96 82.1 0-35.4-86.1c-2.5-6-8.3-9.9-14.8-9.9L384 128zM192 392a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm280 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
                </svg>
            </div>
            <div id="divSectionBoardDashBoardTwo" class="divSectionBoardDashBoardElements">
                <h2 class="h2ElemDashBoard">Entretien d'espaces verts</h2>
                <svg class="svgElemDashBoard" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 32c477.6 0 366.6 317.3 367.1 366.3l80.9 81.7-26 0-70.4-71.2C312.6 413 227.2 443.3 137.2 371.8 47 300.3 52 214.7 0 32zM79.7 78c-49.7-23.5-5.2 9.2-5.2 9.2 45.2 31.2 66 73.7 90.2 119.9 31.5 60.2 79 139.7 144.2 167.7 65 28 34.2 12.5 6-8.5-28.2-21.2-68.2-87-91-130.2-31.7-60-61-118.6-144.2-158.1z"/>
                </svg>
            </div>
            <div id="divSectionBoardDashBoardThree" class="divSectionBoardDashBoardElements">
                <h2 class="h2ElemDashBoard">Contact</h2>
                <svg class="svgElemDashBoard" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"/>
                </svg>
            </div>
        </div>
    `;
};
/**/
/**/
/**/
/**/
/**/
const svgOpen = () => {
    svgNavDashBoard.classList.remove("svgNavDashBoardClose");
    svgNavDashBoard.classList.add("svgNavDashBoardOpen");
    document.querySelector("#svgNavDashBoard").innerHTML = `
        <path d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM231 231C221.6 240.4 221.6 255.6 231 264.9L286 319.9L231 374.9C221.6 384.3 221.6 399.5 231 408.8C240.4 418.1 255.6 418.2 264.9 408.8L319.9 353.8L374.9 408.8C384.3 418.2 399.5 418.2 408.8 408.8C418.1 399.4 418.2 384.2 408.8 374.9L353.8 319.9L408.8 264.9C418.2 255.5 418.2 240.3 408.8 231C399.4 221.7 384.2 221.6 374.9 231L319.9 286L264.9 231C255.5 221.6 240.3 221.6 231 231z" />`;
};
/**/
/**/
/**/
/**/
/**/
const svgClose = () => {
    svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
    svgNavDashBoard.classList.add("svgNavDashBoardClose");
    document.querySelector("#svgNavDashBoard").innerHTML = `
        <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
};
/**/
/**/
/**/
/**/
/**/
const homePage = () => {
    document.querySelector("#sectionBoard").innerHTML = `
        <div id="divSectionBoardWelcom" class="divSectionBoard">
            <h1 id="h1Welcom">Bienvenue</h1>
            <p id="pWelcom">
                L'association Service d'Aides Rurales par des Travailleurs Handicapés se donne pour mission de :</br>
                • venir en aide aux personnes âgées en milieu rural</br>
                • soutenir des travailleurs handicapés par de l'emploi
            </p>
        </div>
        <div id="divSectionBoardUnits" class="divSectionBoard">
            <div id="divLunchUnit" class="divSectionBoardSingleUnit">
                <h2>Livraison de repas à domicile</h2>
                <svg class="svgHomePage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path d="M32 96c0-35.3 28.7-64 64-64l224 0c23.7 0 44.4 12.9 55.4 32l40.4 0c32.4 0 61.6 19.6 74 49.5l43.8 106.3 1.7 4.2 24.7 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-.4 0c.2 2.6 .4 5.3 .4 8 0 48.6-39.4 88-88 88s-88-39.4-88-88c0-2.7 .1-5.4 .4-8l-144.7 0c.2 2.6 .4 5.3 .4 8 0 48.6-39.4 88-88 88s-88-39.4-88-88c0-3.6 .2-7.1 .6-10.5-19-6.4-32.6-24.4-32.6-45.5l0-48c-17.7 0-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32l0-32zm352 32l0 96 82.1 0-35.4-86.1c-2.5-6-8.3-9.9-14.8-9.9L384 128zM192 392a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm280 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/>
                </svg>
            </div>
            <div id="divGreenSpaceUnit" class="divSectionBoardSingleUnit">
                <h2>Entretien d'espaces verts</h2>
                <svg class="svgHomePage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M0 32c477.6 0 366.6 317.3 367.1 366.3l80.9 81.7-26 0-70.4-71.2C312.6 413 227.2 443.3 137.2 371.8 47 300.3 52 214.7 0 32zM79.7 78c-49.7-23.5-5.2 9.2-5.2 9.2 45.2 31.2 66 73.7 90.2 119.9 31.5 60.2 79 139.7 144.2 167.7 65 28 34.2 12.5 6-8.5-28.2-21.2-68.2-87-91-130.2-31.7-60-61-118.6-144.2-158.1z"/>
                </svg>
            </div>
        </div>
        <div id="divSectionBoardActu" class="divSectionBoard">
            <h2 id="h2ActuSectionBoard">Actualités</h2>
            <svg class="svgHomePage" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-8 64l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/>
            </svg>
        </div>
    `;
};
/**/
/**/
/**/
/**/
/**/
const lunchPage = () => {
    removeClass();
    sectionBoard.classList.add("sectionBoardLunch");
    document.querySelector("#sectionBoard").innerHTML = `
        <div id="divSectionBoardLunch" class="">
            <div id="divLunchMenu" class="divUnitLunch divSectionBoard">
                <h2 class="h2divUnitLunch">Menu en cours</h2>
                <svg class="svgUnitLunch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 141.3l0 309.3 .5-.2C311.1 427.7 369.7 416 428.8 416l19.2 0 0-320-19.2 0c-42.2 0-84.1 8.4-123.1 24.6-16.8 7-33.4 13.9-49.7 20.7zM230.9 61.5L256 72 281.1 61.5C327.9 42 378.1 32 428.8 32L464 32c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-35.2 0c-50.7 0-100.9 10-147.7 29.5l-12.8 5.3c-7.9 3.3-16.7 3.3-24.6 0l-12.8-5.3C184.1 490 133.9 480 83.2 480L48 480c-26.5 0-48-21.5-48-48L0 80C0 53.5 21.5 32 48 32l35.2 0c50.7 0 100.9 10 147.7 29.5z"/>
                </svg>
            </div>
            <div id="divLunchContrat" class="divUnitLunch divSectionBoard">
                <h2 class="h2divUnitLunch">Contrat de portage</h2>
                <svg class="svgUnitLunch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M0 64C0 28.7 28.7 0 64 0L213.5 0c17 0 33.3 6.7 45.3 18.7L365.3 125.3c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm208-5.5l0 93.5c0 13.3 10.7 24 24 24L325.5 176 208 58.5zM88 64C74.7 64 64 74.7 64 88s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0zm70.3 160c-11.3 0-21.9 5.1-28.9 13.9L69.3 409c-8.3 10.3-6.6 25.5 3.7 33.7s25.5 6.6 33.7-3.8l47.1-58.8 15.2 50.7c3 10.2 12.4 17.1 23 17.1l104 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-86.1 0-16.1-53.6c-4.7-15.7-19.1-26.4-35.5-26.4z"/>
                </svg>
            </div>
        </div>
    `;
    /*****/
    /*****/
    const divLunchMenu = document.querySelector("#divLunchMenu");
    const divLunchContrat = document.querySelector("#divLunchContrat");
    /*****/
    /*****/
    divLunchMenu.addEventListener("click", () => {
        sectionBoard.classList.add("sectionBoardLunchMenu");
        document.querySelector("#sectionBoard").innerHTML = `
            <div id ="divMenu">
                <ul id="ulDivMenuSectionBoardLunch">
                    <li id="liMenuOne" class="liUlDivMenuSectionBoardLunch">Du 26 Janvier au 01 février 2026</li>
                    <li id="liMenuTwo" class="liUlDivMenuSectionBoardLunch">Du 02 au 08 février 2026</li>
                    <li id="liMenuThree" class="liUlDivMenuSectionBoardLunch">Du 09 au 15 février 2026</li>
                    <li id="liMenuFour" class="liUlDivMenuSectionBoardLunch">Du 16 au 22 février 2026</li>
                    <li id="liMenuFive" class="liUlDivMenuSectionBoardLunch">Du 23 février au 01 mars 2026</li>
                </ul>
            </div>
        `;
        /*****/
        /*****/
        /*****/
        /*****/
        document.querySelector("#liMenuOne").addEventListener("click", () => {
            window.open("/images/repas1.pdf", "_blank");
        });
        document.querySelector("#liMenuTwo").addEventListener("click", () => {
            window.open("/images/repas2.pdf", "_blank");
        });
        document.querySelector("#liMenuThree").addEventListener("click", () => {
            window.open("/images/repas3.pdf", "_blank");
        });
        document.querySelector("#liMenuFour").addEventListener("click", () => {
            window.open("/images/repas4.pdf", "_blank");
        });
        document.querySelector("#liMenuFive").addEventListener("click", () => {
            window.open("/images/repas5.pdf", "_blank");
        });
    });
    divLunchContrat.addEventListener("click", () => {
        sectionBoard.classList.add("sectionBoardLunchContrat");
        document.querySelector("#sectionBoard").innerHTML = `
            <div id ="divContrat">
                <div id="divContratHorsP" class="divContratSectionBoardContrat">
                    <h2>Contrat de portage hors parignéens</h2>
                </div>
                <div id="divContratP" class="divContratSectionBoardContrat">
                    <h2>Contrat de portage parignéens</h2>
                </div>
            </div>
        `;
        /*****/
        /*****/
        /*****/
        /*****/
        document.querySelector("#divContratHorsP").addEventListener("click", () => {
            window.open("/images/Plaquette-hors-Parigné.pdf", "_blank");
        });
        document.querySelector("#divContratP").addEventListener("click", () => {
            window.open("/images/Plaquette-Parigné.pdf", "_blank");
        });
    });
};
/**/
/**/
/**/
/**/
/**/
const greenSpacePage = () => {
    removeClass();
    sectionBoard.classList.add("sectionBoardGreenSpace");
    document.querySelector("#sectionBoard").innerHTML = `
        <div id="divSectionBoardGreenSpace" class="">
            <h2 class="h2TittleSectionBoardGreenSpace">Nous sommes en mesure de vous aider pour les tâches courantes suivantes :</h2>
            <ul id="uldivSectionBoardGreenSpace">
                <li id="liUlGreenSpaceOne" class="liUldivSectionBoardGreenSpace">Tonte de pelouse</li>
                <li id="liUlGreenSpaceTwo" class="liUldivSectionBoardGreenSpace">Taille de haies</li>
                <li id="liUlGreenSpaceThree" class="liUldivSectionBoardGreenSpace">Entretien du jardin</li>
                <li id="liUlGreenSpaceFour" class="liUldivSectionBoardGreenSpace">Taille d'arbustes</li>
                <li id="liUlGreenSpaceFive" class="liUldivSectionBoardGreenSpace">Ramassage des feuilles</li>
                <li id="liUlGreenSpaceSix" class="liUldivSectionBoardGreenSpace">Exct...</li>
            </ul>
        </div>
    `;
};
/**/
/**/
/**/
/**/
/**/
const actuPage = () => {
    removeClass();
    sectionBoard.classList.add("sectionBoardActu");
    document.querySelector("#sectionBoard").innerHTML = `
        <div id="divSectionBoardAllActu" class="">
            <ul id="uldivSectionBoardActu">
                <li id="liActuOne" class="liUldivSectionBoardActu">
                    <h2 class="h2LiUlSectionBoardActu">1 000 000ème repas</h2>
                    <p class="pLiUlSectionBoardActu">Suite à l'assemblée générale du 28 octobre dernier, un repas était offert aux bénéficiaires pour fêter le 1 000 000ème repas livrés.</p>
                </li>
                <li id="liActuTwo" class="liUldivSectionBoardActu">
                    <h2 class="h2LiUlSectionBoardActu">ASSEMBLEE GENERALE</h2>
                    <p class="pLiUlSectionBoardActu">L'assemblée générale de l'association aura lieu le jeudi 28 octobre à 10h30 au foyer loisirs de Parigné l'Evêque.</p>
                </li>
                <li id="liActuThree" class="liUldivSectionBoardActu">
                    <h2 class="h2LiUlSectionBoardActu">CRISTAL ROC</h2>
                    <p class="pLiUlSectionBoardActu">Comme tous les étés, nous pouvons compter sur Cristal Roc - Roxane pour leur don de bouteilles d'eau que nous distribuons aux bénéficiaires des repas. Cela leur évite la déshydratation lors des grosses chaleurs.</p>
                </li>
            </ul>
        </div>
    `;
    /*****/
    /*****/
    const liActuOne = document.querySelector("#liActuOne");
    const liActuTwo = document.querySelector("#liActuTwo");
    const liActuThree = document.querySelector("#liActuThree");
    /*****/
    /*****/
    if (window.matchMedia("(max-width: 649px)").matches) {
        liActuOne.addEventListener("click", () => {
            document.querySelector("#sectionBoard").innerHTML = `
                <div id="divSectionBoardActuOne" class="">
                    <h2 class="h2Actu">1 000 000ème repas</h2>
                    <p class="pActuSectionBoard">Suite à l'assemblée générale du 28 octobre dernier, un repas était offert aux bénéficiaires pour fêter le 1 000 000ème repas livrés.</p>
                    <img id="imgActuOne" class="imgSectionBoardActu" src="/images/actu1.jpg" alt="image de personnes à table">
                </div>
            `;
        });
        liActuTwo.addEventListener("click", () => {
            document.querySelector("#sectionBoard").innerHTML = `
                <div id="divSectionBoardActuTwo" class="">
                    <h2 class="h2Actu">ASSEMBLEE GENERALE</h2>
                    <p class="pActuSectionBoard">L'assemblée générale de l'association aura lieu le jeudi 28 octobre à 10h30 au foyer loisirs de Parigné l'Evêque.</p>
                    <img id="imgActuTwo" class="imgSectionBoardActu" src="/images/actu3.jpg" alt="carte de visite sarthe'72">
                </div>
            `;
        });
        liActuThree.addEventListener("click", () => {
            document.querySelector("#sectionBoard").innerHTML = `
                <div id="divSectionBoardActuThree" class="">
                    <h2 class="h2Actu">CRISTAL ROC</h2>
                    <p class="pActuSectionBoard">Comme tous les étés, nous pouvons compter sur Cristal Roc - Roxane pour leur don de bouteilles d'eau que nous distribuons aux bénéficiaires des repas. Cela leur évite la déshydratation lors des grosses chaleurs.</p>
                    <img id="imgActuThree" class="imgSectionBoardActu" src="/images/actu2.jpg" alt="image de personnes travaillant chez cristal roc">
                </div>
            `;
        });
    } else {
        liActuOne.addEventListener("click", () => {
            document.querySelector("#sectionBoard").innerHTML = `
                <div id="divSectionBoardActuOne" class="">
                    <div class="divSectionBoardActuGrp">
                        <h2 class="h2Actu">1 000 000ème repas</h2>
                        <p class="pActuSectionBoard">Suite à l'assemblée générale du 28 octobre dernier, un repas était offert aux bénéficiaires pour fêter le 1 000 000ème repas livrés.</p>
                    </div>
                    <img id="imgActuOne" class="imgSectionBoardActu" src="/images/actu1.jpg" alt="image de personnes à table">
                </div>
            `;
        });
        liActuTwo.addEventListener("click", () => {
            document.querySelector("#sectionBoard").innerHTML = `
                <div id="divSectionBoardActuTwo" class="">
                    <div class="divSectionBoardActuGrp">
                        <h2 class="h2Actu">ASSEMBLEE GENERALE</h2>
                        <p class="pActuSectionBoard">L'assemblée générale de l'association aura lieu le jeudi 28 octobre à 10h30 au foyer loisirs de Parigné l'Evêque.</p>
                    </div>
                    <img id="imgActuTwo" class="imgSectionBoardActu" src="/images/actu3.jpg" alt="carte de visite sarthe'72">
                </div>
            `;
        });
        liActuThree.addEventListener("click", () => {
            document.querySelector("#sectionBoard").innerHTML = `
                <div id="divSectionBoardActuThree" class="">
                    <div class="divSectionBoardActuGrp">
                        <h2 class="h2Actu">CRISTAL ROC</h2>
                        <p class="pActuSectionBoard">Comme tous les étés, nous pouvons compter sur Cristal Roc - Roxane pour leur don de bouteilles d'eau que nous distribuons aux bénéficiaires des repas. Cela leur évite la déshydratation lors des grosses chaleurs.</p>
                    </div>
                    <img id="imgActuThree" class="imgSectionBoardActu" src="/images/actu2.jpg" alt="image de personnes travaillant chez cristal roc">
                </div>
            `;
        });
    }
};
/**/
/**/
/**/
/**/
/**/
const contactPage = () => {
    removeClass();
    sectionBoard.classList.add("sectionBoardContact");
    document.querySelector("#sectionBoard").innerHTML = `
        <div id="divSectionBoardContact" class="">
            <h2 id="h2DivSectionBoardContact">Contactez nous en remplissant ce formulaire :</h2>
            <form id="formDivSectionBoardContact" action="#">
                <div id="divInputNomFormContact" class="divInputFormContact">
                    <input id="inputNomFormContact" class="checkInputFormContact inputFormContact" type="text" placeholder="Nom :" autocomplete="off">
                    <p class="pErrorInputFormContact">Nom invalide</p>
                </div>
                <div id="divInputPrenomFormContact" class="divInputFormContact">
                    <input id="inputPrenomFormContact" class="checkInputFormContact inputFormContact" type="text" placeholder="Prénom :" autocomplete="off">
                    <p class="pErrorInputFormContact">Prénom invalide</p>
                </div>
                <div id="divInputPhoneFormContact" class="divInputFormContact">
                    <input id="inputPhoneFormContact" class="inputFormContact" type="text" placeholder="Téléphone :" autocomplete="off">
                    <p class="pErrorInputFormContact pErrorPhoneFormContact">Téléphone invalide</p>
                </div>
                <div id="divInputEmailFormContact" class="divInputFormContact">
                    <input id="inputEmailFormContact" class="inputFormContact" type="text" placeholder="E-mail :" autocomplete="off">
                    <p class="pErrorInputFormContact pErrorEmailFormContact">Adresse E-mail invalide</p>
                </div>
                <div id="divTextareaFormContact" class="divInputFormContact">
                    <textarea id="textareaFormContact" class="checkInputFormContact" placeholder="Message :" autocomplete="off"></textarea>
                    <p class="pErrorInputFormContact">Message invalide</p>
                </div>
                <button onclick="sendMail()" class="buttonFormContact" type="button">Envoyer</button>
            </form>
            <div id="divIframeSectionBoardContact">
                <iframe
                    id="map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10692.14107377621!2d0.362784!3d47.9357015!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9796d88e89a034f3!2sS.a.r.t.h%2072!5e0!3m2!1sfr!2sfr!4v1620653831305!5m2!1sfr!2sfr">
                </iframe>
            </div>
        </div>
    `;
    checkInput();
    checkEmail();
    checkPhone();
};
/**/
/**/
/**/
/**/
/**/
const mentionsLegalesPage = () => {
    removeClass();
    sectionBoard.classList.add("sectionBoardMentionsLegales");
    document.querySelector("#sectionBoard").innerHTML = `
        <div id="divSectionBoardMentionsLegales" class="">
            <h2>Mentions Legales</h2>
            <div>
                <p><span>Editeur :</span> SARTH'72</p>
                <p>Tel: 02 43 75 28 47</p>
                </br>
                <p><span>Site hébergé par :</span> 1 & 1</p>
                <p><span>Direction de publication :</span> THUREAU Alain</p>
                <p><span>Développement et Intégration du site :</span> Léo</p>
            </div>
            <div>
                <p><span>Protection du site</span></p>
                <p>Le site de ********** est une œuvre de l’esprit protégée par la législation en vigueur. L’ensemble des éléments le composant tels que, la dénomination, le logo, les dessins, les photos, les animations, les documents téléchargeables et tout autre document sont la propriété exclusive de *********. Toute représentation, reproduction, modification, utilisation commerciale ou non, ainsi que tout transfert vers un autre site et/ou quel que soit le support sont interdits, sauf autorisation expresse et écrite  de **************. Toutefois, l’utilisation à des fins strictement personnelles est autorisée. Les utilisateurs de la messagerie liée au site ne peuvent communiquer de fausses informations, voire utiliser l’identité de tiers sous peine de poursuites pénales.</p>
            </div>
        </div>
    `;
};
/**/
/**/
/**/
/**/
/**/
checkInput = () => {
    const inputsForm = document.querySelectorAll(".checkInputFormContact");

    for (const inputForm of inputsForm) {
        if (inputForm.value == "") {
            inputForm.classList.add("error");
            inputForm.classList.remove("inputCheckedTrue");
        }

        inputForm.addEventListener("keyup", () => {
            if (inputForm.value != "") {
                inputForm.classList.add("inputCheckedTrue");
                inputForm.classList.remove("error");
                inputForm.parentElement.classList.remove("error");
            } else {
                inputForm.classList.add("error");
                inputForm.parentElement.classList.add("error");
                inputForm.classList.remove("inputCheckedTrue");
            }
        });
    }
};
/**/
/**/
/**/
/**/
/**/
checkEmail = () => {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const inputEmailContactForm = document.getElementById("inputEmailFormContact");

    if (!inputEmailContactForm.value.match(emailRegex)) {
        inputEmailContactForm.classList.add("error");
        inputEmailContactForm.classList.remove("inputCheckedTrue");
    } else {
        inputEmailContactForm.classList.remove("error");
        inputEmailContactForm.classList.add("inputCheckedTrue");
    }
    inputEmailContactForm.addEventListener("keyup", () => {
        if (!inputEmailContactForm.value.match(emailRegex)) {
            inputEmailContactForm.classList.add("error");
            inputEmailContactForm.parentElement.classList.add("error");
            inputEmailContactForm.classList.remove("inputCheckedTrue");
        } else {
            inputEmailContactForm.classList.remove("error");
            inputEmailContactForm.parentElement.classList.remove("error");
            inputEmailContactForm.classList.add("inputCheckedTrue");
        }
    });
};
/**/
/**/
/**/
/**/
/**/
checkPhone = () => {
    const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/g;
    const inputPhoneContactForm = document.getElementById("inputPhoneFormContact");

    if (!inputPhoneContactForm.value.match(phoneRegex)) {
        inputPhoneContactForm.classList.add("error");
        inputPhoneContactForm.classList.remove("inputCheckedTrue");
    } else {
        inputPhoneContactForm.classList.remove("error");
        inputPhoneContactForm.classList.add("inputCheckedTrue");
    }
    inputPhoneContactForm.addEventListener("keyup", () => {
        if (!inputPhoneContactForm.value.match(phoneRegex)) {
            inputPhoneContactForm.classList.add("error");
            inputPhoneContactForm.parentElement.classList.add("error");
            inputPhoneContactForm.classList.remove("inputCheckedTrue");
        } else {
            inputPhoneContactForm.classList.remove("error");
            inputPhoneContactForm.parentElement.classList.remove("error");
            inputPhoneContactForm.classList.add("inputCheckedTrue");
        }
    });
};
/**/
/**/
/**/
/**/
/**/
sendMail = () => {
    const inputNomFormContact = document.getElementById("inputNomFormContact");
    const inputPrenomFormContact = document.getElementById("inputPrenomFormContact");
    const inputPhoneFormContact = document.getElementById("inputPhoneFormContact");
    const inputEmailFormContact = document.getElementById("inputEmailFormContact");
    const textareaFormContact = document.getElementById("textareaFormContact");

    if (
        !inputNomFormContact.classList.contains("error") &&
        !inputPrenomFormContact.classList.contains("error") &&
        !inputPhoneFormContact.classList.contains("error") &&
        !inputEmailFormContact.classList.contains("error") &&
        !textareaFormContact.classList.contains("error")
    ) {
        document.querySelector("#formDivSectionBoardContact").innerHTML = `
            <h2 id="h2SendMailContact">Votre e-mail à bien été envoyé</h2>
         `;
    } else {
        // Check Inputs
        const inputsForm = document.querySelectorAll(".checkInputFormContact");

        for (const inputForm of inputsForm) {
            if (inputForm.value == "") {
                inputForm.classList.add("error");
                inputForm.parentElement.classList.add("error");
            }

            inputForm.addEventListener("keyup", () => {
                if (inputForm.value != "") {
                    inputForm.classList.remove("error");
                    inputForm.parentElement.classList.remove("error");
                } else {
                    inputForm.classList.add("error");
                    inputForm.parentElement.classList.add("error");
                }
            });
        }
        // Check Email
        const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
        const inputEmailContactForm = document.getElementById("inputEmailFormContact");

        if (!inputEmailContactForm.value.match(emailRegex)) {
            inputEmailContactForm.classList.add("error");
            inputEmailContactForm.parentElement.classList.add("error");
        } else {
            inputEmailContactForm.classList.remove("error");
            inputEmailContactForm.parentElement.classList.remove("error");
        }
        inputEmailContactForm.addEventListener("keyup", () => {
            if (!inputEmailContactForm.value.match(emailRegex)) {
                inputEmailContactForm.classList.add("error");
                inputEmailContactForm.parentElement.classList.add("error");
            } else {
                inputEmailContactForm.classList.remove("error");
                inputEmailContactForm.parentElement.classList.remove("error");
            }
        });
        // Check Phone
        const phoneRegex = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/g;
        const inputPhoneContactForm = document.getElementById("inputPhoneFormContact");

        if (!inputPhoneContactForm.value.match(phoneRegex)) {
            inputPhoneContactForm.classList.add("error");
            inputPhoneContactForm.parentElement.classList.add("error");
        } else {
            inputPhoneContactForm.classList.remove("error");
            inputPhoneContactForm.parentElement.classList.remove("error");
        }
        inputPhoneContactForm.addEventListener("keyup", () => {
            if (!inputPhoneContactForm.value.match(phoneRegex)) {
                inputPhoneContactForm.classList.add("error");
                inputPhoneContactForm.parentElement.classList.add("error");
            } else {
                inputPhoneContactForm.classList.remove("error");
                inputPhoneContactForm.parentElement.classList.remove("error");
            }
        });
    }
};
/**/
/**/
/**/
/**/
/**/
setPage = () => {
    divSectionBoardDashBoardOne.addEventListener("click", () => {
        svgClose();
        lunchPage();
    });
    divSectionBoardDashBoardTwo.addEventListener("click", () => {
        svgClose();
        greenSpacePage();
    });
    divSectionBoardDashBoardThree.addEventListener("click", () => {
        svgClose();
        contactPage();
    });
};
/**/
/**/
/**/
/**/
/**/
setHomePageEvent = () => {
    const divLunchUnit = document.querySelector("#divLunchUnit");
    const divGreenSpaceUnit = document.querySelector("#divGreenSpaceUnit");
    const divSectionBoardActu = document.querySelector("#divSectionBoardActu");
    /*****/
    divLunchUnit.addEventListener("click", () => {
        lunchPage();
    });
    divGreenSpaceUnit.addEventListener("click", () => {
        greenSpacePage();
    });
    divSectionBoardActu.addEventListener("click", () => {
        actuPage();
    });
};
/* ----------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------- */
/* -------------------------------------------- Event -------------------------------------------- */
/* ----------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------- */

divLunchUnit.addEventListener("click", () => {
    lunchPage();
});
divGreenSpaceUnit.addEventListener("click", () => {
    greenSpacePage();
});
divSectionBoardActu.addEventListener("click", () => {
    actuPage();
});
pMentionsLegales.addEventListener("click", () => {
    mentionsLegalesPage();
});
/**/
/**/
/**/
/**/
/**/
imgNavLogo.addEventListener("click", () => {
    svgClose();
    removeClass();
    sectionBoard.classList.add("sectionBoardHome");
    homePage();
    setHomePageEvent();
});
/**/
/**/
/**/
/**/
/**/
svgNavDashBoard.addEventListener("click", () => {
    /********************************************************************************/
    /************************************* HOME *************************************/
    /************************************* HOME *************************************/
    /************************************* HOME *************************************/
    /********************************************************************************/
    if (document.querySelector(".svgNavDashBoardClose") && document.querySelector(".sectionBoardHome")) {
        svgOpen();
        navBoard();
        setPage();

        /********************************************************************************/
        /************************************ HOME 2 ************************************/
        /************************************ HOME 2 ************************************/
        /************************************ HOME 2 ************************************/
        /********************************************************************************/
    } else if (document.querySelector(".svgNavDashBoardOpen") && document.querySelector(".sectionBoardHome")) {
        svgClose();
        homePage();
        setHomePageEvent();

        /********************************************************************************/
        /************************************ LUNCH *************************************/
        /************************************ LUNCH *************************************/
        /************************************ LUNCH *************************************/
        /********************************************************************************/
    } else if (document.querySelector(".svgNavDashBoardClose") && document.querySelector(".sectionBoardLunch")) {
        svgOpen();
        navBoard();
        setPage();

        /********************************************************************************/
        /*********************************** LUNCH 2 ************************************/
        /*********************************** LUNCH 2 ************************************/
        /*********************************** LUNCH 2 ************************************/
        /********************************************************************************/
    } else if (document.querySelector(".svgNavDashBoardOpen") && document.querySelector(".sectionBoardLunch")) {
        svgClose();
        lunchPage();

        /********************************************************************************/
        /********************************* GREEN.SPACE **********************************/
        /********************************* GREEN.SPACE **********************************/
        /********************************* GREEN.SPACE **********************************/
        /********************************************************************************/
    } else if (document.querySelector(".svgNavDashBoardClose") && document.querySelector(".sectionBoardGreenSpace")) {
        svgOpen();
        navBoard();
        setPage();

        /********************************************************************************/
        /******************************** GREEN.SPACE 2 *********************************/
        /******************************** GREEN.SPACE 2 *********************************/
        /******************************** GREEN.SPACE 2 *********************************/
        /********************************************************************************/
    } else if (document.querySelector(".svgNavDashBoardOpen") && document.querySelector(".sectionBoardGreenSpace")) {
        svgClose();
        greenSpacePage();

        /********************************************************************************/
        /*********************************** CONTACT ************************************/
        /*********************************** CONTACT ************************************/
        /*********************************** CONTACT ************************************/
        /********************************************************************************/
    } else if (document.querySelector(".svgNavDashBoardClose") && document.querySelector(".sectionBoardContact")) {
        svgOpen();
        navBoard();
        setPage();
        sectionBoard.classList.add("resizeDashBoard");

        /********************************************************************************/
        /********************************** CONTACT 2 ***********************************/
        /********************************** CONTACT 2 ***********************************/
        /********************************** CONTACT 2 ***********************************/
        /********************************************************************************/
    } else if (document.querySelector(".svgNavDashBoardOpen") && document.querySelector(".sectionBoardContact")) {
        svgClose();
        contactPage();
        sectionBoard.classList.remove("resizeDashBoard");

        /*******************************************************************************/
        /************************************ ACTU *************************************/
        /************************************ ACTU *************************************/
        /************************************ ACTU *************************************/
        /*******************************************************************************/
    } else if (document.querySelector(".svgNavDashBoardClose") && document.querySelector(".sectionBoardActu")) {
        svgOpen();
        navBoard();
        setPage();

        /********************************************************************************/
        /*********************************** ACTU 2 *************************************/
        /*********************************** ACTU 2 *************************************/
        /*********************************** ACTU 2 *************************************/
        /********************************************************************************/
    } else if (document.querySelector(".svgNavDashBoardOpen") && document.querySelector(".sectionBoardActu")) {
        svgClose();
        actuPage();

        /*******************************************************************************/
        /******************************* MENTIONS LEGALES ******************************/
        /******************************* MENTIONS LEGALES ******************************/
        /******************************* MENTIONS LEGALES ******************************/
        /*******************************************************************************/
    } else if (document.querySelector(".svgNavDashBoardClose") && document.querySelector(".sectionBoardMentionsLegales")) {
        svgOpen();
        navBoard();
        setPage();

        /********************************************************************************/
        /****************************** MENTIONS LEGALES 2 ******************************/
        /****************************** MENTIONS LEGALES 2 ******************************/
        /****************************** MENTIONS LEGALES 2 ******************************/
        /********************************************************************************/
    } else if (document.querySelector(".svgNavDashBoardOpen") && document.querySelector(".sectionBoardMentionsLegales")) {
        svgClose();
        mentionsLegalesPage();

        /*******************************************************************************/
        /*********************************** HOME 3 ************************************/
        /*********************************** HOME 3 ************************************/
        /*********************************** HOME 3 ************************************/
        /*******************************************************************************/
    } else {
        svgNavDashBoard.classList.add("svgNavDashBoardClose");
        document.querySelector("#svgNavDashBoard").innerHTML = `
            <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
        homePage();
    }
});
/**/
/**/
/**/
/**/
/**/
document.querySelector("#pRealLeo").addEventListener("click", () => {
    window.open("https://leoblanche.com", "_blank");
});
