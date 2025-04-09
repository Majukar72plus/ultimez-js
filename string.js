function analyzeString(str) {
    let length = str.length;
    let lower = str.toLowerCase();
    let upper = str.toUpperCase();
    let containsJavaScript = lower.includes("javascript");
    let aCount = 0;
  
    for (let i = 0; i < lower.length; i++) {
      if (lower[i] === 'a') {
        aCount++;
      }
    }
  
    return {
      length: length,
      lowerCase: lower,
      upperCase: upper,
      containsJavaScript: containsJavaScript,
      aCount: aCount
    };
  }
  console.log(analyzeString("JavaScript is Amazing!"));
  