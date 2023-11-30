document.addEventListener("DOMContentLoaded", function() {
            function isElementInViewport(el) {
                var rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }

            function showVisibleElements() {
                var elements = document.querySelectorAll('.hidden');
                elements.forEach(function(element) {
                    if (isElementInViewport(element)) {
                        element.style.opacity = "1";
                    }
                });
            }

            showVisibleElements();

            window.addEventListener('scroll', showVisibleElements);
        });


    var originalText = 'DJ PLESH ? Успешный музыкальный продюсер, а так же диджей.<br> На этом сайте вы найдете свежие новости из мира Диджеинга, а так же<br>свежие музыкальные новинки, к созданию которых приложили свою руку<br>диджеи.Так же вы сможете приобрести курсы для начинающего диджея, от моихтоварищей с которыми я работаю рука об руку уже<br>20 лет. А если вы уже,что-то знаете или прошли курсы, вы можете приобрести необходимое оборудование для начала своей карьеры в мире диджеинга.<br>Отзовы, поддержка, партнервство, наш мерч, социальные сети и<br> информацию вы вожете найти в конце сайта.<br>САМОЕ ГЛАВНОЕ: ТУР. Вы можете найти информацию по туру и купить билеты.';
    var changedText = 'tttttttwrwerqwrwqer';
    var isTextChanged = false;

    function changeText() {
      var infoTextElement = document.getElementById('infoText');
      infoTextElement.innerHTML = changedText;
      var infoBlock = document.getElementById('infoBlock');
      infoBlock.classList.remove('hidden');
      isTextChanged = true;
    }

    function restoreText() {
      if (isTextChanged) {
        var infoTextElement = document.getElementById('infoText');
        infoTextElement.innerHTML = originalText;
        isTextChanged = false;
      }
    }