let thrivingList = [];
let strugglingList = [];


let total = document.getElementById('total');
let thrivingCount = document.getElementById('thrivingCount');
let strugglingCount = document.getElementById('struggingCount');

const allFilterBtn = document.getElementById('all-filter-btn')
const thrivingFilterBtn = document.getElementById('thriving-filter-btn')
const strugglingFilterBtn = document.getElementById('struggling-filter-btn')

const allCardSection = document.getElementById('allCards');
const mainContainer =  document.querySelector('main');

function calculateCount(){
 total.innerText = allCardSection.children.length
 thrivingCount.innerText = thrivingList.length
 strugglingCount.innerText = strugglingList.length
}
calculateCount()


function toggleStyle(id){
  allFilterBtn.classList.remove('btn-primary')
  thrivingFilterBtn.classList.remove('btn-primary')
  strugglingFilterBtn.classList.remove('btn-primary')


  allFilterBtn.classList.add('btn-gray','Text-black')
  thrivingFilterBtn.classList.add('btn-gray','Text-black')
  strugglingFilterBtn.classList.add('btn-gray','Text-black')
  // console.log(id)


  const selected = document.getElementById(id)
  // console.log(selected)
  selected.classList.remove('btn-gray')
  selected.classList.add('btn-primary')
}