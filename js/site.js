function HTMLButtonSelect(){
  // show the html div, and hide the others
  document.getElementById("htmlCode").classList.remove("invisibleCodeDiv");
  document.getElementById("cssCode").classList.add("invisibleCodeDiv");
  document.getElementById("javascriptCode").classList.add("invisibleCodeDiv");
  document.getElementById("jobsControllerCode").classList.add("invisibleCodeDiv");
  document.getElementById("customersControllerCode").classList.add("invisibleCodeDiv");
  document.getElementById("jobClassCode").classList.add("invisibleCodeDiv");
  document.getElementById("customerClassCode").classList.add("invisibleCodeDiv");
}

function CSSButtonSelect(){
  // show the css div, and hide the others
  document.getElementById("htmlCode").classList.add("invisibleCodeDiv");
  document.getElementById("htmlCode").classList.add("invisibleCodeDiv");document.getElementById("cssCode").classList.remove("invisibleCodeDiv");
  document.getElementById("javascriptCode").classList.add("invisibleCodeDiv");
  document.getElementById("jobsControllerCode").classList.add("invisibleCodeDiv");
  document.getElementById("customersControllerCode").classList.add("invisibleCodeDiv");
  document.getElementById("jobClassCode").classList.add("invisibleCodeDiv");
  document.getElementById("customerClassCode").classList.add("invisibleCodeDiv");
}

function JSButtonSelect(){
  // show the javascript div, and hide the others
  document.getElementById("htmlCode").classList.add("invisibleCodeDiv");
  document.getElementById("cssCode").classList.add("invisibleCodeDiv");
  document.getElementById("javascriptCode").classList.remove("invisibleCodeDiv");
  document.getElementById("jobsControllerCode").classList.add("invisibleCodeDiv");
  document.getElementById("customersControllerCode").classList.add("invisibleCodeDiv");
  document.getElementById("jobClassCode").classList.add("invisibleCodeDiv");
  document.getElementById("customerClassCode").classList.add("invisibleCodeDiv");
}

function JobControllerButtonSelect(){
  // show the job controller div, and hide the others
  document.getElementById("htmlCode").classList.add("invisibleCodeDiv");
  document.getElementById("cssCode").classList.add("invisibleCodeDiv");
  document.getElementById("javascriptCode").classList.add("invisibleCodeDiv");
  document.getElementById("jobsControllerCode").classList.remove("invisibleCodeDiv");
  document.getElementById("customersControllerCode").classList.add("invisibleCodeDiv");
  document.getElementById("jobClassCode").classList.add("invisibleCodeDiv");
  document.getElementById("customerClassCode").classList.add("invisibleCodeDiv");
}

function CustomerControllerButtonSelect(){
  // show the customer controller div, and hide the others
  document.getElementById("htmlCode").classList.add("invisibleCodeDiv");
  document.getElementById("cssCode").classList.add("invisibleCodeDiv");
  document.getElementById("javascriptCode").classList.add("invisibleCodeDiv");
  document.getElementById("jobsControllerCode").classList.add("invisibleCodeDiv");
  document.getElementById("customersControllerCode").classList.remove("invisibleCodeDiv");
  document.getElementById("jobClassCode").classList.add("invisibleCodeDiv");
  document.getElementById("customerClassCode").classList.add("invisibleCodeDiv");
}

function JobClassButtonSelect(){
  // show the job class div, and hide the others
  document.getElementById("htmlCode").classList.add("invisibleCodeDiv");
  document.getElementById("cssCode").classList.add("invisibleCodeDiv");
  document.getElementById("javascriptCode").classList.add("invisibleCodeDiv");
  document.getElementById("jobsControllerCode").classList.add("invisibleCodeDiv");
  document.getElementById("customersControllerCode").classList.add("invisibleCodeDiv");
  document.getElementById("jobClassCode").classList.remove("invisibleCodeDiv");
  document.getElementById("customerClassCode").classList.add("invisibleCodeDiv");
}

function CustomerClassButtonSelect(){
  // show the customer class div, and hide the others
  document.getElementById("htmlCode").classList.add("invisibleCodeDiv");
  document.getElementById("cssCode").classList.add("invisibleCodeDiv");
  document.getElementById("javascriptCode").classList.add("invisibleCodeDiv");
  document.getElementById("jobsControllerCode").classList.add("invisibleCodeDiv");
  document.getElementById("customersControllerCode").classList.add("invisibleCodeDiv");
  document.getElementById("jobClassCode").classList.add("invisibleCodeDiv");
  document.getElementById("customerClassCode").classList.remove("invisibleCodeDiv");
}