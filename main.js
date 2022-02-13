var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://cdn4.vectorstock.com/i/1000x1000/23/08/super-dad-cartoon-vector-36752308.jpg", "https://i.pinimg.com/564x/c1/a9/b2/c1a9b2512b29182b99fa3052c5f37e85.jpg" , "https://i.pinimg.com/736x/77/d4/15/77d41520a3f07995b184797a3734bf44.jpg", "https://st.depositphotos.com/1526816/3206/v/600/depositphotos_32060185-stock-illustration-a-cute-little-girl-with.jpg"];
var names = ["Fmaily Book","Santhosh Kumar", "Bhuvanshwari", "Jabesh Kumar", "Shivasini"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [images[i]];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [names[i]];
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
