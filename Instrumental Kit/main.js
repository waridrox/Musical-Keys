function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; //if there is no audio-key attribute associated then exit.

    key.classList.add('playing');//adds a class list called playing to the current set of classes
    audio.currentTime = 0; //rewinds the key to the previous state so that sound can be played continuosly without finishing playing the audio altogether.
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);