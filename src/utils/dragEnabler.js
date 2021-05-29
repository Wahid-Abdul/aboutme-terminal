
const dragElement = (elm, elmContainer) => {
    var pos1, pos2, pos3, pos4;
    elm.onmousedown = dragMouseDown;
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      //get x , y when i click the mouse
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmousemove = dragMouseMove;
      document.onmouseup = dragMouseUp;
    }
  
    function dragMouseMove(e) {
      e = e || window.event;
      e.preventDefault();
      //get x , y when i move the mouse
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      //update
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmContainer.style.top = elmContainer.offsetTop - pos2 + "px";
      elmContainer.style.left = elmContainer.offsetLeft - pos1 + "px";
    }
  
    function dragMouseUp() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
  
  export default dragElement;
