const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const makeImgListMarkup = image => {
  // console.log(image)
  return `<li class='list_item' ><img  class='list_item-img' src="${image.url}" alt="${image.alt}" '></li>`
}
console.log(makeImgListMarkup)
const imgList = document.querySelector('ul');

const makeImgListRows = images.map(makeImgListMarkup).join('');
console.log(makeImgListRows);

imgList.insertAdjacentHTML("afterbegin", makeImgListRows);
imgList.classList.add('image_list')








