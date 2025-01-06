function t(){return{trackEvent:(t,n={})=>{"function"==typeof gtag?(gtag("event",t,n),console.log(`[GA4] Event tracked: ${t}`,n)):console.warn("[GA4] gtag is not initialized")}}}export{t as u};
