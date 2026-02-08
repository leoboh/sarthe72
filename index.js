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

const svgNavDashBoard = document.querySelector("#svgNavDashBoard");

/* ----------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------- */
/* -------------------------------------------- Event -------------------------------------------- */
/* ----------------------------------------------------------------------------------------------- */
/* ----------------------------------------------------------------------------------------------- */

svgNavDashBoard.addEventListener("click", () => {
    if (document.querySelector(".svgNavDashBoardClose")) {
        svgNavDashBoard.classList.remove("svgNavDashBoardClose");
        svgNavDashBoard.classList.add("svgNavDashBoardOpen");
        document.querySelector("#svgNavDashBoard").innerHTML = `
        <path d="M320 112C434.9 112 528 205.1 528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112zM320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM231 231C221.6 240.4 221.6 255.6 231 264.9L286 319.9L231 374.9C221.6 384.3 221.6 399.5 231 408.8C240.4 418.1 255.6 418.2 264.9 408.8L319.9 353.8L374.9 408.8C384.3 418.2 399.5 418.2 408.8 408.8C418.1 399.4 418.2 384.2 408.8 374.9L353.8 319.9L408.8 264.9C418.2 255.5 418.2 240.3 408.8 231C399.4 221.7 384.2 221.6 374.9 231L319.9 286L264.9 231C255.5 221.6 240.3 221.6 231 231z" />`;
        document.querySelector("#sectionBoard").innerHTML = `
            <div id="divSectionBoardDashBoard" class="">
                <div id="divSectionBoardDashBoardOne" class="divSectionBoardDashBoardElements"></div>
                <div id="divSectionBoardDashBoardTwo" class="divSectionBoardDashBoardElements"></div>
                <div id="divSectionBoardDashBoardThree" class="divSectionBoardDashBoardElements"></div>
                <div id="divSectionBoardDashBoardFour" class="divSectionBoardDashBoardElements"></div>
            </div>
        `;
    } else if (document.querySelector(".svgNavDashBoardOpen")) {
        svgNavDashBoard.classList.remove("svgNavDashBoardOpen");
        svgNavDashBoard.classList.add("svgNavDashBoardClose");
        document.querySelector("#svgNavDashBoard").innerHTML = `
        <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
        document.querySelector("#sectionBoard").innerHTML = `
            <div id="divSectionBoardWelcom" class="divSectionBoard"></div>
            <div id="divSectionBoardUnits" class="divSectionBoard">
                <div id="divLunchUnit" class="divSectionBoardSingleUnit"></div>
                <div id="divGreenSpaceUnit" class="divSectionBoardSingleUnit"></div>
            </div>
            <div id="divSectionBoardActu" class="divSectionBoard"></div>
        `;
    } else {
        svgNavDashBoard.classList.add("svgNavDashBoardClose");
        document.querySelector("#svgNavDashBoard").innerHTML = `
        <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z"/>`;
        document.querySelector("#sectionBoard").innerHTML = `
            <div id="divSectionBoardWelcom" class="divSectionBoard"></div>
            <div id="divSectionBoardUnits" class="divSectionBoard">
                <div id="divLunchUnit" class="divSectionBoardSingleUnit"></div>
                <div id="divGreenSpaceUnit" class="divSectionBoardSingleUnit"></div>
            </div>
            <div id="divSectionBoardActu" class="divSectionBoard"></div>
        `;
    }
});
