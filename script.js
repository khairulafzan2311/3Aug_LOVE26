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
  const scrollWrapper = document.getElementById('scrollWrapper');

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
    scrollWrapper.scrollTo({top:0, behavior:'smooth'});
  });
  document.getElementById('toLetter').addEventListener('click', () => {
    galleryPage.classList.remove('show');
    letterPageEl.classList.add('show');
    scrollWrapper.scrollTo({top:0, behavior:'smooth'});
  });

  document.getElementById('toEnvelope').addEventListener('click', () => {
    letterPageEl.classList.remove('show');
    galleryPage.classList.remove('show');
    envelope.classList.remove('open');
    stage.classList.remove('hidden');
    requestAnimationFrame(() => { stage.classList.remove('fade-out'); });
    scrollWrapper.scrollTo({top:0, behavior:'smooth'});
  });


const galleries = [
    // Gallery 1
    [
        "AnisKhai/G1_1.png",
        "AnisKhai/G1_2.png",
        "AnisKhai/G1_3.png",
	"AnisKhai/G1_4.png",
	"AnisKhai/G1_5.png",
	"AnisKhai/G1_6.png"
    ],

    // Gallery 2
    [
        "AnisKhai/G2_1.png",
        "AnisKhai/G2_2.png",
        "AnisKhai/G2_3.png",
	"AnisKhai/G2_4.png",
	"AnisKhai/G2_5.png",
	"AnisKhai/G2_6.png"
    ],

    // Gallery 3
    [
        "AnisKhai/G3_1.png",
        "AnisKhai/G3_2.png",
	"AnisKhai/G3_3.png",
	"AnisKhai/G3_4.png",
	"AnisKhai/G3_5.png",
        "AnisKhai/G3_6.png"
    ],

    // Gallery 4
    [
        "AnisKhai/G4_1.png",
        "AnisKhai/G4_2.png",
        "AnisKhai/G4_3.png",
	"AnisKhai/G4_4.png",
	"AnisKhai/G4_5.png",
	"AnisKhai/G4_6.png",
    ],

    // Gallery 5
    [
        "AnisKhai/G5_1.png",
        "AnisKhai/G5_2.png",
        "AnisKhai/G5_3.png",
	"AnisKhai/G5_4.png",
	"AnisKhai/G5_5.png",
	"AnisKhai/G5_6.png"
    ],

    // Gallery 6
    [
        "AnisKhai/G6_1.png",
        "AnisKhai/G6_2.png",
	"AnisKhai/G6_3.png",
	"AnisKhai/G6_4.png",
	"AnisKhai/G6_5.png",
        "AnisKhai/G6_6.png"
    ],

    // Gallery 7
    [
        "AnisKhai/G7_1.png",
        "AnisKhai/G7_2.png",
        "AnisKhai/G7_3.png",
	"AnisKhai/G7_4.png",
	"AnisKhai/G7_5.png",
	"AnisKhai/G7_6.png"
    ],

   // Gallery 8
   [
    	"AnisKhai/G8_1.png",
    	"AnisKhai/G8_2.png",
    	"AnisKhai/G8_3.png",
    	"AnisKhai/G8_4.png",
    	"AnisKhai/G8_5.png",
    	"AnisKhai/G8_6.png"
   ],

   // Gallery 9
   [
    	"AnisKhai/G9_1.png",
   	"AnisKhai/G9_2.png",
    	"AnisKhai/G9_3.png",
    	"AnisKhai/G9_4.png",
    	"AnisKhai/G9_5.png",
    	"AnisKhai/G9_6.png"
   ],


   // Gallery 10
   [
    	"AnisKhai/G10_1.png",
   	"AnisKhai/G10_2.png",
    	"AnisKhai/G10_3.png",
    	"AnisKhai/G10_4.png",
    	"AnisKhai/G10_5.png",
    	"AnisKhai/G10_6.png"
   ],


   // Gallery 11
   [
    	"AnisKhai/G11_1.png",
   	"AnisKhai/G11_2.png",
    	"AnisKhai/G11_3.png",
    	"AnisKhai/G11_4.png",
    	"AnisKhai/G11_5.png",
    	"AnisKhai/G11_6.png"
   ],


   // Gallery 12
   [
    	"AnisKhai/G12_1.png",
   	"AnisKhai/G12_2.png",
    	"AnisKhai/G12_3.png",
    	"AnisKhai/G12_4.png",
    	"AnisKhai/G12_5.png",
    	"AnisKhai/G12_6.png"
   ],


   // Gallery 13
   [
    	"AnisKhai/G13_1.png",
   	"AnisKhai/G13_2.png",
    	"AnisKhai/G13_3.png",
    	"AnisKhai/G13_4.png",
    	"AnisKhai/G13_5.png",
    	"AnisKhai/G13_6.png"
   ],


   // Gallery 14
   [
    	"AnisKhai/G14_1.png",
   	"AnisKhai/G14_2.png",
    	"AnisKhai/G14_3.png",
    	"AnisKhai/G14_4.png",
    	"AnisKhai/G14_5.png",
    	"AnisKhai/G14_6.png"
   ],


   // Gallery 15
   [
    	"AnisKhai/G15_1.png",
   	"AnisKhai/G15_2.png",
    	"AnisKhai/G15_3.png",
    	"AnisKhai/G15_4.png",
    	"AnisKhai/G15_5.png",
    	"AnisKhai/G15_6.png"
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
