const arr=["home","about","contactinfo","projects"];
const button=["but_home","but_about","but_contact","but_project","but_resume"];

function showsection(id,id2)
{
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==id)
        {
            document.getElementById(arr[i]).style.display="block";
            document.getElementById(id2).style.color="rgb(158, 157, 157)";
        }
        else 
        {
            document.getElementById(arr[i]).style.display="none";
           document.getElementById(button[i]).style.color="rgb(0, 0, 0)";
        }
    }
}
