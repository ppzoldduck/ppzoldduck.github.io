export function initUI(board) {
  const clearBtn = document.getElementById("clearBtn");
  const colorPicker = document.getElementById("colorPicker");

  clearBtn.onclick = () => board.clear();
  colorPicker.oninput = (e) => board.setColor(e.target.value);
}
