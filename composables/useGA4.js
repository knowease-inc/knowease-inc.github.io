export function useGA4() {
  /**
   * GA4에 클릭된 이벤트를 전송하는 함수
   * @param {string} eventName - 이벤트 이름
   * @param {Object} params - 이벤트 파라미터
   */
  const trackEvent = (eventName, params = {}) => {
    if (typeof gtag === 'function') {
      gtag('event', eventName, params)
    } else {
      console.warn('[GA4] gtag is not initialized')
    }
  }

  /**
   * 특정 섹션이 뷰포트에 일정 비율 이상 보이면 감지하여 GA4 이벤트 전송
   * @param {string} sectionName - 감지할 섹션의 data-section 속성 값
   */
  const lastTrackedSection = ref(null) // 마지막으로 감지된 섹션 저장

  const trackSectionView = (sectionName) => {
    /**
     * Intersection Observer 콜백 함수
     * @param {IntersectionObserverEntry[]} entries - 관찰된 요소들의 정보
     */
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const isIntersecting = entry.isIntersecting
        const intersectionRatio = entry.intersectionRatio

        // 요소가 25% 이상 뷰포트에 들어오면 감지 (높이가 큰 요소도 감지됨)
        if (intersectionRatio >= 0.25 && isIntersecting) {
          if (lastTrackedSection.value !== sectionName) {
            lastTrackedSection.value = sectionName

            trackEvent('section_view', {
              event_category: 'engagement',
              event_label: `Viewed ${sectionName}`,
              section: sectionName,
              non_interaction: true,
            })
          }
        }
        // 사용자가 해당 섹션을 벗어나면 다시 감지 가능하도록 초기화
        else if (!isIntersecting && lastTrackedSection.value === sectionName) {
          lastTrackedSection.value = null
        }
      })
    }

    /**
     * Intersection Observer 초기화 및 섹션 감지 시작
     */
    const initializeObserver = () => {
      const section = document.querySelector(`[data-section="${sectionName}"]`)
      if (section) {
        const observer = new IntersectionObserver(observerCallback, {
          rootMargin: '0px',
          threshold: [0.25], // 25% 이상 보이면 감지 (높이가 큰 섹션도 감지 가능)
        })

        observer.observe(section)
      } else {
        console.warn(`⚠️ [GA4] ${sectionName} 섹션을 찾을 수 없습니다.`)
      }
    }

    // 컴포넌트가 마운트된 후, Intersection Observer를 설정
    onMounted(async () => {
      await nextTick() // DOM이 완전히 렌더링된 후 실행

      setTimeout(() => {
        initializeObserver()
      }, 500)
    })

    return {}
  }

  return {
    trackEvent,
    trackSectionView,
  }
}
