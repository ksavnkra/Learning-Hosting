function foo(param1) {
    if(param1){
        console.log(param1);
    }
    else{
        console.log("Hello World!");
    }
    
}
// Always use ? before . operator to avoid errors if the element is not found. It is a good practice.
// For eg. document.getElementById("tag1")?.innerHTML = "How are you?"; 
// setTimeout(() => {
//     console.log("This is a delayed message and will be displayed after 5 sec.");
//     foo();
// }, 5000);

setTimeout(foo, 3000);

// function changeText() {
//     document.getElementById("data").innerHTML = "Loading....";
//     document.getElementById("data").style.fontSize = "30px";
//     document.getElementById("data").style.padding = "20px";
// }

// setTimeout(changeText, 3000);

function loadData() {
  // document.getElementById("data").style.fontSize = "15px";
  // document.getElementById("data").style.padding = "0px";
  document.getElementById("data").innerHTML = `<table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>Product 1</td>
                    <td>$10</td>
                    <td>This is a great product.</td>
                </tr>
                <tr>
                    <td>Product 2</td>
                    <td>$20</td>
                    <td>This is another great product.</td>
                </tr>
            </thead>
        </table>`;
}
setTimeout(foo, 5000);
setTimeout(loadData, 5000);
