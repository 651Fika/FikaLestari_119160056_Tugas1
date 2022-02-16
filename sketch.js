function setup() {
  // put setup code here
  createCanvas(400,200)
  j=0;
}

function draw() {
  // put drawing code here
  background(211,211,211)
  strokeWeight(1)

  fill(255,255,255)
  strokeWeight(0)

  strokeJoin(ROUND)
  strokeWeight(2)
  line(200,0,200,400)

  fill(51,153,255)
  ellipse(100,100,100,100)
  strokeWeight(1)
  
  fill(255,255,255)
  ellipse(100,110,85,85)
  strokeWeight(2)

  fill(255,255,255)
  ellipse(85,70,30,30)
  strokeWeight(2)

  fill(255,255,255)
  ellipse(115,70,30,30)
  strokeWeight(2)

  fill(21,22,23)
  ellipse(92,68,10,10)
  fill(255,255,255)
  ellipse(92,68,5,5)

  fill(21,22,23)
  ellipse(108,68,10,10)
  fill(255,255,255)
  ellipse(108,68,5,5)

  fill(255,0,0)
  ellipse(100,90,20,20)
  fill(255,0,0)
  arc(100,120,50,40,radians(0),radians(180))

  strokeWeight(3)
  line(82,100,53,85)
  line(77,110,50,95)
  line(120,100,145,80)
  line(125,110,150,90)

  strokeWeight(2)
  fill(255,255,255)
  rect(100,120,10,10)
  rect(90,120,10,10)

  fill(255,255,255)
  strokeWeight(0)

  strokeWeight(2)
  fill(51,153,255)
  ellipse(100+200,100,100,100)
  strokeWeight(1)
  
  fill(255,255,255)
  ellipse(100+200,110,85,85)
  strokeWeight(2)

  fill(255,255,255)
  ellipse(85+200,70,30,30)
  strokeWeight(2)

  fill(255,255,255)
  ellipse(115+200,70,30,30)
  strokeWeight(2)

  var y = 100+10*Math.sin(PI*j/50)
  j+=1
  fill(21,22,23)
  ellipse(92+200,68,10,10)
  fill(255,255,255)
  ellipse(92+200,68,5,5)
  fill(21,22,23)
  ellipse(108+200,68,10,10)
  fill(255,255,255)
  ellipse(108+200,68,5,5)

  fill(255,0,0)
  ellipse(100+200,y,20,20)
  fill(255,0,0)
  arc(100+200,y+30,50,40,radians(0),radians(180))

  strokeWeight(3)
  line(82+200,100,53+200,85)
  line(77+200,110,50+200,95)
  line(120+200,100,145+200,80)
  line(125+200,110,150+200,90)

  strokeWeight(2)
  fill(255,255,255)
  rect(100+200,y+30,10,10)
  rect(90+200,y+30,10,10)



}