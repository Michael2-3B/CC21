document.getElementById("start").onclick = (x => {
  var counter = document.getElementById("counter");
  var box1 = document.getElementById("q1");
  var box2 = document.getElementById("q2");
  var box3 = document.getElementById("q3");
  var box4 = document.getElementById("q4");
  var boxArray = [box1, box2, box3, box4];
  boxArray.map(box=>{box.disabled=true;return box});

  var pi = unscramble();
  var trueBox;
  var gameDigit = 0;
  var theBox;

  var seed = 1;

  function newDigit() {
    boxArray.forEach((box,index)=>{
        box.onclick = function() {
            if (trueBox == index) {
              gameDigit += 1;
              newDigit();
            } else {
              location.reload();
            }
        }
        do {
          box.innerText = Math.floor(Math.random() * 10);
        } while (box.innerText == pi[gameDigit]);
        box.innerText += gameDigit?'':'.';
    });

    trueBox = Math.floor(Math.random() * 4);
    theBox = boxArray[trueBox];
    theBox.innerHTML = pi[gameDigit] + (gameDigit?'':'.');
  }


  function unscramble() {
    var encrypted = "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"

    return (U => {
      U = atob(U)
      for (var l, t = atob("MnFyMTFDUk5kNVRpMGFiOEFwSlpvVllaeWlUQ05hZkkxQlJxaXZ0TWRMRFZJNmFCdjBodktlY1ZVTzlTc1B4TVBUcU9oUDJhZlVtZUhsRm9tTWUxVWV0T2Z2UkVvQzNUeXRQSjJxMWh4dFF0NDNaZzIxcGJRQThMb1JuQzBvSnpOWTFqR1AxOXB1QmxpOXpvaHFVc2ZRTGVUckpVUzBkS2VvSE9GSGxKM0E3eEJqaUloRW1yeFlXcDIzcHNwZDlXUDhhUGVH"), a = [], o = 0, m = "", R = 0; R < 256; R++) a[R] = R
      for (R = 0; R < 256; R++) o = (o + a[R] + t.charCodeAt(R % t.length)) % 256, l = a[R], a[R] = a[o], a[o] = l
      R = 0, o = 0
      for (var x = 0; x < U.length; x++) o = (o + a[R = (R + 1) % 256]) % 256, l = a[R], a[R] = a[o], a[o] = l, m += String.fromCharCode(U.charCodeAt(x) ^ a[(a[R] + a[o]) % 256])
      return m
    })(encrypted);
  }
  return (function() {
    boxArray.map(box=>{box.disabled=false;return box});
    document.getElementById("start").style.display = "none";
    newDigit();
  })
})();
