function imgPicker(){
    let picker = document.getElementById("selectImg").value;
    let images = document.getElementById("imgFigure");

    if (picker == "fire") {
        images.src = "imgFigure/flareon.png";
        images.width = 300;
        images.alt = "Ini adalah gambar flareon.png";
        alert("Ini adalah gambar flareon.png");
    } else if (picker == "water") {
        images.src = "imgFigure/vaporeon.png";
        images.width = 300;
        images.alt = "Ini adalah gambar vaporeon.png";
        alert("Ini adalah gambar vaporeon.png");
    } else if (picker == "electric") {
        images.src = "imgFigure/jolteon.png";
        images.width = 300;
        images.alt = "Ini adalah gambar jolteon.png";
        alert("Ini adalah gambar jolteon.png");
    } else if (picker == "dark") {
        images.src = "imgFigure/umbreon.png";
        images.width = 300;
        images.alt = "Ini adalah gambar umbreon.png";
        alert("Ini adalah gambar umbreon.png");
    } else if (picker == "psyhic") {
        images.src = "imgFigure/espeon.png";
        images.width = 300;
        images.alt = "Ini adalah gambar espeon.png";
        alert("Ini adalah gambar espeon.png");
    } else if (picker == "fairy") {
        images.src = "imgFigure/sylveon.png";
        images.width = 300;
        images.alt = "Ini adalah gambar sylveon.png";
        alert("Ini adalah gambar sylveon.png");
    } else if (picker == "grass") {
        images.src = "imgFigure/leafeon.png";
        images.width = 300;
        images.alt = "Ini adalah gambar leafeon.png";
        alert("Ini adalah gambar leafeon.png");
    } else if (picker == "tree") {
        images.src = "imgFigure/hogoromo.png";
        images.width = 300;
        images.alt = "Ini adalah gambar hogoromo.png";
        alert("Ini adalah gambar hogoromo.png");
    } else if (picker == "cloud") {
        images.src = "imgFigure/naruto.png";
        images.width = 300;
        images.alt = "Ini adalah gambar naruto.png";
        alert("Ini adalah gambar naruto.png");
    } else if (picker == "krma") {
        images.src = "imgFigure/kurama.png";
        images.width = 300;
        images.alt = "Ini adalah gambar kurama.png";
        alert("Ini adalah gambar kurama.png");
    }  else if (picker == "hnt") {
        images.src = "imgFigure/hinata.png";
        images.width = 300;
        images.alt = "Ini adalah gambar hinata.png";
        alert("Ini adalah gambar hinata.png");
    }  else if (picker == "kksh") {
        images.src = "imgFigure/kakashi.png";
        images.width = 300;
        images.alt = "Ini adalah gambar kakashi.png";
        alert("Ini adalah gambar kakashi.png"); 
    } else if (picker == "ice") {
        images.src = "imgFigure/glaceon.png";
        images.width = 300;
        images.alt = "Ini adalah gambar glaceon.png";
        alert("Ini adalah gambar glaceon.png");
    
    } else {
        alert("Gagal");
    }
}