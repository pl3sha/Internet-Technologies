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