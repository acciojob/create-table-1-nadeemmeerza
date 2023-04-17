function insert_Row() {
    //Write your code here
   let tr = document.createElement("tr");
	let td = document.createElement("td");
	let table = document.getElementById("sampleTable");
	const row = table.insertRow(0);
	const cell1 = row.insertCell(0);
	cell1.innerText = "new cell1";
	const cell2 = row.insertCell(1);
	cell2.innerText = "new cell2"
	
	
  
}
