// Shared utilities for all lesson exercises

// Mark active nav link
document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });
});

// Normalise text for comparison (strip diacritics + punctuation)
function norm(s) {
  if (!s) return '';
  return s.toLowerCase()
    .replace(/[ą]/g,'a').replace(/[ć]/g,'c').replace(/[ę]/g,'e')
    .replace(/[ł]/g,'l').replace(/[ń]/g,'n').replace(/[ó]/g,'o')
    .replace(/[ś]/g,'s').replace(/[ź]/g,'z').replace(/[ż]/g,'z')
    .replace(/[à-äå]/g,'a').replace(/[è-ë]/g,'e').replace(/[ì-ï]/g,'i')
    .replace(/[ò-öø]/g,'o').replace(/[ù-ü]/g,'u')
    .replace(/[^a-z0-9 ]/g,'')
    .replace(/\s+/g,' ').trim();
}

// MC quiz helper: call with (buttonEl, isCorrect, feedbackEl, correctText)
function handleMC(btn, isCorrect, fbEl, correctText) {
  btn.closest('.ex-options').querySelectorAll('.ex-opt').forEach(b => b.disabled = true);
  btn.classList.add(isCorrect ? 'correct' : 'wrong');
  fbEl.style.display = 'block';
  if (isCorrect) {
    fbEl.className = 'ex-feedback ok';
    fbEl.textContent = '✓ Goed zo!';
  } else {
    fbEl.className = 'ex-feedback err';
    fbEl.textContent = '✗ Niet helemaal. Correct: ' + correctText;
  }
}

// Fill-in helper
function handleFill(inputEl, btnEl, fbEl, correct, alts = []) {
  const val = inputEl.value.trim();
  if (!val) return;
  const accepted = [correct, ...alts].map(norm);
  const isCorrect = accepted.includes(norm(val));
  inputEl.disabled = true;
  btnEl.disabled = true;
  inputEl.classList.add(isCorrect ? 'ok' : 'err');
  fbEl.style.display = 'block';
  if (isCorrect) {
    fbEl.className = 'ex-feedback ok';
    fbEl.textContent = '✓ Correct!';
  } else {
    fbEl.className = 'ex-feedback err';
    fbEl.textContent = '✗ Correct antwoord: ' + correct;
  }
}
