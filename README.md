# SIDING Navigator

*Wrapper* para autenticarse en el SIDING y navegar a través de sus URLs más comunes.

### Instalación

```sh
  $ npm install -S siding-navigator
```

### Uso

```javascript
  const logIn = require('siding-navigator');

  logIn(username, password).then(navigator => {
    navigator.index().then(res => {
      // hemos navegado hacia la landing page del SIDING
    });

    navigator.myCourses(2015, 1).then(res => {
      // hemos navegado hacia el listado de los ramos que cursé durante el 2015-1
    });

    navigator.coursesCatalogue(2015, 1).then(res => {
      // hemos navegado hacia el catálogo de ramos del 2015-1
    });

    navigator.courseAnnouncements(7201).then(res => {
      // hemos navegado hacia los anuncios de la sección 1 de Optimización (2015-1)
      // 7201 corresponde al ID del ramo (se puede encontrar en SIDING).
    });

    navigator.courseProgramme(7201).then(res => {
      // hemos navegado hacia el programa de la sección 1 de Optimización (2015-1)
      // 7201 corresponde al ID del ramo (se puede encontrar en SIDING).
    });

    navigator.courseCalendar(7201).then(res => {
      // hemos navegado hacia el calendario de la sección 1 de Optimización (2015-1)
      // 7201 corresponde al ID del ramo (se puede encontrar en SIDING).
    });

    navigator.visit('una-url-válida-del-SIDING').then(res => {
      // hemos navegado hacia una URL válida del SIDING
    });
  });
```

### Contributing

1. Hacer *Fork* al repositorio
2. Crear la *branch* de la *feature* (`git checkout -b my-new-feature`)
3. Hacer *commit* a los cambios (`git commit -am 'add my feature'`)
4. Hacer *push* a la rama creada (`git push origin my-new-feature`)
5. Crear una nueva *Pull Request*

**Nota:** Se debe considerar que los *tests* requieren un **usuario** y **contraseña** para funcionar. Para ello se debe contar con las variables de entorno `SIDING_USERNAME` y `SIDING_PASSWORD`.
