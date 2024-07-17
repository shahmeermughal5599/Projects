//Add Task
//Remove Task
//Search Tasks
//Clear Task
//Select Form

const taskInputForm = document.querySelector("#task-form");

// console.log(taskInputForm, "taskInputForm");

taskInputForm.addEventListener("submit", function (event) {
  event.preventDefault(); //default functionality ko rukdo
  //   console.log(event, "form is submited");
  const selectTaskInputField = document.querySelector("#task");
  const taskInputValue = selectTaskInputField.value;
  //task input field na ho =!
  if (!taskInputValue) {
    alert("please fill the task input field");
    //wapsi jao
    return;
  }
  //   console.log("it is working");
  const collection = document.querySelector(".collection");
  //   console.log(collection, "collection");

  //   collection.append("<h2>asdasdasdasdasd</h2>"); //aese nai hoga
  //   const createH2Element = document.createElement("h2"); //<h2></h2>
  //   createH2Element.innerText = "asdasdasdasdasd"; //<h2></h2>
  //   console.log(createH2Element, "createH2Element");
  //   collection.append(createH2Element);

  /*
 <li class="collection-item">
                  List Item
                  <a href="#" class="delete-item secondary-content">
                    <i class="fa fa-remove"></i>
                  </a>
                </li>
    */

  const createLiElement = document.createElement("li");
  createLiElement.className = "collection-item";
  createLiElement.innerHTML = ` ${taskInputValue}
                  <a href="#" class="delete-item secondary-content">
                    <i class="fa fa-remove"></i>
                  </a>`;
  collection.append(createLiElement);

  selectTaskInputField.value = "";
});

//https://www.freecodecamp.org/news/event-bubbling-in-javascript/

const selectCollection = document.querySelector(".collection");
// console.log(selectCollection, "selectCollection");

selectCollection.addEventListener("click", function (event) {
  event.preventDefault();
  //   console.log(event.target, "all collection click");
  if (event.target.className === "fa fa-remove") {
    // console.log("delete btn click");
    if (confirm("Are you sure ?")) {
      event.target.parentElement.parentElement.remove();
    }
  }
});

const selectClearTaskBtn = document.querySelector(".clear-tasks");

selectClearTaskBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (confirm("Are you sure ?")) {
    const collection = document.querySelector(".collection");
    collection.innerHTML = "";
  }
});

const filterInput = document.querySelector("#filter");

filterInput.addEventListener("keyup", function (e) {
  const currentElement = e.target;
  const filterInputValue = currentElement.value;
  const selectAllCollectionItems =
    document.querySelectorAll(".collection-item");

  // selectAllCollectionItems.length === 0

  selectAllCollectionItems.forEach(function (singleLiElement) {
    //innerText me wo ara ho jo filter input me search karre hein
    if (
      singleLiElement.innerText
        .toLowerCase()
        .indexOf(filterInputValue.toLowerCase()) === -1
    ) {
      singleLiElement.style.display = "none";
    } else {
      singleLiElement.style.display = "block";
    }
  });
});
