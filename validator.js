function validar(){
    if (document.datos.nombre.value.length==0){
        document.datos.nombre.focus();
        alert("Tiene que escribir su nombre")
        return false;   
    }
        
    if (document.datos.login.value.length==0){
        document.datos.login.focus();
        alert("Tiene que escribir su login")
        return false;   
    }
        
    if (document.datos.password.value.length==0){
        document.datos.password.focus();
        alert("Tiene que escribir su password")
        return false;
    }
        
    if (document.datos.ciudad.selectedIndex==0){
        document.datos.ciudad.focus();
        alert("Tiene que seleccionar su ciudad");
        return false;
    }
    document.datos.submit();
}
        