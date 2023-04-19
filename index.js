const setWords=["	Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a whirlwind.",

"   The sun moves slowly to hide behind the line of horizon, while the moon races to take its place in prominence atop the night sky. People slow to a crawl, entranced, fully forgetting the deeds that must still be done. ",

"   On July 16, 1969, the Apollo 11 spacecraft launched from the Kennedy Space Center in Florida. Its mission was to go where no human being had gone before the moon!" ,

"   The crew consisted of Neil Armstrong, Michael Collins, and Buzz Aldrin. The spacecraft landed on the moon in the Sea of Tranquility, a basaltic flood plain, on July 20, 1969. The moonwalk took place the following day.",

"   On July 21, 1969, at precisely 10:56 EDT, Commander Neil Armstrong emerged from the Lunar Module and took his famous first step onto the moon’s surface.",

"   It was July 21, 1969, and Neil Armstrong awoke with a start. It was the day he would become the first human being to ever walk on the moon.",

"   The journey had begun several days earlier, when on July 16th, the Apollo 11 launched from Earth headed into outer space. On board with Neil Armstrong were Michael Collins and Buzz Aldrin. The crew landed on the moon in the Sea of Tranquility a day before the actual walk.",

"   It is scientifically proven that excessive use of aspirin turns it into a toxin. Its toxic effects are Kidney Damage, severe metabolic derangements, respiratory and central nervous system effects, strokes, fatal haemorrhages of the brain, intestines & lungs and eventually death.",

"   All Canadians have access to medical services at a reasonable price. Second, Canada has a high standard of education. Students are taught by well-trained teachers and are encouraged to continue studying at university. Finally, Canada's cities are clean and efficiently managed.",

"   There are three reasons why I prefer jogging to other sports. One reason is that jogging is a cheap sport. I can practise it anywhere at any time with no need for a ball or any other equipment."];

const msg=document.getElementById('message');
const typeWord=document.getElementById('mywords');
const btn=document.getElementById('btn')
let startTime,endTime;

const playGame=()=>{
	let randomNumber=Math.floor(Math.random()*setWords.length);
	// console.log(randomNumber)
	msg.innerText=setWords[randomNumber].toLowerCase();
	let date=new Date();
	startTime=date.getTime();
	btn.innerText="Done";


}
const endPlay=()=>{
	let date=new Date();
	endTime=date.getTime();
	let totalTime=((endTime-startTime)/1000);
	// console.log(totalTime)
	let totalStr=typeWord.value;
	let wordCount=wordCounter(totalStr);
	let speed=Math.floor((wordCount/totalTime)*60);
	let finalMsg="You typed total at " +speed+ " words per minutes. ";
	
    finalMsg +=compareWords(msg.innerText,totalStr);
	msg.innerText=finalMsg;




}
const compareWords=(str1,str2)=>{
	let word1=str1.split(' ');
	let word2=str2.split(' ');
		let cnt=0
	// let arr=
	word1.forEach((item,index)=>{
		if(item==word2[index]){
			cnt++;
		}

	})
	// let arr=[];
	// for(i=0;i<str1.length;i++){
	// 	if(str1[i]==str2[i]){
	// 		// cnt++;
	// 		// console.log(cnt)
	// 		arr.push(str1[i]);
	// 		// console.log(arr)
	// 		// console.log(arr[i]);

	// 	}
	// 	else{
	// 		break;
	// 	}
	// }
	
	// console.log(arr);
	// cont=0;
	// // console.log(str.length)
	// for(i=0;i<arr.length;i++){
	// 	if(arr[i]==" "){
	// 		cont++;
	// 		// console.log(cont);


	// 	}
	// }
	// console.log(count+1);
	// ans=cont+1;
	let errorWords=(word1.length-cnt);
	return (cnt+" correct out of "+ word1.length+" words and the total number of error are "+errorWords+".");

}
const wordCounter=(str)=>{
	count=0;
	// console.log(str.length)
	for(i=0;i<str.length;i++){
		if(str[i]==" "){
			count++;
		}
	}
	// console.log(count+1);
	return count+1;
}
btn.addEventListener('click',function(){
	// console.log(this);
	if(this.innerText=='Start'){
		typeWord.disabled=false;
		playGame();
	}else if(this.innerText=='Done'){

		typeWord.disabled=true;
		btn.innerText="Start";
		endPlay();
	}
})
