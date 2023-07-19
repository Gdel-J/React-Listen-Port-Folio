const reportWebVitals = onPerfEntry => {
    // Check if the onPerfEntry callback is provided and is a function
    if (onPerfEntry && onPerfEntry instanceof Function) {
      // Dynamically import the necessary functions from web-vitals package using code-splitting
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        // Call each web-vitals function with the onPerfEntry callback
        // to report the corresponding performance metric
        getCLS(onPerfEntry);   // Cumulative Layout Shift (CLS)
        getFID(onPerfEntry);   // First Input Delay (FID)
        getFCP(onPerfEntry);   // First Contentful Paint (FCP)
        getLCP(onPerfEntry);   // Largest Contentful Paint (LCP)
        getTTFB(onPerfEntry);  // Time to First Byte (TTFB)
      });
    }
  };
  
  export default reportWebVitals;
  