const button = document.querySelector('.click')
let modal = document.querySelector('.modal')
let spanModal = document.getElementsByClassName('closeBtn')[0]
button.addEventListener('click', modalPopup)
let audio = document.querySelector('.audioBtn')
let music = document.querySelector('audio')
audio.addEventListener('click', playMusic)

function playMusic() {
  if (music.paused) {
    music.play()
  } else {
    music.pause()
  }
}

function modalPopup() {
  modal.style.display = 'block'
  spanModal.addEventListener('click', closeSpanModal)
  document.addEventListener('click', closeSpanModalWithTarget)
}

function closeSpanModal() {
  modal.style.display = 'none'
  spanModal.removeEventListener('click', closeSpanModal)
  document.removeEventListener('click', closeSpanModalWithTarget)
}

function closeSpanModalWithTarget(targetModal) {
  if (targetModal.target === modal) {
    modal.style.display = 'none'
    document.removeEventListener('click', closeSpanModalWithTarget)
    spanModal.removeEventListener('click', closeSpanModal)
  }
}
