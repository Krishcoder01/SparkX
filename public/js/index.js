// var likeIcons = document.querySelector('.heart');
// console.log(likeIcons);

//         // Add a click event listener to each icon
        
//             likeIcons.addEventListener('click', function() {
//                 // Toggle the 'bg-red' class
//                 console.log("dateCreated");
//             });

// console.log(e)



document.addEventListener('DOMContentLoaded', function () {
  // Function to handle the like button click
  function handleLikeButtonClick(event) {
    event.preventDefault(); // Prevent the default anchor behavior

    const likeButton = event.currentTarget;
    const icon = likeButton.querySelector('i');
    const url = likeButton.dataset.url;
    console.log(icon)

    // Change the icon class
    icon.classList.remove('ri-heart-3-line');
    icon.classList.add('ri-heart-fill');
    icon.classList.add('text-red-800');

    // Wait for 1 second before navigating to the URL
    setTimeout(function () {
      window.location.href = url;
    }, 1000);
  }

  // Attach the click event listener to all like buttons
  const likeButtons = document.querySelectorAll('a[id^="likeButton-"]');
  likeButtons.forEach(function (button) {
    button.addEventListener('click', handleLikeButtonClick);
  });
});

