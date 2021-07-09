# Password-Generator
03 JavaScript: Password Generator


####Copy to Clipboard bonus
I found this code here
https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard
Using execCommand()
The document.execCommand() method's "cut" and "copy" commands can be used to replace the clipboard's current contents with the selected material. These commands can be used without any special permission if you are using them in a short-lived event handler for a user action (for example, a click handler).

For example, suppose you've got a popup that includes the following HTML:

<input id="input" type="text"/>
<button id="copy">Copy</button>
Copy to Clipboard
To make the "copy" button copy the contents of the <input> element, you can use code like this:

function copy() {
  var copyText = document.querySelector("#input");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector("#copy").addEventListener("click", copy);
Copy to Clipboard
Because the execCommand() call is inside a click event handler, you don't need any special permissions here.