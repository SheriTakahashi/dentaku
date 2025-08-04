function get_calc(btn) {
  let input_value = btn.value;

  if (input_value == "=") {
    document.dentaku.display.value = eval(document.dentaku.display.value);
  } else if (input_value == "AC") {
    document.dentaku.display.value = "";
  } else {
    let value_to_disply = input_value;
    if (value_to_disply == "×") {
      value_to_disply = "*";
    } else if (value_to_disply == "÷") {
      value_to_disply = "/";
    }
    document.dentaku.display.value += value_to_disply;
  }
}
