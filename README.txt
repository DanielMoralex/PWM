SERVICIO WEB PARA UN COLEGIO:

     - Iván Pérez Díaz
     - Daniel Morales Sosa
     - Grupo de trabajo: 41.5



DESCRIPCIÓN:

     El proyecto consiste en la creación de un servicio web para un colegio en donde los usuarios pueden entrar en la tienda de dicho colegio y ver las noticias importantes del mismo, adicionalmente, los usuarios autenticados como profesores y alumnos pueden acceder a su perfil para ver su horario e información adicional relevante.



REQUISITOS FUNCIONALES:

     - Los usuarios podrán autenticarse aportando: Correo electrónico y contraseña

     - El sistema deberá poder registrar a alumnos y profesores: Nombre y Apellidos, correo electrónico, NIF/NIE, contraseña, teléfono de contacto y Rol.

     - El sistema deberá respetar la siguiente regla: Un usuario autenticado no podrá acceder al horario de otro usuario.

     - El sistema deberá mostrar novedades del centro a todos los usuarios independientemente de si están autenticados o no.

     - Los usuarios podrán acceder a la tienda independientemente de si están autenticados o no.

     - Un usuario autenticado como alumno podrá ver su horario y sus notas en la pestaña "Perfil".

     - Un usuario autenticado como profesor podrá ver su horario y sus reuniones en la pestaña "Perfil".



REQUISITOS NO FUNCIONALES:

     - El sistema deberá ser sencillo de usar (intuitivo).

     - El sistema deberá ser seguro con los datos de los usuarios.

     - El sistema deberá estar siempre operativo para su uso.

     - El sistema deberá respetar la ley de protección de datos en las imángenes mostradas.



PÁGINAS .HTML DEL PROYECTO:

     - index.html: Archivo que contiene la página principal del colegio, implementa el mockup 1.

     - cuestionario_ini.html: Archivo que contiene el cuestionario de autenticación de la página web, implementa el mockup 3.

     - cuestionario_reg.html: Archivo que contiene el cuestionario de registro de la página web, implementa el mockup 2.

     - header.html: Archivo (template) que contiene el header y que se carga de manera dinámica mediante un .js en los demás htmls del proyecto.

     - footer.html: Archivo (template) que contiene el footer y que se carga de manera dinámica mediante un .js en los demás htmls del proyecto.

     - noticias.html: Archivo que contiene la página de noticias de la página web, implementa el mockup 4.

     - tienda.html: Archivo que contiene la página de tienda de la página web (los productos proceden de otro dominio http), implementa el mockup 7.

     - perfil_alumno.html: Archivo que contiene el perfil de los usuarios autenticados como alumnos, implementa el mockup 5.

     - perfil_profesor.html: Archivo que contiene el perfil de los usuarios autenticados como profesores, implementa el mockup 6.

     - 404.html: Archivo no contemplado en los mockups que se usa en caso de no tener redirección a una página (caso por ejemplo de los iconos de redes sociales).



TEMPLATES:

     - header.html, se carga de manera dinámica en todas las páginas mediante un archivo .js llamado includefile.js.

     - footer.html, se carga de manera dinámica en todas las páginas mediante un archivo .js llamado includefile.js



OTROS:

     Se ha creado un código con JavaScript (includefile.js) para cargar en las páginas .html el header y el footer sin tener que repetir en todas las páginas el script correspondiente para cargar el diseño en cada página.

     Adicionalmente se ha tenido en cuenta la UX (user experience) y se ha dado dinamismo a los botones de navegación y los botones de inicio y registro.

     En el .html de registro se ha añadido el botón de registrarse, dicho botón guarda la información en el buscador de manera local y mediante un script redirige al usuario a la página de autenticación. Una vez autenticado el usuario, dependiendo de su ROL (profesor/alumno) se le redirige mediante un script a su perfil (solo accesible mediante autenticación).



ENLACES:

     - Figma: https://www.figma.com/proto/0MOBd65uu5fgIg2GpMYa6t/Colegio?node-id=14-3&starting-point-node-id=1%3A2&t=qQfSGiU0IkKuHp61-1
     
     - Trello: https://trello.com/invite/b/67a25de668324d36cdb09237/ATTIcebf0ce846b7338dc51aec4868ecd8b1B558727B/pwm

