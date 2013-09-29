/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.5",
   build: "0.9.0.113",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
         dom: [
         {
            id:'RoundRect',
            type:'rect',
            rect:[123,114,143,91],
            borderRadius:[10,10,10,10],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[[-1,-9]]
         },
         {
            id:'Text',
            type:'text',
            rect:[134,157,120,56],
            text:"NTSS",
            align:"center",
            font:["Arial Black, Gadget, sans-serif",40,"rgba(0,0,0,1)","normal","none",""],
            transform:[[0,-35]]
         },
         {
            id:'RoundRectCopy',
            type:'rect',
            rect:[123,114,143,91],
            borderRadius:[10,10,10,10],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[[162,-9]]
         },
         {
            id:'TextCopy',
            type:'text',
            rect:[134,157,120,56],
            text:"NTSS",
            align:"center",
            font:["Arial Black, Gadget, sans-serif",40,"rgba(0,0,0,1)","normal","none",""],
            transform:[[162,-35]]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_RoundRectCopy}": [
            ["style", "height", '91px'],
            ["transform", "translateX", '162px'],
            ["transform", "translateY", '-9.999px'],
            ["style", "width", '143px']
         ],
         "${_RoundRect}": [
            ["style", "height", '91px'],
            ["transform", "translateY", '-9.999px'],
            ["transform", "translateX", '-1px'],
            ["style", "width", '143px']
         ],
         "${_Text}": [
            ["transform", "translateX", '-0.001px'],
            ["style", "font-size", '40px'],
            ["style", "height", '56px'],
            ["style", "text-align", 'center'],
            ["transform", "translateY", '-35px'],
            ["style", "width", '120px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '300px'],
            ["style", "opacity", '0'],
            ["style", "width", '550px']
         ],
         "${_TextCopy}": [
            ["transform", "translateX", '162.999px'],
            ["style", "width", '120px'],
            ["style", "height", '56px'],
            ["style", "text-align", 'center'],
            ["transform", "translateY", '-35px'],
            ["style", "font-size", '40px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 750,
         autoPlay: true,
         labels: {

         },
         timeline: [
            { id: "eid8", tween: [ "style", "${_Text}", "width", '149px', { fromValue: '120px'}], position: 0, duration: 187, easing: "easeInBack" },
            { id: "eid12", tween: [ "style", "${_Text}", "width", '120px', { fromValue: '149px'}], position: 187, duration: 187, easing: "easeInBack" },
            { id: "eid2", tween: [ "transform", "${_RoundRect}", "translateX", '-36px', { fromValue: '-1px'}], position: 0, duration: 187, easing: "easeInBack" },
            { id: "eid15", tween: [ "transform", "${_RoundRect}", "translateX", '-1px', { fromValue: '-36px'}], position: 187, duration: 187, easing: "easeInBack" },
            { id: "eid75", tween: [ "transform", "${_TextCopy}", "translateY", '-42px', { fromValue: '-35px'}], position: 375, duration: 187, easing: "easeInBack" },
            { id: "eid76", tween: [ "transform", "${_TextCopy}", "translateY", '-35px', { fromValue: '-42px'}], position: 562, duration: 187, easing: "easeInBack" },
            { id: "eid89", tween: [ "style", "${_RoundRectCopy}", "height", '113px', { fromValue: '91px'}], position: 375, duration: 187, easing: "easeInBack" },
            { id: "eid90", tween: [ "style", "${_RoundRectCopy}", "height", '91px', { fromValue: '113px'}], position: 562, duration: 187, easing: "easeInBack" },
            { id: "eid81", tween: [ "style", "${_TextCopy}", "font-size", '50px', { fromValue: '40px'}], position: 375, duration: 187, easing: "easeInBack" },
            { id: "eid82", tween: [ "style", "${_TextCopy}", "font-size", '40px', { fromValue: '50px'}], position: 562, duration: 187, easing: "easeInBack" },
            { id: "eid77", tween: [ "style", "${_TextCopy}", "width", '149px', { fromValue: '120px'}], position: 375, duration: 187, easing: "easeInBack" },
            { id: "eid78", tween: [ "style", "${_TextCopy}", "width", '120px', { fromValue: '149px'}], position: 562, duration: 187, easing: "easeInBack" },
            { id: "eid5", tween: [ "style", "${_Text}", "height", '69px', { fromValue: '56px'}], position: 0, duration: 187, easing: "easeInBack" },
            { id: "eid13", tween: [ "style", "${_Text}", "height", '56px', { fromValue: '69px'}], position: 187, duration: 187, easing: "easeInBack" },
            { id: "eid79", tween: [ "style", "${_TextCopy}", "height", '69px', { fromValue: '56px'}], position: 375, duration: 187, easing: "easeInBack" },
            { id: "eid80", tween: [ "style", "${_TextCopy}", "height", '56px', { fromValue: '69px'}], position: 562, duration: 187, easing: "easeInBack" },
            { id: "eid7", tween: [ "transform", "${_Text}", "translateY", '-42px', { fromValue: '-35px'}], position: 0, duration: 187, easing: "easeInBack" },
            { id: "eid11", tween: [ "transform", "${_Text}", "translateY", '-35px', { fromValue: '-42px'}], position: 187, duration: 187, easing: "easeInBack" },
            { id: "eid83", tween: [ "transform", "${_RoundRectCopy}", "translateX", '162.621px', { fromValue: '162px'}], position: 375, duration: 187, easing: "easeInBack" },
            { id: "eid84", tween: [ "transform", "${_RoundRectCopy}", "translateX", '162px', { fromValue: '162.621px'}], position: 562, duration: 187, easing: "easeInBack" },
            { id: "eid87", tween: [ "style", "${_RoundRectCopy}", "width", '178px', { fromValue: '143px'}], position: 375, duration: 187, easing: "easeInBack" },
            { id: "eid88", tween: [ "style", "${_RoundRectCopy}", "width", '143px', { fromValue: '178px'}], position: 562, duration: 187, easing: "easeInBack" },
            { id: "eid3", tween: [ "transform", "${_RoundRect}", "translateY", '-20.999px', { fromValue: '-9.999px'}], position: 0, duration: 187, easing: "easeInBack" },
            { id: "eid16", tween: [ "transform", "${_RoundRect}", "translateY", '-9.999px', { fromValue: '-20.999px'}], position: 187, duration: 187, easing: "easeInBack" },
            { id: "eid4", tween: [ "style", "${_RoundRect}", "width", '178px', { fromValue: '143px'}], position: 0, duration: 187, easing: "easeInBack" },
            { id: "eid17", tween: [ "style", "${_RoundRect}", "width", '143px', { fromValue: '178px'}], position: 187, duration: 187, easing: "easeInBack" },
            { id: "eid9", tween: [ "style", "${_Text}", "font-size", '50px', { fromValue: '40px'}], position: 0, duration: 187, easing: "easeInBack" },
            { id: "eid14", tween: [ "style", "${_Text}", "font-size", '40px', { fromValue: '50px'}], position: 187, duration: 187, easing: "easeInBack" },
            { id: "eid73", tween: [ "transform", "${_TextCopy}", "translateX", '165.621px', { fromValue: '162.999px'}], position: 375, duration: 187, easing: "easeInBack" },
            { id: "eid74", tween: [ "transform", "${_TextCopy}", "translateX", '162.999px', { fromValue: '165.621px'}], position: 562, duration: 187, easing: "easeInBack" },
            { id: "eid85", tween: [ "transform", "${_RoundRectCopy}", "translateY", '-20.999px', { fromValue: '-9.999px'}], position: 375, duration: 187, easing: "easeInBack" },
            { id: "eid86", tween: [ "transform", "${_RoundRectCopy}", "translateY", '-9.999px', { fromValue: '-20.999px'}], position: 562, duration: 187, easing: "easeInBack" },
            { id: "eid1", tween: [ "style", "${_RoundRect}", "height", '113px', { fromValue: '91px'}], position: 0, duration: 187, easing: "easeInBack" },
            { id: "eid18", tween: [ "style", "${_RoundRect}", "height", '91px', { fromValue: '113px'}], position: 187, duration: 187, easing: "easeInBack" },
            { id: "eid6", tween: [ "transform", "${_Text}", "translateX", '-33px', { fromValue: '-0.001px'}], position: 0, duration: 187, easing: "easeInBack" },
            { id: "eid10", tween: [ "transform", "${_Text}", "translateX", '-0.001px', { fromValue: '-33px'}], position: 187, duration: 187, easing: "easeInBack" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-9820992");
