const urls = require('./urls');

class Navigator {
  constructor(request) {
    this.request = request;
  }

  index() {
    return this.visitPromise(urls.indexPath);
  }

  myCourses(year, term) {
    return this.visitPromise(urls.myCoursesPath(year, term));
  }

  coursesCatalogue(year, term) {
    return this.visitPromise(urls.coursesCataloguePath(year, term));
  }

  courseAnnouncements(courseId) {
    return this.visitPromise(urls.courseAnnouncementsPath(courseId));
  }

  courseProgramme(courseId) {
    return this.visitPromise(urls.courseProgrammePath(courseId));
  }

  courseCalendar(courseId) {
    return this.visitPromise(urls.courseCalendarPath(courseId));
  }

  visitPromise(url) {
    return new Promise((ressolve, reject) => {
      this.request({url: url}, (err, res, body) => {
        if (!err && res.statusCode === 200) {
          ressolve(res);
        } else {
          reject(err);
        }
      });
    });
  }
}

module.exports = Navigator;
