function rotateAvatar() {
  const el = document.querySelector('.avatar')
  if (!el) return

  // 이미 회전 중이면 무시 (선택)
  if (el.classList.contains('konami-spin')) return

  el.classList.add('konami-spin')

  const onEnd = () => {
    el.classList.remove('konami-spin')
    el.removeEventListener('animationend', onEnd)
  }

  el.addEventListener('animationend', onEnd)
}

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'KeyB',
]

export default function initKonamiEasterEgg() {
  let index = 0

  const handler = (e) => {
    const code = e.code

	const konamiInProgress = index > 0

	const isKonamiKey = KONAMI_CODE.includes(code)

	if (konamiInProgress && isKonamiKey) {
      e.preventDefault()
      e.stopPropagation()
    }

    if (code === KONAMI_CODE[index]) {
      index++
      if (index === KONAMI_CODE.length) {
        rotateAvatar()
        index = 0
      }
    } else {
      index = 0
    }
  }

  window.addEventListener('keydown', handler)
}

