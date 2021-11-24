//飲み物のデータ
class Drink{
  constructor(name,price,imgUrl){
    this.name = name;
    this.price = price;
    this.imgUrl = imgUrl;
  }
}

const drinks = [
  new Drink("lemon tee","¥540","https://cdn.pixabay.com/photo/2015/05/25/14/29/tea-783352_1280.jpg"),
  new Drink("tee","¥550","https://cdn.pixabay.com/photo/2015/07/02/20/37/cup-829527_1280.jpg"),
  new Drink("cafe latte","¥600","https://cdn.pixabay.com/photo/2015/10/12/14/54/coffee-983955_1280.jpg"),
  new Drink("cocoa","¥550","https://cdn.pixabay.com/photo/2016/10/30/09/30/hot-chocolate-1782623_1280.jpg"),
  new Drink("milk","¥350","https://cdn.pixabay.com/photo/2017/07/05/15/41/milk-2474993_1280.jpg"),
  new Drink("carrot juice","¥400","https://cdn.pixabay.com/photo/2016/08/26/21/16/carrot-juice-1623157_1280.jpg"),
  new Drink("orange juice","$480","https://cdn.pixabay.com/photo/2016/12/20/21/43/orange-1921548_1280.jpg"),
  new Drink("lemon juice","$440","https://cdn.pixabay.com/photo/2016/12/19/12/08/ginger-1918107_1280.jpg"),
  new Drink("watermelon juice","¥490","https://cdn.pixabay.com/photo/2017/06/24/18/59/melon-2438503_1280.jpg"),
  new Drink("chocolate smoothie","¥420","https://cdn.pixabay.com/photo/2015/11/23/11/54/chocolate-smoothie-1058191_1280.jpg"),
  new Drink("green vegetable juice","¥580","https://cdn.pixabay.com/photo/2018/09/23/09/31/smoothie-3697014_1280.jpg"),
  new Drink("passion fruit juice","¥600","https://cdn.pixabay.com/photo/2018/05/17/15/33/cocktail-3408834_1280.jpg"),
  new Drink("blueberry smoothie","¥680","https://cdn.pixabay.com/photo/2017/05/28/08/12/blueberry-2350367_1280.jpg"),
  new Drink("tomato juice","¥560","https://cdn.pixabay.com/photo/2014/04/05/11/32/tomato-316308_1280.jpg"),
  new Drink("mango juice","¥680","https://cdn.pixabay.com/photo/2018/05/07/11/22/mango-3380631_1280.jpg"),
  new Drink("banana juice","¥500","https://cdn.pixabay.com/photo/2014/04/05/11/40/banana-316648_1280.jpg"),
  new Drink("cappuccino","¥650","https://cdn.pixabay.com/photo/2016/11/29/04/31/caffeine-1867326_1280.jpg"),
  new Drink("cafe au lait","¥640","https://cdn.pixabay.com/photo/2015/10/27/16/06/cup-1009230_1280.jpg"),
  new Drink("espresso","¥630","https://cdn.pixabay.com/photo/2021/06/28/10/15/coffee-6371149_1280.jpg"),
  new Drink("matcha latte","¥600","https://cdn.pixabay.com/photo/2016/08/10/15/10/green-tea-1583546_1280.jpg"),
  new Drink("oolong tea","¥600","https://cdn.pixabay.com/photo/2017/06/22/17/44/single-clump-tea-2431805_1280.jpg"),
  new Drink("herbal tee","¥640","https://cdn.pixabay.com/photo/2016/05/23/15/16/herbal-tea-1410565_1280.jpg")
]

//スライダーを作成
function makeSliderItem(i){
  let sliderItem = document.createElement("div");
  sliderItem.classList.add("d-flex", "justify-content-center");
  let sliderImg = document.createElement("img");
  sliderImg.classList.add("col-10");
  sliderImg.src = drinks[i].imgUrl;
  sliderItem.append(sliderImg);
  sliderItems.push(sliderItem);
}
let sliderItems = [];
for(let i = 0; i < drinks.length; i++){
  makeSliderItem(i);
}

//ボタンの作成
function makeButton(i){
  let buttonWrapper = document.createElement("div");
  buttonWrapper.classList.add("buttons__item", "col-3", "p-2", "text-center");
  let button = document.createElement("button");
  button.classList.add("btn", "btn-light", "col-12");
  button.innerHTML = i.toString();
  buttonWrapper.append(button);
  return buttonWrapper;
}


//ロジック
function frogPosition(leaves,jumps,start){
  let rest = (start + jumps) % leaves;
  if(rest === 0){
    return 0;
  }else if(rest < 0){
    return rest + leaves;
  }else{
    return rest;
  }
}
function slideJump(steps,animationType){
  let index = parseInt(main.getAttribute("data-index"));
  let currentElement = sliderItems[index];
  let numberOfDrinks = sliderItems.length;
  console.log(index);
  console.log(currentElement);

  index = frogPosition(numberOfDrinks,(-1) * steps,index);
  console.log(index);
  let nextElement = sliderItems[index];
  console.log(nextElement);
  main.setAttribute("data-index",index.toString());
  animateMain(currentElement,nextElement,animationType);
}

function changeDisplayInfo(drink){
  sliderName.innerHTML = `Name: ${drink.name}`;
  sliderPrice.innerHTML = `Price: ${drink.price}`;
  infoContainer.append(sliderName);
  infoContainer.append(sliderPrice);
}

function animateMain(currentElement,nextElement,animationType){
  extra.innerHTML = "";
  extra.append(currentElement);
  main.innerHTML = "";
  main.append(nextElement);

  main.classList.add("expand-animation");
  extra.classList.add("deplete-animation");
  if(animationType === "right"){
    slideShow.innerHTML = "";
    slideShow.append(extra);
    slideShow.append(main);
  }else if(animationType === "left"){
    slideShow.innerHTML = "";
    slideShow.append(main);
    slideShow.append(extra);
  }
}

//要素を生成して繋げる
const target = document.getElementById("target");
const wrapper = document.createElement("div");
wrapper.classList.add("vh-100","d-flex", "align-items-center", "justify-content-center");
const machineBody = document.createElement("div");
machineBody.classList.add("machine-body", "p-3", "col-12", "col-md-11", "col-lg-8", "d-flex", "flex-wrap");
const slider = document.createElement("div");
slider.id = "slider";
slider.classList.add("slider", "bg-white", "col-md-7", "p-2", "col-12", "d-flex", "justify-content-center", "align-items-center");
let slideShow = document.createElement("div");
slideShow.classList.add("col-12","d-flex");
let main = document.createElement("div");
main.classList.add("main","full-width");
let extra = document.createElement("div");
extra.classList.add("extra","full-width");
main.append(sliderItems[0]);
slideShow.append(main);
slideShow.append(extra);
slider.append(slideShow);
main.setAttribute("data-index","0");
let sliderName = document.createElement("p");
let sliderPrice = document.createElement("p");
const rightSection =  document.createElement("div");
rightSection.classList.add("col-md-5", "col-12", "py-2", "pr-md-0");
const infoContainer = document.createElement("div");
infoContainer.id = "infoContainer";
const buttonContainer = document.createElement("div");
buttonContainer.id = "buttonContainer";
const buttons = document.createElement("div");
buttons.classList.add("buttons", "col-12", "bg-secondary", "d-flex", "flex-wrap", "py-2", "px-0");
target.append(wrapper);
wrapper.append(machineBody);
machineBody.append(slider);
machineBody.append(rightSection);
rightSection.append(infoContainer);
rightSection.append(buttonContainer);
buttonContainer.append(buttons);
for(let i = 0; i < drinks.length; i++){
  buttons.append(makeButton(i+1));
}

//ボタンをクリックして関数を起動
let btns = document.querySelectorAll(".btn");
for(let i = 0; i < btns.length; i++){
  btns[i].addEventListener("click",function(){
    changeDisplayInfo(drinks[i]);
    let steps = parseInt(main.getAttribute("data-index")) - (parseInt(btns[i].innerHTML)-1);
    let destination = "";
    if(steps > 0){
      destination = "right";
    }else if(steps < 0){
      destination = "left";
    }else{
      return;
    }
    slideJump(steps,destination);
  });
}
