$(window).on("load", function () {
    if ($("section").hasClass("pross-arc")) {

        // var location = [adresse[0], $("#map-cont").attr("lat"), $("#map-cont").attr("long")];
        const products = [
            [24.774255, 46.737586534],
            [24.874265, 46.73816],
            [23.774265, 46.73865445654],
            [24.774264, 46.7385454586],
            [24.775265, 46.586],
        ];
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 8,
            center: new google.maps.LatLng(24.774265, 46.738586),

        });

        const contentString =
            '<div class="mo-pro">' +
            '<div class="mo-pro-img">' +
            '<div class="img-aspect">' +
            '<a href="pro.html" class="img-here">' +
            '<img src="images/pro1.jpg" class="img-fluid">' +
            '</a>' +
            '<a href="#!" class="addToFav fixall">' +
            '<i class="far fa-heart"></i>' +
            '</a>' +
            '</div>' +
            '</div>' +
            '<div class="mo-pro-info">' +
            '<div class="mo-pro-body">' +
            '<h6 class="mo-pro-name fixall">' +
            '<a href="pro.html" class="fixall">' +
            'Vestibulum finibus libero non sapien porta luctus' +
            '</a>' +
            '</h6>' +
            ' <div class="opts">' +
            '<div class="opt">' +
            '<i class="fas fa-map"></i>' +
            '<span class="opt-name">Riyadh</span>' +
            '</div>' +
            '<div class="opt">' +
            '<i class="fas fa-map-marker-alt"></i>' +
            '<span class="opt-name">Almalaz - Salah Aldin Alayoubi st</span>' +
            '</div>' +
            '<div class="opt-line">' +
            '<div class="opt">' +
            '<i class="fas fa-th-large"></i>' +
            '<span class="opt-name">Image / Video</span>' +
            '</div>' +
            '<div class="opt">' +
            '<i class="fas fa-ruler-combined"></i>' +
            '<span class="opt-name">4m</span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="mo-pro-footer">' +
            '<div class="prices">' +
            '<h3 class="price fixall">10 SAR/ Day</h3>' +
            '<h6 class="old-price fixall">15 SAR/ Day</h6>' +
            '</div>' +
            '<a href="#!" class="order-btn fixall">' +
            '<span>Order Now</span>' +
            '</a>' +
            '</div>' +
            '</div>' +
            "</div>";

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            const marker = new google.maps.Marker({
                position: new google.maps.LatLng(product[0], product[1]),
                map,
                icon: "images/pin.png"
            });
            marker.addListener("click", () => {
                infowindow.open(map, marker);
            });
        }
    }


    if ($("div").hasClass("pro-content")) {

        var location = [24.774255, 46.737586534];
        var map = new google.maps.Map(document.getElementById('project-map'), {
            zoom: 8,
            center: new google.maps.LatLng(24.774265, 46.738586),

        });
        const marker = new google.maps.Marker({
            position: new google.maps.LatLng(location[0], location[1]),
            map,
            icon: "images/pin.png"
        });

        const panorama = new google.maps.StreetViewPanorama(
            document.getElementById("street-map"),
            {
                position: new google.maps.LatLng(location[0], location[1]),
                pov: {
                    heading: 34,
                    pitch: 10,
                },
            }
        );
        map.setStreetView(panorama);

        var smallmap = new google.maps.Map(document.getElementById('small-map'), {
            zoom: 8,
            center: new google.maps.LatLng(24.774265, 46.738586),

        });
        const smallmarker = new google.maps.Marker({
            position: new google.maps.LatLng(location[0], location[1]),
            smallmap,
            icon: "images/pin.png"
        });
    }
});

