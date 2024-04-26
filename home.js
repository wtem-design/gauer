 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
	
  gsap.registerPlugin(ScrollTrigger); 
  
   ScrollTrigger.create({
    trigger: ".section_cards",
    start: "top top", 
    end: "bottom bottom",
    pin: ".cards_background",
    pinSpacing: false
  });

 
  var splideBlog = new Splide( '#home-blog', {
  	type: 'slide',
    focus: 1,
    fixedWidth: "26.75rem",
    gap: "1.75rem",
    trimSpace: false,
    speed: 1000,
    arrows: true,
    pagination: false,
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    updateOnMove: true,
		breakpoints: {
    	991: {
      	focus: "center"
      },
    	479: {
      	fixedWidth: "18rem",
        gap: "1rem",        
        }
    }
  } ).mount();

   
 });
 


function onYouTubeIframeAPIReady() {
    function addPlayerControls(player, playerId) {
        document.querySelector(`#short-link-${playerId}`).addEventListener('click', function() {
            player.playVideo();
            gsap.set("body", { overflow: 'hidden' });
        });

        document.querySelector(`#close-short-${playerId}`).addEventListener('click', function() {
            player.pauseVideo();
            gsap.set("body", { overflow: 'visible' });
        });
    }

    document.querySelector('.video-cutter.is-hero').addEventListener('click', function() {
        var ytplayer = new YT.Player('ytplayer', {
            height: '481',
            width: '912',
            videoId: 'KhS0GSgadXY',
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            events: {
                'onReady': function(event) {
                    event.target.playVideo();
                    gsap.set("body", { overflow: 'hidden' });
                }
            }
        });

        document.querySelector('#close-hero-popup').addEventListener('click', function() {
            ytplayer.pauseVideo();
            gsap.set("body", { overflow: 'visible' });
        });
    });

    document.querySelector('#betrachtung-trigger-1').addEventListener('click', function() {
        var betrachtung = new YT.Player('betrachtung', {
            height: '481',
            width: '912',
            videoId: 'f_R-EDhH2Uk',
            autoplay: 1,
            controls: 0,
            modestbranding: 1,
            events: {
                'onReady': function(event) {
                    event.target.playVideo();
                    gsap.set("body", { overflow: 'hidden' });
                }
            }
        });

        document.querySelector('#betrachtung-close').addEventListener('click', function() {
            betrachtung.pauseVideo();
            gsap.set("body", { overflow: 'visible' });
        });
    });

    // Define pairs of short video IDs
    const shortVideos = {
        'short-1': 'JTj1xAO4FW4',
        'short-2': 'ckGY-IUeyqs',
        'short-3': 'W6a-pFUIWkg',
        'short-4': 'TYuHGEjuKIc',
        'short-5': '-fasRpA79TA',
        'short-6': 'rZdT4L318aE'
    };

    // Adding controls for each short
    for (let i = 1; i <= 6; i++) {
        var player = new YT.Player(`short-${i}`, {
            height: '481',
            width: '912',
            videoId: shortVideos[`short-${i}`], // Set video ID based on the shortVideos object
            autoplay: 0, // Autoplay set to 0 initially
            controls: 0,
            modestbranding: 1,
            events: {
                'onReady': function(event) {
                    addPlayerControls(event.target, i);
                }
            }
        });
    }
}
