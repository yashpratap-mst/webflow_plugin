// (function () {
//   const emojiPickerContainer = document.createElement("div");
//   emojiPickerContainer.id = "emoji-picker";
//   document.body.appendChild(emojiPickerContainer);

//   const emojiList = [
//     "😀",
//     "😂",
//     "😃",
//     "😄",
//     "😅",
//     "😆",
//     "😉",
//     "😊",
//     "😋",
//     "😎",
//   ];

//   const emojiPicker = document.createElement("div");
//   emojiPicker.classList.add("emoji-picker");
//   emojiList.forEach((emoji) => {
//     const emojiButton = document.createElement("button");
//     emojiButton.textContent = emoji;
//     emojiButton.addEventListener("click", () => {
//       const selectedDiv = document.querySelector(".selected-div");
//       if (selectedDiv) {
//         selectedDiv.innerHTML += emoji; // Append emoji to selected div
//       } else {
//         alert("Please select a div first.");
//       }
//     });
//     emojiPicker.appendChild(emojiButton);
//   });

//   emojiPickerContainer.appendChild(emojiPicker);

//   document.addEventListener("click", function (e) {
//     if (e.target && e.target.matches(".example-div")) {
//       if (e.target.classList.contains("selected-div")) {
//         e.target.classList.remove("selected-div");
//       } else {
//         e.target.classList.add("selected-div");
//       }
//     }
//   });
// })();
