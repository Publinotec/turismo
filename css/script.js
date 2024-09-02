
    function sendData(url, data, callback) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.onload = function() {
        if (xhr.status === 200) {
          callback(xhr.responseText);
        }
      };
      xhr.send(JSON.stringify(data));
    }
  
    function registrar() {
      var cedula = document.getElementById('cedula').value;
      var nombres = document.getElementById('nombres').value;
      var apellidos = document.getElementById('apellidos').value;
      var edad = document.getElementById('edad').value;
      var correo = document.getElementById('correo').value;
  
      var data = {
        cedula: cedula,
        nombres: nombres,
        apellidos: apellidos,
        edad: edad,
        correo: correo
      };
  
      sendData('url_del_web_service_para_ingresar', data, function(response) {
        console.log('Registro exitoso:', response);
      });
    }
  
    function modificar() {
      // Similar a la función registrar(), pero con los datos actualizados
    }
  
    function eliminar() {
      // Similar a las funciones registrar() y modificar(), pero solo con el ID o identificador del registro a eliminar
    }
 
  