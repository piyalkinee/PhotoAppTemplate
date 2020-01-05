let ALLPHOTODATE = new Array();

ALLPHOTODATE.push("10/08/2010");
ALLPHOTODATE.push("09/08/2010");
ALLPHOTODATE.push("09/08/2010");
ALLPHOTODATE.push("08/08/2010");
ALLPHOTODATE.push("05/08/2010");
ALLPHOTODATE.push("05/08/2010");
ALLPHOTODATE.push("04/08/2010");
ALLPHOTODATE.push("04/08/2010");
ALLPHOTODATE.push("10/08/2010");
ALLPHOTODATE.push("10/08/2010");
ALLPHOTODATE.push("10/08/2010");
ALLPHOTODATE.push("10/08/2010");
ALLPHOTODATE.push("10/08/2010");

let PhotoGalleryID = document.getElementById('photogallery');

for (let i = 1; i < ALLPHOTODATE.length; i++) {
    LoadGalleryItem(i);
}

function LoadGalleryItem(i) {

    /*---FirstLevel---*/

    let itemGallery = document.createElement("div");
    itemGallery.className = "item-gallery";

    /*---SecondLevel---*/

    let itemGalleryMain = document.createElement("div");
    itemGalleryMain.className = "item-gallery-main";
    let itemGalleryLine = document.createElement("div");
    itemGalleryLine.className = "item-gallery-line";
    let itemGalleryFooter = document.createElement("div");
    itemGalleryFooter.className = "item-gallery-footer";

    /*---ThirdLevel---*/

    let itemGalleryMainPhoto = document.createElement("div");
    itemGalleryMainPhoto.className = "item-gallery-main-photo";
    let itemGalleryMainAdditional = document.createElement("div");
    itemGalleryMainAdditional.className = "item-gallery-main-additional";
    let itemGalleryFooterP = document.createElement("p");
    itemGalleryFooterP.innerHTML = "Share";
    let socialButtonTW = document.createElement("button");
    socialButtonTW.id = "social-button";
    socialButtonTW.className = "twitter-button";
    let socialButtonF = document.createElement("button");
    socialButtonF.id = "social-button";
    socialButtonF.className = "facebook-button";
    let socialButtonP = document.createElement("button");
    socialButtonP.id = "social-button";
    socialButtonP.className = "pintrest-button";
    let socialButtonTU = document.createElement("button");
    socialButtonTU.id = "social-button";
    socialButtonTU.className = "tumblr-button";

    /*---FourthLevelAndFurther---*/

    let itemGalleryMainPhotoIMG = document.createElement("img");
    let itemGalleryMainPhotoP = document.createElement("p");
    let itemGalleryMainAdditionalP = document.createElement("p");
    itemGalleryMainAdditionalP.innerHTML = "Lorem Ipsum is simply";
    let itemGalleryMainAdditionalBUTTON = document.createElement("button");
    let itemGalleryMainAdditionalBUTTONIMG = document.createElement("img");
    itemGalleryMainAdditionalBUTTONIMG.src = "/assets/image_favorites.png";
    let socialButtonTWIMG = document.createElement("img");
    socialButtonTWIMG.src = "/assets/social_twitter.png";
    let socialButtonFIMG = document.createElement("img");
    socialButtonFIMG.src = "/assets/social_facebook.png";
    let socialButtonPIMG = document.createElement("img");
    socialButtonPIMG.src = "/assets/social_pintrest.png";
    let socialButtonTUIMG = document.createElement("img");
    socialButtonTUIMG.src = "/assets/social_tumblr.png";

    /*---BuildStruct---*/

    let structFirstLevel = PhotoGalleryID.appendChild(itemGallery);
    let structSecondLevelMain = structFirstLevel.appendChild(itemGalleryMain);
    let structSecondLevelLine = structFirstLevel.appendChild(itemGalleryLine);
    let structSecondLevelFooter = structFirstLevel.appendChild(itemGalleryFooter);
    let structThirdLevelMainPhoto = structSecondLevelMain.appendChild(itemGalleryMainPhoto);
    let structThirdLevelMainAdditional = structSecondLevelMain.appendChild(itemGalleryMainAdditional);
    let structThirdLevelFooterP = structSecondLevelFooter.appendChild(itemGalleryFooterP);
    let structThirdLevelFooterTwitter = structSecondLevelFooter.appendChild(socialButtonTW);
    let structThirdLevelFooterFacebook = structSecondLevelFooter.appendChild(socialButtonF);
    let structThirdLevelFooterPintrest = structSecondLevelFooter.appendChild(socialButtonP);
    let structThirdLevelFooterTumblr = structSecondLevelFooter.appendChild(socialButtonTU);
    itemGalleryMainPhotoIMG.src = `/assets/photo_${i}.png`;
    let structFourthPlusLevelMainPhotoIMG = structThirdLevelMainPhoto.appendChild(itemGalleryMainPhotoIMG);
    let structFourthPlusLevelMainPhotoP = structThirdLevelMainPhoto.appendChild(itemGalleryMainPhotoP);
    structFourthPlusLevelMainPhotoP.innerHTML = ALLPHOTODATE[i];
    let structFourthPlusLevelMainAdditionaP = structThirdLevelMainAdditional.appendChild(itemGalleryMainAdditionalP);
    let structFourthPlusLevelMainAdditionaBUTTON = structThirdLevelMainAdditional.appendChild(itemGalleryMainAdditionalBUTTON);
    let structFourthPlusLevelMainAdditionaBUTTONIMG = structFourthPlusLevelMainAdditionaBUTTON.appendChild(itemGalleryMainAdditionalBUTTONIMG);
    let structFourthPlusLevelFooterSocialBOOTONIMGTW = structThirdLevelFooterTwitter.appendChild(socialButtonTWIMG);
    let structFourthPlusLevelFooterSocialBOOTONIMGF = structThirdLevelFooterFacebook.appendChild(socialButtonFIMG);
    let structFourthPlusLevelFooterSocialBOOTONIMGP = structThirdLevelFooterPintrest.appendChild(socialButtonPIMG);
    let structFourthPlusLevelFooterSocialBOOTONIMGTU = structThirdLevelFooterTumblr.appendChild(socialButtonTUIMG);
}