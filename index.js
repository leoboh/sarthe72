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
const divUnitDelivery = document.querySelector("#divUnitDelivery");
const divUnitEV = document.querySelector("#divUnitEV");
const divUnitActu = document.querySelector("#divUnitActu");
const divUnitContact = document.querySelector("#divUnitContact");
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
            <div id="divAllUnitsDashBoard">
                <div id="divUnitDelivery" class="divUnit">
                    <div id="divUnitDeliveryh2" class="divUnith2">
                        <h2 class="h2Unit">Livraison de repas à domicile</h2>
                    </div>
                    <div class="divUnitImg">
                        <img class="imgUnit imgStretch" src="/images/img/img_delivery.jpg" alt="">
                    </div>
                </div>
                <div id="divUnitEV" class="divUnit">
                    <div class="divUnitImg">
                        <img class="imgUnit" src="/images/img/img_ev.webp" alt="">
                    </div>
                    <div id="divUnitEvh2" class="divUnith2">
                        <h2 class="h2Unit">Entretien d'espaces verts</h2>
                    </div>
                </div>
                <div id="divUnitActu" class="divUnit">
                    <div id="divUnitActuh2" class="divUnith2">
                        <h2 class="h2Unit">Actualités</h2>
                    </div>
                    <div id="divUnitActuImg" class="divUnitImg">
                        <img class="imgUnit" src="/images/img/img_actu2.png" alt="">
                    </div>
                </div>
                <div id="divUnitContact" class="divUnit">
                    <div class="divUnitImg">
                        <img class="imgUnit imgStretch" src="/images/img/img_contact.jpg" alt="">
                    </div>
                    <div id="divUnitContacth2" class="divUnith2">
                        <h2 class="h2Unit">Contact</h2>
                    </div>
                </div>
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
        <div id="divBorder">
            <div id="divSectionBoardWelcom" class="divSectionBoard">
                <h1 id="h1Welcom">Bienvenue</h1>
                <p id="pWelcom">
                    L'association Service d'Aides Rurales par des Travailleurs Handicapés se donne pour mission de :</br>
                    • venir en aide aux personnes âgées en milieu rural</br>
                    • soutenir des travailleurs handicapés par de l'emploi
                </p>
            </div>
            <svg id="svgSepare" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                <path d="M0,32L40,48C80,64,160,96,240,96C320,96,400,64,480,42.7C560,21,640,11,720,16C800,21,880,43,960,42.7C1040,43,1120,21,1200,26.7C1280,32,1360,64,1400,80L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
            </svg>
        </div>
        <div id="divSectionBoardUnits" class="">
            <svg id="svgSeparetwo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                <path d="M0,32L40,48C80,64,160,96,240,96C320,96,400,64,480,42.7C560,21,640,11,720,16C800,21,880,43,960,42.7C1040,43,1120,21,1200,26.7C1280,32,1360,64,1400,80L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
            </svg>
            <div id="divAllUnits">
                <div id="divUnitDelivery" class="divUnit">
                    <div id="divUnitDeliveryh2" class="divUnith2">
                        <h2 class="h2Unit">Livraison de repas à domicile</h2>
                    </div>
                    <div class="divUnitImg">
                        <img class="imgUnit imgStretch" src="/images/img/img_delivery.jpg" alt="">
                    </div>
                </div>
                <div id="divUnitEV" class="divUnit">
                    <div class="divUnitImg">
                        <img class="imgUnit" src="/images/img/img_ev.webp" alt="">
                    </div>
                    <div id="divUnitEvh2" class="divUnith2">
                        <h2 class="h2Unit">Entretien d'espaces verts</h2>
                    </div>
                </div>
                <div id="divUnitActu" class="divUnit">
                    <div id="divUnitActuh2" class="divUnith2">
                        <h2 class="h2Unit">Actualités</h2>
                    </div>
                    <div id="divUnitActuImg" class="divUnitImg">
                        <img class="imgUnit" src="/images/img/img_actu2.png" alt="">
                    </div>
                </div>
                <div id="divUnitContact" class="divUnit">
                    <div class="divUnitImg">
                        <img class="imgUnit imgStretch" src="/images/img/img_contact.jpg" alt="">
                    </div>
                    <div id="divUnitContacth2" class="divUnith2">
                        <h2 class="h2Unit">Contact</h2>
                    </div>
                </div>
            </div>
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
            <div id="divElemEvOne" class="divElemEv">
                <p id="pElemEvOne" class="pElemEv">Tonte de pelouse</p>
                <img id="imgElemEvOne" class="imgElemEv" src="/images/img/tondeuse.webp" alt="logo" />
            </div>
            <div id="divElemEvTwo" class="divElemEv">
                <img id="imgElemEvTwo" class="imgElemEv" src="/images/img/taille_haie.webp" alt="logo" />
                <p id="pElemEvTwo" class="pElemEv">Taille de haies</p>
            </div>
            <div id="divElemEvThree" class="divElemEv">
                <p id="pElemEvThree" class="pElemEv">Entretien du jardin</p>
                <img id="imgElemEvThree" class="imgElemEv" src="/images/img/entretien_jardin.webp" alt="logo" />
            </div>
            <div id="divElemEvFour" class="divElemEv">
                <img id="imgElemEvFour" class="imgElemEv" src="/images/img/taille_arbuste.webp" alt="logo" />
                <p id="pElemEvFour" class="pElemEv">Taille d'arbustes</p>
            </div>
            <div id="divElemEvFive" class="divElemEv">
                <p id="pElemEvFive" class="pElemEv">Ramassage des feuilles</p>
                <img id="imgElemEvFive" class="imgElemEv" src="/images/img/ramassage_feuille.webp" alt="logo" />
            </div>
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
    liActuOne.addEventListener("click", () => {
        document.querySelector("#sectionBoard").innerHTML = `
            <div id="divSectionBoardActuOne" class="">
                <div class="test8">
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
                <div class="test8">
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
                <div class="test8">
                    <h2 class="h2Actu">CRISTAL ROC</h2>
                    <p class="pActuSectionBoard">Comme tous les étés, nous pouvons compter sur Cristal Roc - Roxane pour leur don de bouteilles d'eau que nous distribuons aux bénéficiaires des repas. Cela leur évite la déshydratation lors des grosses chaleurs.</p>
                </div>
                <img id="imgActuThree" class="imgSectionBoardActu" src="/images/actu2.jpg" alt="image de personnes travaillant chez cristal roc">
            </div>
        `;
    });
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
// setPage = () => {
//     divUnitDelivery.addEventListener("click", () => {
//         svgClose();
//         lunchPage();
//     });
//     divUnitEV.addEventListener("click", () => {
//         svgClose();
//         greenSpacePage();
//     });
//     divUnitActu.addEventListener("click", () => {
//         svgClose();
//         actuPage();
//     });
//     divUnitContact.addEventListener("click", () => {
//         svgClose();
//         contactPage();
//     });
// };
/**/
/**/
/**/
/**/
/**/
setHomePageEvent = () => {
    const divUnitDelivery = document.querySelector("#divUnitDelivery");
    const divUnitEV = document.querySelector("#divUnitEV");
    const divUnitActu = document.querySelector("#divUnitActu");
    const divUnitContact = document.querySelector("#divUnitContact");
    /*****/
    divUnitDelivery.addEventListener("click", () => {
        svgClose();
        lunchPage();
    });
    divUnitEV.addEventListener("click", () => {
        svgClose();
        greenSpacePage();
    });
    divUnitActu.addEventListener("click", () => {
        svgClose();
        actuPage();
    });
    divUnitContact.addEventListener("click", () => {
        svgClose();
        contactPage();
    });
};
/* ----------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------- */
/* -------------------------------------------- Event -------------------------------------------- */
/* ----------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------- */

divUnitDelivery.addEventListener("click", () => {
    lunchPage();
});
divUnitEV.addEventListener("click", () => {
    greenSpacePage();
});
divUnitActu.addEventListener("click", () => {
    actuPage();
});
divUnitContact.addEventListener("click", () => {
    contactPage();
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
        // setPage();
        setHomePageEvent();

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
        // setPage();
        setHomePageEvent();

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
        // setPage();
        setHomePageEvent();

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
        // setPage();
        setHomePageEvent();
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
        // setPage();
        setHomePageEvent();

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
        // setPage();
        setHomePageEvent();

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
