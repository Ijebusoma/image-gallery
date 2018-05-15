var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
for(var i=1;i<5;i++){
  var img;
  var newImage = document.createElement('img');
  var image = 'images/pic' + i + '.jpg'; 
  newImage.setAttribute('src', image);
  newImage.width = '100';
  newImage.height = '100';
  
  document.body.appendChild(thumbBar.appendChild(newImage));
  newImage.addEventListener('click', function(event){
    displayedImage.setAttribute('src', event.target.src);
    

  });
 }

  //get the src of the image that was clicked 
  //set it to the src of var displayedImage

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function(){
  current = btn.getAttribute('class');
  if(current === 'light'){
    btn.setAttribute('class', 'dark')
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
  else{
    btn.setAttribute('class', 'light')
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  }

});

