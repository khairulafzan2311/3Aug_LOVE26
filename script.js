  // ambient petals
  const petalContainer = document.getElementById('petals');
  const petalCount = 18;
  for(let i=0;i<petalCount;i++){
    const p = document.createElement('div');
    p.className='petal';
    p.style.left = Math.random()*100+'vw';
    p.style.width = p.style.height = (6+Math.random()*8)+'px';
    p.style.animationDuration = (10+Math.random()*10)+'s';
    p.style.animationDelay = (Math.random()*10)+'s';
    p.style.opacity = 0.2+Math.random()*0.3;
    petalContainer.appendChild(p);
  }

  const envelope = document.getElementById('envelope');
  const envelopeWrap = document.getElementById('envelopeWrap');
  const letterPage = document.getElementById('letterPage');
  const stage = document.getElementById('stage');

  envelopeWrap.addEventListener('click', () => {
    if(envelope.classList.contains('open')) return;
    envelope.classList.add('open');
    playMusic();
    setTimeout(() => {
      stage.classList.add('fade-out');
      setTimeout(() => {
        stage.classList.add('hidden');
        letterPage.classList.add('show');
      }, 550);
    }, 1000);
  });

  // ---------- background music ----------
  const bgMusic = document.getElementById('bgMusic');
  const musicToggle = document.getElementById('musicToggle');
  bgMusic.volume = 0.5;

  function playMusic(){
    bgMusic.play().then(() => {
      musicToggle.classList.add('playing');
      musicToggle.textContent = '♪';
    }).catch(() => {
      // autoplay blocked; user can start it manually via the toggle button
    });
  }

  musicToggle.addEventListener('click', () => {
    if(bgMusic.paused){
      playMusic();
    } else {
      bgMusic.pause();
      musicToggle.classList.remove('playing');
      musicToggle.textContent = '♪';
    }
  });

  // navigation between letter and gallery
  const letterPageEl = document.getElementById('letterPage');
  const galleryPage = document.getElementById('galleryPage');
  document.getElementById('toGallery').addEventListener('click', () => {
    letterPageEl.classList.remove('show');
    galleryPage.classList.add('show');
    window.scrollTo({top:0, behavior:'smooth'});
  });
  document.getElementById('toLetter').addEventListener('click', () => {
    galleryPage.classList.remove('show');
    letterPageEl.classList.add('show');
    window.scrollTo({top:0, behavior:'smooth'});
  });

  document.getElementById('toEnvelope').addEventListener('click', () => {
    letterPageEl.classList.remove('show');
    galleryPage.classList.remove('show');
    envelope.classList.remove('open');
    stage.classList.remove('hidden');
    requestAnimationFrame(() => { stage.classList.remove('fade-out'); });
    window.scrollTo({top:0, behavior:'smooth'});
  });


const galleries = [
    // Gallery 1
    [
        "AnisKhai/G1_1.PNG",
        "AnisKhai/G1_2.PNG",
        "AnisKhai/G1_3.PNG",
	"AnisKhai/G1_4.PNG",
	"AnisKhai/G1_5.PNG",
	"AnisKhai/G1_6.PNG"
    ],

    // Gallery 2
    [
        "AnisKhai/G2_1.PNG",
        "AnisKhai/G2_2.PNG",
        "AnisKhai/G2_3.PNG",
	"AnisKhai/G2_4.PNG",
	"AnisKhai/G2_5.PNG",
	"AnisKhai/G2_6.PNG"
    ],

    // Gallery 3
    [
        "AnisKhai/G3_1.PNG",
        "AnisKhai/G3_2.PNG",
	"AnisKhai/G3_3.PNG",
	"AnisKhai/G3_4.PNG",
	"AnisKhai/G3_5.PNG",
        "AnisKhai/G3_6.PNG"
    ],

    // Gallery 4
    [
        "AnisKhai/G4_1.PNG",
        "AnisKhai/G4_2.PNG",
        "AnisKhai/G4_3.PNG",
	"AnisKhai/G4_4.PNG",
	"AnisKhai/G4_5.PNG",
	"AnisKhai/G4_6.PNG",
    ],

    // Gallery 5
    [
        "AnisKhai/G5_1.PNG",
        "AnisKhai/G5_2.PNG",
        "AnisKhai/G5_3.PNG",
	"AnisKhai/G5_4.PNG",
	"AnisKhai/G5_5.PNG",
	"AnisKhai/G5_6.PNG"
    ],

    // Gallery 6
    [
        "AnisKhai/G6_1.PNG",
        "AnisKhai/G6_2.PNG",
	"AnisKhai/G6_3.PNG",
	"AnisKhai/G6_4.PNG",
	"AnisKhai/G6_5.PNG",
        "AnisKhai/G6_6.PNG"
    ],

    // Gallery 7
    [
        "AnisKhai/G7_1.PNG",
        "AnisKhai/G7_2.PNG",
        "AnisKhai/G7_3.PNG",
	"AnisKhai/G7_4.PNG",
	"AnisKhai/G7_5.PNG",
	"AnisKhai/G7_6.PNG"
    ],

   // Gallery 8
   [
    	"AnisKhai/G8_1.PNG",
    	"AnisKhai/G8_2.PNG",
    	"AnisKhai/G8_3.PNG",
    	"AnisKhai/G8_4.PNG",
    	"AnisKhai/G8_5.PNG",
    	"AnisKhai/G8_6.PNG"
   ],

   // Gallery 9
   [
    	"AnisKhai/G9_1.PNG",
   	"AnisKhai/G9_2.PNG",
    	"AnisKhai/G9_3.PNG",
    	"AnisKhai/G9_4.PNG",
    	"AnisKhai/G9_5.PNG",
    	"AnisKhai/G9_6.PNG"
   ],


   // Gallery 10
   [
    	"AnisKhai/G10_1.PNG",
   	"AnisKhai/G10_2.PNG",
    	"AnisKhai/G10_3.PNG",
    	"AnisKhai/G10_4.PNG",
    	"AnisKhai/G10_5.PNG",
    	"AnisKhai/G10_6.PNG"
   ],


   // Gallery 11
   [
    	"AnisKhai/G11_1.PNG",
   	"AnisKhai/G11_2.PNG",
    	"AnisKhai/G11_3.PNG",
    	"AnisKhai/G11_4.PNG",
    	"AnisKhai/G11_5.PNG",
    	"AnisKhai/G11_6.PNG"
   ],


   // Gallery 12
   [
    	"AnisKhai/G12_1.PNG",
   	"AnisKhai/G12_2.PNG",
    	"AnisKhai/G12_3.PNG",
    	"AnisKhai/G12_4.PNG",
    	"AnisKhai/G12_5.PNG",
    	"AnisKhai/G12_6.PNG"
   ],


   // Gallery 13
   [
    	"AnisKhai/G13_1.PNG",
   	"AnisKhai/G13_2.PNG",
    	"AnisKhai/G13_3.PNG",
    	"AnisKhai/G13_4.PNG",
    	"AnisKhai/G13_5.PNG",
    	"AnisKhai/G13_6.PNG"
   ],


   // Gallery 14
   [
    	"AnisKhai/G14_1.PNG",
   	"AnisKhai/G14_2.PNG",
    	"AnisKhai/G14_3.PNG",
    	"AnisKhai/G14_4.PNG",
    	"AnisKhai/G14_5.PNG",
    	"AnisKhai/G14_6.PNG"
   ],


   // Gallery 15
   [
    	"AnisKhai/G15_1.PNG",
   	"AnisKhai/G15_2.PNG",
    	"AnisKhai/G15_3.PNG",
    	"AnisKhai/G15_4.PNG",
    	"AnisKhai/G15_5.PNG",
    	"AnisKhai/G15_6.PNG"
   ],
];

const currentIndex = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function changeGallery(gallery, direction) {

    currentIndex[gallery] += direction;

    if (currentIndex[gallery] < 0) {
        currentIndex[gallery] = galleries[gallery].length - 1;
    }

    if (currentIndex[gallery] >= galleries[gallery].length) {
        currentIndex[gallery] = 0;
    }

    document.getElementById("gallery" + gallery).src =
        galleries[gallery][currentIndex[gallery]];
}


