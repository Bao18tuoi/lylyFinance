const product = [
  {
    names: "Cronos-7 Visitors",
    img: "../images/collection/1.gif",
    floor: "119",
    volume: "31.6k",
    trend: "-8.46%",
    total: "-74.27%",
  },
  {
    names: "Loaded Lion",
    img: "../images/collection/2.gif",
    floor: "1.7k",
    volume: "27.6k",
    trend: "+1.36%",
    total: "+38.32%",
  },
  {
    names: "Enthereal Dreamworlds",
    img: "../images/collection/3.gif",
    floor: "285",
    volume: "22.4k",
    trend: "-",
    total: "-",
  },
  {
    names: "Cyber Clubs",
    img: "../images/collection/4.gif",
    floor: "270",
    volume: "8.6k",
    trend: "-",
    total: "+40.52%",
  },
  {
    names: "AlphaBot Society",
    img: "../images/collection/5.jpeg",
    floor: "189",
    volume: "6.9K",
    trend: "+8.62%",
    total: "+128%",
  },
  {
    names: "BeatHeadz",
    img: "../images/collection/6.gif",
    floor: "94",
    volume: "6K",
    trend: "-1.05%",
    total: "+277%",
  },
  {
    names: "Ballies Origins",
    img: "../images/collection/7.gif",
    floor: "103",
    volume: "3.9K",
    trend: "-1.90%",
    total: "+50.80%",
  },
  {
    names: "Mad Hare Society",
    img: "../images/collection/8.jpeg",
    floor: "205",
    volume: "2.8K",
    trend: "-2.84%",
    total: "-7.15%",
  },
  {
    names: "The TRIP: Origin",
    img: "../images/collection/9.png",
    floor: "19",
    volume: "2.4K",
    trend: "-",
    total: "+628%",
  },
  {
    names: "PsychoKitties: The Rise Of Mollies",
    img: "../images/collection/10.gif",
    floor: "265",
    volume: "2.1K",
    trend: "+1.92%",
    total: "-45.18%",
  },
  {
    names: "PsychoKitties: The New Era",
    img: "../images/collection/11.png",
    floor: "192",
    volume: "1.9K",
    trend: "-8.13%",
    total: "-16.58%",
  },
  {
    names: "Bull Run Crew",
    img: "../images/collection/12.gif",
    floor: "52",
    volume: "1.8K",
    trend: "-",
    total: "+29.12%",
  },
  {
    names: "Zed Run Legacy",
    img: "../images/collection/13.png",
    floor: "15",
    volume: "1.3K",
    trend: "+7.14%",
    total: "+9.54%",
  },
  {
    names: "Cryptoverse",
    img: "../images/collection/14.png",
    floor: "10",
    volume: "1.2K",
    trend: "+11.11%",
    total: "-40.39%",
  },
  {
    names: "Weird Apes Club",
    img: "../images/collection/15.png",
    floor: "120",
    volume: "975",
    trend: "-31.43%",
    total: "+19.49%",
  },
];
const imagesList = [
  "../images/original.jpeg",
  "../images/2.png",
  "../images/4.png",
  "../images/3.jpeg",
];
const swiperItem = document.querySelectorAll(".swiper-slide");

for (let i = 0; i < swiperItem.length; i++) {
  swiperItem[i].style.backgroundImage = `url('${imagesList[i]}')`;
}

const NFT = document.getElementById("NFT");
function renderNFT() {
  let list = "",
    columnItem = "";
  if (typeof NFT != undefined) {
    let lengthList = product.length;
    var i = 0,
      j = 0,
      n;
    while (j < 3) {
      for (n = 0; n < 5; n++) {
        if (i > lengthList) {
          break;
        } else {
          if (product[i] !== undefined) {
            columnItem += `
            <div class="column__item">
                 <div class="item__order">${i + 1}</div>
                 <div class="item__img">
                    <img src="${product[i].img}" alt="">
                 </div>
                 <div class="item__detail">
                     <h2>${product[i].names}</h2>
                     <div class="detail__box">
                        <div class="detail__box-cl">
                             <p>Floor</p>
                             <p>Volume</p>
                         </div>
                        <div class="detail__box-cl">
                             <p>$${product[i].floor}</p>
                             <p>$${product[i].volume}</p>
                         </div>`;
            console.log(product[i].trend, product[i].trend.includes("-"));
            if (product[i].trend.includes("-")) {
              if (product[i].trend.length === 1)
                columnItem += `<div class="detail__box-cl">
                   <p class="cl--1-bl">${product[i].trend}</p> `;
              else
                columnItem += `<div class="detail__box-cl">
                   <p class="cl--1-rd">${product[i].trend}</p> `;
            } else {
              columnItem += `<div class="detail__box-cl">
                   <p class="cl--1-gr">${product[i].trend}</p> `;
            }
            if (product[i].total.includes("-")) {
              columnItem += ` <p class="cl--2-rd">${product[i].total}</p>
              </div>
          </div>
      </div>
   </div>`;
            } else {
              columnItem += ` <p class="cl--2-gr">${product[i].total}</p>
              </div>
          </div>
      </div>
   </div>`;
            }
          }
        }
        i++;
      }
      list += `<div class="box__column">
            ${columnItem}
        </div> `;
      columnItem = "";
      j++;
    }
  }
  NFT.innerHTML = list;
}
renderNFT();
