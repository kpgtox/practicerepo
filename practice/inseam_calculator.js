// calculate range of inseam length based on the bicycle size present in the bike's product page:

$(document).ready(function(){

  function getInseamRange(min, max){
    // given formula to calculate inseam length based on bike size:
    inseam_min_cm = (min/0.665);
    inseam_max_cm = (max/0.665);
    inseam_min_in = inseam_min_cm/2.54;
    inseam_max_in = inseam_max_cm/2.54;
    // rounding up:
    inseam_min_cm = inseam_min_cm.toPrecision(2);
    inseam_max_cm = inseam_max_cm.toPrecision(2);
    inseam_min_in = inseam_min_in.toPrecision(2);
    inseam_max_in = inseam_max_in.toPrecision(2);
    return [inseam_min_cm, inseam_max_cm, inseam_min_in, inseam_max_in];
  }

  function printInseamOnPage(){
    var inseam_range = getInseamRange(size_min, size_max);
    // console.log(inseam_range);
    // var inseam_msg = `Recommended for inseam height of ${inseam_range[0]}min - ${inseam_range[1]}max cm (${inseam_range[2]}min - ${inseam_range[3]}max inches).`;
    var inseam_msg = 'Recommended for inseam height of '+inseam_range[0]+'min - '+inseam_range[1]+'max cm ('+inseam_range[2]+'min - '+inseam_range[3]+'max inches).';
    // place recommended message in the table:
    // size_table.tBodies[0].innerHTML += '<tr><td><b>Inseam:</b></td><td>' + inseam_msg + '</td></tr>';
    //OR
    //place receommended message in the area requested:
    // create a new p element and append the recommended message to it:
    var inseam_tag = document.createElement("p");
    var inseam_txtNode = document.createTextNode(inseam_msg);
    inseam_tag.appendChild(inseam_txtNode);
    inseam_tag.setAttribute('style', 'display:inline-block; float:right; font-size:medium; padding:30px 30% 0px 0px;');
    // apply inline block style to both calculate link and p element and place p element after the calculate anchor tag:
    var calc_link = document.getElementsByClassName('calculate-size-btn')[0];
    calc_link.setAttribute('style', 'display:inline-block');
    calc_link.after(inseam_tag);
  }


  var inseam_min_cm, inseam_max_cm, inseam_min_in, inseam_max_in;
  // given bike sizes and their respective ranges:
  var sizes = { 47: '47-47.5-48', 48: '47-47.5-48-48.5-49', 49: '48-48.5-49-49.5-50-50.5', 50: '49-49.5-50-50.5-51-51.5',
  51: '50-50.5-51-51.5-52-52.5', 52: '51-51.5-52-52.5-53-53.5', 53: '52-52.5-53-53.5-54-54.5', 54: '53-53.5-54-54.5-55-55.5',
  55: '54-54.5-55-55.5-56-56.5', 56: '55-55.5-56-56.5-57-57.5', 57: '56-56.5-57-57.5-58-58.5', 58: '57-57.5-58-58.5-59-59.5',
  59: '58-58.5-59-59.5-60-60.5', 60: '59-59.5-60-60.5-61-61.5', 61: '60-60.5-61-61.5-62-62.5', 62: '61-61.5-62-62.5-63-63.5',
  63: '62-62.5-63-63.5-64-64.5', 64: '63-63.5-64', 65: '64-65', 66: '65-66-67', 67: '66-67' };
  // grab bike size from the product page:
  var size_table = document.getElementById('bikesize').getElementsByTagName('table')[0];
  var bike_size_str = size_table.rows[0].cells[1].innerText;
  var bike_size = parseInt(bike_size_str.split(' ')[0]);
  // convert bike size to cm if needed:
  if(!bike_size_str.includes('cm')){
    bike_size *= 2.54;
  }
  // grab size range for the current bike's size from the given range:
  var size_range = sizes[bike_size].split('-');
  // get recommended minimum and maximum bicycle size from the range:
  var size_min = parseFloat(size_range[0]);
  var size_max = parseFloat(size_range[size_range.length - 1]);
  // display recommended inseam range:
  printInseamOnPage();

});
