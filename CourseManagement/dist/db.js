"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
exports.db = new sequelize_1.default('coursedb', 'root', 'root', {
    dialect: "mysql",
    host: "localhost"
});
exports.Batch = exports.db.define("batch", {
    name: {
        type: sequelize_1.default.STRING(30),
        allowNull: false
    }
});
exports.Lecture = exports.db.define("lecture", {
    name: {
        type: sequelize_1.default.STRING(30),
        allowNull: false
    }
});
exports.Student = exports.db.define("student", {
    name: {
        type: sequelize_1.default.STRING(30),
        allowNull: false
    }
});
exports.Subject = exports.db.define("subject", {
    name: {
        type: sequelize_1.default.STRING(30),
        allowNull: false
    }
});
exports.Teacher = exports.db.define("teacher", {
    name: {
        type: sequelize_1.default.STRING(30),
        allowNull: false
    }
});
exports.Course = exports.db.define("course", {
    name: {
        type: sequelize_1.default.STRING(30),
        allowNull: false
    }
});
exports.Course.hasMany(exports.Batch);
exports.Batch.belongsTo(exports.Course);
exports.Course.hasMany(exports.Student);
exports.Student.belongsTo(exports.Course);
exports.Subject.hasMany(exports.Teacher);
exports.Teacher.belongsTo(exports.Subject);
exports.Course.hasMany(exports.Subject);
exports.Subject.belongsTo(exports.Course);
exports.Batch.hasMany(exports.Lecture);
exports.Lecture.belongsTo(exports.Batch);
exports.Teacher.hasMany(exports.Lecture);
exports.Lecture.belongsTo(exports.Teacher);
exports.Subject.hasMany(exports.Lecture);
exports.Lecture.belongsTo(exports.Subject);
exports.Batch.belongsToMany(exports.Student, { through: 'StudentBatch' });
exports.Student.belongsToMany(exports.Batch, { through: 'StudentBatch' });
exports.Batch.belongsToMany(exports.Teacher, { through: 'TeacherBatch' });
exports.Teacher.belongsToMany(exports.Batch, { through: 'TeacherBatch' });
exports.db
    .sync({ alter: true })
    .then(() => console.log("Database has been syned "))
    .catch((error) => console.error("Error creating database " + error));
