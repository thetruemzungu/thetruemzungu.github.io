const peter = {
  prefix: 'peter',
  background: '#FFFFA2',
  face: '#c63c3c',
  eye: {
    outer: '#1a1a1a',
    inner: '#FFFFFF' } };



const gwen = {
  prefix: 'gwen',
  background: '#47807B',
  face: '#f2f2f2',
  eye: { outer: '#c22260', inner: '#FFFFFF' },
  gen1: { shape: '#gwen-hood', color: '#f2f2f2' },
  gen2: { shape: '#gwen-inner-hood', color: '#c22260' },
  gen3: { shape: '#gwen-left-back-hood', color: '#c22260' },
  gen4: { shape: '#gwen-right-back-hood', color: '#c22260' } };


const noir = {
  prefix: 'noir',
  background: '#FFFFFF',
  face: '#333',
  eye: { outer: '#4d4d4d', inner: '#e6e6e6' },
  gen1: { shape: '#noir-hat', color: '#4d4d4d' },
  gen2: { shape: '#gen2', color: 'none' },
  gen3: { shape: '#gen3', color: 'none' },
  gen4: { shape: '#gen4', color: 'none' },
  gen5: { shape: '#noir-nose', color: '#4d4d4d' } };


const _2099 = {
  prefix: '_2099',
  background: '#57A18A',
  face: '#2e3249',
  eye: { outer: '#ea2742', inner: 'none' },
  gen1: { shape: '#gen1', color: 'none' },
  gen5: { shape: '#gen5', color: 'none' } };


const silk = {
  prefix: 'silk',
  background: '#67A0BB',
  face: '#deb299',
  eye: { outer: '#FFF', inner: '#4d4d4d' },
  gen1: { shape: '#silk-hair', color: '#333' },
  gen5: { shape: '#silk-buff', color: '#c70811' } };


const morph = (timeline, character, time) => {
  timeline.to('body', 1, { backgroundColor: character.background }, time);
  timeline.to('#face', 1, { morphSVG: { shape: `#${character.prefix}-face` }, fill: character.face }, time);
  timeline.to('#right-eye', 1, { morphSVG: { shape: `#${character.prefix}-right-eye` }, fill: character.eye.outer }, time);
  timeline.to('#left-eye', 1, { morphSVG: { shape: `#${character.prefix}-left-eye` }, fill: character.eye.outer }, time);
  switch (character.prefix) {
    case '_2099':
      timeline.to('#inner-left-eye', 1, { morphSVG: { shape: `#${character.prefix}-left-eye` }, fill: character.eye.inner }, time);
      timeline.to('#inner-right-eye', 1, { morphSVG: { shape: `#${character.prefix}-right-eye` }, fill: character.eye.inner }, time);
      break;
    case 'silk':
      timeline.to('#inner-left-eye', 1, { morphSVG: { shape: '#silk-eyebrow-left' }, fill: character.eye.inner }, time);
      timeline.to('#inner-right-eye', 1, { morphSVG: { shape: '#silk-eyebrow-right' }, fill: character.eye.inner }, time);
      break;
    default:
      timeline.to('#inner-left-eye', 1, { morphSVG: { shape: `#${character.prefix}-inner-left-eye` }, fill: character.eye.inner }, time);
      timeline.to('#inner-right-eye', 1, { morphSVG: { shape: `#${character.prefix}-inner-right-eye` }, fill: character.eye.inner }, time);}

  for (var i = 1; i <= 5; i++) {
    if (character[`gen${i}`]) {timeline.to(`#gen${i}`, 1, { morphSVG: { shape: character[`gen${i}`].shape }, fill: character[`gen${i}`].color }, time);}
  }
};

const pause = (timeline, length, time) => {
  timeline.to({}, 1, time + 1);
  return time + 2;
};

let time = 1;
let timeline = new TimelineMax({ onComplete: () => {timeline.reverse();}, onReverseComplete: () => {timeline.play();} });

morph(timeline, peter, time);
time = pause(timeline, 1, time);
morph(timeline, gwen, time);
time = pause(timeline, 1, time);
morph(timeline, noir, time);
time = pause(timeline, 1, time);
morph(timeline, _2099, time);
time = pause(timeline, 1, time);
morph(timeline, silk, time);
time = pause(timeline, 1, time);