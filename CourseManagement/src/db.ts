import Sequelize from 'sequelize'

import { BatchModel } from './models/Batch';
import { CourseModel }from './models/Course';
import { LectureModel } from './models/Lecture';
import { StudentModel } from './models/Student';
import { SubjectModel }  from './models/Subject';
import { TeacherModel } from './models/Teacher';


export const db = new Sequelize('coursedb', 'root','root', {
  dialect: "mysql",
  host: "localhost"
});



export const Batch = db.define<BatchModel,any>("batch", {
  name: {
    type: Sequelize.STRING(30),
    allowNull: false
  }
});

export const Lecture = db.define<LectureModel,any>("lecture", {
    name: {
      type: Sequelize.STRING(30),
      allowNull: false
    }
  });


  export const Student = db.define<StudentModel,any>("student", {
    name: {
      type: Sequelize.STRING(30),
      allowNull: false
    }
  });


  export const Subject = db.define<SubjectModel,any>("subject", {
    name: {
      type: Sequelize.STRING(30),
      allowNull: false
    }
  });


  export const Teacher = db.define<TeacherModel,any>("teacher", {
    name: {
      type: Sequelize.STRING(30),
      allowNull: false
    }
  });


  export const Course = db.define<CourseModel,any>("course", {
    name: {
      type: Sequelize.STRING(30),
      allowNull: false
    }
  });


Course.hasMany(Batch);
Batch.belongsTo(Course);

Course.hasMany(Student);
Student.belongsTo(Course);

Subject.hasMany(Teacher);
Teacher.belongsTo(Subject);

Course.hasMany(Subject);
Subject.belongsTo(Course);

Batch.hasMany(Lecture);
Lecture.belongsTo(Batch);


Teacher.hasMany(Lecture);
Lecture.belongsTo(Teacher);

Subject.hasMany(Lecture);
Lecture.belongsTo(Subject);

Batch.belongsToMany(Student, {through: 'StudentBatch'})
Student.belongsToMany(Batch , {through: 'StudentBatch'}) 


Batch.belongsToMany(Teacher, {through: 'TeacherBatch'})
Teacher.belongsToMany(Batch , {through: 'TeacherBatch'}) 


 db
  .sync({alter:true})
  .then(() => console.log("Database has been syned "))
  .catch((error:Error) => console.error("Error creating database " +error));


