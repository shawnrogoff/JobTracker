function HTMLButtonSelect(){
  // swap the active button from bg-outline-dark to bg-dark
  document.getElementById("showHTMLCodeBtn").classList.add("btn-dark");
  document.getElementById("showHTMLCodeBtn").classList.remove("btn-outline-dark");
  document.getElementById("showCSSCodeBtn").classList.remove("btn-dark");
  document.getElementById("showCSSCodeBtn").classList.add("btn-outline-dark");
  document.getElementById("showJSCodeBtn").classList.remove("btn-dark");
  document.getElementById("showJSCodeBtn").classList.add("btn-outline-dark");
  document.getElementById("showCSharpCodeBtn").classList.remove("btn-dark");
  document.getElementById("showCSharpCodeBtn").classList.add("btn-outline-dark");
  
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
  // swap the active button from bg-outline-dark to bg-dark
  document.getElementById("showHTMLCodeBtn").classList.remove("btn-dark");
  document.getElementById("showHTMLCodeBtn").classList.add("btn-outline-dark");
  document.getElementById("showCSSCodeBtn").classList.add("btn-dark");
  document.getElementById("showCSSCodeBtn").classList.remove("btn-outline-dark");
  document.getElementById("showJSCodeBtn").classList.remove("btn-dark");
  document.getElementById("showJSCodeBtn").classList.add("btn-outline-dark");
  document.getElementById("showCSharpCodeBtn").classList.remove("btn-dark");
  document.getElementById("showCSharpCodeBtn").classList.add("btn-outline-dark");
  
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
  // swap the active button from bg-outline-dark to bg-dark
  document.getElementById("showHTMLCodeBtn").classList.remove("btn-dark");
  document.getElementById("showHTMLCodeBtn").classList.add("btn-outline-dark");
  document.getElementById("showCSSCodeBtn").classList.remove("btn-dark");
  document.getElementById("showCSSCodeBtn").classList.add("btn-outline-dark");
  document.getElementById("showJSCodeBtn").classList.add("btn-dark");
  document.getElementById("showJSCodeBtn").classList.remove("btn-outline-dark");
  document.getElementById("showCSharpCodeBtn").classList.remove("btn-dark");
  document.getElementById("showCSharpCodeBtn").classList.add("btn-outline-dark");
  
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
  // swap the active button from bg-outline-dark to bg-dark
  document.getElementById("showHTMLCodeBtn").classList.remove("btn-dark");
  document.getElementById("showHTMLCodeBtn").classList.add("btn-outline-dark");
  document.getElementById("showCSSCodeBtn").classList.remove("btn-dark");
  document.getElementById("showCSSCodeBtn").classList.add("btn-outline-dark");
  document.getElementById("showJSCodeBtn").classList.remove("btn-dark");
  document.getElementById("showJSCodeBtn").classList.add("btn-outline-dark");
  document.getElementById("showCSharpCodeBtn").classList.add("btn-dark");
  document.getElementById("showCSharpCodeBtn").classList.remove("btn-outline-dark");
  
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