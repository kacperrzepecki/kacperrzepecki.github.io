var parallaxQueue = [];
var sectionNames = [];

function checkSections()
{

    setTimeout(checkSections, 100);
    
    clearLog();
    $('section').each(function(){
      if( $(this).css('display') === 'block')
      {
        log($(this).attr('id'));
      };
      
      });
    
}

function log(text)
{
//$('#log').append(text + '<br/>');
}
function clearLog()
{
$('#log').html('');
}

function navigateByIndexShift(indexShift)
{
//checkSections();
  var currentIndex = getCurrentIndex();
  var newIndex = currentIndex + indexShift;
  if (newIndex > 0 && newIndex < sectionNames.length)
  {
    navigateToSection(sectionNames[newIndex]);
    log('showing: ' + sectionNames[newIndex]);
  } 
 
}

function getCurrentIndex()
{
  var currentIndex = -1;
  if (typeof parallax.current !== 'undefined')
  {
    currentIndex = sectionNames.lastIndexOf(parallax.current.key);
  }
  return currentIndex;
}

function prepareParallax()
  { 
    $("section").each(function()
    {
        parallax.add($(this));
        sectionNames.push($(this).attr('id'));
    });
    
    playIntro();
    processQueue();

  }

function addToQueue(sectionName)
{
    parallaxQueue.push(sectionName);
}

function processQueue()
{
    var sectionName = parallaxQueue.pop();
    parallaxQueue = []
    if(sectionName)
    {
      if (! navigateToSection(sectionName))
      {
        parallaxQueue.unshift(sectionName);
      }
    }
}

function navigateToSection(sectionName)
{
  if (parallax.sliding)
  {
      setTimeout(processQueue, 150);
      return false;
  }
  $('nav>a>img').attr('src','img/btn1.png');
  $('nav>a[href="#_'+sectionName+'"]>img').attr('src','img/btn2.png');
  
  if (typeof parallax.current === 'undefined' ||
      parallax.current.key !== sectionName)
  {
    
   var currentIndex = getCurrentIndex();
   var newIndex = sectionNames.lastIndexOf(sectionName);
    if(currentIndex<newIndex)
    {
      parallax[sectionName].bottom(processQueue);
    } else {
      parallax[sectionName].top(processQueue);
    }
    
    window.location.hash = ('_'+sectionName);
                
    
  }
  
    
  return true;
}

function navigateToHash(hash)
{
  var sectionName = hash.replace("#_","");
  if( sectionName in parallax)
  {
    addToQueue(sectionName);
  }
  else
  {
    playIntro();
  }
  
  processQueue();
}

function playIntro()
{
    addToQueue("HomePage");
}

function prepareUIAnimations()
  {   
  
  
    $("#HomePage1").textualizer({
                duration: 1000,          // Time (ms) each blurb will remain on screen
                rearrangeDuration: 300, // Time (ms) a character takes to reach its position
                effect: 'random',        // Animation effect the characters use to appear
                centered: true           // Centers the text relative to its container
                }
      );
    $("#HomePage1").textualizer("start");
    
  
    $(function () {
      function eduHat() {
        $('#educationHat')
               .animate({'top'  :'0px',  
                         'left' :'0px'} )
               .animate({'top'  :'-=10px', 
                         'left' :'-=10px'}, eduHat)
               ;
    }
    eduHat();
    });
    
    $(function () {
      function scienceGlow() {
        $('#scienceGlow')
               .animate({'opacity'  :'1'}, 100)
               .animate({'opacity'  :'0'}, 100)
               .delay(500)
               .animate({'opacity'  :'1'}, 100)
               .animate({'opacity'  :'0'}, 100)
               .animate({'opacity'  :'1'}, 400)
               .animate({'opacity'  :'0'}, 400, scienceGlow)
               ;
    }
    scienceGlow();
    });
    
    $(function () {
      function scienceEyes() {
        $('#scienceEyes')
               .animate({'opacity'  :'1'}, 100)
               .delay(800)
               .animate({'opacity'  :'0'}, 100)
               .delay(700)
               .animate({'opacity'  :'1'}, 100, scienceEyes)
               ;
    }
    scienceEyes();
    });
    
    
    $(function () {
      function proteusShot() {
        $('#ProteusImgShot')
               .animate({'opacity'  :'1'}, 100)
               .delay(300)
               .animate({'opacity'  :'0'}, 100)
               .delay(300)
               .animate({'opacity'  :'1'}, 100)
               .delay(300)
               .animate({'opacity'  :'0'}, 100)
               .delay(700)
               .animate({'opacity'  :'1'}, 100, proteusShot)
               ;
    }
    proteusShot();
    });
    
    
    $(function () {
      function gsocHand() {
        $('#gsocHand')
               .animate({'top'  :'3px'}, 100)
               .delay(300)
               .animate({'top'  :'0px'}, 100, gsocHand)
               ;
    }
    gsocHand();
    });
    
    
    $(function () {
      function sdetGlow() {
        $('#sdetGlow')
               .delay(2600)
               .animate({'opacity'  :'1'}, 100)
               .delay(100)
               .animate({'opacity'  :'0'}, 100)
               .delay(100)
               .animate({'opacity'  :'1'}, 100)
               .delay(100)
               .animate({'opacity'  :'0'}, 100)
               .delay(100)
               .animate({'opacity'  :'1'}, 100)
               .delay(5000)
               .animate({'opacity'  :'0'}, 100, sdetGlow)
               ;
    }
    sdetGlow();
    });
    
    
    $(function () {
      function sdetHit() {
        $('#sdetHit')
               .delay(2000)
               .animate({'opacity'  :'1'}, 100)
               .delay(1500)
               .animate({'opacity'  :'0'}, 100)
               .delay(4800)
               .animate({'opacity'  :'0'}, 100, sdetHit)
               ;
    }
    sdetHit();
    });
    
    
    $(function () {
      function learnerEffect() {
        $('#learnerEffect')
               .delay(500)
               .animate({'opacity'  :'1'}, 600)
               .delay(500)
               .animate({'opacity'  :'0'}, 600)
               .delay(500)
               .animate({'opacity'  :'0'}, 100, learnerEffect)
               ;
    }
    learnerEffect();
    });
    
    $(function () {
      function thumbupEye() {
        $('#thumbupEye')
               .delay(500)
               .animate({'opacity'  :'1'}, 200)
               .delay(500)
               .animate({'opacity'  :'0'}, 200)
               .delay(500)
               .animate({'opacity'  :'0'}, 100, thumbupEye)
               ;
    }
    thumbupEye();
    });
    
    
    $('#imgPictureTextImagine').typed({
        strings: ["C:\\ format c \nAre you sure?\ny",""],
        typeSpeed: 0,
        loop: true
      });
      
      
    $('#educationHat').css('zIndex', 1001);
    $('#scienceEyes').css('zIndex', 1001);
    $('#scienceGlow').css('zIndex', 1001);
    $('#gsocHand').css('zIndex', 1001);
    $('#sdetHit').css('zIndex', 1001);
    $('#thumbupEye').css('zIndex', 1001);
  }
