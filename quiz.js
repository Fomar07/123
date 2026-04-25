const quizData = [
  {
    stage: 'Основа темы',
    question: 'Какой способ удобнее всего использовать для смены цветов темы во всем интерфейсе?',
    answers: ['CSS-переменные', 'Inline-стили у каждого элемента', 'Случайные классы без общей логики', 'Изменение HTML-тегов'],
    correctIndex: 0,
    explanation: 'CSS-переменные позволяют централизованно менять цвета и быстро переключать тему во всем интерфейсе.'
  },
  {
    stage: 'Основа темы',
    question: 'Что удобнее переключать в теме: значения CSS-переменных или каждый элемент по одному?',
    answers: ['Каждый элемент вручную', 'Только фон страницы', 'Значения CSS-переменных', 'Только заголовки'],
    correctIndex: 2,
    explanation: 'При переключении переменных все связанные компоненты меняют оформление автоматически.'
  },
  {
    stage: 'Основа темы',
    question: 'Через что в этом проекте меняется активная тема?',
    answers: ['Через изменение data-theme у корневого элемента', 'Через удаление HTML-карточек', 'Через замену файла index.html', 'Через обновление браузера'],
    correctIndex: 0,
    explanation: 'Тема переключается установкой атрибута data-theme, который меняет набор CSS-переменных.'
  },
  {
    stage: 'Работа с localStorage',
    question: 'Где в проекте хранится выбранная тема пользователя?',
    answers: ['В localStorage', 'В названии CSS-файла', 'В HTML-комментарии', 'Только в памяти вкладки'],
    correctIndex: 0,
    explanation: 'localStorage сохраняет тему в браузере и позволяет восстановить ее после обновления страницы.'
  },
  {
    stage: 'Работа с localStorage',
    question: 'Какой метод читает значение из localStorage?',
    answers: ['setItem()', 'getItem()', 'append()', 'saveTheme()'],
    correctIndex: 1,
    explanation: 'Метод getItem() используется для чтения значения по ключу.'
  },
  {
    stage: 'Работа с localStorage',
    question: 'Какой метод записывает новую тему в localStorage?',
    answers: ['writeItem()', 'pushTheme()', 'setItem()', 'appendValue()'],
    correctIndex: 2,
    explanation: 'Метод setItem() сохраняет значение по указанному ключу.'
  },
  {
    stage: 'Восстановление состояния',
    question: 'Что должно происходить при повторной загрузке страницы?',
    answers: ['Тема всегда должна становиться светлой', 'Тема должна восстанавливаться из сохраненного значения', 'Тема должна исчезать', 'Нужно заново выбирать тему вручную'],
    correctIndex: 1,
    explanation: 'При запуске страницы проект читает сохраненную тему и применяет ее снова.'
  },
  {
    stage: 'Восстановление состояния',
    question: 'Какая последовательность логична при запуске страницы?',
    answers: ['Сначала удалить стили', 'Сначала закрыть страницу', 'Прочитать localStorage, при отсутствии значения взять системную тему и применить ее', 'Сначала показать ошибку'],
    correctIndex: 2,
    explanation: 'Именно так проект получает начальное состояние темы без лишних действий.'
  },
  {
    stage: 'Восстановление состояния',
    question: 'Почему localStorage удобен для темы интерфейса?',
    answers: ['Он создает базу данных', 'Он автоматически публикует сайт', 'Он хранит настройки между сессиями браузера', 'Он заменяет сервер'],
    correctIndex: 2,
    explanation: 'Выбор пользователя остается в браузере даже после закрытия вкладки и повторного запуска.'
  },
  {
    stage: 'Системная тема и вкладки',
    question: 'Что используется как тема по умолчанию, если пользователь еще ничего не выбрал?',
    answers: ['Случайный цвет', 'Системная тема через prefers-color-scheme', 'Всегда темная тема', 'Тема из названия страницы'],
    correctIndex: 1,
    explanation: 'Если сохраненного выбора нет, проект ориентируется на системные настройки устройства.'
  },
  {
    stage: 'Системная тема и вкладки',
    question: 'Какой инструмент помогает узнать системную тему устройства?',
    answers: ['window.matchMedia()', 'window.detectTheme()', 'document.queryTheme()', 'screen.darkMode()'],
    correctIndex: 0,
    explanation: 'window.matchMedia() проверяет медиазапрос prefers-color-scheme.'
  },
  {
    stage: 'Системная тема и вкладки',
    question: 'Для чего в проекте используется событие storage?',
    answers: ['Для синхронизации темы между вкладками', 'Для удаления CSS', 'Для отправки темы на сервер', 'Для перезапуска страницы'],
    correctIndex: 0,
    explanation: 'Событие storage срабатывает в других вкладках и помогает синхронизировать их состояние.'
  },
  {
    stage: 'Масштабирование проекта',
    question: 'Что лучше использовать для нескольких страниц сайта?',
    answers: ['Разный код темы на каждой странице', 'Один общий JS-файл и общие CSS-переменные', 'Только локальные inline-стили', 'Отдельный фон для каждой страницы без логики'],
    correctIndex: 1,
    explanation: 'Общая логика и единые переменные делают проект масштабируемым и удобным в поддержке.'
  },
  {
    stage: 'Масштабирование проекта',
    question: 'В чем ограничение localStorage по сравнению с серверным хранением?',
    answers: ['Не работает со строками', 'Не синхронизирует настройки между устройствами автоматически', 'Не работает в браузере', 'Не может хранить тему'],
    correctIndex: 1,
    explanation: 'localStorage хранит данные локально в браузере и не переносит их между устройствами само по себе.'
  },
  {
    stage: 'Масштабирование проекта',
    question: 'Зачем в проект добавлена отдельная страница с архитектурой и отдельная страница-квест?',
    answers: ['Чтобы увеличить число файлов без пользы', 'Чтобы убрать JavaScript из проекта', 'Чтобы показать масштабируемость решения и добавить интерактивный формат', 'Чтобы не использовать localStorage'],
    correctIndex: 2,
    explanation: 'Так проект показывает не только саму тему, но и то, как решение расширяется и проверяется интерактивно.'
  }
];

const questionElement = document.getElementById('quiz-question');
const optionsElement = document.getElementById('quiz-options');
const feedbackElement = document.getElementById('quiz-feedback');
const metaElement = document.getElementById('quiz-meta');
const stageElement = document.getElementById('quiz-stage');
const timerElement = document.getElementById('quiz-timer');
const scoreElement = document.getElementById('quiz-score');
const nextButton = document.getElementById('next-question');
const restartButton = document.getElementById('restart-quiz');
const progressBar = document.getElementById('quiz-progress-bar');
const resultBox = document.getElementById('quiz-result');
const resultText = document.getElementById('quiz-result-text');

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 20;
let timerId = null;
let answered = false;

function stageLabel(index) {
  return `Этап ${Math.ceil((index + 1) / 3)} из 5`;
}

function updateScore() {
  scoreElement.textContent = String(score);
}

function updateProgress() {
  const progress = ((currentQuestionIndex) / quizData.length) * 100;
  progressBar.style.width = `${progress}%`;
}

function clearTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
}

function setFeedback(text, type) {
  feedbackElement.textContent = text;
  feedbackElement.className = 'quiz-feedback';
  if (type) {
    feedbackElement.classList.add(type === 'success' ? 'is-success' : 'is-error');
  }
}

function lockOptions(correctIndex, selectedIndex = null) {
  const buttons = optionsElement.querySelectorAll('.quiz-option');
  buttons.forEach((button, index) => {
    button.disabled = true;
    button.classList.add('is-disabled');
    if (index === correctIndex) {
      button.classList.add('is-correct');
    } else if (selectedIndex !== null && index === selectedIndex) {
      button.classList.add('is-wrong');
    }
  });
}

function finishQuestion(isCorrect, explanation) {
  answered = true;
  nextButton.disabled = false;
  clearTimer();
  setFeedback(explanation, isCorrect ? 'success' : 'error');
}

function handleTimeout() {
  const current = quizData[currentQuestionIndex];
  lockOptions(current.correctIndex);
  finishQuestion(false, `Время вышло. ${current.explanation}`);
}

function startTimer() {
  clearTimer();
  timeLeft = 20;
  timerElement.textContent = String(timeLeft);
  timerId = setInterval(() => {
    timeLeft -= 1;
    timerElement.textContent = String(timeLeft);
    if (timeLeft <= 0) {
      handleTimeout();
    }
  }, 1000);
}

function handleAnswer(selectedIndex) {
  if (answered) {
    return;
  }

  const current = quizData[currentQuestionIndex];
  const isCorrect = selectedIndex === current.correctIndex;
  if (isCorrect) {
    score += 10;
    updateScore();
  }

  lockOptions(current.correctIndex, selectedIndex);
  finishQuestion(isCorrect, current.explanation);
}

function renderQuestion() {
  const current = quizData[currentQuestionIndex];
  answered = false;
  nextButton.disabled = true;
  resultBox.hidden = true;
  setFeedback('', null);

  metaElement.textContent = `Вопрос ${currentQuestionIndex + 1} из ${quizData.length}`;
  stageElement.textContent = stageLabel(currentQuestionIndex);
  questionElement.textContent = current.question;
  optionsElement.innerHTML = '';

  current.answers.forEach((answer, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'quiz-option';
    button.textContent = answer;
    button.addEventListener('click', () => handleAnswer(index));
    optionsElement.appendChild(button);
  });

  updateProgress();
  startTimer();
}

function showResult() {
  clearTimer();
  progressBar.style.width = '100%';
  questionElement.textContent = 'Квест завершен';
  metaElement.textContent = `Правильных ответов: ${score / 10} из ${quizData.length}`;
  stageElement.textContent = 'Финальный результат';
  optionsElement.innerHTML = '';
  nextButton.disabled = true;
  setFeedback('Все вопросы пройдены. Итог уже подсчитан.', 'success');
  resultBox.hidden = false;

  if (score >= 130) {
    resultText.textContent = `Итог: ${score} очков. Тема, localStorage и масштабирование усвоены очень уверенно.`;
  } else if (score >= 90) {
    resultText.textContent = `Итог: ${score} очков. Основная логика темы понятна, осталось только закрепить детали.`;
  } else {
    resultText.textContent = `Итог: ${score} очков. Есть база, но стоит еще раз пройти вопросы и повторить ключевые методы.`;
  }
}

function nextQuestion() {
  currentQuestionIndex += 1;
  if (currentQuestionIndex >= quizData.length) {
    showResult();
    return;
  }
  renderQuestion();
}

function restartQuiz() {
  clearTimer();
  currentQuestionIndex = 0;
  score = 0;
  updateScore();
  renderQuestion();
}

nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);

updateScore();
renderQuestion();
