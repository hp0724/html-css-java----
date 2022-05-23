(function () {
    // alert('test');

    const spanEl = document.querySelector('main h2 span');
    const textArr = ['Web Publisher', 'Front-End Developer', 'Web UI Designer', 'Back-End Developer']
    let index = 0;
    let currentTxt = textArr[index].split("");
    console.log(currentTxt)
    function writeTxt() {
        spanEl.textContent += currentTxt.shift();
        if (currentTxt.length !== 0) {
            setTimeout(writeTxt, Math.floor(Math.random() * 100));
        }
        else {
            
            currentTxt = spanEl.textContent.split("");
            setTimeout(deleteTxt, 3000);
        }
    }

    function deleteTxt() {
        currentTxt.pop();
        spanEl.textContent = currentTxt.join("");
        if (currentTxt.length !== 0) {
            setTimeout(deleteTxt, Math.floor(Math.random() * 100));
        } else {
            index = (index + 1) % textArr.length;
            currentTxt = textArr[index].split("");
            writeTxt();
        }
        

    }
    writeTxt();
})();

// 수직 스크롤이 발생하면 header 태그에 activte 클래스 추가 및 삭제

(function () {
    const headerEl = document.querySelector("header");
    window.addEventListener('scroll', function () {
        this.requestAnimationFrame(scrollCheck);
    });

    function scrollCheck() {
        const browserScrolly = window.scrollY ? scrollY : window.pageYOffset;
        if (browserScrolly > 0) {
            headerEl.classList.add('active');
        } else {
            headerEl.classList.remove('active');
        }
    
    }
})();

const animationMove = function (selector) {
    const target = document.querySelector(selector);
    const browserScrollY = window.scrollY;
    const targetScrollY = target.getBoundingClientRect().top + browserScrollY;
    window.scrollTo({ top: targetScrollY, behavior: 'smooth' })
    
}

//애니메이션 스크롤

const scrollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");

for (let i = 0; i < scrollMoveEl.length; i++){
    scrollMoveEl[i].addEventListener("click", function (e) {

        animationMove(this.dataset.target)
    });
}