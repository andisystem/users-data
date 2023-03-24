const $btnContainerWebform = document.querySelector('.btn-webform'),
      $btnContainerWebformUp = document.querySelector('.btn-webform-up'),
      $btnContainerCta = document.querySelector('.btn-cta'),
      $containerCta = document.querySelector('.container-cta'),
      $containerCta2 = document.querySelector('.container-cta2'),
      $containerWebform = document.querySelector('.container-webform');

document.addEventListener('click', e => {
    if (e.target === $btnContainerWebform || e.target === $btnContainerCta){
        $containerWebform.classList.toggle('active');
        $containerCta.classList.toggle('active')
    } else {
        if (e.target === $btnContainerWebformUp){
            $containerWebform.classList.toggle('active');
            $containerCta2.classList.toggle('active')
        }
    }
});

new Pageable("#container-col");
var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
var scene2 = document.getElementById('scene2');
var parallaxInstance = new Parallax(scene2);
AOS.init();