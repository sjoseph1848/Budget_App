const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];
    
// Add your code below this line
d3.select("body").selectAll("h2")
  .data(dataset)
  .enter()
  .append("h2")
  .text((d) => (d + " USD"))  
  //to change CSS make the following update 
  .style("font-family","verdana")
  .style("color",(d=>{
      if(d < 20){
          return "red";
      }else{
          return "green";
      }
  }))