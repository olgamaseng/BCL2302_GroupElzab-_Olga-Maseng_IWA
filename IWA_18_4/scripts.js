import{
    TABLES, COLUMNS, state, createOrderData, updateDragging
} from './data.js'
import{
    createOrderHtml, html, updateDraggingHtml, moveToColumn
} from'./view.js'



/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
}


let dragged;
const handleDragStart = (event) => {
  dragged = event.target;
};
const handleDragDrop = (j) => {
  j.target.append(dragged);
};
const handleDragEnd= (p) =>{
const background = p.target.closest("section");
background.style.backgroundColor="";
};
for (const htmlArea of Object.values(html.area)){
    htmlArea.addEventListener("dragover", handleDragOver);
    htmlArea.addEventListener("dragstart", handleDragStart);
    htmlArea.addEventListener("drop", handleDragDrop);
    htmlArea.addEventListener("dragend", handleDragEnd);
  }

//the below variables namely handlehelptoggle and handlehelpcancel are the one's that are responsible for directing the user of how the app works

const handleHelpToggle = (event) => {
    html.help.overlay.style.display = "block"
}
const handleHelpCancel = (event) => {
     html.help.overlay.style.display = ''
     html.other.add.focus()
  }

 //this function is responsible for the add order button 
 const handleAddToggle = (event) => {
     html.add.overlay.style.display = "block"
  }

  //this function is responsible for the cancel button on the pop up that pops up when you press add order

 const handleAddToggleOff = (event) => {
     html.add.overlay.style.display = ""
     
}
//this is the function that will allow the user to make a selection of the order they just made. 
 const handleAddSubmit = (event) => {
    event.preventDefault();
const order = {
    id: state.orders,
    title: html.add.title.value,
    title: html.add.title.value,
    created: new Date(),
};

const orderElement = createOrderHtml(order);
html.area.ordered.append(orderElement);
html.add.form.reset();
html.add.overlay.close();
      };


 const handleEditToggle = (event) => {
    html.edit.overlay.style.display = 'block'
 }
 const handleEditSubmit = (event) => {
    html.edit.overlay.style.display = ''
      };
  
//This is for the cancel button that will enable you to cancel
 const handleEditSubmitoff = (event) => {
   html.edit.overlay.style.display = ''
 }

//  const handleDelete = (event) => {
//      html.delete.edit.overlay.style.display = '' 
//  }
const handleDelete = () => {
    const idToBeDeleted = html.edit.id.value;
    const orderToBeDeleted = document.querySelector(`[data-id="${idToBeDeleted}"]`);
    orderToBeDeleted.remove();
    
  };

html.add.cancel.addEventListener('click', handleAddToggleOff)

html.other.add.addEventListener('click', handleAddToggle)

html.add.form.addEventListener('submit', handleAddSubmit)

html.other.grid.addEventListener('click', handleEditToggle)

html.edit.cancel.addEventListener('click', handleEditSubmitoff)

html.edit.form.addEventListener('submit', handleEditSubmit)

html.edit.delete.addEventListener('click', handleDelete)

html.help.cancel.addEventListener('click', handleHelpCancel)

html.other.help.addEventListener('click', handleHelpToggle)



    