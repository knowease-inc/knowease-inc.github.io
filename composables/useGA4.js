export function useGA4() {
  /**
   * GA4에 클릭된 이벤트를 전송하는 함수
   * @param {string} eventName - 이벤트 이름
   * @param {Object} params - 이벤트 파라미터
   */
  const trackEvent = (eventName, params = {}) => {
    if (typeof gtag === "function") {
      gtag("event", eventName, params,);
      console.log(`[GA4] Event tracked: ${eventName}`, params);
    } else {
      console.warn("[GA4] gtag is not initialized");
    }
  };

  return {
    trackEvent,
  };
}
