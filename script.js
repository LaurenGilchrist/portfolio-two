const h1 = document.querySelector('h1');
h1.addEventListener('mouseover', function (){
  h1.classList.add('hover');
})
h1.addEventListener('mouseout', function (){
  h1.classList.remove('hover');    
});



const footer = document.querySelector('footer');
footer.addEventListener('mouseover', function (){
  footer.classList.add('hover');
})
footer.addEventListener('mouseout', function (){
  footer.classList.remove('hover');    
});


(function() {

  setUpPage();

  function setUpPage() {
    addSliderEventListeners();
  }


function addSliderEventListeners() {

    const sliderPrev = document.getElementById('slider-prev');
    const sliderNext = document.getElementById('slider-next');
    const sliderFrame = document.getElementById('slider-frame');
    const sliderCaption = document.getElementById('slider-caption');

    const slides =
      Array.from(sliderFrame.querySelectorAll('div[data-src]'))
        .map(div => {
          return {
            imageUrl: div.getAttribute('data-src'),
            caption: div.textContent.trim(),
          };
        });

    let sliderIndex = 0;
    displaySliderImage();

    function displaySliderImage() {
      let { imageUrl, caption } = slides[sliderIndex];
      sliderFrame.style.backgroundImage = `url('${imageUrl}')`;
      let count = `(${sliderIndex+1}/${slides.length}) `;
      sliderCaption.innerHTML = count + caption;
      sliderCaption.classList.add('flash');
      setTimeout(() => {
        sliderCaption.classList.remove('flash');
      }, 0);
    }

    function displayPrevSliderImage() {
      sliderIndex--;
      if (sliderIndex < 0) {
        sliderIndex = slides.length - 1;
      }
      displaySliderImage();
    }

    function displayNextSliderImage() {
      sliderIndex++;
      if (sliderIndex === slides.length) {
        sliderIndex = 0;
      }
      displaySliderImage();
    }

    sliderPrev.addEventListener('click', displayPrevSliderImage);
    sliderNext.addEventListener('click', displayNextSliderImage);

    setInterval(function() {
      displayNextSliderImage();
    }, 4000);
  }

})();

const articles = document.querySelectorAll('article');

for(let i=0; i<articles.length; i++){
  let button = articles[i].querySelector('button');
  let para = articles[i].querySelector('p');
  
  button.addEventListener('click', function(){
    articles[i].classList.toggle('expanded');
    button.innerHTML = articles[i].classList.contains('expanded') ?
      'Hide Details' : 'Show Details';
 });
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}