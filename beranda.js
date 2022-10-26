var wwindow = window.innerWidth;
if(wwindow < 1000){
  document.location.href='catering.html'
}

window.addEventListener('scroll', (event) => {
  const logoContainer = document.getElementById('tes')
  const logo = document.getElementById('logo')
  const judul = document.getElementById('judul')
  const subJudul = document.getElementById('sub-judul')
  
  var wwindow = window.innerWidth;
  let scroll = this.scrollY;
  var lebar = wwindow / 2 - logoContainer.clientWidth / 2;
  // logoContainer.style.position='fixed'
  logoContainer.style.left=lebar + 'px';
  // let posisix1 = 1000;
  // let posisix = 1000 + scroll;
  console.log(scroll);
  if(scroll < 85){
    // logoContainer.style.transition='1s';
    // logoContainer.style.top='600px'
    // logoContainer.style.backgroundColor='black'
    // logoContainer.classList.remove('sticky')
    // // logo.style.width='400px';
    // judul.style.fontSize='150px';
    // subJudul.style.fontSize='70px';
    logoContainer.style.textAlign='center';
    // logoContainer.style.top='200px';
  }
  else if(scroll > 500){
    logoContainer.style.left='4000px'
    document.location.href='catering.html'
  }
})