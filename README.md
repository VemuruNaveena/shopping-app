.border-container{
position: absolute; /_ Moves buttons to an exact position _/
top: 200px; /_ Distance from the top _/
right: 100px; /_ Distance from the right _/
display: flex;
flex-direction: column; /_ Stack buttons vertically _/
gap: 10px; /_ Adds spacing between buttons _/
}

button {
padding: 10px 20px;
border: 2px solid #ccc;
background-color: rgb(198, 70, 70);
font-size: 16px;
border-color:rgb(186, 162, 166);
border-radius: 10px;
color: white;

}

<div class="border-container">
  <button (click)="bride()">Bride</button><br />
  <button (click)="groom()">Groom</button><br />
  <button (click)="bridesMaid()">Bride's Maid</button>
</div>
