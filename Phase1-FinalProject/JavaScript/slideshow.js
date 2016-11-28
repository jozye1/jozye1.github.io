

		var slideIndex = 1;
		showImages(slideIndex);

		function imageControlButton(displayCounter)
		{
			showImages(slideIndex += displayCounter);
		}	

		function showImages(imageCounter)
		{

			var allImages = document.getElementsByClassName("myimages");

			if (imageCounter > allImages.length)
			{
				slideIndex = 1;
			}

			if (imageCounter < 1) 
			{
				slideIndex = allImages.length;
			}

			for (i = 0; i < allImages.length; i++) 
			{
				allImages[i].style.display = "none";
			}

			allImages[slideIndex-1].style.display = "block";
		}

	
