import $ from 'jquery';
// edit = () => {

    // var data = {
    //     "glossary": {
    //         "title": "example glossary",
    //         "GlossDiv": {
    //             "title": "Jams & Jammy",
    //             "GlossList": {
    //                 "GlossEntry": {
    //                     "ID": "SGML",
    //                     "SortAs": "SGML",
    //                     "GlossTerm": "Standard Generalized Markup Language",
    //                     "Acronym": "SGML",
    //                     "Abbrev": "ISO 8879:1986",
    //                     "GlossDef": {
    //                         "para": "A meta-markup language, used to create markup languages such as DocBook.",
    //                         "GlossSeeAlso": ["GML", "XML"]
    //                     },
    //                     "GlossSee": "markup"
    //                 }
    //             }
    //         }
    //     }
    // }

    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange  = function() {
    //     console.log("Inn")
    //     if (this.readyState == 4 && this.status == 200) {
    //         console.log("Inn22")
    //         console.log(xhttp.responseText)
    //    }
    // };
    // xhttp.open("GET", "http://localhost:5000/api/Events");
    // xhttp.send(null);


    // $.ajax({
    //     url: 'http://localhost:5000/api/Events',
    //     type: "GET", /* or type:"GET" or type:"PUT" */
    //     success: function (result) {
    //         console.log(result);    
    //     },
    //     error: function (err) {
    //         console.log(err);
    //     }
    // });

    $("#fh5co-header").css({"background-image" : "url('https://wallpaperaccess.com/full/229796.jpg')"});
    $("#first_Meet_Story_Image").css({"background-image" : "url('https://ak4.picdn.net/shutterstock/videos/21871774/thumb/1.jpg')"});
    $("#first_Date_Story_Image").css({"background-image" : "url('https://ak4.picdn.net/shutterstock/videos/21871774/thumb/1.jpg')"});
    $("#relationship_Story_Image").css({"background-image" : "url('https://ak4.picdn.net/shutterstock/videos/21871774/thumb/1.jpg')"});
   
    $("#fh5co-event").css({"background-image" : "url('https://cdn.edu.buncee.com/pixabay/eb34b90b21f0013ed95c4518b74e4797e372eadd04b0154896f2c370a7ecb1_960.jpg')"});
    $("#couple_Name_Tile").text("Couple Title");

    $("#complete_Date_Title").text("November 28th, 2019 Bufferzone, USA");

    $("#groom_Name_Title").text("Joefrey");
    $("#groom_Description").text("Joefrey & Sheila");

    $("#bride_Name_Title").text("Sheila");
    $("#bride_Description").text("sdfdsFar far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.");

    
    $("#groom_Main_Image").attr("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSinuEneNV2Es6ALo3uupFu29Sh4Yre1pc5osVEY6nZ6eLyIky2");
    // $("#groom_Main_Image").attr("src", "https://ak4.picdn.net/shutterstock/videos/21871774/thumb/1.jpg");
    // $("#groom_Main_Image").attr("src", "https://ak4.picdn.net/shutterstock/videos/21871774/thumb/1.jpg");
    // $("#groom_Main_Image").attr("src", "https://ak4.picdn.net/shutterstock/videos/21871774/thumb/1.jpg");
    
    $("#bride_Main_Image").attr("src", "https://ae01.alicdn.com/kf/HTB1JbwSNpXXXXabXFXXq6xXFXXXS/Chris-Evans-Style-Man-Suit-Navy-Blue-Groom-Tuxedo-2-Piece-Mens-Wedding-Prom-Dinner-Suits.jpg");


    // $("#fh5co-couple-story").hide();
    $("#first_We_Meet_Story_Image").css({"background-image": "url(images/couple-3.jpg)"});
    // document.getElementById('first_We_Meet_Story_Image').style.backgroundImage = 'https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022__340.jpg'
    $("#first_We_Meet_Date").text("January 1, 2019");
    $("#first_We_Meet_Story").text("first_We_Meet_Date first_We_Meet_Date first_We_Meet_Date first_We_Meet_Date first_We_Meet_Date first_We_Meet_Date first_We_Meet_Date first_We_Meet_Date first_We_Meet_Date ");

    // $("#first_Date_Story_Image").text("")
    $("#first_Date_Date").text("January 1, 2019");
    $("#first_Date_Story").text("Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.");

    // $("#relationship_Story_Image").text("")
    $("#relationship_Date").text("January 1, 2019");
    $("#relationship_Story").text("Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.");

    $("#events_Detail").append('<div class="col-md-6 col-sm-6 text-center">'
        + '<div class="event-wrap animate-box fadeInUp animated-fast">'
        + '<h3>Wedding Ceremony</h3>'
        + '<div class="event-col">'
        + '<i class="icon-clock"></i>'
        + '<span>4:00 PM</span>'
        + '<span>6:00 PM</span>'
        + '</div>'
        + '<div class="event-col">'
        + '<i class="icon-calendar"></i>'
        + '<span>Monday 28</span>'
        + '<span>November, 2016</span>'
        + '</div>'
        + '<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>'
        + '</div>'
        + '</div>');



    for (var a = 0; a < 9; a++) {
        $("#fh5co-gallery-list").append('<li class="one-third animate-box fadeIn animated-fast" data-animate-effect="fadeIn" style="background-image: url(images/gallery-2.jpg); "> <a href="#" class="color-2">    <div class="case-studies-summary"> <h2>Timer starts now!</h2>  </div> </a></li>');
    }

    //  visible=(id)=>{
    //     if($('#'+id).is(':hidden'))
    //     {
    //         $('#'+id).show();
    // }
    //     else{
    //         $('#'+id).hide();
    //     }
    // }

    //     $("#friends_Comments").append('<div class="item">
    //     +'<div class="testimony-slide active text-center">'
    //         +'<figure>'
    //             +'<img src="images/couple-1.jpg" alt="user">'
    //         +'</figure>'
    //         +'<span>John Doe, via <a href="#" class="twitter">Twitter</a></span>'
    //         +'<blockquote>'
    //             +'<p>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they  live in Bookmarksgrove right at the coast of the Semantics"</p>'
    //         +'</blockquote>'
    //     +'</div>'
    // +'</div>');

    console.log("jhjkh")
// }