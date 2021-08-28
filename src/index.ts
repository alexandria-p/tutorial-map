/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

var zoneTCMName = "popupTutorialZone"; // on your special layer with zone tiles, this is the name you've given to your zone special property on that layer

var currentPopup : any = undefined;

WA.onEnterZone(zoneTCMName, () => {
    // popUpTutorial -> rect object name on floor layer
    currentPopup =  WA.openPopup("popUpTutorialRect","Hold SHIFT to run ! " +
        " Up to 4 people at a time can join proximity chat - otherwise for bigger groups join a jitsi call by hanging around the tables.",[]);
})

WA.onLeaveZone(zoneTCMName, closePopUp)

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
