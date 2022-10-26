window.addEventListener('scroll', (event) => {
  const logo = document.getElementById('tes')
  var wwindow = window.innerWidth;
  let scroll = this.scrollY;
  var lebar = wwindow / 2 - logo.clientWidth / 2;
  // let posisix1 = 1000;
  // let posisix = 1000 + scroll;
  console.log(scroll);
  logo.style.left=lebar + 'px';
  if(scroll > 85){
    logo.style.transition='1s';
    logo.style.position='relative'
    // logo.classList.add('bg')
    // logo.classList.add('display')
  }
  else if(scroll < 85){
    logo.style.top='200px';
    logo.style.position='sticky'
    // logo.style.width='100px';
    // logo.style.height='100px';
    // logo.style.top='100px';
    // logo.style.left='10px'
    logo.style.transition='1s';
    // logo.classList.remove('bg')
  }
})