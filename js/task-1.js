"use strict";
const list = document.querySelector("#categories");
const item = list.querySelectorAll(".item");

console.log("Number of categories:", item.length);

item.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const element = item.querySelectorAll("ul li").length;

  console.log("Category:", title);
  console.log("Elements:", element);
});
