let data, mapObj;

async function init(){

    let link = "https://data.cityofnewyork.us/resource/p937-wjvj.json"
    info = await fetch(link);
    data = await info.json();

    let output = document.getElementById("output");
    let build = "";

    for(let i = 0; i < data.length; i+=1){
        let file = data[i]
        build += `<div class="card">

                    <h1>${file.inspection_type}</h1>
                    <b><h3>${file.borough}</h3></b>
                    <b><h3>${file.zip_code}</h3></b>
                    <hr>
                    <h3> Inspected ${file.inspection_date}</h3>
                    <h3> Approved ${file.approved_date}</h3>
                    <hr>
                    <p>${file.street_name}</p>

                </div>`
    }
    output.innerHTML =  build

}

function filterByInspection(){
  let output = document.getElementById("output");
  let inspection = document.getElementById("inspection").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

    for(let i = 0; i < data.length; i+=1){
    let file = data[i]
    if(file.inspection_type == inspection){
        build += `<div class="card">

                    <h1>${file.inspection_type}</h1>
                    <b><h3>${file.borough}</h3></b>
                    <b><h3>${file.zip_code}</h3></b>
                    <hr>
                    <h3> Inspected ${file.inspection_date}</h3>
                    <h3> Approved ${file.approved_date}</h3>
                    <hr>
                    <p>${file.street_name}</p>
     
                </div>`;
      ct += 1;
    }
    }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

function filterByBorough(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

    for(let i = 0; i < data.length; i+=1){
    let file = data[i]
    if(file.borough == borough){
        build += `<div class="card">

                    <h1>${file.inspection_type}</h1>
                    <b><h3>${file.borough}</h3></b>
                    <b><h3>${file.zip_code}</h3></b>
                    <hr>
                    <h3> Inspected ${file.inspection_date}</h3>
                    <h3> Approved ${file.approved_date}</h3>
                    <hr>
                    <p>${file.street_name}</p>

                    
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

function filterByZip(){
  let output = document.getElementById("output");
  let zip = document.getElementById("zip").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

    for(let i = 0; i < data.length; i+=1){
    let file = data[i]
    if(file.zip_code == zip){
        build += `<div class="card">

                    <h1>${file.inspection_type}</h1>
                    <b><h3>${file.borough}</h3></b>
                    <b><h3>${file.zip_code}</h3></b>
                    <hr>
                    <h3> Inspected ${file.inspection_date}</h3>
                    <h3> Approved ${file.approved_date}</h3>
                    <hr>
                    <p>${file.street_name}</p>

                    
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}