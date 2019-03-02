$.ajax("https://api.github.com/users/facundoballesta").done(function(data){
    $("#img").append('<img src="' + data.avatar_url + '" class="img-fluid rounded-circle"/>');    
    $("#name").append(data.name);
    $("#nombre").append(data.name);
    $("#blog").append(data.blog);
    $("#location").append(data.location);
    $("#id").append(data.id);
    $("#num-repos").append(data.public_repos);
});

$.ajax("https://api.github.com/users/facundoballesta/repos").done(function(data){
    var repoTable = $("#repos");
    for(let i=0; i < data.length; i++){
        var row = $('<tr><th scope="row">'+(i+1)+'</th></tr>');
        var dataName = "<td>"+ data[i].name +"</td>"
        var dataDesc = "<td>"+ data[i].description +"</td>"
        var dataUrl = "<td><a href='"+ data[i].html_url +"'>"+data[i].name+"</a></td>"
        console.log(dataUrl);
        row.append(dataName);
        row.append(dataDesc);
        row.append(dataUrl)
        repoTable.append(row);
    }
});