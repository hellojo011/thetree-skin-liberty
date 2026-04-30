export default function initEasterEgg() {
  if (typeof window === 'undefined') return

  // 이스터에그 초기화 중복 방지
  if (window.__FURPARK_EASTER_EGG__) return
  window.__FURPARK_EASTER_EGG__ = true

  console.log(
    '%c개발자 콘솔에서 접근하셨습니다.\nwith Furpark Wiki',
    'font-size:15px; color: blue; font-weight:bold;'
  )
  console.log(
	'%c이곳에 출처가 불분명한 코드를 작성하면 계정의 접근권한을 탈취당할 수 있습니다. 조심하여주세요.',
	'font-size:25px; color: red; font-weight:bold;'
  )

  // 콘솔 명령 등록
  window.clonePF = function () {
    const path = decodeURI(window.location.pathname)

    if (!path.startsWith('/w/사용자:')) {
      console.log('이스터에그 조건이 일치하지 않음')
      return
    }

    const content = document.querySelector('.wiki-content')
    const paragraph = document.querySelector('.wiki-paragraph')

    if (!content || !paragraph) {
      console.log('필요한 DOM을 찾을 수 없습니다')
      return
    }
	const clone = paragraph.cloneNode(true);

    content.insertAdjacentElement('afterbegin', clone)

    alert("EASTER EGG FOUND!");
  }

  window.bindCloneTrigger = function () { 
	 const strong = document.querySelector('strong.clone-trigger')
	  if (!strong) return

	  strong.addEventListener('click', () => {
	    window.clonePF()
	  })
  }
  window.doABarrelRoll = function () {
    const root = document.documentElement

    if (root.classList.contains('barrel-roll')) {
      console.log('이미 회전 중입니다.')
      return
    }

    root.classList.add('barrel-roll')

    setTimeout(() => {
      root.classList.remove('barrel-roll')
    }, 1000)

    console.log('🎢 Do a barrel roll!')
  }
}

