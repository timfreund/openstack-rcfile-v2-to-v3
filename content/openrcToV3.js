var defaultDomain = "NICUSA";

function populateDefaultDomain(){
    var domainQueryMatch = window.location.search.match(/domain=(\w*)/);
    if(domainQueryMatch){
        $("#domain")[0].value = domainQueryMatch[1];
    } else {
        $("#domain")[0].value = defaultDomain;
    }
}

function openrcToV3(){
    var value = $("#original")[0].value;
    var authmatch = value.match(/OS_AUTH_URL=(.*)v2.0/);
    if (authmatch){
        var v2AuthURL = authmatch[0];
        var v3AuthURL = authmatch[0].replace("v2.0", "v3");
        value = value.replace(v2AuthURL, v3AuthURL);
        console.log(value);
    }

    value += "\nexport ST_AUTH_VERSION=3";
    value += "\nexport OS_PROJECT_DOMAIN_NAME=" + $("#domain")[0].value;

    $("#v3")[0].value = value;
}
