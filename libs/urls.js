const baseUrl = "https://intrawww.ing.puc.cl/siding";
const indexUrl = `${baseUrl}/index.phtml`;
const coursesUrl = `${baseUrl}/dirdes/ingcursos/cursos/index.phtml`;

const urls = {
  indexPath: indexUrl,
  myCoursesPath: (year, term) =>
    `${coursesUrl}?acc_inicio=mis_cursos&per_lista_cursos=2${term}_${year}`,
  coursesCataloguePath: (year, term) =>
    `${coursesUrl}?acc_inicio=catalogo&per_lista_cursos=2${term}_${year}`,
  courseAnnouncementsPath: courseId =>
    `${coursesUrl}?accion_curso=avisos&acc_aviso=mostrar&id_curso_ic=${courseId}&solo_vista=1`,
  courseProgrammePath: courseId =>
    `${coursesUrl}?accion_curso=programa&acc_prog=mostrar&id_curso_ic=${courseId}&solo_vista=1`,
  courseCalendarPath: courseId =>
    `${coursesUrl}?accion_curso=calendario&acc_calend=mostrar&id_curso_ic=${courseId}&solo_vista=1`
}

module.exports = urls;
