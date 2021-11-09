//SUPPORTS FUNCTIONS
function standardize(_value, _default) {
  switch (_value) {
    case "": case null: case undefined:
      return _default
  
    default:
      return _value
  }
}

function in_element_id(_element_id) {
  return document.getElementById(_element_id)
}

function in_element_class(_element_class) {
  return document.getElementsByClassName(_element_class)
}

//Animations and Visual elements
function moviment_in_screen(_is_horizontal) {
  let scrollPosition = window.pageYOffset
  let movibleItens = in_element_class("element_is_movible")
  let axis
  
  if (_is_horizontal ) { axis = "translateX"}else{axis = "translateY"}
    for (let i = 0; i < movibleItens.length; i++) {
      console.log(scrollPosition)
      movibleItens[i].style.transform = `${axis}(${scrollPosition}px)`
      movibleItens[i].style.transitionDuration = "0.3s"
    }
}

function moviment_background_in_screen(_is_horizontal, _pause, _invisible) {
  let scrollPosition = (window.scrollY)*-1
  let movibleItens = in_element_class("background_is_movible")

  for (let i = 0; i < movibleItens.length; i++) {
      movibleItens[i].style.backgroundPositionX = `calc(50% - ${scrollPosition}px)`
      movibleItens[i].style.transitionDuration = "0.3s"
  }
}

function show_footer_bar(){
  let scrollPosition = (window.scrollY)
  let maxScroll = (document.body.clientHeight) -(window.innerHeight)
  
  if (scrollPosition >= maxScroll){
    in_element_id("FOOTER").style.display = "flex"
    console.log("funcionou")
  }else{
    in_element_id("FOOTER").style.display = "none"
  }
}

function change_font_family(_element, _new_family) {
  let currentFamily = window.getComputedStyle(_element).fontFamily
  _element.style.fontFamily = _new_family

  _element.onmouseleave = ()=>{
    _element.style.fontFamily = currentFamily
  }
}

function hide_or_show_item(_item, _displayCurrent) {
  let itemList = _item.parentNode.getElementsByClassName("hide_bar")
  _displayCurrent = standardize(_displayCurrent, "block")

  for (let i = 0; i < itemList.length; i++) {
    let checkDisplay = window.getComputedStyle(itemList[i]).display

    switch (checkDisplay) {
      case "none":
        itemList[i].style.display = _displayCurrent

        if (itemList[i].parentNode.className == "last_parent_class"){
          itemList[i].parentNode.style.boxShadow = "0px 0px 15px 5px #0000001A"
        }else{
          itemList[i].parentNode.parentNode.style.boxShadow = "0px 0px 15px 5px #0000001A"
        }
        
        break;
    
      default:
        itemList[i].style.display = "none"
        if (itemList[i].parentNode.className == "last_parent_class"){
          itemList[i].parentNode.style.boxShadow = "none"
        }else{
          itemList[i].parentNode.parentNode.style.boxShadow = "none"
        }
        break;
    }
  }
}

window.onscroll = ()=>{
  moviment_background_in_screen(true)
  show_footer_bar()
}
/*// Mouse events

*/