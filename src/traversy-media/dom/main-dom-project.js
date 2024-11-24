const newItemForm = document.getElementById("addForm");
const newItemSubmitButton = newItemForm.querySelector(".btn");
newItemSubmitButton.addEventListener("click", onNewItemFormSubmit);

const removeItemButtons = document.getElementsByClassName("delete");
for(const button of removeItemButtons)
{
    button.addEventListener("click", onRemoveItemButtonPressed);
}

const searchInputField = document.getElementById("filter");
searchInputField.addEventListener("input", onSearchInputFieldChange);

function onSearchInputFieldChange(event)
{
    let filterValue = event.target.value;
    filterItemsByText(filterValue);
}

function filterItemsByText(textFilterValue)
{
    const items = document.getElementsByClassName("list-group-item");

    if (textFilterValue.replace(/\s+/g, '') === '')
    {
        for (const item of items)
        {
            item.style.display = "";
        }
        return;
    }

    for (const item of items)
    {
        if (item.innerText.toLowerCase().includes(textFilterValue))
        {
            item.style.display = "";
        }
        else
        {
            item.style.display = "none";
        }
    }
}

function onRemoveItemButtonPressed(event)
{
    const itemToRemove = event.target.parentElement;
    itemToRemove.remove();
}

function onNewItemFormSubmit(event)
{
    event.preventDefault();

    const newItemForm = document.getElementById("addForm");
    const newItemTextInput = newItemForm.querySelector("#item")

    if (newItemTextInput.value !== "")
    {
        const newItemName = newItemTextInput.value;

        const item = document.createElement("li");
        item.classList.add("list-group-item");
        item.innerText = newItemName
        
        const button = document.createElement("button");
        button.classList.add("btn", "btn-danger", "btn-sm", "float-right", "delete");
        button.innerText = "X";
        button.addEventListener("click", onRemoveItemButtonPressed);
        item.appendChild(button);
    
        const itemsList = document.getElementById("items");
        itemsList.appendChild(item)

        newItemTextInput.value = "";

        const searchInputField = document.getElementById("filter");
        searchInputField.value = "";
        filterItemsByText("");
    }
}