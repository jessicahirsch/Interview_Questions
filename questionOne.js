// Will this unit test function?
// If not, why would it fail?

let list =  Array.from(document.querySelectorAll("ul[role='listbox'] > li"));
let item = listbox.find(t => t.innerText.includes("item"));
item.click();