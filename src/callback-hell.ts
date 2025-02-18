function doStep1(init: number, callback: (result: number) => void) {
    const result = init + 1;
    setTimeout(() => {
      callback(result);
    }, 0);
  }
  
  function doStep2(init: number, callback: (result: number) => void) {
    const result = init + 2;
    callback(result);
  }
  
  function doStep3(init: number, callback: (result: number) => void) {
    const result = init + 3;
    callback(result);
  }
  
  function doOperation(init: number) {
    doStep1(init, (result1) => {
      doStep2(result1, (result2) => {
        doStep3(result2, (result3) => {
          console.log(`result: ${result3}`);
        });
      });
    });
    console.log('do other things ...');
  }
  
  doOperation(10);
  