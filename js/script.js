
document.addEventListener('DOMContentLoaded', function() {
    // Находим все кнопки "Читать далее"
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); // Отменяем стандартное действие ссылки

            // Находим родительский элемент (статью) и скрытый контент
            const guideContent = this.nextElementSibling;

            // Проверяем текущее состояние отображения контента
            if (guideContent.style.display === 'none' || guideContent.style.display === '') {
                guideContent.style.display = 'block'; // Показываем контент
                this.textContent = 'Скрыть'; // Меняем текст кнопки
            } else {
                guideContent.style.display = 'none'; // Скрываем контент
                this.textContent = 'Читать далее'; // Возвращаем текст кнопки
            }
        });
    });
});




document.querySelectorAll('#strategy h3').forEach(header => {
   header.addEventListener('click', () => {
       const content = header.nextElementSibling;

       if (content.style.display === "none") {
           content.style.display = "block";
           header.classList.add('active');
       } else {
           content.style.display = "none";
           header.classList.remove('active');
       }
   });
});

// Скрыть контент по умолчанию
document.querySelectorAll('#strategy p, #strategy ul').forEach(content => {
   content.style.display = "none";
});

// Фильтрация нейтральных крипов
document.getElementById('creepFilter').addEventListener('keyup', function() {
   const filter = this.value.toLowerCase();
   const rows = document.querySelectorAll('#creepTable tbody tr');

   rows.forEach(row => {
       const cell = row.cells[0].textContent.toLowerCase();
       row.style.display = cell.includes(filter) ? '' : 'none';
   });
});

// Интерактивность для аспектов
document.querySelectorAll('.aspect-thumbnail').forEach(thumbnail => {
   thumbnail.addEventListener('mouseover', function() {
       const fullImageSrc = this.getAttribute('data-full');
       const description = this.getAttribute('data-description');

       document.getElementById('full-aspect-image').src = fullImageSrc;
       document.getElementById('full-aspect-image').style.display = 'block';
       document.getElementById('aspect-description').textContent = description;
   });

   thumbnail.addEventListener('mouseout', function() {
       document.getElementById('full-aspect-image').style.display = 'none';
       document.getElementById('aspect-description').textContent = '';
   });
});

// Уровень героя и реплики
const levelSlider = document.getElementById('heroLevel');
const levelValue = document.getElementById('levelValue');
const replicaDisplay = document.getElementById('replica');
const replicaPlayer = document.getElementById('replicaPlayer');

const replicas = {
    '1': "Я готов к бою!",
    '2': "Я готов к бою!",
    '3': "Я готов к бою!",
    '4': "Я готов к бою!",
    '5': "Скоро я стану сильнее!",
    '6': "Скоро я стану сильнее!",
    '7': "Скоро я стану сильнее!",
    '8': "Скоро я стану сильнее!",
    '9': "Скоро я стану сильнее!",
    '10': "Время действовать!",
    '11': "Время действовать!",
    '12': "Время действовать!",
    '13': "Время действовать!",
    '14': "Время действовать!",
    '15': "Моя воля непоколебима!",
    '16': "Моя воля непоколебима!",
    '17': "Моя воля непоколебима!",
    '18': "Моя воля непоколебима!",
    '19': "Моя воля непоколебима!",
    '20': "Я готов к новым свершениям!",
    '21': "Я готов к новым свершениям!",
    '22': "Я готов к новым свершениям!",
    '23': "Я готов к новым свершениям!",
    '24': "Я готов к новым свершениям!",
    '25': "Сила и мудрость — мои союзники!",
    '26': "Сила и мудрость — мои союзники!",
    '27': "Сила и мудрость — мои союзники!",
    '28': "Сила и мудрость — мои союзники!",
    '29': "Сила и мудрость — мои союзники!",
    '30': "Я — повелитель лесов!"
};

// Обновляем значение уровня и реплику при изменении ползунка
levelSlider.addEventListener('input', function() {
    const currentLevel = this.value;
    levelValue.textContent = currentLevel;

    // Проверяем уровень и устанавливаем соответствующую реплику
    replicaDisplay.textContent = `Реплика: "${replicas[currentLevel]}"`;

    // Устанавливаем источник аудио
    const audioPath = `audio/replica_${currentLevel}.mpeg`; // Исправил путь с шаблонной строкой
    replicaPlayer.src = `audio/replica_${currentLevel}.mpeg`; // Замените на актуальный путь
    replicaPlayer.style.display = 'block'; // Показываем плеер


});



// Интерактивность для сетов
document.querySelectorAll('.set-thumbnail').forEach(thumbnail => {
   thumbnail.addEventListener('click', function() {
       const fullImageSrc = this.getAttribute('data-full');
       const price = this.getAttribute('data-price');

       document.getElementById('full-set-image').src = fullImageSrc;
       document.getElementById('full-set-image').style.display = 'block';

       // Устанавливаем цену в области наведения
       const priceDisplay = document.querySelector('.price-display');
       priceDisplay.textContent = price;

       // Показать область наведения
       priceDisplay.style.display = 'none'; // Скрываем по умолчанию
   });
});

// Отображение цены при наведении на центральную область
const centerHoverArea = document.querySelector('.center-hover-area');

centerHoverArea.addEventListener('mouseenter', function() {
   const priceDisplay = document.querySelector('.price-display');
   priceDisplay.style.display = 'block'; // Показываем цену
});

centerHoverArea.addEventListener('mouseleave', function() {
   const priceDisplay = document.querySelector('.price-display');
   priceDisplay.style.display = 'none'; // Скрываем цену
});

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        // Прокрутка вниз - скрываем шапку
        header.style.top = "-80px"; // Убираем шапку за пределы экрана
    } else {
        // Прокрутка вверх - показываем шапку
        header.style.top = "0";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Для браузеров, которые могут прокручивать выше
});

document.addEventListener('DOMContentLoaded', function() {
    const answers = document.querySelectorAll('.answer');
    const questions = document.querySelectorAll('.question');
    const testResult = document.getElementById('test-result');
    const heroName = document.getElementById('hero-name');
    const heroImage = document.getElementById('hero-image');
    const retryButton = document.getElementById('retry-test');
    
    let score = [0, 0, 0]; // Баллы для 3 типов ответов
    let currentQuestion = 0;

    // Обработчик кликов по ответам
    answers.forEach(answer => {
        answer.addEventListener('click', function() {
            const answerType = parseInt(this.getAttribute('data-answer')) - 1;
            score[answerType]++;

            // Переход к следующему вопросу
            questions[currentQuestion].style.display = 'none';
            currentQuestion++;

            if (currentQuestion < questions.length) {
                questions[currentQuestion].style.display = 'block';
            } else {
                showResult();
            }
        });
    });

    // Функция для отображения результата
    function showResult() {
        let hero;
        
        // Определим героя на основе баллов
        if (score[0] > score[1] && score[0] > score[2]) {
            hero = { name: 'Anti-Mage', image: 'img/antimage.png' };
        } else if (score[1] > score[0] && score[1] > score[2]) {
            hero = { name: 'Dazzle', image: 'img/dazzle.png' };
        } else {
            hero = { name: 'Invoker', image: 'img/invoker.png' };
        }

        heroName.textContent = hero.name;
        heroImage.src = hero.image;
        
        testResult.style.display = 'block';
    }

    // Сброс теста
    retryButton.addEventListener('click', function() {
        score = [0, 0, 0];
        currentQuestion = 0;
        questions.forEach(question => question.style.display = 'none');
        testResult.style.display = 'none';
        questions[0].style.display = 'block';
    });
});


document.querySelectorAll('.set-thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        const fullImageSrc = this.getAttribute('data-full');
        const price = this.getAttribute('data-price');

        document.getElementById('full-set-image').src = fullImageSrc;
        document.getElementById('full-set-image').style.display = 'block';

        // Отображаем цену по центру под картинкой
        const priceDisplay = document.querySelector('.price-display');
        priceDisplay.textContent = price;
        priceDisplay.style.display = 'block';
    });
});
