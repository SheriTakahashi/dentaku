// 計算結果が表示されているかどうかのフラグ
let isResultDisplayed = false;

function get_calc(btn, event) {
  // フォームの送信をキャンセル
  event.preventDefault();

  const clicked_value = btn.value;
  const display_element = document.dentaku.display;

  // 押されたボタンが数字で、かつ計算結果が表示されている状態なら、ディスプレイをクリア
  if (!isNaN(clicked_value) && isResultDisplayed) {
    display_element.value = "";
    isResultDisplayed = false; // フラグをfalseに戻す
  }

  if (clicked_value === "=") {
    try {
      let expression_to_evaluate = display_element.value;
      expression_to_evaluate = expression_to_evaluate.replace(/×/g, "*");
      expression_to_evaluate = expression_to_evaluate.replace(/÷/g, "/");
      display_element.value = eval(expression_to_evaluate);
      isResultDisplayed = true; // 計算結果が表示されたのでフラグをtrueにする
    } catch (e) {
      display_element.value = "Error";
      console.error("計算エラー:", e);
      isResultDisplayed = true; // エラー表示後もフラグをtrueにする
    }
  } else if (clicked_value === "AC") {
    display_element.value = "";
    isResultDisplayed = false; // クリアした場合はフラグをfalseにする
  } else {
    display_element.value += clicked_value;
  }
}
