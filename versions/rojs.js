async function runRoJS(codePath){
    let code = await fetch(codePath);
    let translatedCode = translateRoJS(await code.text());
    let thisFunction = new Function('code', translatedCode);
    thisFunction();
}


function translateRoJS(code){
    // Daca / If
    var regEx = new RegExp('daca', "ig");
    code = code.replace(regEx, "if");
    // function
    regEx = new RegExp('functie', "ig");
    code = code.replace(regEx, "function");
    // return
    regEx = new RegExp('returneaza', "ig");
    code = code.replace(regEx, "return");
    // fie
    regEx = new RegExp('fie', "ig");
    code = code.replace(regEx, "let");
    // altfel
    regEx = new RegExp('altfel', "ig");
    code = code.replace(regEx, "else");
    // cat timp
    regEx = new RegExp('cat timp', "ig");
    code = code.replace(regEx, "while");
    // pentru
    regEx = new RegExp('pentru', "ig");
    code = code.replace(regEx, "for");
    // scrie
    regEx = new RegExp('scrie', "ig");
    code = code.replace(regEx, "console.log");
    // Eroare
    regEx = new RegExp('eroare', "ig");
    code = code.replace(regEx, "console.error");
    // !COMENTARIU
    regEx = new RegExp('!comentariu!', "ig");
    code = code.replace(regEx, "// ");
    // Alerta
    regEx = new RegExp('alerta', "ig");
    code = code.replace(regEx, "alert");
    
    return code;
}
