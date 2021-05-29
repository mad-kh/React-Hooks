import { v4 as uuidv4 } from "uuid";

const moviesData = [
  {
    id: uuidv4(),
    title: "Moana",
    description:
      "The film tells the story of Moana, the strong-willed daughter of a chief of a Polynesian village, who is chosen by the ocean itself to reunite a mystical relic with the goddess Te Fiti.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/I/A1JOaV3B6fL._AC_SL1500_.jpg",
    trailer: "https://www.youtube.com/embed/KFuXETZUsI&t=25s",
    rate: 8,
  },
  {
    id: uuidv4(),
    title: "Soul",
    description:
      "The story follows a middle school music teacher named Joe Gardner, who seeks to reunite his soul and his body after they are accidentally separated, just before his big break as a jazz musician. Soul is the first Pixar film to feature an African-American protagonist.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/95/Soul_Poster.jpeg",
    trailer: "https://www.youtube.com/embed/xOsLIiBStEs",

    rate: 5,
  },
  {
    id: uuidv4(),
    title: "Frozen",
    description:
      "The film depicts a princess who sets off on a journey alongside an iceman, his reindeer, and a snowman to find her estranged sister, whose icy powers have inadvertently trapped their kingdom in eternal winter.",
    posterUrl:
      "https://images-na.ssl-images-amazon.com/images/I/81zbSEXnDOL.jpg",
    trailer: "https://www.youtube.com/embed/TbQm5doF_Uc&t=27s",

    rate: 7,
  },
  {
    id: uuidv4(),
    title: "Tangled",
    description:
      "Tangled is a 2010 American 3D computer-animated musical adventure film 2 produced by Walt Disney Animation Studios and released by Walt Disney Pictures. ",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a8/Tangled_poster.jpg",
    trailer: "https://www.youtube.com/embed/hsJFEqOL1UI",

    rate: 5,
  },
  {
    id: uuidv4(),
    title: "The Lion King 3",
    description:
      "Timon the meerkat and Pumbaa the warthog retell the story of The Lion King (1994) from their own perspective",
    posterUrl:
      "https://i.pinimg.com/originals/e2/01/bb/e201bbef67254c6ad25a9573aff6e7d0.jpg",
    trailer: "https://www.youtube.com/embed/WZrpl277GUo&t=39s",

    rate: 5,
  },
  {
    id: uuidv4(),
    title: "Kung Fu Panda",
    description:
      "Kung Fu Panda is a media franchise by DreamWorks Animation, consisting of three films: Kung Fu Panda (2008), Kung Fu Panda 2 (2011) and Kung Fu Panda 3 (2016). The first two were distributed by Paramount Pictures, while the third film was distributed by 20th Century Fox.",
    posterUrl:
      "https://i.pinimg.com/originals/f7/41/8d/f7418ddd53bb8a0016dd66dad12e7d84.jpg",
    trailer: "https://www.youtube.com/embed/PXi3Mv6KMzY",

    rate: 3,
  },
  {
    id: uuidv4(),
    title: "Detective Conan",
    description:
      "Detective Conan Movies films that feature an original plot line rather than being an adaptation of the manga series, are animations created by TMS Entertainment related to the manga and anime franchise Detective Conan written and illustrated by Gosho Aoyama. ",
    posterUrl:
      "https://koubadvd.com/wp-content/uploads/2019/05/detective-conan-movie-collection-24-1-anime-dvd-discplayer-1810-24-F1323749_1-670x843.jpg",
    trailer: "https://www.youtube.com/embed/HSow7Ep6l_4",

    rate: 4,
  },
];
export default moviesData;
