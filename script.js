(()=>{"use strict";let o;const e=new Date,n=e.getHours()+":"+e.getMinutes();WA.room.onEnterZone("clock",(()=>{o=WA.ui.openPopup("clockPopup","It's "+n,[])})),WA.room.onLeaveZone("clock",(function(){void 0!==o&&(o.close(),o=void 0)}))})();
//# sourceMappingURL=script.js.map