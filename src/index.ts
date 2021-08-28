/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

var zoneTCMName = "popupTCMZone";

var currentPopup : any = undefined;

WA.onEnterZone(zoneTCMName, () => {
    currentPopup =  WA.openPopup("popUpTCM","Hold SHIFT to run ! " +
        " Up to 4 people at a time can join proximity chat - otherwise for bigger groups join a jitsi call by hanging around the tables.",[]);
})

WA.onLeaveZone(zoneTCMName, closePopUp)

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
