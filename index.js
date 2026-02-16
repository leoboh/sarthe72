/* ----------------------------------------------------------------------------------------------- */
/* ------------------------------------------ VARIABLES ------------------------------------------ */
/* ----------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------- */

const body = document.querySelector("body");
const header = document.querySelector("header");
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

const homePage = () => {
    document.querySelector("#sectionBoard").innerHTML = `
        <div id="divSectionBoardWelcom" class="divSectionBoard">
            <h1>Bienvenue</h1>
            <p>
                L'association Service d'Aides Rurales par des Travailleurs Handicapés se donne pour mission de :</br>
                • venir en aide aux personnes âgées en milieu rural</br>
                • soutenir des travailleurs handicapés par de l'emploi
            </p>
        </div>
        <div id="divSectionBoardUnits" class="divSectionBoard">
            <div id="divLunchUnit" class="divSectionBoardSingleUnit">
                <h2>Livraison de repas à domicile</h2>
            </div>
            <div id="divGreenSpaceUnit" class="divSectionBoardSingleUnit">
                <h2>Entretien d'espaces verts</h2>
            </div>
        </div>
        <div id="divSectionBoardActu" class="divSectionBoard">
            <h2>Actualités</h2>
        </div>
    `;
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
                <h2>Livraison de repas à domicile</h2>
            </div>
            <div id="divSectionBoardDashBoardTwo" class="divSectionBoardDashBoardElements">
                <h2>Entretien d'espaces verts</h2>
            </div>
            <div id="divSectionBoardDashBoardThree" class="divSectionBoardDashBoardElements">
                <h2>Contact</h2>
            </div>
        </div>
    `;
};
/**/
/**/
/**/
/**/
/**/
const lunch = () => {
    sectionBoard.classList.remove("sectionBoardHome");
    sectionBoard.classList.add("sectionBoardLunch");
    document.querySelector("#sectionBoard").innerHTML = `
        <div id="divSectionBoardLunch" class="">
            <div id="divLunchMenu" class="divUnitLunch divSectionBoard">
                <h2>Menu en cours</h2>
            </div>
            <div id="divLunchContrat" class="divUnitLunch divSectionBoard">
                <h2>Contrat de portage</h2>
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
                    <p>Contrat de portage hors parignéens</p>
                </div>
                <div id="divContratP" class="divContratSectionBoardContrat">
                    <p>Contrat de portage parignéens</p>
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
const greenSpace = () => {
    sectionBoard.classList.remove("sectionBoardHome");
    sectionBoard.classList.add("sectionBoardGreenSpace");
    document.querySelector("#sectionBoard").innerHTML = `
        <div id="divSectionBoardGreenSpace" class="">
            <h2>Nous sommes en mesure de vous aider pour les tâches courantes suivantes :</h2>
            <ul id="uldivSectionBoardGreenSpace">
                <li class="liUldivSectionBoardGreenSpace">tonte de pelouse</li>
                <li class="liUldivSectionBoardGreenSpace">taille de haies</li>
                <li class="liUldivSectionBoardGreenSpace">entretien du jardin</li>
                <li class="liUldivSectionBoardGreenSpace">taille d'arbustes</li>
                <li class="liUldivSectionBoardGreenSpace">ramassage des feuilles</li>
                <li class="liUldivSectionBoardGreenSpace">tonte de pelouse</li>
            </ul>
        </div>
    `;
};
/**/
/**/
/**/
/**/
/**/
const actu = () => {
    sectionBoard.classList.remove("sectionBoardHome");
    sectionBoard.classList.add("sectionBoardActu");
    document.querySelector("#sectionBoard").innerHTML = `
        <div id="divSectionBoardAllActu" class="">
            <ul id="uldivSectionBoardActu">
                <li id="liActuOne" class="liUldivSectionBoardActu">
                    <h2>1 000 000ème repas</h2>
                    <p>Suite à l'assemblée générale du 28 octobre dernier, un repas était offert aux bénéficiaires pour fêter le 1 000 000ème repas livrés.</p>
                </li>
                <li id="liActuTwo" class="liUldivSectionBoardActu">
                    <h2>ASSEMBLEE GENERALE</h2>
                    <p>L'assemblée générale de l'association aura lieu le jeudi 28 octobre à 10h30 au foyer loisirs de Parigné l'Evêque.</p>
                </li>
                <li id="liActuThree" class="liUldivSectionBoardActu">
                    <h2>CRISTAL ROC</h2>
                    <p>Comme tous les étés, nous pouvons compter sur Cristal Roc - Roxane pour leur don de bouteilles d'eau que nous distribuons aux bénéficiaires des repas. Cela leur évite la déshydratation lors des grosses chaleurs.</p>
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
                <h2>1 000 000ème repas</h2>
                <p>Suite à l'assemblée générale du 28 octobre dernier, un repas était offert aux bénéficiaires pour fêter le 1 000 000ème repas livrés.</p>
            </div>
        `;
    });
    liActuTwo.addEventListener("click", () => {
        document.querySelector("#sectionBoard").innerHTML = `
            <div id="divSectionBoardActuTwo" class="">
                <h2>ASSEMBLEE GENERALE</h2>
                <p>L'assemblée générale de l'association aura lieu le jeudi 28 octobre à 10h30 au foyer loisirs de Parigné l'Evêque.</p>
            </div>
        `;
    });
    liActuThree.addEventListener("click", () => {
        document.querySelector("#sectionBoard").innerHTML = `
            <div id="divSectionBoardActuThree" class="">
                <h2>CRISTAL ROC</h2>
                <p>Comme tous les étés, nous pouvons compter sur Cristal Roc - Roxane pour leur don de bouteilles d'eau que nous distribuons aux bénéficiaires des repas. Cela leur évite la déshydratation lors des grosses chaleurs.</p>
            </div>
        `;
    });
};
/**/
/**/
/**/
/**/
/**/
const mentionsLegales = () => {
    sectionBoard.classList.remove("sectionBoardHome");
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
/* ----------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------- */
/* -------------------------------------------- Event -------------------------------------------- */
/* ----------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------- */

divLunchUnit.addEventListener("click", () => {
    lunch();
});
divGreenSpaceUnit.addEventListener("click", () => {
    greenSpace();
});
divSectionBoardActu.addEventListener("click", () => {
    actu();
});
pMentionsLegales.addEventListener("click", () => {
    mentionsLegales();
});
/*****/
/*****/
imgNavLogo.addEventListener("click", () => {
    svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
    svgNavDashBoard.classList.add("svgNavDashBoardClose");
    sectionBoard.classList.remove(
        "sectionBoardLunch",
        "sectionBoardGreenSpace",
        "sectionBoardContact",
        "sectionBoardActu",
        "sectionBoardMentionsLegales",
        "sectionBoardLunchMenu",
        "sectionBoardLunchContrat",
    );
    sectionBoard.classList.add("sectionBoardHome");
    document.querySelector("#svgNavDashBoard").innerHTML = `
        <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
    homePage();
    /*****/
    /*****/
    const divLunchUnit = document.querySelector("#divLunchUnit");
    const divGreenSpaceUnit = document.querySelector("#divGreenSpaceUnit");
    const divSectionBoardActu = document.querySelector("#divSectionBoardActu");
    /*****/
    /*****/
    divLunchUnit.addEventListener("click", () => {
        lunch();
    });
    divGreenSpaceUnit.addEventListener("click", () => {
        greenSpace();
    });
    divSectionBoardActu.addEventListener("click", () => {
        actu();
    });
});
/*****/
/*****/
svgNavDashBoard.addEventListener("click", () => {
    /********************************************************************************/
    /************************************* HOME *************************************/
    /************************************* HOME *************************************/
    /************************************* HOME *************************************/
    /********************************************************************************/
    if (document.querySelector(".svgNavDashBoardClose") && document.querySelector(".sectionBoardHome")) {
        svgNavDashBoard.classList.remove("svgNavDashBoardClose");
        svgNavDashBoard.classList.add("svgNavDashBoardOpen");
        document.querySelector("#svgNavDashBoard").innerHTML = `
            <path d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM231 231C221.6 240.4 221.6 255.6 231 264.9L286 319.9L231 374.9C221.6 384.3 221.6 399.5 231 408.8C240.4 418.1 255.6 418.2 264.9 408.8L319.9 353.8L374.9 408.8C384.3 418.2 399.5 418.2 408.8 408.8C418.1 399.4 418.2 384.2 408.8 374.9L353.8 319.9L408.8 264.9C418.2 255.5 418.2 240.3 408.8 231C399.4 221.7 384.2 221.6 374.9 231L319.9 286L264.9 231C255.5 221.6 240.3 221.6 231 231z" />`;
        navBoard();
        /*****/
        /*****/
        const divSectionBoardDashBoardOne = document.querySelector("#divSectionBoardDashBoardOne");
        const divSectionBoardDashBoardTwo = document.querySelector("#divSectionBoardDashBoardTwo");
        const divSectionBoardDashBoardThree = document.querySelector("#divSectionBoardDashBoardThree");
        /*****/
        /*****/

        /*********/
        /* LUNCH */
        divSectionBoardDashBoardOne.addEventListener("click", () => {
            svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
            svgNavDashBoard.classList.add("svgNavDashBoardClose");
            sectionBoard.classList.remove("sectionBoardHome");
            sectionBoard.classList.add("sectionBoardLunch");
            document.querySelector("#svgNavDashBoard").innerHTML = `
                <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
            document.querySelector("#sectionBoard").innerHTML = `
                <div id="divSectionBoardLunch" class="">
                    <div id="divLunchMenu" class="divUnitLunch divSectionBoard">
                        <h2>Menu en cours</h2>
                    </div>
                    <div id="divLunchContrat" class="divUnitLunch divSectionBoard">
                        <h2>Contrat de portage</h2>
                    </div>
                </div>
            `;
        });

        /***************/
        /* GREEN.SPACE */
        divSectionBoardDashBoardTwo.addEventListener("click", () => {
            svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
            svgNavDashBoard.classList.add("svgNavDashBoardClose");
            sectionBoard.classList.remove("sectionBoardHome");
            sectionBoard.classList.add("sectionBoardGreenSpace");
            document.querySelector("#svgNavDashBoard").innerHTML = `
                <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
            document.querySelector("#sectionBoard").innerHTML = `
                <div id="divSectionBoardGreenSpace" class="">
            `;
        });

        /***********/
        /* CONTACT */
        divSectionBoardDashBoardThree.addEventListener("click", () => {
            svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
            svgNavDashBoard.classList.add("svgNavDashBoardClose");
            sectionBoard.classList.remove("sectionBoardHome");
            sectionBoard.classList.add("sectionBoardContact");
            document.querySelector("#svgNavDashBoard").innerHTML = `
                <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
            document.querySelector("#sectionBoard").innerHTML = `
                <div id="divSectionBoardContact" class="">
            `;
        });

        /********************************************************************************/
        /************************************ HOME 2 ************************************/
        /************************************ HOME 2 ************************************/
        /************************************ HOME 2 ************************************/
        /********************************************************************************/
    } else if (document.querySelector(".svgNavDashBoardOpen") && document.querySelector(".sectionBoardHome")) {
        svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
        svgNavDashBoard.classList.add("svgNavDashBoardClose");
        document.querySelector("#svgNavDashBoard").innerHTML = `
            <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
        homePage();

        /********************************************************************************/
        /************************************ LUNCH *************************************/
        /************************************ LUNCH *************************************/
        /************************************ LUNCH *************************************/
        /********************************************************************************/
    } else if (document.querySelector(".svgNavDashBoardClose") && document.querySelector(".sectionBoardLunch")) {
        svgNavDashBoard.classList.remove("svgNavDashBoardClose");
        svgNavDashBoard.classList.add("svgNavDashBoardOpen");
        document.querySelector("#svgNavDashBoard").innerHTML = `
            <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
        navBoard();

        /*****/
        /*****/
        const divSectionBoardDashBoardOne = document.querySelector("#divSectionBoardDashBoardOne");
        const divSectionBoardDashBoardTwo = document.querySelector("#divSectionBoardDashBoardTwo");
        const divSectionBoardDashBoardThree = document.querySelector("#divSectionBoardDashBoardThree");
        /*****/
        /*****/

        /*********/
        /* LUNCH */
        divSectionBoardDashBoardOne.addEventListener("click", () => {
            svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
            svgNavDashBoard.classList.add("svgNavDashBoardClose");
            document.querySelector("#svgNavDashBoard").innerHTML = `
                <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
            document.querySelector("#sectionBoard").innerHTML = `
                <div id="divSectionBoardLunch" class="">
                    <div id="divLunchMenu" class="divUnitLunch divSectionBoard">
                        <h2>Menu en cours</h2>
                    </div>
                    <div id="divLunchContrat" class="divUnitLunch divSectionBoard">
                        <h2>Contrat de portage</h2>
                    </div>
                </div>
            `;
        });

        /***************/
        /* GREEN.SPACE */
        divSectionBoardDashBoardTwo.addEventListener("click", () => {
            svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
            svgNavDashBoard.classList.add("svgNavDashBoardClose");
            sectionBoard.classList.remove("sectionBoardLunch");
            sectionBoard.classList.add("sectionBoardGreenSpace");
            document.querySelector("#svgNavDashBoard").innerHTML = `
                <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
            document.querySelector("#sectionBoard").innerHTML = `
                <div id="divSectionBoardGreenSpace" class="">
            `;
        });

        /***********/
        /* CONTACT */
        divSectionBoardDashBoardThree.addEventListener("click", () => {
            svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
            svgNavDashBoard.classList.add("svgNavDashBoardClose");
            sectionBoard.classList.remove("sectionBoardLunch");
            sectionBoard.classList.add("sectionBoardContact");
            document.querySelector("#svgNavDashBoard").innerHTML = `
                <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
            document.querySelector("#sectionBoard").innerHTML = `
                <div id="divSectionBoardContact" class="">
            `;
        });

        /********************************************************************************/
        /*********************************** LUNCH 2 ************************************/
        /*********************************** LUNCH 2 ************************************/
        /*********************************** LUNCH 2 ************************************/
        /********************************************************************************/
    } else if (document.querySelector(".svgNavDashBoardOpen") && document.querySelector(".sectionBoardLunch")) {
        svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
        svgNavDashBoard.classList.add("svgNavDashBoardClose");
        document.querySelector("#svgNavDashBoard").innerHTML = `
            <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
        document.querySelector("#sectionBoard").innerHTML = `
            <div id="divSectionBoardLunch" class="">
                    <div id="divLunchMenu" class="divUnitLunch divSectionBoard">
                        <h2>Menu en cours</h2>
                    </div>
                    <div id="divLunchContrat" class="divUnitLunch divSectionBoard">
                        <h2>Contrat de portage</h2>
                    </div>
                </div>
        `;

        /********************************************************************************/
        /********************************* GREEN.SPACE **********************************/
        /********************************* GREEN.SPACE **********************************/
        /********************************* GREEN.SPACE **********************************/
        /********************************************************************************/
    } else if (document.querySelector(".svgNavDashBoardClose") && document.querySelector(".sectionBoardGreenSpace")) {
        svgNavDashBoard.classList.remove("svgNavDashBoardClose");
        svgNavDashBoard.classList.add("svgNavDashBoardOpen");
        document.querySelector("#svgNavDashBoard").innerHTML = `
            <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
        navBoard();

        /*****/
        /*****/
        const divSectionBoardDashBoardOne = document.querySelector("#divSectionBoardDashBoardOne");
        const divSectionBoardDashBoardTwo = document.querySelector("#divSectionBoardDashBoardTwo");
        const divSectionBoardDashBoardThree = document.querySelector("#divSectionBoardDashBoardThree");
        /*****/
        /*****/

        /*********/
        /* LUNCH */
        divSectionBoardDashBoardOne.addEventListener("click", () => {
            svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
            svgNavDashBoard.classList.add("svgNavDashBoardClose");
            sectionBoard.classList.remove("sectionBoardGreenSpace");
            sectionBoard.classList.add("sectionBoardLunch");
            document.querySelector("#svgNavDashBoard").innerHTML = `
                <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
            document.querySelector("#sectionBoard").innerHTML = `
                <div id="divSectionBoardLunch" class="">
                    <div id="divLunchMenu" class="divUnitLunch divSectionBoard">
                        <h2>Menu en cours</h2>
                    </div>
                    <div id="divLunchContrat" class="divUnitLunch divSectionBoard">
                        <h2>Contrat de portage</h2>
                    </div>
                </div>
            `;
        });

        /***************/
        /* GREEN.SPACE */
        divSectionBoardDashBoardTwo.addEventListener("click", () => {
            svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
            svgNavDashBoard.classList.add("svgNavDashBoardClose");
            document.querySelector("#svgNavDashBoard").innerHTML = `
                <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
            document.querySelector("#sectionBoard").innerHTML = `
                <div id="divSectionBoardGreenSpace" class="">
            `;
        });

        /***********/
        /* CONTACT */
        divSectionBoardDashBoardThree.addEventListener("click", () => {
            svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
            svgNavDashBoard.classList.add("svgNavDashBoardClose");
            sectionBoard.classList.remove("sectionBoardGreenSpace");
            sectionBoard.classList.add("sectionBoardContact");
            document.querySelector("#svgNavDashBoard").innerHTML = `
                <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
            document.querySelector("#sectionBoard").innerHTML = `
                <div id="divSectionBoardContact" class="">
            `;
        });

        /********************************************************************************/
        /******************************** GREEN.SPACE 2 *********************************/
        /******************************** GREEN.SPACE 2 *********************************/
        /******************************** GREEN.SPACE 2 *********************************/
        /********************************************************************************/
    } else if (document.querySelector(".svgNavDashBoardOpen") && document.querySelector(".sectionBoardGreenSpace")) {
        svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
        svgNavDashBoard.classList.add("svgNavDashBoardClose");
        document.querySelector("#svgNavDashBoard").innerHTML = `
            <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
        document.querySelector("#sectionBoard").innerHTML = `
            <div id="divSectionBoardGreenSpace" class="">
        `;

        /********************************************************************************/
        /*********************************** CONTACT ************************************/
        /*********************************** CONTACT ************************************/
        /*********************************** CONTACT ************************************/
        /********************************************************************************/
    } else if (document.querySelector(".svgNavDashBoardClose") && document.querySelector(".sectionBoardContact")) {
        svgNavDashBoard.classList.remove("svgNavDashBoardClose");
        svgNavDashBoard.classList.add("svgNavDashBoardOpen");
        document.querySelector("#svgNavDashBoard").innerHTML = `
            <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
        navBoard();

        /*****/
        /*****/
        const divSectionBoardDashBoardOne = document.querySelector("#divSectionBoardDashBoardOne");
        const divSectionBoardDashBoardTwo = document.querySelector("#divSectionBoardDashBoardTwo");
        const divSectionBoardDashBoardThree = document.querySelector("#divSectionBoardDashBoardThree");
        /*****/
        /*****/

        /*********/
        /* LUNCH */
        divSectionBoardDashBoardOne.addEventListener("click", () => {
            svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
            svgNavDashBoard.classList.add("svgNavDashBoardClose");
            sectionBoard.classList.remove("sectionBoardContact");
            sectionBoard.classList.add("sectionBoardLunch");
            document.querySelector("#svgNavDashBoard").innerHTML = `
                <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
            document.querySelector("#sectionBoard").innerHTML = `
                <div id="divSectionBoardLunch" class="">
                    <div id="divLunchMenu" class="divUnitLunch divSectionBoard">
                        <h2>Menu en cours</h2>
                    </div>
                    <div id="divLunchContrat" class="divUnitLunch divSectionBoard">
                        <h2>Contrat de portage</h2>
                    </div>
                </div>
            `;
        });

        /***************/
        /* GREEN.SPACE */
        divSectionBoardDashBoardTwo.addEventListener("click", () => {
            svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
            svgNavDashBoard.classList.add("svgNavDashBoardClose");
            sectionBoard.classList.remove("sectionBoardContact");
            sectionBoard.classList.add("sectionBoardGreenSpace");
            document.querySelector("#svgNavDashBoard").innerHTML = `
                <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
            document.querySelector("#sectionBoard").innerHTML = `
                <div id="divSectionBoardGreenSpace" class="">
            `;
        });

        /***********/
        /* CONTACT */
        divSectionBoardDashBoardThree.addEventListener("click", () => {
            svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
            svgNavDashBoard.classList.add("svgNavDashBoardClose");
            document.querySelector("#svgNavDashBoard").innerHTML = `
                <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
            document.querySelector("#sectionBoard").innerHTML = `
                <div id="divSectionBoardContact" class="">
            `;
        });

        /********************************************************************************/
        /********************************** CONTACT 2 ***********************************/
        /********************************** CONTACT 2 ***********************************/
        /********************************** CONTACT 2 ***********************************/
        /********************************************************************************/
    } else if (document.querySelector(".svgNavDashBoardOpen") && document.querySelector(".sectionBoardContact")) {
        svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
        svgNavDashBoard.classList.add("svgNavDashBoardClose");
        document.querySelector("#svgNavDashBoard").innerHTML = `
            <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
        document.querySelector("#sectionBoard").innerHTML = `
            <div id="divSectionBoardContact" class="">
        `;

        /*******************************************************************************/
        /************************************ ACTU *************************************/
        /************************************ ACTU *************************************/
        /************************************ ACTU *************************************/
        /*******************************************************************************/
    } else if (document.querySelector(".svgNavDashBoardClose") && document.querySelector(".sectionBoardActu")) {
        svgNavDashBoard.classList.remove("svgNavDashBoardClose");
        svgNavDashBoard.classList.add("svgNavDashBoardOpen");
        document.querySelector("#svgNavDashBoard").innerHTML = `
            <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
        navBoard();

        /*****/
        /*****/
        const divSectionBoardDashBoardOne = document.querySelector("#divSectionBoardDashBoardOne");
        const divSectionBoardDashBoardTwo = document.querySelector("#divSectionBoardDashBoardTwo");
        const divSectionBoardDashBoardThree = document.querySelector("#divSectionBoardDashBoardThree");
        /*****/
        /*****/

        /*********/
        /* LUNCH */
        divSectionBoardDashBoardOne.addEventListener("click", () => {
            svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
            svgNavDashBoard.classList.add("svgNavDashBoardClose");
            sectionBoard.classList.remove("sectionBoardActu");
            sectionBoard.classList.add("sectionBoardLunch");
            document.querySelector("#svgNavDashBoard").innerHTML = `
                <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
            document.querySelector("#sectionBoard").innerHTML = `
                <div id="divSectionBoardLunch" class="">
                    <div id="divLunchMenu" class="divUnitLunch divSectionBoard">
                        <h2>Menu en cours</h2>
                    </div>
                    <div id="divLunchContrat" class="divUnitLunch divSectionBoard">
                        <h2>Contrat de portage</h2>
                    </div>
                </div>
            `;
        });

        /***************/
        /* GREEN.SPACE */
        divSectionBoardDashBoardTwo.addEventListener("click", () => {
            svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
            svgNavDashBoard.classList.add("svgNavDashBoardClose");
            sectionBoard.classList.remove("sectionBoardActu");
            sectionBoard.classList.add("sectionBoardGreenSpace");
            document.querySelector("#svgNavDashBoard").innerHTML = `
                <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
            document.querySelector("#sectionBoard").innerHTML = `
                <div id="divSectionBoardGreenSpace" class="">
            `;
        });

        /***********/
        /* CONTACT */
        divSectionBoardDashBoardThree.addEventListener("click", () => {
            svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
            svgNavDashBoard.classList.add("svgNavDashBoardClose");
            sectionBoard.classList.remove("sectionBoardActu");
            sectionBoard.classList.add("sectionBoardContact");
            document.querySelector("#svgNavDashBoard").innerHTML = `
                <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
            document.querySelector("#sectionBoard").innerHTML = `
                <div id="divSectionBoardContact" class="">
            `;
        });

        /********************************************************************************/
        /*********************************** ACTU 2 *************************************/
        /*********************************** ACTU 2 *************************************/
        /*********************************** ACTU 2 *************************************/
        /********************************************************************************/
    } else if (document.querySelector(".svgNavDashBoardOpen") && document.querySelector(".sectionBoardActu")) {
        svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
        svgNavDashBoard.classList.add("svgNavDashBoardClose");
        document.querySelector("#svgNavDashBoard").innerHTML = `
            <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
        document.querySelector("#sectionBoard").innerHTML = `
            <div id="divSectionBoardActu" class="">
        `;

        /*******************************************************************************/
        /******************************* MENTIONS LEGALES ******************************/
        /******************************* MENTIONS LEGALES ******************************/
        /******************************* MENTIONS LEGALES ******************************/
        /*******************************************************************************/
    } else if (document.querySelector(".svgNavDashBoardClose") && document.querySelector(".sectionBoardMentionsLegales")) {
        svgNavDashBoard.classList.remove("svgNavDashBoardClose");
        svgNavDashBoard.classList.add("svgNavDashBoardOpen");
        document.querySelector("#svgNavDashBoard").innerHTML = `
            <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
        navBoard();

        /*****/
        /*****/
        const divSectionBoardDashBoardOne = document.querySelector("#divSectionBoardDashBoardOne");
        const divSectionBoardDashBoardTwo = document.querySelector("#divSectionBoardDashBoardTwo");
        const divSectionBoardDashBoardThree = document.querySelector("#divSectionBoardDashBoardThree");
        /*****/
        /*****/

        /*********/
        /* LUNCH */
        divSectionBoardDashBoardOne.addEventListener("click", () => {
            svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
            svgNavDashBoard.classList.add("svgNavDashBoardClose");
            sectionBoard.classList.remove("sectionBoardMentionsLegales");
            sectionBoard.classList.add("sectionBoardLunch");
            document.querySelector("#svgNavDashBoard").innerHTML = `
                <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
            document.querySelector("#sectionBoard").innerHTML = `
                <div id="divSectionBoardLunch" class="">
                    <div id="divLunchMenu" class="divUnitLunch divSectionBoard">
                        <h2>Menu en cours</h2>
                    </div>
                    <div id="divLunchContrat" class="divUnitLunch divSectionBoard">
                        <h2>Contrat de portage</h2>
                    </div>
                </div>
            `;
        });

        /***************/
        /* GREEN.SPACE */
        divSectionBoardDashBoardTwo.addEventListener("click", () => {
            svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
            svgNavDashBoard.classList.add("svgNavDashBoardClose");
            sectionBoard.classList.remove("sectionBoardMentionsLegales");
            sectionBoard.classList.add("sectionBoardGreenSpace");
            document.querySelector("#svgNavDashBoard").innerHTML = `
                <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
            document.querySelector("#sectionBoard").innerHTML = `
                <div id="divSectionBoardGreenSpace" class="">
            `;
        });

        /***********/
        /* CONTACT */
        divSectionBoardDashBoardThree.addEventListener("click", () => {
            svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
            svgNavDashBoard.classList.add("svgNavDashBoardClose");
            sectionBoard.classList.remove("sectionBoardMentionsLegales");
            sectionBoard.classList.add("sectionBoardContact");
            document.querySelector("#svgNavDashBoard").innerHTML = `
                <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
            document.querySelector("#sectionBoard").innerHTML = `
                <div id="divSectionBoardContact" class="">
            `;
        });

        /********************************************************************************/
        /****************************** MENTIONS LEGALES 2 ******************************/
        /****************************** MENTIONS LEGALES 2 ******************************/
        /****************************** MENTIONS LEGALES 2 ******************************/
        /********************************************************************************/
    } else if (document.querySelector(".svgNavDashBoardOpen") && document.querySelector(".sectionBoardMentionsLegales")) {
        svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
        svgNavDashBoard.classList.add("svgNavDashBoardClose");
        document.querySelector("#svgNavDashBoard").innerHTML = `
            <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
        document.querySelector("#sectionBoard").innerHTML = `
            <div id="divSectionBoardMentionsLegales" class="">
        `;

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
        /**********************************/
    }
});

/*****/
/*****/
document.querySelector("#pRealLeo").addEventListener("click", () => {
    window.open("https://leoblanche.com", "_blank");
});
/*

-
-
-
-


        ----------------

    1 - finir d'ajouter les texts dans les differents menu : livraison = menu en cours et contrat de portage
                                                             Entretien EV
                                                             Contact = trouver le moyen de mettre un captcha
                                                             Mentions Légales
    2 - ajouter les actu sous forme de slider (si click, envoie sur la page actu ou il y a le resumé de l'actu cliké, et l'acces au autres actu)

*/
