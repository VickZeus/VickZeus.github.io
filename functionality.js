const arr=["home","about","contactinfo","projects"];
function showsection(id)
{
    //document.getElementById(prev).style.display="none";
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==id)
        {
            document.getElementById(arr[i]).style.display="block";
           // prev=id;
        }
        else 
        {
            document.getElementById(arr[i]).style.display="none";
        }
    }
}
