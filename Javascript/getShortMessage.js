const tab = [
  "bonjour tu vas bien ou pas trop en ce moment? moi ca va bien tranquillement merci a toi voili boilou",
  "ok tu vas bien et les autres ?",
  "nono ce n'est pas comme ca ok tu va te remettre au travail plsu vite que ca et que ca saute allez allez allez !!!!!!!"
];

const getShortMessage = x => {
  let newTab = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i].length < 50) {
      newTab.push(x[i]);
    }
  }
  return newTab;
};

console.log(getShortMessage(tab));
