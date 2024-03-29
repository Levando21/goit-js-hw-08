/** @format */

const gallery = document.querySelector(".gallery");

const images = [
	{
		preview:
			"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
		original:
			"https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
		description: "Hokkaido Flower",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
		description: "Container Haulage Freight",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
		description: "Aerial Beach View",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
		description: "Flower Blooms",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
		description: "Alpine Mountains",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
		description: "Mountain Lake Sailing",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
		description: "Alpine Spring Meadows",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
		description: "Nature Landscape",
	},
	{
		preview:
			"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
		original:
			"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
		description: "Lighthouse Coast Sea",
	},
];

let rowDiv;

images.forEach((image, index) => {
	const { preview, original, description } = image;

	if (index % 3 === 0) {
		rowDiv = document.createElement("div");
		rowDiv.className = "gallery-row";
		gallery.appendChild(rowDiv);
	}

	const newLi = document.createElement("li");
	newLi.className = "gallery-item";

	const newAnchor = document.createElement("a");
	newAnchor.className = "gallery-link";
	newAnchor.href = image.original;

	const newCursor = document.createElement("svg");
	newCursor.className = "svg";
	newCursor.viewBox = "0 0 44 44";
	newCursor.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	newCursor.style.width = "44px";
	newCursor.style.height = "44px";

	const newPath = document.createElement("path");
	newPath.setAttribute(
		"d",
		"M14.157 39.9098C14.4867 40.1837 14.9018 40.3335 15.3303 40.3333L34.8333 40.3333C35.8058 40.3333 36.7384 39.947 37.4261 39.2594C38.1137 38.5717 38.5 37.6391 38.5 36.6666L38.5 23.4483C38.4997 22.5462 38.1668 21.676 37.5651 21.0039C36.9634 20.3318 36.135 19.9052 35.2385 19.8055L22 18.3333L22 7.33331C22 6.36085 21.6137 5.42822 20.9261 4.74059C20.2384 4.05295 19.3058 3.66664 18.3333 3.66664C17.3609 3.66664 16.4282 4.05295 15.7406 4.74059C15.053 5.42822 14.6667 6.36085 14.6667 7.33331L14.6667 29.3333L9.11166 27.1113C8.64758 26.9258 8.15049 26.837 7.65088 26.8505C7.15127 26.864 6.65968 26.9795 6.20629 27.1898C5.7529 27.4001 5.34726 27.7008 5.01426 28.0735C4.68127 28.4462 4.42795 28.883 4.26983 29.3571L4.06266 29.9805C3.94582 30.3302 3.9374 30.7071 4.03849 31.0618C4.13958 31.4164 4.34547 31.7322 4.62917 31.9678L14.157 39.9098Z"
	);
	newPath.setAttribute("fill", "#4E75FF");

	const newImage = document.createElement("img");
	newImage.className = "gallery-image";
	newImage.src = preview;
	newImage.setAttribute("data-source", original);
	newImage.alt = description;
	newImage.style.width = "380px";
	newImage.style.height = "210px";

	rowDiv.appendChild(newLi);
	newLi.appendChild(newAnchor);
	newAnchor.appendChild(newCursor);
	newCursor.appendChild(newPath);
	newAnchor.appendChild(newImage);
});

const galleryItems = document.querySelectorAll(".gallery-item");

galleryItems.forEach((item) => {
	item.addEventListener("click", (event) => {
		event.preventDefault();
		const liElem = event.target.closest(".gallery-item");
		const dataSource = liElem.querySelector("img").dataset.source;
		const image = images.find((el) => el.original === dataSource);
		modal(image);
	});
});

function modal(image) {
	const modal = basicLightbox.create(
		`
	<img
	  class="gallery-image"
	  src="${image.original}"
	  data-source="${image.original}"
	  alt="${image.description}"
	/>
        `,
		{
			onShow: (instance) => {
				document.addEventListener("keydown", onModalClose);
			},
			onClose: (instance) => {
				document.removeEventListener("keydown", onModalClose);
			},
		}
	);

	modal.show();

	function onModalClose(event) {
		if (event.code === "Escape") {
			modal.close();
		}
	}
}
