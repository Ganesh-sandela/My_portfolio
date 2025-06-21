//  let num1=document.getElementsByClassName("num1")[0];
// let innernum = Number(num1.innerText.replace('%', ''));
// let count=0;
// setInterval(()=>{
//    if(count==innernum){
//     clearInterval();
//    }
//    else{
//      count+=1;
//     num1.innerText=count+"%";
//    }
// },20)


const skills = document.querySelectorAll(".skill");

skills.forEach(skill => {
  const num = skill.querySelector(".num1");
  const circle = skill.querySelector(".circle");
  const target = parseInt(num.innerText.replace('%', ''));
  let count = 0;

  const interval = setInterval(() => {
    if (count >= target) {
      clearInterval(interval);
    } else {
      count++;
      num.innerText = count + "%";

      // Animate the stroke
      const offset = 440 - (440 * count) / 100;
      circle.style.strokeDashoffset = offset;
    }
  }, 20);
});
