const timeline = [
  {
    id: 1,
    avatar: "https://randomuser.me/api/portralrs/men/25",
    username: "dj_nario",
    message: `Este es un devit usando la app creada por desarrollodares para desarrolladores`,
    timeStamp: "1670271372",
  },
  {
    id: 2,
    avatar: "https://avatars.githubusercontent.com/u/1561955?v=4",
    username: "midudev",
    message: `Woooow!!! deveter está funcionando y vivo`,
    name: "Miguel Ángel Durán",
    timeStamp: "1667664971",
  },
  {
    id: 3,
    avatar: "https://randomuser.me/api/portralrs/men/25",
    username: "kevcode53",
    message: `Este es un gran desarrollo y lo mejor que es bueno para el aprendizaje`,
    name: `Kevin Alberto Palma`,
    timeStamp: "1670022971",
  },
  {
    id: 4,
    avatar: "https://avatars.githubusercontent.com/u/5099344?v=4",
    username: "nschurman",
    message: `El clean code es el mejor libro para aprender arquitectura de programación`,
    name: `Nicolas Schurman`,
    timeStamp: "1670015771",
  },
  {
    id: 5,
    avatar: "https://avatars.githubusercontent.com/u/5099344?v=4",
    username: "wongnjane",
    message: `Twitter web App no run ES6+ for modern browsers*, reducing the polyfill bundle size by 83%\n \n (gzipped size went from 16.6 KB down to 2.7 KB!!) \n \n * Chrome 79+, Safari 14+, Firefox 68+`,
    timeStamp: "1670102171",
  },
  {
    id: 6,
    avatar: "https://avatars.githubusercontent.com/u/5099344?v=4",
    username: "danidev",
    message: `Abro paraguas Paraguas\n \n Clean code es un libro obsoleto que en 2022, con los paradigmas de desarrollo de software que manejamos, puede hacerte mas daño que beneficio`,
    timeStamp: "1670076971",
  },
]

export default (req, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "application/json")
  res.send(JSON.stringify(timeline))
  // res.end()
}
