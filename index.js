const textBlock = document.getElementById("text-block");
const textParagraph = document.getElementById("text-paragraph");
const textQuoteY = document.getElementById("text-quote-yel");
const textQuoteR = document.getElementById("text-quote-red");
const textQuoteG = document.getElementById("text-quote-gre");
const textQuoteW = document.getElementById("text-quote-whi");
const infoScreen = document.querySelector(".card__info-screen");
/* console.log(
  textBlock,
  textParagraph,
  textQuoteG,
  textQuoteR,
  textQuoteW,
  textQuoteY
); */

const bubbleText = `#Пузыриковая сортировка\nСамый известный и самый простой алгоритм сортировки.\n
Последовательно сравниваются значения соседних элементов.\n
В случае, если предыдущий оказывается больше последующего (при сортировке по возрастанию), то элементы меняются местами.
В результате, элемент всплывает, словно пузырёк, или тонет как топор (при сортировке по убыванию). 
Но этот алгоритм не назвали @yel“Сортировка топором”@, потому что слово @yel“топор”@ звучит мрачно, не то что лёгкое и весёлое слово “пузырёк”.\n
Алгоритм считается учебным и в здравом уме на практике не применяется.\n
 
##СЛОЖНОСТЬ ПО ВРЕМЕНИ\n
@redХудшее время:@ O(n2)\n
@yelСреднее время:@ O(n2)\n
@greЛучшее время:@ O(n)\n
@whiЗатраты памяти:@ O(1)\n
`;

let b = [
  "#Пузыриковая сортировка",
  "Самый известный и самый простой алгоритм сортировки.",
  "Последовательно сравниваются значения соседних элементов.",
  "В случае, если предыдущий оказывается больше последующего (при сортировке по возрастанию), то элементы меняются местами.",
  "В результате, элемент всплывает, словно пузырёк, или тонет как топор (при сортировке по убыванию). ",
  "Но этот алгоритм не назвали @yel“Сортировка топором”@, потому что слово @yel“топор”@ звучит мрачно, не то что лёгкое и весёлое слово “пузырёк”.",
  "Алгоритм считается учебным и в здравом уме на практике не применяется.",
  "##СЛОЖНОСТЬ ПО ВРЕМЕНИ",
  "@redХудшее время:@ O(n2)",
  "@yelСреднее время:@ O(n2)",
  "@greЛучшее время:@ O(n)",
  "@whiЗатраты памяти:@ O(1)",
];

let result = {
  title: "Пузыриковая сортировка",
  paragraph: [
    "Самый известный и самый простой алгоритм сортировки.",
    "Последовательно сравниваются значения соседних элементов.",
    "В случае, если предыдущий оказывается больше последующего (при сортировке по возрастанию), то элементы меняются местами.",
    "В результате, элемент всплывает, словно пузырёк, или тонет как топор (при сортировке по убыванию). ",
    "Но этот алгоритм не назвали @yel“Сортировка топором”@, потому что слово @yel“топор”@ звучит мрачно, не то что лёгкое и весёлое слово “пузырёк”.",
    "Алгоритм считается учебным и в здравом уме на практике не применяется.",
  ],
  note: {
    subtitle: "СЛОЖНОСТЬ ПО ВРЕМЕНИ",
    paragraph: [
      "@redХудшее время:@ O(n2)",
      "@yelСреднее время:@ O(n2)",
      "@greЛучшее время:@ O(n)",
      "@whiЗатраты памяти:@ O(1)",
    ],
  },
};

// #TITLE#
// &PARAGRAPH&
// @red
// @yel
// @gre
// @whi

const parseText = (str) => {
  let result = {};
  let textArr = str.split("\n").filter((i) => i !== "" && i !== " ");
  return textArr;
};

/* class Text {
  constructor(options) {
    this._title = options.title;
    this._paragraph = options.paragraph;
    this._subtitle = options.note.subtitle;
    this._noteParagraph = options.note.paragraph;
  }

  _getTemplateInfo() {
    const titleEl = textBlock.content
      .querySelector(".card__info-screen")
      .cloneNode(true);
    return titleEl;
  }

  generateCard() {
    this._element = this._getTemplateInfo();
    this._element.setAttribute("id", `card-link${this._id}`);
    this._element.textContent = this._title;
    return this._element;
  }
}

const newInfo = new Text(result);

newInfo.generateCard(); */

//console.log(textBlock.content.querySelector(".card__info-screen"));

const generateCard = (obj) => {
  const infoTemplate = document.getElementById("text-block").content; // содержимое шаблона
  const infoTitle = infoTemplate
    .querySelector(".card__info-title")
    .cloneNode(true);

  infoTitle.textContent = obj.title;

  infoScreen.append(infoTitle);

  obj.paragraph.forEach((item) => {
    const infoParagraph = infoTemplate
    .querySelector(".card__info-text")
    .cloneNode(true);
    infoParagraph.textContent = item;
    infoScreen.append(infoParagraph);
    console.log(infoParagraph)
  });

};

generateCard(result);
