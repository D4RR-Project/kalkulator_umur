$(document).ready(function(){
    $("#calculate").click(function(){
        var mdate = $("#birth_date").val().toString();
        var yearThen = parseInt(mdate.substring(0, 4), 10);
        var montThen = parseInt(mdate.substring(5, 7), 10);
        var dayThen = parseInt(mdate.substring(8, 10), 10);

        var today = new Date();
        var birthday = new Date(yearThen, montThen -1, dayThen);
        var differenceInMilisecond = today.valueOf() - birthday.valueOf();
        var year_age = Math.floor(differenceInMilisecond / 31536000000);
        var day_age = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
        if(
            today.getMonth() == birthday.getMonth() &&
            today.getDay() == birthday.getDay()
        ){
            alert("Happy Birthday!!");
        }
        const month_age = Math.floor(day_age / 30);
        day_age = day_age % 30;
        if(isNaN(year_age) || isNaN(month_age) || isNaN(day_age)){
            $("#exact_age").text("Invalid tanggal lahir");
        }else{
            $("#exact_age").html(
                'Umur kamu sekarang <br/><span id ="age">' +
                year_age +
                "tahun" +
                month_age +
                "bulan" +
                day_age +
                "hari umur</span>"
            );
        }
    })
})