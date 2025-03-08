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

https://fastly.picsum.photos/id/51/200/300.jpg?hmac=w7933XDRbSqrql6BuyEfFBOeVsO60iU5N_OS5FbO6wQ
POST
{
userName: 'some val',
userEmail:'some val',
password: 'some val',
confirmPassword: 'some val',
role: 'some val',
}

# topics

1. Class, variables, functions, functions with return types, ...spread operator, forLoop
2. Routing, lazy loading, interpolation
3. API calls (GET, PUT, POST, DELETE), dependency injection
4. Component - to - Component communication (@Input)
5. Reactive Forms( Backend, Mongodb)
