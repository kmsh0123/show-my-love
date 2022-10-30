const myLove = "su hnin aye";

export function showMyLove() {
    return myLove;
}

export function showMyLoveUI() {
    const h1 = document.createElement("h1");
    h1.innerText = myLove;
    h1.style.position = "fixed";
    h1.style.zIndex = 2000;
    h1.style.color = "white";
    h1.style.fontSize = 100+"px";
    h1.style.fontWeight = "bold";
    h1.style.top = 0;
    h1.style.right = 0;
    h1.style.backgroundColor = "black";
    document.body.append(h1);
}