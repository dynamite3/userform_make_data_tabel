
    document.getElementById("leftb").style.backgroundColor="lightgrey"


    var div=document.createElement("div")
    div.innerText="Name"
    div.style.alignContent="center"
    document.getElementById("leftb").appendChild(div)
    var it=document.createElement("input")
    it.id="name"
    it.type="text"
    it.placeholder="enter name..."
    it.style.margin="20px"
    div.appendChild(it)
    
    var div=document.createElement("div")
    div.innerText="EMAIL"
    div.style.alignContent="center"
    document.getElementById("leftb").appendChild(div)
    var it=document.createElement("input")
    it.id="email"
    it.type="email"
    it.placeholder="enter mailid..."
    it.style.margin="20px"
    div.appendChild(it)

    var div=document.createElement("div")
    div.innerText="DATE OF BIRTH"
    div.style.alignContent="center"
    document.getElementById("leftb").appendChild(div)
    var it=document.createElement("input")
    it.id="dob"
    it.type="date"
    it.style.margin="20px"
    it.placeholder="enter dob..."
    div.appendChild(it)
    
    var div=document.createElement("div")
    div.innerText="PHONE NO."
    div.style.alignContent="center"
    document.getElementById("leftb").appendChild(div)
    var it=document.createElement("input")
    it.id="phonum"
    it.type="tel"
    it.style.margin="20px"
    it.placeholder="enter phone num..."
    div.appendChild(it)

    var div=document.createElement("div")
    document.getElementById("leftb").appendChild(div)
    var bt=document.createElement("button")
    bt.id="submit"
    bt.innerText="submit"
    bt.setAttribute("onclick","addinfo()");
    div.appendChild(bt)


    viewinfo();

    async function viewinfo(){

        try{
            document.getElementById("rightb").innerHTML=""
            var wapi= await fetch ("https://60ebd681e9647b0017cdded3.mockapi.io/user")
            newdata = await wapi.json()
            console.log(newdata)

            var tb=document.createElement("table")
            tb.style.border="solid black 1px"
            document.getElementById("rightb").appendChild(tb)
            
            

            newdata.forEach(element => {
                var y = document.createElement("TR");
                y.style.border="solid black 1px"
                tb.appendChild(y);

                var z = document.createElement("TD");
                var t = document.createTextNode(element.name);
                z.style.border="solid black 1px"
                z.appendChild(t);
                y.appendChild(z);

                var z = document.createElement("TD");
                var t = document.createTextNode(element.email);
                z.style.border="solid black 1px"
                z.appendChild(t);
                y.appendChild(z);

                var z = document.createElement("TD");
                var t = document.createTextNode(element.dob);
                z.style.border="solid black 1px"
                z.appendChild(t);
                y.appendChild(z);

                var z = document.createElement("TD");
                var t = document.createTextNode(element.pn);
                z.style.border="solid black 1px"
                z.appendChild(t);
                y.appendChild(z);

                var z = document.createElement("TD");
                var t = document.createElement("button");
                t.innerText="DELETE"
                t.style.margin="10px"
                t.setAttribute("onclick","removeinfo("+element.id+")")
                z.style.border="solid black 1px"
                z.appendChild(t);
                y.appendChild(z);

                
            });
        }

        catch(error){
            console.log(error)
        }
        
    }


    async function addinfo(){
        data={}
        data.name=document.getElementById("name").value
        data.email=document.getElementById("email").value
        data.dob=document.getElementById("dob").value
        data.pn=document.getElementById("phonum").value

        var ad= await fetch ("https://60ebd681e9647b0017cdded3.mockapi.io/user",{
             
        method : "POST",
        body : JSON.stringify(data),
        headers:{
            "Content-type":"application/json"
        }

        
        })
        viewinfo();

    }

    async function removeinfo(id){

        var ad= await fetch ("https://60ebd681e9647b0017cdded3.mockapi.io/user/"+id,{
        method: "DELETE",
    })

    viewinfo();
    }


    